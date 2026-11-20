# Archivage et compression sous Linux

**Module 04 — Utilisation d’une distribution GNU/Linux**

## Objectifs

- Distinguer **archivage** et **compression**.
- Créer, extraire, consulter et mettre à jour une archive avec `tar`.
- Comprendre le rôle des options `-c`, `-x`, `-t`, `-u`, `-v`, `-f` et `-z`.
- Reconnaître une archive TAR et une archive TAR compressée avec gzip.

## 1. Archiver et compresser : deux opérations différentes

### 1.1 Archiver

**Archiver**, c’est regrouper plusieurs fichiers ou dossiers dans un seul fichier conteneur appelé *archive*. **Une archive n’est pas nécessairement compressée.**

**Exemple du support :** une image ISO d’installation de Linux rassemble les fichiers nécessaires à l’installation. Elle n’implique pas nécessairement une compression.

### 1.2 Compresser

**Compresser**, c’est réduire la taille des données afin d’économiser de l’espace de stockage et de diminuer les temps de transfert ou de sauvegarde.

Les fichiers ZIP ou RAR peuvent combiner regroupement de fichiers et compression.

| Opération | Objectif | Compression obligatoire ? |
| --- | --- | --- |
| Archivage | Regrouper plusieurs fichiers en un conteneur | Non |
| Compression | Réduire la taille des données | C’est son objectif |
| Archivage + compression | Regrouper les fichiers et réduire leur taille | Oui, si la compression est activée |

> **À retenir :** archiver ≠ compresser. Une archive `.tar` peut être non compressée ; une archive `.tar.gz` est une archive TAR compressée avec gzip.

## 2. Présentation de la commande TAR

Sous Linux, la commande **`tar`** permet notamment de créer, extraire, consulter et mettre à jour des archives. Elle peut aussi être associée à un mécanisme de compression.

Le nom TAR vient historiquement de **Tape ARchiver**, en référence à son utilisation pour les sauvegardes sur bande.

**Attention :** selon les systèmes Unix et les versions de `tar`, les options de compression disponibles peuvent différer.

### 2.1 Options essentielles

| Option | Signification | Utilité |
| --- | --- | --- |
| `-c` | Create | Créer une archive |
| `-x` | Extract | Extraire une archive |
| `-t` | List | Afficher le contenu d’une archive |
| `-u` | Update | Mettre à jour une archive existante |
| `-v` | Verbose | Afficher les fichiers traités |
| `-f` | File | Indiquer le fichier archive |
| `-z` | gzip | Utiliser la compression gzip |

**Point important :** dans les exemples ci-dessous, l’option `-f` est suivie du nom de l’archive.

## 3. Créer une archive TAR

Pour regrouper deux fichiers dans une archive non compressée :

```bash
tar -cf archive.tar fichier1 fichier2
```

- `-c` : crée l’archive.
- `-f archive.tar` : définit le nom du fichier archive.
- `fichier1 fichier2` : désignent les fichiers à archiver.

Cette commande **regroupe** les fichiers, mais ne demande **aucune compression**.

## 4. Extraire une archive

### 4.1 Extraire une archive TAR non compressée

```bash
tar -xf archive.tar
```

- `-x` : extrait les fichiers.
- `-f archive.tar` : indique l’archive à lire.

### 4.2 Extraire une archive TAR compressée avec gzip

```bash
tar -xzf archive.tar.gz
```

- `-x` : extrait les fichiers.
- `-z` : prend en charge la compression gzip.
- `-f` : indique le nom de l’archive.

## 5. Ajouter ou mettre à jour des fichiers dans une archive

Le support présente les commandes suivantes :

```bash
cd /
tar -uvf archive.tar home/user30/ok
```

- `cd /` : se place à la racine du système de fichiers.
- `-u` : met à jour l’archive avec les fichiers plus récents que ceux déjà archivés.
- `-v` : affiche les fichiers traités.
- `-f` : indique le nom de l’archive.

**Remarque :** le chemin `home/user30/ok` est écrit sans `/` initial. Cela permet de conserver un chemin relatif dans l’archive, plutôt qu’un chemin absolu.

> **Prudence :** avant de modifier une archive importante, vérifie son contenu et conserve une sauvegarde.

## 6. Consulter le contenu d’une archive

### 6.1 Lister les fichiers

```bash
tar -tf archive.tar
```

- `-t` : liste le contenu.
- `-f` : désigne l’archive.

### 6.2 Afficher une liste détaillée

```bash
tar -tvf archive.tar
```

L’option `-v` ajoute un affichage détaillé.

## 7. Tableau récapitulatif des commandes du cours

| Besoin | Commande |
| --- | --- |
| Créer une archive | `tar -cf archive.tar fichier1 fichier2` |
| Extraire une archive TAR | `tar -xf archive.tar` |
| Extraire une archive `.tar.gz` | `tar -xzf archive.tar.gz` |
| Mettre à jour une archive | `tar -uvf archive.tar home/user30/ok` |
| Lister les fichiers | `tar -tf archive.tar` |
| Lister avec détails | `tar -tvf archive.tar` |
| Aller à la racine | `cd /` |

## 8. Exemple pratique complémentaire

*Cette section complète le support avec un exemple de création d’une archive compressée, pour pouvoir t’entraîner.*

Créer une archive TAR compressée avec gzip :

```bash
tar -czf sauvegarde.tar.gz dossier/
```

Contrôler son contenu :

```bash
tar -tzf sauvegarde.tar.gz
```

Extraire cette archive :

```bash
tar -xzf sauvegarde.tar.gz
```

## 9. Erreurs fréquentes à éviter

- Croire que **toutes** les archives sont compressées.
- Confondre `-c` (**créer**) et `-x` (**extraire**).
- Confondre `-t` (**lister**) et `-v` (**affichage détaillé**).
- Oublier `-f` avant le nom de l’archive.
- Utiliser une option de compression inadaptée au format réel du fichier.

## Conclusion

La commande `tar` est un outil essentiel d’administration Linux pour regrouper, consulter, extraire et mettre à jour des fichiers. Avec une option adaptée, elle permet également de travailler avec des archives compressées. Pour les TP TSSR, il faut surtout **savoir lire les options et choisir la commande correspondant à l’action demandée**.
