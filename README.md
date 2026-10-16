# ⚔ Viking TSSR — Site de révision ENI

Site gratuit et public hébergé sur GitHub Pages. Les visiteurs lisent les cours et font les QCM. Le propriétaire modifie les contenus via Pages CMS avec son compte GitHub.

## Mise en ligne (une seule fois)

1. Créer un dépôt **public** vide sur GitHub (par exemple `viking-tssr`).
2. Extraire ce ZIP puis envoyer **le contenu** du dossier dans la racine du dépôt (pas le ZIP lui-même). Pour éviter l'import un par un, utiliser GitHub Desktop : **File > Add local repository** ou initialiser le dossier local, puis **Publish repository**.
3. Dans **Settings > Pages > Build and deployment**, sélectionner **GitHub Actions**.
4. Dans l'onglet **Actions**, attendre la fin de « Publier Viking TSSR ». Le lien public apparaît dans **Settings > Pages**.
5. Ouvrir https://app.pagescms.org/ et autoriser l'accès GitHub au dépôt. Pages CMS lit le fichier `.pages.yml` présent à la racine.

## Utilisation quotidienne

- Dans Pages CMS, ouvrir « Cours ENI », « Fiches de révision », « Travaux pratiques », « Commandes et mémos » ou « Glossaire ».
- Cliquer sur **New** pour créer une page. Remplir le titre, le module/catégorie, l'ordre et le contenu. Pour créer un sous-dossier logique dans le menu, séparer les niveaux par `/` dans **Catégorie**, par exemple `02 — Bases des réseaux / Cisco / Wi-Fi`. Les dossiers du menu sont générés automatiquement : pas besoin de créer physiquement des répertoires.
- Ajouter les captures avec le gestionnaire de médias de Pages CMS. Le collage direct Ctrl+V dépend des fonctions de l'éditeur et du navigateur : **non garanti**.
- Enregistrer. Pages CMS crée un commit GitHub ; GitHub Actions actualise l'index et republie le site.
- Pour les QCM, créer un élément « QCM », saisir les réponses et l'index de la bonne réponse (`0` = première réponse).

## Ce qui est automatisé

- Indexation des cours et **recherche dans le texte** (sur les 16 000 premiers caractères de chaque page).
- Menus à catégories et sous-catégories créés à partir du champ `category`.
- Ajout automatique des nouveaux cours et des QCM au site après publication.
- Sauvegarde/versionnement sur GitHub.

## Limites importantes

- Le CMS est une **application séparée**, accessible via le bouton « Modifier mes cours ». Il ne s'agit pas d'un éditeur embarqué sur le site public.
- Les changements sont sauvegardés quand tu valides dans Pages CMS, **pas à chaque frappe**.
- Les catégories sont des **dossiers logiques**, pas des répertoires physiques modifiables depuis le menu.
- Changer le thème ou créer de nouvelles fonctionnalités nécessite encore de modifier le code.
- Les images et les documents publics sont accessibles à tous : ne pas publier les supports ENI protégés ni des informations privées.
- Le chargement de Markdown utilise les bibliothèques externes `marked` et `DOMPurify` via CDN : connexion Internet requise.
- La configuration Pages CMS est fournie, mais sa connexion OAuth et le comportement de l'éditeur d'images doivent être vérifiés après mise en ligne.

## Structure

- `index.html` : interface
- `assets/style.css` : apparence
- `assets/app.js` : navigation, recherche, QCM
- `content/` : modules ENI
- `fiches/`, `tp/`, `commandes/`, `glossaire/` : autres rubriques
- `quiz/` : QCM
- `.pages.yml` : configuration de l'éditeur
- `.github/workflows/deploy.yml` : publication automatique
- `scripts/` : indexation
