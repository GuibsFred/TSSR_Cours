# Fiche mémo — Archivage et compression

## Les définitions à connaître

| Notion | Définition courte |
| --- | --- |
| **Archiver** | Regrouper des fichiers dans un conteneur. |
| **Compresser** | Réduire la taille des données. |
| **TAR** | Outil Linux pour créer, consulter, extraire et mettre à jour des archives. |
| **`.tar`** | Archive TAR, pas nécessairement compressée. |
| **`.tar.gz`** | Archive TAR compressée avec gzip. |

> **Piège classique :** une archive n’est pas forcément compressée !

## Les options TAR à mémoriser

| Option | Mot-clé | Action |
| --- | --- | --- |
| `-c` | Create | Créer |
| `-x` | Extract | Extraire |
| `-t` | List | Lister |
| `-u` | Update | Mettre à jour |
| `-v` | Verbose | Afficher les détails |
| `-f` | File | Préciser l’archive |
| `-z` | gzip | Compression gzip |

## Les commandes indispensables

**Créer une archive TAR :**

```bash
tar -cf archive.tar fichier1 fichier2
```

**Extraire une archive TAR :**

```bash
tar -xf archive.tar
```

**Extraire une archive compressée gzip :**

```bash
tar -xzf archive.tar.gz
```

**Lister le contenu :**

```bash
tar -tf archive.tar
```

**Lister avec détails :**

```bash
tar -tvf archive.tar
```

**Mettre à jour une archive :**

```bash
tar -uvf archive.tar home/user30/ok
```

**Créer une archive TAR compressée gzip (complément TP) :**

```bash
tar -czf sauvegarde.tar.gz dossier/
```

## À retenir pour l’examen

- `-c` = **créer** ; `-x` = **extraire** ; `-t` = **lister**.
- `-v` affiche les détails ; `-f` désigne le fichier archive.
- `-z` correspond à **gzip**.
- `.tar` et `.tar.gz` ne sont **pas** équivalents.
- L’option `-u` sert à **mettre à jour** une archive TAR.