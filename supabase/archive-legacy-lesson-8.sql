-- Free the technical ID lesson-8 for the new Homework 8 while preserving
-- Marina's already migrated legacy Homework 8 data under legacy-lesson-8.
-- Run ONCE in Supabase SQL Editor before publishing the new lesson-8 files.
-- The script is intentionally limited to student_id = 'marina' and only
-- archives homework_progress rows marked migrated_from_legacy = true.

begin;

-- The existing protection trigger can make final submitted rows immutable.
-- SQL Editor runs this one-time archival migration as the database owner.
alter table public.homework_progress disable trigger user;

do $$
declare
  has_legacy_homework boolean;
begin
  select exists (
    select 1
    from public.homework_progress
    where student_id = 'marina'
      and lesson_id = 'lesson-8'
      and migrated_from_legacy = true
  ) into has_legacy_homework;

  if not has_legacy_homework then
    raise notice 'No migrated legacy lesson-8 homework row found. Nothing to archive.';
    return;
  end if;

  if exists (
    select 1
    from public.homework_progress
    where student_id = 'marina'
      and lesson_id = 'legacy-lesson-8'
  ) then
    raise exception 'legacy-lesson-8 already exists in homework_progress; migration stopped to avoid overwriting archived data.';
  end if;

  update public.homework_progress
  set lesson_id = 'legacy-lesson-8'
  where student_id = 'marina'
    and lesson_id = 'lesson-8'
    and migrated_from_legacy = true;

  -- If an old notification record used the same material ID, archive its ID too
  -- so the new lesson-8 can later be notified manually without being treated as
  -- an already-sent publication. This only runs when a legacy homework row was
  -- actually archived above.
  if exists (
    select 1
    from public.material_publications old_pub
    join public.material_publications archived_pub
      on archived_pub.student_id = old_pub.student_id
     and archived_pub.material_type = old_pub.material_type
     and archived_pub.notification_version = old_pub.notification_version
     and archived_pub.material_id = 'legacy-lesson-8'
    where old_pub.student_id = 'marina'
      and old_pub.material_type = 'homework'
      and old_pub.material_id = 'lesson-8'
  ) then
    raise exception 'Conflicting legacy-lesson-8 notification record already exists; migration stopped to avoid overwriting publication history.';
  end if;

  update public.material_publications
  set material_id = 'legacy-lesson-8'
  where student_id = 'marina'
    and material_type = 'homework'
    and material_id = 'lesson-8';
end $$;

alter table public.homework_progress enable trigger user;

commit;

-- Verification: lesson-8 should now be absent or belong only to the new lesson
-- after the student starts it; the old migrated row remains archived.
select
  lesson_id,
  lesson_title,
  status,
  migrated_from_legacy,
  score_correct,
  score_total,
  submitted_at
from public.homework_progress
where student_id = 'marina'
  and lesson_id in ('lesson-8', 'legacy-lesson-8')
order by lesson_id;

select
  material_type,
  material_id,
  notification_version,
  status,
  sent_at
from public.material_publications
where student_id = 'marina'
  and material_type = 'homework'
  and material_id in ('lesson-8', 'legacy-lesson-8')
order by material_id, notification_version;
