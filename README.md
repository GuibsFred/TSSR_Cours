# TSSR — Mon espace de formation

Site statique de formation TSSR, déployable sur GitHub Pages.

## Démarrage

Ouvrir le site via GitHub Pages. Pour tester localement, servir le dossier avec un serveur HTTP (par exemple `python -m http.server 8000`) et ouvrir http://localhost:8000. L’ouverture directe de `index.html` en `file://` ne permet pas toujours de charger les données.

## Données et sauvegarde

Les cours, QCM, commandes, réglages de modules et illustrations personnalisées sont enregistrés dans `data/custom.json`. Connecter GitHub depuis l'interface pour publier les modifications. Un brouillon local est conservé en cas d'échec. Ne pas partager de jeton GitHub.

## Fonctionnalités

- Cours et chapitres avec édition, renommage, déplacement, ordre et illustration.
- Modules renommables ; création d'un module lors de l'ajout de son premier cours.
- Masquage et restauration des cours sans supprimer leurs fichiers sources.
- QCM interactifs : création, modification, suppression et résultats locaux.
- Commandes Windows, PowerShell, Linux et réseau : recherche, fiches, ajout, édition et suppression.
- Outils et utilitaires TSSR, fiches de révision, ambiances et page d'accueil.

Lire `NOTICE.md` pour le guide utilisateur.
