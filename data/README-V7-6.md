# V7.6 — Repartir de zéro

Cette archive remet **data/custom.json** à zéro, volontairement, et utilise une nouvelle clé de brouillons locaux. Les chapitres du programme restent préconfigurés.

Correctifs : identifiant fixe par chapitre, titre/catégorie verrouillés pour les chapitres prédéfinis, interdiction des doublons de même titre/catégorie, édition sans rechargement automatique.

**Installation :** remplacer l’ensemble des fichiers dans le dépôt GitHub Desktop, y compris `data/custom.json`, puis commit et push. Ne pas restaurer l’ancien `data/custom.json` si vous souhaitez réellement repartir de zéro.

Tests manuels à effectuer : rédiger dans chapitre 01, publier, recharger, vérifier; puis rédiger dans chapitre 02 et confirmer que les deux restent indépendants. Vérifier aussi le fonctionnement du texte bleu et du retour en noir.
