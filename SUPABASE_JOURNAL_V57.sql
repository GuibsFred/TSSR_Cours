-- Exécuter une seule fois dans SQL Editor de Supabase. Ne touche pas aux scores Arcade.
create table if not exists public.tssr_journal_counter (
  id integer primary key check (id = 1),
  reads bigint not null default 0 check (reads >= 0)
);
insert into public.tssr_journal_counter(id,reads) values(1,0) on conflict(id) do nothing;
alter table public.tssr_journal_counter enable row level security;
grant select on public.tssr_journal_counter to anon, authenticated;
drop policy if exists "Lecture publique compteur journal" on public.tssr_journal_counter;
create policy "Lecture publique compteur journal" on public.tssr_journal_counter for select to anon,authenticated using (true);
create or replace function public.tssr_increment_journal_reads()
returns void language sql security definer set search_path = '' as $$
  update public.tssr_journal_counter set reads = reads + 1 where id = 1;
$$;
revoke all on function public.tssr_increment_journal_reads() from public;
grant execute on function public.tssr_increment_journal_reads() to anon,authenticated;
-- Compteur des ouvertures (pas des visiteurs uniques). Protection anti-spam avancée non incluse.
