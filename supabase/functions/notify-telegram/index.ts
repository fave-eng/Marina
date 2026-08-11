import { withSupabase } from 'npm:@supabase/server'

const encoder = new TextEncoder()

const DIAGNOSTIC_VERSION = 'marina-diagnostics-v1'
const DIAGNOSTIC_STUDENT_ID = 'marina'
const DIAGNOSTIC_COOLDOWN_MS = 30_000
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-notify-secret',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function diagnosticJson(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders })
}


function secureEqual(left: string, right: string): boolean {
  const a = encoder.encode(left)
  const b = encoder.encode(right)
  if (a.length !== b.length) return false

  let diff = 0
  for (let index = 0; index < a.length; index += 1) {
    diff |= a[index] ^ b[index]
  }
  return diff === 0
}

function isHttpUrl(value: unknown): value is string {
  if (typeof value !== 'string' || !value) return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

function parseTelegramId(value: string | undefined | null): number | null {
  const normalized = String(value ?? '').trim()
  if (!/^-?\d+$/.test(normalized)) return null

  const parsed = Number(normalized)
  return Number.isSafeInteger(parsed) ? parsed : null
}

function buildMessage(hasVocabulary: boolean): string {
  if (hasVocabulary) {
    return [
      '🚀 <b>Новые материалы уже доступны!</b>',
      '',
      'Сначала изучи слова к уроку — так выполнять домашнюю работу будет легче. Затем переходи к заданиям.',
      '',
      'Удачи! Если что-то будет непонятно, отметь вопросы — разберём их на следующем уроке ✨',
    ].join('\n')
  }

  return [
    '🚀 <b>Новая домашняя работа уже доступна!</b>',
    '',
    'Переходи к заданиям. Если что-то будет непонятно, отметь вопросы — разберём их на следующем уроке.',
    '',
    'Удачи! ✨',
  ].join('\n')
}

async function sendTelegramMessage(
  token: string,
  chatId: number,
  messageThreadId: number | null,
  text: string,
  inlineKeyboard: Array<Array<{ text: string; url: string }>>,
) {
  const requestBody: Record<string, unknown> = {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
    link_preview_options: { is_disabled: true },
  }

  if (inlineKeyboard.length) requestBody.reply_markup = { inline_keyboard: inlineKeyboard }
  if (messageThreadId) requestBody.message_thread_id = messageThreadId

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(requestBody),
  })

  const result = await response.json().catch(() => null)
  if (!response.ok || !result?.ok) {
    const description = result?.description || `Telegram HTTP ${response.status}`
    throw new Error(description)
  }

  return result.result
}


async function telegramApi(token: string, method: string, body?: Record<string, unknown>) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: body ? 'POST' : 'GET',
    headers: body ? { 'content-type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  const result = await response.json().catch(() => null)
  if (!response.ok || !result?.ok) {
    return { ok: false, error: result?.description || `Telegram HTTP ${response.status}` }
  }
  return { ok: true, result: result.result }
}

async function resolveRecipient(ctx: any, studentId: string) {
  const { data: recipient, error } = await ctx.supabaseAdmin
    .from('telegram_recipients')
    .select('chat_id, message_thread_id, enabled')
    .eq('student_id', studentId)
    .maybeSingle()

  if (error) return { ok: false, error: error.message, enabled: false, source: 'database', chatId: null, threadId: null }
  if (recipient && !recipient.enabled) {
    return { ok: false, error: 'Telegram recipient is explicitly disabled', enabled: false, source: 'database', chatId: null, threadId: null }
  }

  const fallbackChatId = parseTelegramId(Deno.env.get('TEACHER_CHAT_ID'))
  const chatId = recipient ? parseTelegramId(recipient.chat_id) : fallbackChatId
  const threadId = recipient ? parseTelegramId(recipient.message_thread_id) : null
  const source = recipient ? 'database' : 'github_actions_secret'

  if (!Number.isSafeInteger(chatId)) {
    return {
      ok: false,
      error: 'Telegram recipient is missing: configure telegram_recipients or TEACHER_CHAT_ID and redeploy secrets.',
      enabled: false,
      source,
      chatId: null,
      threadId,
    }
  }

  return { ok: true, enabled: true, source, chatId, threadId }
}

