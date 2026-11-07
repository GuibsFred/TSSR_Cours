# TSSR — Version 63.1

TSSR — Mon espace de formation

> Espace personnel de formation **Technicien supérieur systèmes et réseaux (TSSR)** : cours, révisions, exercices et outils techniques réunis dans une interface web.

## Présentation

Ce site statique est conçu pour organiser et consulter un parcours de formation TSSR depuis un navigateur. Il regroupe des modules de cours, des chapitres personnalisables, des fiches de révision, des QCM, une bibliothèque de commandes et des outils réseau.

Il est adapté à une publication sur **GitHub Pages**. Le contenu personnalisable est centralisé notamment dans `data/custom.json`.

## Fonctionnalités

| Espace | Utilité |
| --- | --- |
| **Cours et chapitres** | Parcourir les modules, ouvrir les cours, modifier les titres, l'ordre, le classement et les illustrations. |
| **Fiches de révision** | Retrouver des supports de révision dédiés. |
| **QCM** | S'entraîner avec des questionnaires interactifs et consulter ses résultats locaux. |
| **Commandes** | Rechercher et consulter des commandes Windows, PowerShell, Linux et réseau. |
| **Outils TSSR** | Accéder aux calculateurs IPv4, outils de conversion, planification VLSM et simulateurs disponibles. |
| **Homelab** | Rubrique dédiée au laboratoire personnel, actuellement en préparation. |
| **Illustrations** | Choisir parmi une bibliothèque d'icônes, avec recherche et filtres. |
| **Arcade** | Accéder à l'espace ludique et à ses fonctionnalités associées. |

## Démarrer

### En ligne avec GitHub Pages

1. Déposer les fichiers du dossier du site à la racine du dépôt GitHub (le fichier `index.html` doit être à la racine publiée).
2. Dans **Settings → Pages**, sélectionner la publication depuis la branche et le dossier appropriés, selon la configuration du dépôt.
3. Ouvrir l'adresse GitHub Pages une fois le déploiement terminé.

### En local

Depuis le dossier contenant `index.html`, lancer un petit serveur HTTP :

```bash
python -m http.server 8000
```

Puis ouvrir **http://localhost:8000**. L'ouverture directe en `file://` peut empêcher certains chargements de données.

## Utiliser et personnaliser le site

- **Modules et cours** : ouvrir *Cours*, sélectionner un module, puis un chapitre. Les commandes d'édition permettent de renommer, déplacer, réorganiser ou illustrer les éléments.
- **Ajouter du contenu** : utiliser les commandes d'ajout et l'éditeur prévus dans l'interface. Les cours masqués peuvent être restaurés sans supprimer leur fichier source.
- **Illustrations** : utiliser la recherche et les filtres du sélecteur pour éviter de parcourir manuellement toute la bibliothèque.
- **QCM et commandes** : utiliser les outils de création et de modification dans leurs rubriques respectives.
- **Homelab** : la rubrique est présente mais sa page est annoncée comme étant en préparation.

## Sauvegarde et publication des modifications

Les personnalisations du site sont notamment enregistrées dans **`data/custom.json`**. Une copie locale peut être conservée par l'application selon le type de modification. Lorsque la connexion GitHub est configurée dans l'interface, la fonction de publication permet de synchroniser les changements pris en charge.

**Avant de remplacer les fichiers du site, sauvegarder `data/custom.json`.** La publication de nouveaux fichiers (HTML, CSS, JavaScript, images) nécessite une mise à jour du dépôt GitHub : enregistrer du contenu depuis l'interface ne remplace pas le déploiement du code.

**Sécurité :** ne jamais placer de jeton d'accès GitHub ou d'autres secrets dans le dépôt, ni dans les captures d'écran publiées.

## Organisation du projet

```text
index.html           Page principale
arcade.html          Espace Arcade
assets/              Styles, scripts et ressources visuelles
content/             Contenus de cours Markdown
data/                Catalogue, données et personnalisations
fiches/              Fiches de révision
quiz/                Questionnaires
commandes/           Bibliothèque de commandes
outils/              Outils techniques TSSR
tp/                  Travaux pratiques
glossaire/            Glossaire
scripts/             Scripts auxiliaires
.github/workflows/   Automatisation GitHub, si configurée
```

Certains répertoires contiennent des fichiers d'exemple ou des copies de ressources utilisés par la structure existante. Ne les supprimer qu'après vérification des références dans le code.

## Services et configuration complémentaires

Le dépôt contient des scripts SQL liés à certaines fonctionnalités utilisant **Supabase** (par exemple classement Arcade et journal). Ils sont conservés tels quels : leur exécution et leur configuration dépendent des fonctionnalités effectivement activées. Ne pas publier de clés secrètes dans le code client.

## État du projet

**Version de travail : V62** — site personnel en évolution. La rubrique Homelab est en préparation. Les autres espaces peuvent continuer à être enrichis au fil de la formation.

---

*Projet personnel d'apprentissage et d'organisation des cours TSSR.*


### Version 62.2 — bibliothèque visuelle

Illustrations SVG retravaillées en style isométrique avec relief, éclairage et palettes par domaine. Les illustrations sont nommées (Word, Excel, Outlook, DNS, DHCP, etc.) et filtrables. Les anciens visuels restent présents pour préserver les références déjà enregistrées.
