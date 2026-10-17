# TSSR — Horizon Premium Tech V6

## Installation

1. Sauvegarder le dépôt GitHub actuel et vos brouillons locaux avant toute opération.
2. Dans GitHub Desktop, effectuer **Fetch origin / Pull origin** avant de copier les nouveaux fichiers.
3. Décompresser l'archive puis copier son contenu **dans le dossier existant du dépôt** sans effacer `.git`. Ne pas supprimer les documents personnels ni remplacer des modifications plus récentes sans les comparer.
4. Examiner les changements dans GitHub Desktop, puis **Commit to main** et **Push origin**.
5. Patienter pendant le déploiement GitHub Pages, puis actualiser avec Ctrl+F5.

## Nouveautés

- Tableau de bord coloré, menu rétractable, raccourcis et compteurs issus des données.
- 25 modules ENI, entrée Cours et entrée QCM dans chaque module.
- QCM regroupés par module, création, modification et suppression.
- Galerie Cheatsheets : image collée ou importée, PDF, Word, titre, catégorie et aperçu/téléchargement.
- Bouton Annuler dans l'éditeur, affichage Markdown sans frontmatter, conservation des IDs de cours.
- Fusion GitHub des éléments modifiés seulement, pour limiter les écrasements.

## Limites importantes

- Le site est statique : la sauvegarde GitHub nécessite un jeton personnel limité au dépôt, saisi à chaque session. Ne partagez jamais le jeton. L'authentification OAuth sécurisée nécessiterait un composant serveur externe.
- Les fichiers intégrés (images et PDF) sont encodés dans `data/custom.json`. Évitez les fichiers volumineux ; la limite de l'interface est 4 Mo par fichier et la taille totale du JSON augmente. GitHub Contents API a ses propres limites.
- Les conflits avec GitHub Desktop restent possibles si le même fichier est modifié en parallèle. Toujours Pull avant les commits et ne jamais forcer un push.
- La publication n'est pas automatique : après Enregistrer, utiliser Connexion GitHub puis Publier pour synchroniser.
- Les statistiques de progression et résultats persistants de QCM ne sont pas encore implémentés ; la maquette illustrative n'est pas un relevé réel.
- La restitution des images collées depuis certains formats Word reste dépendante du navigateur et de ce que Word fournit dans le presse-papiers. Coller séparément les captures en cas de problème.
