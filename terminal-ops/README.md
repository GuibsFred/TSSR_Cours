# Terminal Ops — Version 1

Cette version ajoute une page autonome à votre site TSSR GitHub Pages.

## Accès
- Depuis l'accueil du site : bouton « TERMINAL OPS » dans l'en-tête.
- Directement : `terminal-ops.html`.

## Contenu
- Trois environnements simulés : Linux/Bash, PowerShell et CMD.
- Six missions guidées avec commande saisie au clavier, diagnostics, conséquences et XP.
- Carte SVG interactive du réseau hospitalier (sélection d'équipements).
- Indices progressifs, historique des commandes avec flèches haut/bas, aide `help`.
- Mode entraînement libre avec plusieurs commandes de démonstration.
- Sauvegarde locale des XP et missions terminées via `localStorage`.

## Publication GitHub Pages
Copiez le contenu **à l'intérieur** du dossier `TSSR_Cours-main/` vers la racine du dépôt, en conservant les sous-dossiers. Remplacez `index.html` et ajoutez `terminal-ops.html` et `terminal-ops/`. L'accueil d'origine et les autres pages sont conservés.

## Important
Il s'agit d'un **simulateur pédagogique** qui ne fait tourner ni Linux, ni PowerShell, ni CMD réels et ne touche à aucune machine ou réseau. Seules les commandes prévues par le moteur sont interprétées ; cette V1 n'est pas encore une émulation générale des shells. La carte est une illustration 2,5D interactive, pas un moteur de jeu 3D.

Les fichiers utilisent des chemins relatifs et ne requièrent aucun serveur applicatif. Les polices Google Fonts nécessitent une connexion ; des polices de secours sont prévues.
