-- À exécuter dans SQL Editor Supabase, après création d’un projet.
create table if not exists public.arcade_scores (
 id bigint generated always as identity primary key,
 game text not null check (game in ('snake','breakout','memory','space')),
 initials text not null check (initials ~ '^[A-Z]{3}$'),
 score integer not null check (score >= 0 and score <= 1000000),
 created_at timestamptz not null default now()
);
create index if not exists arcade_scores_rank on public.arcade_scores(game,score desc);
alter table public.arcade_scores enable row level security;
create policy "public can read arcade scores" on public.arcade_scores for select to anon using (true);
create policy "public can submit arcade scores" on public.arcade_scores for insert to anon with check (true);
-- IMPORTANT : cette version permet les classements partagés, mais ne garantit PAS
-- l'authenticité des scores. Pour empêcher la triche, un serveur validant les parties est nécessaire.
