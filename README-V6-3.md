# TSSR V6.3 — Fiches de révision automatiques

- Une fiche de révision virtuelle pour chaque cours ENI ou cours personnel, accessible dans « Fiches de révision ».
- « Bleu révision » dans l’éditeur, et reconnaissance des couleurs bleues en style HTML, y compris de nombreuses nuances issues de Word.
- Extraits recalculés depuis le cours à l’ouverture de sa fiche : aucune duplication de texte dans `data/custom.json`.
- Notes personnelles éditables et publiables sur GitHub, indépendantes des extraits.
- Les liens bleus par défaut ne sont pas sélectionnés (sauf s’ils ont une couleur explicitement définie).

**Limites** : les passages colorés uniquement par des classes CSS externes ou par un thème Word sans couleur HTML explicite peuvent ne pas être reconnus. Les extraits sont du texte, pas des captures ni des tableaux. La synchronisation GitHub nécessite toujours « Publier sur GitHub ». Le fonctionnement doit être vérifié dans un navigateur avant mise en production.

Installation : sauvegarder le dépôt et les brouillons non publiés, copier les fichiers de l’archive dans le dépôt, puis commit/push via GitHub Desktop.
