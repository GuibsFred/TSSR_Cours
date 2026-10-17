# TSSR V3 — Mode d’emploi

Site GitHub Pages : `https://guibsfred.github.io/TSSR_Cours/`

## Écrire ses cours
Ouvrir le site, cliquer sur **Nouveau** ou sur un cours ENI puis **Créer ma version**. Écrire directement dans l’éditeur. Copier-coller du texte depuis Word, ou coller une capture avec Ctrl+V. Les images peuvent être importées. **Enregistrer le brouillon** le garde sur ce navigateur seulement.

## Publier sur GitHub
Le bouton **GitHub** demande un jeton personnel à permissions limitées au dépôt `GuibsFred/TSSR_Cours` (Contents: Read and write). Il reste seulement en mémoire pendant l’onglet ouvert. Après avoir écrit, cliquer sur **Publier sur GitHub**. Les visiteurs voient les changements après le déploiement.

⚠️ Important : ne jamais publier un jeton dans les fichiers du site, ne pas l’utiliser sur un ordinateur public. Un vrai OAuth avec service d’authentification serait préférable à terme.

## Limites
- Les contenus personnalisés sont stockés dans `data/custom.json`. Les captures sont intégrées en data URI dans ce JSON : de nombreuses grandes images risquent de rendre le dépôt lent.
- Les fichiers `.docx` ne sont pas importés automatiquement : copier-coller leur contenu depuis Word.
- Les modifications d’un brouillon ne sont **pas** automatiquement publiées : cliquer sur Publier.
- Les 25 cours ENI de départ sont des modèles ; le bouton « Créer ma version » crée une copie personnelle modifiable.
- Les QCM créés sont interactifs et publiables.
- L’éditeur utilise `document.execCommand`, une API ancienne qui peut varier selon les navigateurs.
- Déploiement GitHub Pages via le workflow existant.
- Site public : ne pas mettre en ligne des documents ENI protégés sans autorisation.

## Installation
Extraire ce ZIP et remplacer le contenu du dépôt local **sans supprimer `.git`**. Puis GitHub Desktop : Commit → Push.
