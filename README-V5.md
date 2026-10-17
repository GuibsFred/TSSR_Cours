# TSSR V5 — Horizon Premium

Cette archive provient du dépôt TSSR_Cours-main reçu le 17 octobre 2026.

## Modifications
- Accueil Horizon Premium, responsive, 25 modules ENI conservés, liens cliquables.
- Tri des modules par préfixe numérique 01–25.
- Les cours de base sont modifiés sous un identifiant stable `base:...` au lieu d'une nouvelle fiche.
- Brouillons locaux restaurés sans demande répétée ; supprimés après publication réussie.
- Publication GitHub : relit la dernière version du JSON et ne publie que les fiches modifiées localement, en bloquant un conflit sur la même fiche.
- Les images collées en tant que fichiers deviennent des data URI dans les cours. Les images Word `file:` ou `blob:` peuvent nécessiter un collage individuel.
- Les cinq documents personnalisés présents ont été conservés, ainsi que l'original dans `data/custom-before-v5.json`.

## Limitations
- Un jeton GitHub à accès limité est nécessaire à la publication. Il reste uniquement en mémoire dans l'onglet.
- GitHub Desktop peut encore exiger un Pull si une publication a été faite depuis le site ; ne pas écraser `data/custom.json` lors d'un conflit.
- Les images en data URI peuvent grossir fortement `custom.json`; éviter de très grandes captures.
- Pas d'import direct `.docx` ni de sauvegarde cloud automatique.
- Le comportement réel GitHub n'a pas été testé avec le jeton du propriétaire.

## Déploiement
Décompresser puis copier le contenu de `TSSR_Cours-main` à la racine du dépôt local, sans supprimer `.git`. Commit, puis Push.
