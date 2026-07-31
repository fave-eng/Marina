-- Normalize Marina's existing homework rows so they satisfy the current
-- homework_progress report/date constraints. Run once in Supabase SQL Editor.

begin;

-- Temporarily disable user-defined protection/update triggers during migration.
alter table public.homework_progress disable trigger user;

-- Drafts must not look submitted and must not have a report in progress.
update public.homework_progress
set
  report_status = 'not_sent',
  report_sent_at = null,
  report_error = null,
  submitted_at = null,
  locked_at = null
where student_id = 'marina'
  and status = 'draft';

-- Older completed rows predate Telegram report-state tracking.
-- Preserve them as completed without attempting to resend old reports.
update public.homework_progress
set
  submitted_at = coalesce(submitted_at, updated_at, created_at, now()),
  locked_at = coalesce(locked_at, submitted_at, updated_at, created_at, now()),
  report_status = 'sent',
  report_sent_at = coalesce(report_sent_at, submitted_at, updated_at, created_at, now()),
  report_error = null
where student_id = 'marina'
  and status = 'submitted';

-- Normalize any rows that are awaiting a report.
update public.homework_progress
set
  submitted_at = coalesce(submitted_at, updated_at, created_at, now()),
  locked_at = coalesce(locked_at, submitted_at, updated_at, created_at, now()),
  report_status = case
    when report_status in ('pending', 'failed') then report_status
    else 'pending'
  end,
  report_sent_at = null
where student_id = 'marina'
  and status = 'submitted_pending_report';

alter table public.homework_progress enable trigger user;

commit;

-- Verification
select
  lesson_id,
  status,
  report_status,
  submitted_at,
  locked_at,
  report_sent_at
from public.homework_progress
where student_id = 'marina'
order by lesson_id;
