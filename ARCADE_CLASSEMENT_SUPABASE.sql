-- TSSR V46 : compatible avec les anciens scores et les quatre nouveaux jeux.
create table if not exists public.arcade_scores (
 id bigint generated always as identity primary key,
 game text not null,
 initials text not null check (initials ~ '^[A-Z]{3}$'),
 score integer not null check (score >= 0 and score <= 1000000),
 created_at timestamptz not null default now()
);
alter table public.arcade_scores drop constraint if exists arcade_scores_game_check;
alter table public.arcade_scores add constraint arcade_scores_game_check check (game in ('snake','breakout','memory','space','blockdrop','mines'));
create index if not exists arcade_scores_rank on public.arcade_scores(game,score desc);
alter table public.arcade_scores enable row level security;
drop policy if exists "public can read arcade scores" on public.arcade_scores;
drop policy if exists "public can submit arcade scores" on public.arcade_scores;
create policy "public can read arcade scores" on public.arcade_scores for select to anon using (true);
create policy "public can submit arcade scores" on public.arcade_scores for insert to anon with check (true);
-- Scores partagés, sans protection anti-triche côté serveur.
