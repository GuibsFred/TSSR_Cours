# V22.20 — Bibliothèque de commandes

Les 54 fiches Windows/Linux sont intégrées dans `assets/commandes-integrees.js`, chargé **avant** `assets/app.js`. Le site n’a plus besoin d’une requête `fetch` pour afficher ces fiches : elles fonctionnent également avec une ouverture locale du fichier `index.html`.

## Publication via GitHub Desktop
Extraire tout le ZIP à la racine du dépôt, remplacer les fichiers, puis **Commit** et **Push origin**. Dans le navigateur, forcer le rechargement avec Ctrl+F5. Ouvrir **Commandes** : le compteur doit afficher **54 commandes** avant tout ajout personnel.

## Ajouter et publier des commandes
Le bouton **Ajouter une commande** crée une fiche dans l’interface. Pour synchroniser les ajouts entre appareils et les publier sur GitHub Pages, utiliser **Connexion GitHub** avec les autorisations nécessaires sur le dépôt `GuibsFred/TSSR_Cours`. Sans connexion valide, les changements restent des brouillons locaux sur ce navigateur : ils ne sont pas automatiquement publiés. **Importer JSON** permet d’ajouter plusieurs fiches à la fois, mais elles doivent également être publiées pour apparaître sur d’autres appareils. **Exporter JSON** crée une sauvegarde.

Ne pas supprimer `assets/commandes-integrees.js` lors des futures mises à jour.
