# TSSR V6.1 — Bibliothèque de commandes

Cette mise à jour ajoute dans **Commandes** :
- ajout, modification et suppression manuels des commandes ;
- environnement, catégorie, thème, description, syntaxe, exemple, précautions, mots-clés ;
- recherche, filtres et index alphabétique ;
- copie de la syntaxe et des exemples ;
- import/export JSON (tableau d'objets, champs `name`, `environment`, `category`, `theme`, `description`, `syntax`, `example`, `notes`, `tags`) ;
- sauvegarde locale puis publication GitHub via le bouton de publication du site.

**Important :** la publication GitHub nécessite le jeton de dépôt configuré dans l'interface. Les commandes ne sont pas synchronisées entre appareils avant publication. La synchronisation n'est pas un éditeur multi-utilisateur et n'a pas été validée de bout en bout dans un navigateur.

Installation : sauvegarder le dépôt, synchroniser GitHub Desktop, puis copier le contenu de cette archive dans le dépôt existant **sans effacer `.git` ni les données personnelles publiées entre-temps**. Contrôler les différences avant commit et push. Si `data/custom.json` a changé en ligne depuis la création de l'archive, conserver la version la plus récente de GitHub plutôt que l'écraser.
