-- TSSR V53 : autoriser les quatre jeux actuels dans arcade_scores.
-- À exécuter UNE FOIS dans Supabase > SQL Editor > Run.
-- Ne supprime aucun score existant.
ALTER TABLE public.arcade_scores DROP CONSTRAINT IF EXISTS arcade_scores_game_check;
ALTER TABLE public.arcade_scores ADD CONSTRAINT arcade_scores_game_check
CHECK (game IN ('blockdrop','mines','breakout','snake','memory','space'));
-- Vérifier que la lecture et l'insertion sont autorisées aux visiteurs anonymes.
ALTER TABLE public.arcade_scores ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public can read arcade scores" ON public.arcade_scores;
CREATE POLICY "public can read arcade scores" ON public.arcade_scores FOR SELECT TO anon USING (true);
DROP POLICY IF EXISTS "public can submit arcade scores" ON public.arcade_scores;
CREATE POLICY "public can submit arcade scores" ON public.arcade_scores FOR INSERT TO anon WITH CHECK (true);
GRANT SELECT, INSERT ON public.arcade_scores TO anon;