function diagnosticRequestAuthorized(req: Request): boolean {
  const expectedAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  if (!expectedAnonKey) return false
  const apiKey = req.headers.get('apikey') ?? ''
  const bearer = (req.headers.get('authorization') ?? '').replace(/^Bearer\s+/i, '')
  return secureEqual(apiKey, expectedAnonKey) || secureEqual(bearer, expectedAnonKey)
}

function homeworkStateSuspicious(row: any): boolean {
  const status = String(row?.status || '')
  const report = String(row?.report_status || '')
  if (status === 'draft') return report !== 'not_sent'
  if (status === 'submitted_pending_report') return !['pending', 'failed'].includes(report)
  if (status === 'submitted') return report !== 'sent'
  return true
}

async function handleDiagnostics(req: Request, ctx: any, payload: any): Promise<Response> {
  if (!diagnosticRequestAuthorized(req)) {
    return diagnosticJson({ ok: false, error: 'Unauthorized diagnostics request' }, 401)
  }

  const studentId = typeof payload?.studentId === 'string' ? payload.studentId.trim().toLowerCase() : ''
  if (studentId !== DIAGNOSTIC_STUDENT_ID) {
    return diagnosticJson({ ok: false, error: 'Diagnostics are not enabled for this student_id' }, 403)
  }

  const kind = String(payload?.kind || '')
  const homeworkTable = 'homework_progress'

  if (kind === 'diagnostics_cleanup_probe') {
    const lessonId = String(payload?.lessonId || '')
    if (!lessonId.startsWith('__diagnostic_probe__')) {
      return diagnosticJson({ ok: false, error: 'Invalid diagnostics lesson id' }, 400)
    }
    const { error } = await ctx.supabaseAdmin
      .from(homeworkTable)
      .delete()
      .eq('student_id', studentId)
      .eq('lesson_id', lessonId)
    return error
      ? diagnosticJson({ ok: false, error: error.message }, 500)
      : diagnosticJson({ ok: true, cleaned: true })
  }

  if (kind === 'diagnostics_homework_probe') {
    const lessonId = String(payload?.lessonId || '')
    if (!lessonId.startsWith('__diagnostic_probe__')) {
      return diagnosticJson({ ok: false, error: 'Invalid diagnostics lesson id' }, 400)
    }

    const stages: Record<string, unknown> = {}
    try {
      const { data: draft, error: draftError } = await ctx.supabaseAdmin
        .from(homeworkTable)
        .select('student_id,lesson_id,status,report_status')
        .eq('student_id', studentId)
        .eq('lesson_id', lessonId)
        .maybeSingle()
      if (draftError) throw new Error(`service_read_draft: ${draftError.message}`)
      if (!draft) throw new Error('service_read_draft: browser draft was not found')
      if (draft.status !== 'draft' || draft.report_status !== 'not_sent') {
        throw new Error(`service_read_draft: unexpected state ${draft.status}/${draft.report_status}`)
      }
      stages.browserDraft = 'ok'

      const submittedAt = new Date().toISOString()
      const { error: pendingError } = await ctx.supabaseAdmin
        .from(homeworkTable)
        .update({
          status: 'submitted_pending_report',
          submitted_at: submittedAt,
          locked_at: submittedAt,
          report_status: 'pending',
          report_sent_at: null,
          report_error: null,
        })
        .eq('student_id', studentId)
        .eq('lesson_id', lessonId)
      if (pendingError) throw new Error(`pending_transition: ${pendingError.message}`)
      stages.pendingTransition = 'ok'

      const reportSentAt = new Date().toISOString()
      const { error: submittedError } = await ctx.supabaseAdmin
        .from(homeworkTable)
        .update({
          status: 'submitted',
          report_status: 'sent',
          report_sent_at: reportSentAt,
          report_error: null,
        })
        .eq('student_id', studentId)
        .eq('lesson_id', lessonId)
      if (submittedError) throw new Error(`submitted_transition: ${submittedError.message}`)
      stages.submittedTransition = 'ok'

      const { error: cleanupError } = await ctx.supabaseAdmin
        .from(homeworkTable)
        .delete()
        .eq('student_id', studentId)
        .eq('lesson_id', lessonId)
      if (cleanupError) throw new Error(`cleanup: ${cleanupError.message}`)
      stages.cleanup = 'ok'

      return diagnosticJson({ ok: true, diagnosticVersion: DIAGNOSTIC_VERSION, stages })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      const { error: cleanupError } = await ctx.supabaseAdmin
        .from(homeworkTable)
        .delete()
        .eq('student_id', studentId)
        .eq('lesson_id', lessonId)
      if (cleanupError) stages.cleanupError = cleanupError.message
      return diagnosticJson({ ok: false, error: message, stages }, 500)
    }
  }

  const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN') ?? ''
  const recipient = await resolveRecipient(ctx, studentId)

  if (kind === 'diagnostics_send_report') {
    if (!botToken) return diagnosticJson({ ok: false, error: 'TELEGRAM_BOT_TOKEN is not configured' }, 500)
    if (!recipient.ok || !Number.isSafeInteger(recipient.chatId)) {
      return diagnosticJson({ ok: false, error: recipient.error || 'Telegram recipient is not configured' }, 500)
    }

    const cutoff = new Date(Date.now() - DIAGNOSTIC_COOLDOWN_MS).toISOString()
    const { data: recent, error: recentError } = await ctx.supabaseAdmin
      .from('material_publications')
      .select('created_at')
      .eq('student_id', studentId)
      .eq('material_type', 'diagnostic')
      .eq('material_id', 'telegram-test')
      .gte('created_at', cutoff)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()
    if (recentError) return diagnosticJson({ ok: false, error: recentError.message }, 500)
    if (recent?.created_at) {
      const elapsed = Date.now() - Date.parse(recent.created_at)
      const retryAfterSeconds = Math.max(1, Math.ceil((DIAGNOSTIC_COOLDOWN_MS - elapsed) / 1000))
      return diagnosticJson({ ok: true, skipped: true, retryAfterSeconds, threadId: recipient.threadId })
    }

    const notificationVersion = Math.max(1, Math.floor(Date.now() / 1000))
    const logPayload = { kind, pageUrl: isHttpUrl(payload?.pageUrl) ? payload.pageUrl : null }
    const { data: publication, error: publicationError } = await ctx.supabaseAdmin
      .from('material_publications')
      .insert({
        student_id: studentId,
        material_type: 'diagnostic',
        material_id: 'telegram-test',
        notification_version: notificationVersion,
        status: 'pending',
        payload: logPayload,
      })
      .select('id')
      .single()
    if (publicationError) return diagnosticJson({ ok: false, error: publicationError.message }, 500)

    try {
      const text = [
        '🧪 <b>Тест диагностики English Space</b>',
        '',
        'Марина: браузер → Supabase → Edge Function → Telegram работает.',
        '',
        'Это служебное тестовое сообщение. Домашние работы и прогресс не изменялись.',
      ].join('\n')
      const message = await sendTelegramMessage(botToken, recipient.chatId as number, recipient.threadId, text, [])
      await ctx.supabaseAdmin
        .from('material_publications')
        .update({ status: 'sent', telegram_message_id: message.message_id, sent_at: new Date().toISOString(), error_message: null })
        .eq('id', publication.id)
      return diagnosticJson({
        ok: true,
        skipped: false,
        diagnosticVersion: DIAGNOSTIC_VERSION,
        telegramMessageId: message.message_id,
        threadId: recipient.threadId,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      await ctx.supabaseAdmin
        .from('material_publications')
        .update({ status: 'failed', error_message: message })
        .eq('id', publication.id)
      return diagnosticJson({ ok: false, error: message }, 502)
    }
  }

  if (kind !== 'diagnostics_health') {
    return diagnosticJson({ ok: false, error: 'Unknown diagnostics request' }, 400)
  }

  const { data: homeworkRows, error: homeworkError } = await ctx.supabaseAdmin
    .from(homeworkTable)
    .select('lesson_id,status,report_status,migrated_from_legacy')
    .eq('student_id', studentId)

  const rows = homeworkRows || []
  const suspiciousHomework = homeworkError ? [] : rows.filter(homeworkStateSuspicious).map((row: any) => row.lesson_id)
  const legacyHomework = homeworkError ? [] : rows.filter((row: any) => Boolean(row.migrated_from_legacy)).map((row: any) => row.lesson_id)

  let bot = { ok: false, error: botToken ? 'Not checked' : 'TELEGRAM_BOT_TOKEN is not configured' } as any
  let chat = { ok: false, error: recipient.ok ? 'Not checked' : recipient.error || 'Recipient is not configured' } as any
  if (botToken) {
    const botResult = await telegramApi(botToken, 'getMe')
    bot = botResult.ok
      ? { ok: true, username: botResult.result?.username || null }
      : { ok: false, error: botResult.error }
    if (recipient.ok && Number.isSafeInteger(recipient.chatId)) {
      const chatResult = await telegramApi(botToken, 'getChat', { chat_id: recipient.chatId })
      chat = chatResult.ok
        ? { ok: true, type: chatResult.result?.type || null }
        : { ok: false, error: chatResult.error }
    }
  }

  return diagnosticJson({
    ok: !homeworkError && recipient.ok && bot.ok && chat.ok,
    diagnosticVersion: DIAGNOSTIC_VERSION,
    database: {
      ok: !homeworkError,
      error: homeworkError?.message || null,
      homeworkRows: rows.length,
      suspiciousHomework,
      legacyHomework,
    },
    recipient: {
      ok: recipient.ok,
      enabled: recipient.enabled,
      source: recipient.source,
      threadId: recipient.threadId,
      error: recipient.error || null,
    },
    telegram: { bot, chat },
  })
}

export default {
  fetch: withSupabase({ auth: 'none' }, async (req, ctx) => {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders })
    }
    if (req.method !== 'POST') {
      return Response.json({ ok: false, error: 'Method not allowed' }, { status: 405 })
    }

    let payload: any
    try {
      payload = await req.json()
    } catch {
      return diagnosticJson({ ok: false, error: 'Invalid JSON' }, 400)
    }

    const kind = typeof payload?.kind === 'string' ? payload.kind.trim() : ''
    if (kind.startsWith('diagnostics_')) {
      return handleDiagnostics(req, ctx, payload)
    }

    const expectedSecret = Deno.env.get('NOTIFY_WEBHOOK_SECRET') ?? ''
    const actualSecret = req.headers.get('x-notify-secret') ?? ''
    if (!expectedSecret || !secureEqual(actualSecret, expectedSecret)) {
      return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
    }

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN') ?? ''
    if (!botToken) {
      return Response.json({ ok: false, error: 'TELEGRAM_BOT_TOKEN is not configured' }, { status: 500 })
    }

    const studentId = typeof payload.studentId === 'string' ? payload.studentId.trim() : ''
    const materialType = typeof payload.materialType === 'string' ? payload.materialType.trim() : ''
    const materialId = typeof payload.materialId === 'string' ? payload.materialId.trim() : ''
    const notificationVersion = Number(payload.notificationVersion)
    const homework = payload.homework
    const vocabulary = payload.vocabulary
    const grammar = Array.isArray(payload.grammar) ? payload.grammar : []

    if (!studentId || !materialType || !materialId || !Number.isInteger(notificationVersion) || notificationVersion < 1) {
      return Response.json({ ok: false, error: 'Missing or invalid notification identity' }, { status: 400 })
    }

    if (!homework || !isHttpUrl(homework.url)) {
      return Response.json({ ok: false, error: 'A valid homework URL is required' }, { status: 400 })
    }

    if (vocabulary && !isHttpUrl(vocabulary.url)) {
      return Response.json({ ok: false, error: 'Invalid vocabulary URL' }, { status: 400 })
    }

    for (const item of grammar) {
      if (!item || !isHttpUrl(item.url)) {
        return Response.json({ ok: false, error: 'Invalid grammar URL' }, { status: 400 })
      }
    }

    const { data: recipient, error: recipientError } = await ctx.supabaseAdmin
      .from('telegram_recipients')
      .select('chat_id, message_thread_id, enabled')
      .eq('student_id', studentId)
      .maybeSingle()

    if (recipientError) {
      return Response.json({ ok: false, error: recipientError.message }, { status: 500 })
    }

    if (recipient && !recipient.enabled) {
      return Response.json(
        { ok: false, error: 'Telegram recipient is explicitly disabled' },
        { status: 409 },
      )
    }

    const githubChatId = parseTelegramId(Deno.env.get('TEACHER_CHAT_ID'))
    const recipientChatId = recipient
      ? Number(recipient.chat_id)
      : githubChatId

    const recipientThreadId = recipient
      ? parseTelegramId(recipient.message_thread_id)
      : null

    if (!Number.isSafeInteger(recipientChatId)) {
      return Response.json(
        {
          ok: false,
          error: 'Telegram recipient is missing: add TEACHER_CHAT_ID to GitHub Actions Secrets and rerun setup workflow',
        },
        { status: 500 },
      )
    }

    const recipientSource = recipient ? 'database' : 'github_actions_secret'

    // A homework publication is a one-time event. Once any notification for
    // this material has been sent, edits to the lesson or changes to
    // notificationVersion must never produce another Telegram message.
    const { data: alreadySent, error: alreadySentError } = await ctx.supabaseAdmin
      .from('material_publications')
      .select('id, telegram_message_id, notification_version')
      .eq('student_id', studentId)
      .eq('material_type', materialType)
      .eq('material_id', materialId)
      .eq('status', 'sent')
      .order('sent_at', { ascending: true })
      .limit(1)
      .maybeSingle()

    if (alreadySentError) {
      return Response.json({ ok: false, error: alreadySentError.message }, { status: 500 })
    }

    if (alreadySent) {
      return Response.json({
        ok: true,
        skipped: true,
        reason: 'already_sent_once',
        telegramMessageId: alreadySent.telegram_message_id,
        originalNotificationVersion: alreadySent.notification_version,
      })
    }

    const { data: existing, error: existingError } = await ctx.supabaseAdmin
      .from('material_publications')
      .select('id, status, telegram_message_id')
      .eq('student_id', studentId)
      .eq('material_type', materialType)
      .eq('material_id', materialId)
      .eq('notification_version', notificationVersion)
      .maybeSingle()

    if (existingError) {
      return Response.json({ ok: false, error: existingError.message }, { status: 500 })
    }

    if (existing?.status === 'sent') {
      return Response.json({
        ok: true,
        skipped: true,
        reason: 'already_sent',
        telegramMessageId: existing.telegram_message_id,
      })
    }

    let publicationId = existing?.id as string | undefined

    if (publicationId) {
      const { error } = await ctx.supabaseAdmin
        .from('material_publications')
        .update({ status: 'pending', payload, error_message: null })
        .eq('id', publicationId)

      if (error) return Response.json({ ok: false, error: error.message }, { status: 500 })
    } else {
      const { data: created, error } = await ctx.supabaseAdmin
        .from('material_publications')
        .insert({
          student_id: studentId,
          material_type: materialType,
          material_id: materialId,
          notification_version: notificationVersion,
          status: 'pending',
          payload,
        })
        .select('id')
        .single()

      if (error) {
        if (error.code === '23505') {
          return Response.json({ ok: true, skipped: true, reason: 'already_claimed' })
        }
        return Response.json({ ok: false, error: error.message }, { status: 500 })
      }
      publicationId = created.id
    }

    const keyboard: Array<Array<{ text: string; url: string }>> = []
    if (vocabulary) keyboard.push([{ text: '💥 Открыть словарь', url: vocabulary.url }])
    keyboard.push([{ text: '📝 Перейти к заданию', url: homework.url }])

    grammar.forEach((item: any, index: number) => {
      const label = grammar.length === 1
        ? '📐 Повторить грамматику'
        : `📐 ${String(item.title || `Грамматика ${index + 1}`).slice(0, 48)}`
      keyboard.push([{ text: label, url: item.url }])
    })

    try {
      const telegramMessage = await sendTelegramMessage(
        botToken,
        recipientChatId,
        recipientThreadId,
        buildMessage(Boolean(vocabulary)),
        keyboard,
      )

      const { error: updateError } = await ctx.supabaseAdmin
        .from('material_publications')
        .update({
          status: 'sent',
          telegram_message_id: telegramMessage.message_id,
          sent_at: new Date().toISOString(),
          error_message: null,
        })
        .eq('id', publicationId)

      if (updateError) {
        throw new Error(`Telegram sent, but log update failed: ${updateError.message}`)
      }

      return Response.json({
        ok: true,
        skipped: false,
        recipientSource,
        telegramMessageId: telegramMessage.message_id,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      await ctx.supabaseAdmin
        .from('material_publications')
        .update({ status: 'failed', error_message: message })
        .eq('id', publicationId)

      return Response.json({ ok: false, error: message }, { status: 502 })
    }
  }),
}
