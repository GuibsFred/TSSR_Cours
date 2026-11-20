/* TSSR V4 : sources et références signalées. */
window.TSSR_COMMANDES_INTEGREES = [
  {
    "id": "extracted-bash-alias",
    "name": "alias",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des alias avec Bash",
    "description": "Exemple issu du cours « Gestion des alias avec Bash ».",
    "syntax": "alias nom='commande et options'",
    "example": "alias nom='commande et options'",
    "examples": [
      "alias nom='commande et options'",
      "alias ll=\"ls -l\"",
      "alias LL='ls -al'",
      "alias rm=\"rm -i\"",
      "alias ipa=\"ip address show dev ens33 | grep 'inet '\"",
      "alias grep='grep --color=auto'",
      "alias ll='ls -l'",
      "alias ls='ls --color=auto'",
      "alias rm='rm -i'",
      "alias ll"
    ],
    "options": [
      {
        "flag": "--color=auto'",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des alias avec Bash"
  },
  {
    "id": "extracted-bash-arp",
    "name": "arp",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "L’adressage IPV4",
    "description": "Afficher et gérer le cache ARP IPv4. Options : -a, -n, -i, -s, -d. Windows et Linux (ancien outil).",
    "syntax": "arp -a",
    "example": "arp -a",
    "examples": [
      "arp -a",
      "arp -s 192.168.1.200 00-14-22-01-23-45",
      "arp -d 192.168.1.200",
      "arp -n",
      "arp"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-s",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-d",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-n",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Les premières commandes, L’adressage IPV4"
  },
  {
    "id": "builtin-linux-bash-bzip2",
    "name": "bzip2",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Compression",
    "description": "Compresser des fichiers au format bzip2.",
    "syntax": "bzip2 [options] fichier",
    "example": "bzip2 -k rapport.log",
    "options": [
      {
        "flag": "-d",
        "meaning": "Décompresser"
      },
      {
        "flag": "-k",
        "meaning": "Conserver le fichier source"
      },
      {
        "flag": "-1 à -9",
        "meaning": "Taille de bloc / niveau de compression"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "archiver",
      "compresser"
    ],
    "examples": [
      "bzip2 -k rapport.log"
    ]
  },
  {
    "id": "extracted-bash-cat",
    "name": "cat",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Démarrage d'une distrubution Linux",
    "description": "Afficher le fichier des comptes du système courant. Argument /etc/passwd : chemin du fichier.",
    "syntax": "cat /etc/default/grub",
    "example": "cat /etc/default/grub",
    "examples": [
      "cat /etc/default/grub",
      "cat /boot/grub/grub.cfg",
      "cat /etc/resolv.conf",
      "cat /etc/apt/sources.list",
      "cat /etc/passwd",
      "cat /etc/group",
      "cat fichier.txt",
      "cat /etc/shadow",
      "cat /etc/gshadow"
    ],
    "options": [],
    "notes": "Cours : Debian en mode maintenance, Droits sur les fichiers et répertoires, Démarrage d'une distrubution Linux, Gestion des paquets logiciels, Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-cd",
    "name": "cd",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Archivage et compression",
    "description": "Se déplacer dans un répertoire. Argument : chemin ; nécessite le droit x sur les répertoires traversés.",
    "syntax": "cd /",
    "example": "cd /",
    "examples": [
      "cd /",
      "cd /usr/sbin",
      "cd /data/commun"
    ],
    "options": [],
    "notes": "Cours : Archivage et compression, Droits sur les fichiers et répertoires, Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-cp",
    "name": "cp",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion du réseau",
    "description": "Copier un fichier. Arguments : source et destination ; droits nécessaires selon les répertoires.",
    "syntax": "cp /etc/network/interfaces /etc/network/interfaces.bak",
    "example": "cp /etc/network/interfaces /etc/network/interfaces.bak",
    "examples": [
      "cp /etc/network/interfaces /etc/network/interfaces.bak",
      "cp /etc/fstab /etc/fstab.bak",
      "cp source destination"
    ],
    "options": [],
    "notes": "Cours : Droits sur les fichiers et répertoires, Gestion des espaces de stockage - File System, Gestion du réseau"
  },
  {
    "id": "extracted-bash-curl",
    "name": "curl",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des paquets logiciels",
    "description": "Afficher la version de curl. --version : option longue.",
    "syntax": "curl --version",
    "example": "curl --version",
    "examples": [
      "curl --version"
    ],
    "options": [
      {
        "flag": "--version",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des paquets logiciels"
  },
  {
    "id": "extracted-bash-df",
    "name": "df",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Afficher capacité, espace utilisé et libre d’un FS. Option : -h = unités lisibles ; argument facultatif = FS ou chemin. Autre option : -i (inodes).",
    "syntax": "df -h /dev/mapper/vgsys-lvroot",
    "example": "df -h /dev/mapper/vgsys-lvroot",
    "examples": [
      "df -h /dev/mapper/vgsys-lvroot",
      "df -i",
      "df -h"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-i",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-dmesg",
    "name": "dmesg",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage",
    "description": "Affiche les messages du noyau Linux, utiles pour vérifier la détection d'un disque. Peut nécessiter .",
    "syntax": "dmesg [options] [arguments]",
    "example": "dmesg | tail -n 30",
    "examples": [
      "dmesg | tail -n 30",
      "dmesg"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage"
  },
  {
    "id": "extracted-bash-du",
    "name": "du",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Afficher la taille totale du dossier. Options : -h = unités lisibles ; -s = résumé ; argument = dossier. Variantes : du -h /var, du -sh /var/log/*.",
    "syntax": "du -hs /etc",
    "example": "du -hs /etc",
    "examples": [
      "du -hs /etc"
    ],
    "options": [
      {
        "flag": "-hs",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-echo",
    "name": "echo",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Plus loin avec les variables",
    "description": "Demande au contrôleur SCSI  de rechercher les périphériques. À exécuter dans un shell administrateur ; adapter  à la machine.",
    "syntax": "echo $var",
    "example": "echo $var",
    "examples": [
      "echo $var",
      "echo $prenom",
      "echo $departement",
      "echo $heure",
      "echo $HOME",
      "echo $SHELL",
      "echo $LOGNAME",
      "echo $HOSTNAME",
      "echo $PATH",
      "echo $service",
      "echo prenom",
      "echo \"- - -\" > /sys/class/scsi_host/host2/scan",
      "echo \"- - -\" | sudo tee /sys/class/scsi_host/host2/scan",
      "echo '- - -' | sudo tee /sys/class/scsi_host/host2/scan",
      "echo '- - -' > /sys/class/scsi_host/host2/scan",
      "echo '- - -' > .../scan",
      "echo ... > ..."
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage, Gestion des utilisateurs et des groupes, Plus loin avec les variables"
  },
  {
    "id": "extracted-bash-exit",
    "name": "exit",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des utilisateurs et des groupes",
    "description": "Exemple issu du cours « Gestion des utilisateurs et des groupes ».",
    "syntax": "exit [options] [arguments]",
    "example": "exit",
    "examples": [
      "exit"
    ],
    "options": [],
    "notes": "Cours : Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-export",
    "name": "export",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Plus loin avec les variables",
    "description": "Exemple issu du cours « Plus loin avec les variables ».",
    "syntax": "export prenom",
    "example": "export prenom",
    "examples": [
      "export prenom",
      "export departement=\"Comptabilite\"",
      "export var=\"Bonjour Monde\"",
      "export service",
      "export prenom=\"Romain\""
    ],
    "options": [],
    "notes": "Cours : Plus loin avec les variables"
  },
  {
    "id": "builtin-linux-bash-find",
    "name": "find",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Recherche",
    "description": "Rechercher des fichiers et répertoires selon des critères.",
    "syntax": "find chemin [tests] [actions]",
    "example": "find /var/log -type f -name \"*.log\"",
    "options": [
      {
        "flag": "-name",
        "meaning": "Filtrer par nom (sensible à la casse)"
      },
      {
        "flag": "-iname",
        "meaning": "Filtrer par nom sans tenir compte de la casse"
      },
      {
        "flag": "-type f",
        "meaning": "Fichiers ordinaires"
      },
      {
        "flag": "-type d",
        "meaning": "Répertoires"
      },
      {
        "flag": "-mtime -7",
        "meaning": "Modifiés il y a moins de 7 jours"
      },
      {
        "flag": "-exec",
        "meaning": "Exécuter une commande sur les résultats"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "rechercher",
      "fichiers"
    ],
    "examples": [
      "find /var/log -type f -name \"*.log\""
    ]
  },
  {
    "id": "extracted-bash-findmnt",
    "name": "findmnt",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Afficher le montage associé au point /var/www. Argument : point de montage ; sans argument, afficher les montages en arborescence.",
    "syntax": "findmnt /var/www",
    "example": "findmnt /var/www",
    "examples": [
      "findmnt /var/www",
      "findmnt /mnt/www",
      "findmnt /dev/sdc1",
      "findmnt /mnt/bdd"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-fsck-ext4",
    "name": "fsck.ext4",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Vérifier l’intégrité d’un système de fichiers ext4. Argument : partition cible ; travailler sur un volume démonté.",
    "syntax": "fsck.ext4 /dev/sdc1",
    "example": "fsck.ext4 /dev/sdc1",
    "examples": [
      "fsck.ext4 /dev/sdc1"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-getent",
    "name": "getent",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Le modèle OSI",
    "description": "Tester la résolution d'un nom (DNS).",
    "syntax": "getent hosts exemple.org",
    "example": "getent hosts exemple.org",
    "examples": [
      "getent hosts exemple.org"
    ],
    "options": [],
    "notes": "Cours : Le modèle OSI"
  },
  {
    "id": "builtin-linux-bash-grep",
    "name": "grep",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Recherche",
    "description": "Rechercher les installations dans le journal dpkg. Motif : install ; chemin : journal.",
    "syntax": "grep [options] motif fichier",
    "example": "grep -rin \"error\" /var/log/monapp",
    "options": [
      {
        "flag": "-i",
        "meaning": "Ignorer la casse"
      },
      {
        "flag": "-n",
        "meaning": "Afficher le numéro de ligne"
      },
      {
        "flag": "-r",
        "meaning": "Parcourir les sous-répertoires"
      },
      {
        "flag": "-v",
        "meaning": "Inverser la sélection"
      },
      {
        "flag": "-E",
        "meaning": "Expressions régulières étendues"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Gestion des paquets logiciels, Gestion des utilisateurs et des groupes",
    "tags": [
      "rechercher",
      "texte"
    ],
    "examples": [
      "grep -rin \"error\" /var/log/monapp",
      "grep ' install ' /var/log/dpkg.log",
      "grep '^technicien:' /etc/group"
    ]
  },
  {
    "id": "builtin-linux-bash-gzip",
    "name": "gzip",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Compression",
    "description": "Compresser des fichiers au format gzip.",
    "syntax": "gzip [options] fichier",
    "example": "gzip -k rapport.log",
    "options": [
      {
        "flag": "-d",
        "meaning": "Décompresser"
      },
      {
        "flag": "-k",
        "meaning": "Conserver le fichier source"
      },
      {
        "flag": "-1",
        "meaning": "Compression rapide"
      },
      {
        "flag": "-9",
        "meaning": "Compression maximale"
      },
      {
        "flag": "-l",
        "meaning": "Afficher les informations d’un fichier .gz"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "archiver",
      "compresser"
    ],
    "examples": [
      "gzip -k rapport.log"
    ]
  },
  {
    "id": "extracted-bash-id",
    "name": "id",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des utilisateurs et des groupes",
    "description": "Exemple issu du cours « Gestion des utilisateurs et des groupes ».",
    "syntax": "id [options] [arguments]",
    "example": "id jmartin",
    "examples": [
      "id jmartin",
      "id claude",
      "id stagiaire",
      "id technicien1",
      "id"
    ],
    "options": [],
    "notes": "Cours : Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-less",
    "name": "less",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Démarrage d'une distrubution Linux",
    "description": "Exemple issu du cours « Démarrage d'une distrubution Linux ».",
    "syntax": "less /boot/grub/grub.cfg",
    "example": "less /boot/grub/grub.cfg",
    "examples": [
      "less /boot/grub/grub.cfg",
      "less /var/log/apt/history.log",
      "less /var/log/dpkg.log"
    ],
    "options": [],
    "notes": "Cours : Démarrage d'une distrubution Linux, Gestion des paquets logiciels"
  },
  {
    "id": "builtin-linux-bash-ls",
    "name": "ls",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Fichiers",
    "description": "Afficher le numéro d’inode et les détails du fichier. Options : -l = format long ; -i = numéro d’inode. Argument : chemin du fichier.",
    "syntax": "ls [options] [chemin]",
    "example": "ls -lah /var/log",
    "options": [
      {
        "flag": "-l",
        "meaning": "Affichage détaillé"
      },
      {
        "flag": "-a",
        "meaning": "Afficher les fichiers cachés"
      },
      {
        "flag": "-h",
        "meaning": "Tailles lisibles avec -l"
      },
      {
        "flag": "-R",
        "meaning": "Parcours récursif"
      },
      {
        "flag": "-lh",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "--block-size=1",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-al",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-ld",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-li",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "--block-size",
        "meaning": "Afficher notamment la taille du fichier en octets ; `--block-size=1` fixe l'unité d'affichage."
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Droits sur les fichiers et répertoires, Démarrage d'une distrubution Linux, Gestion avancée des espaces de stockage - LVM, Gestion des alias avec Bash",
    "tags": [
      "fichiers",
      "dossiers"
    ],
    "examples": [
      "ls -lah /var/log",
      "ls -lh /var/log",
      "ls -l --block-size=1 /etc/passwd",
      "ls -l",
      "ls -al",
      "ls -l Edition",
      "ls -l /boot/",
      "ls /etc/apt/sources.list.d/",
      "ls /sys/class/scsi_host/",
      "ls -l /etc/gshadow",
      "ls -l /home",
      "ls -ld /home/claude",
      "ls -ld /home/stagiaire",
      "ls -li /etc/apt/sources.list",
      "ls -l /srv/bdd",
      "ls -ld /data/commun",
      "ls -l /usr/bin/passwd",
      "ls -ld testdir",
      "ls -l testjoe",
      "ls -l testumask01",
      "ls -ld dirumask01",
      "ls -ld dirumask02",
      "ls -ld partage_informatique",
      "ls -l partage_informatique/liste_serveurs.txt",
      "ls -ld /data/partage_tssr"
    ]
  },
  {
    "id": "extracted-bash-make",
    "name": "make",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des paquets logiciels",
    "description": "Installer le projet compilé selon la cible install du Makefile ; opération pouvant modifier le système.",
    "syntax": "make [options] [arguments]",
    "example": "make install",
    "examples": [
      "make install",
      "make"
    ],
    "options": [],
    "notes": "Cours : Gestion des paquets logiciels"
  },
  {
    "id": "extracted-bash-mkdir",
    "name": "mkdir",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Créer les points de montage. Option : -p = créer les parents manquants et ne pas échouer si le dossier existe. Arguments : répertoires.",
    "syntax": "mkdir -p /var/www /srv/bdd",
    "example": "mkdir -p /var/www /srv/bdd",
    "examples": [
      "mkdir -p /var/www /srv/bdd",
      "mkdir /mnt/www",
      "mkdir -p /mnt/www /mnt/bdd",
      "mkdir dirumask01",
      "mkdir dirumask02",
      "mkdir partage_informatique",
      "mkdir /data/partage_tssr"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Droits sur les fichiers et répertoires, Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-mkfs-exfat",
    "name": "mkfs.exfat",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Créer un système de fichiers exFAT. Argument : partition cible. Outil exFAT requis. DESTRUCTEUR.",
    "syntax": "mkfs.exfat /dev/sde1",
    "example": "mkfs.exfat /dev/sde1",
    "examples": [
      "mkfs.exfat /dev/sde1"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-mkfs-ext4",
    "name": "mkfs.ext4",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Créer un système de fichiers ext4 sur le volume logique. Argument : volume cible. ATTENTION : détruit les données existantes.",
    "syntax": "mkfs.ext4 /dev/vgdata/lvweb",
    "example": "mkfs.ext4 /dev/vgdata/lvweb",
    "examples": [
      "mkfs.ext4 /dev/vgdata/lvweb",
      "mkfs.ext4 -L BDD /dev/vgdata/lvbdd"
    ],
    "options": [
      {
        "flag": "-L",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-mkfs-ntfs",
    "name": "mkfs.ntfs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Créer un système de fichiers NTFS. Argument : partition cible. Outil NTFS requis. DESTRUCTEUR.",
    "syntax": "mkfs.ntfs /dev/sde1",
    "example": "mkfs.ntfs /dev/sde1",
    "examples": [
      "mkfs.ntfs /dev/sde1"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-mkfs-vfat",
    "name": "mkfs.vfat",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Créer un système de fichiers FAT32. Option : -F = type de FAT ; 32 = FAT32 ; dernier argument = partition. DESTRUCTEUR.",
    "syntax": "mkfs.vfat -F 32 /dev/sde1",
    "example": "mkfs.vfat -F 32 /dev/sde1",
    "examples": [
      "mkfs.vfat -F 32 /dev/sde1"
    ],
    "options": [
      {
        "flag": "-F",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-mv",
    "name": "mv",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Droits sur les fichiers et répertoires",
    "description": "Déplacer ou renommer un fichier. Arguments : source et destination.",
    "syntax": "mv source destination",
    "example": "mv source destination",
    "examples": [
      "mv source destination"
    ],
    "options": [],
    "notes": "Cours : Droits sur les fichiers et répertoires"
  },
  {
    "id": "builtin-windows-cmd-net-user",
    "name": "net user",
    "environment": "CMD",
    "category": "CMD",
    "theme": "Utilisateurs",
    "description": "Afficher ou gérer les comptes utilisateurs locaux Windows.",
    "syntax": "net user [nom [motdepasse | *] [options]]",
    "example": "net user alice",
    "options": [
      {
        "flag": "/add",
        "meaning": "Créer un compte"
      },
      {
        "flag": "/delete",
        "meaning": "Supprimer un compte"
      },
      {
        "flag": "/active:yes",
        "meaning": "Activer un compte"
      },
      {
        "flag": "/active:no",
        "meaning": "Désactiver un compte"
      },
      {
        "flag": "/domain",
        "meaning": "Opérer sur le domaine (selon contexte et droits)"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "utilisateurs",
      "comptes"
    ],
    "examples": [
      "net user alice"
    ]
  },
  {
    "id": "extracted-bash-netstat",
    "name": "netstat",
    "environment": "CMD",
    "category": "CMD",
    "theme": "Les premières commandes",
    "description": "Examiner les connexions, ports et statistiques réseau. Linux : -a, -n, -t, -u, -l, -p, -r, -i. Windows : -a, -n, -o, -r, -e, -s.",
    "syntax": "netstat [options] [arguments]",
    "example": "netstat -an",
    "examples": [
      "netstat -an",
      "netstat -tulnp",
      "netstat -ano",
      "netstat"
    ],
    "options": [
      {
        "flag": "-an",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-tulnp",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-ano",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Les premières commandes"
  },
  {
    "id": "builtin-windows-cmd-nslookup",
    "name": "nslookup",
    "environment": "CMD",
    "category": "CMD",
    "theme": "DNS",
    "description": "Vérifier une résolution DNS.",
    "syntax": "nslookup [options] nom [serveur]",
    "example": "nslookup -type=MX exemple.fr",
    "options": [
      {
        "flag": "-type=A",
        "meaning": "Rechercher une adresse IPv4"
      },
      {
        "flag": "-type=AAAA",
        "meaning": "Rechercher une adresse IPv6"
      },
      {
        "flag": "-type=MX",
        "meaning": "Rechercher les serveurs de messagerie"
      },
      {
        "flag": "-type=NS",
        "meaning": "Rechercher les serveurs de noms"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, L’adressage IPV4",
    "tags": [
      "dns",
      "réseau"
    ],
    "examples": [
      "nslookup -type=MX exemple.fr",
      "nslookup example.com"
    ]
  },
  {
    "id": "extracted-bash-outlook-exe",
    "name": "outlook.exe",
    "environment": "CMD",
    "category": "CMD",
    "theme": "Utilisation et dépannage d’Outlook",
    "description": "Démarrer Outlook classique sans les compléments habituels",
    "syntax": "outlook.exe /safe",
    "example": "outlook.exe /safe",
    "examples": [
      "outlook.exe /safe"
    ],
    "options": [],
    "notes": "Cours : Utilisation et dépannage d’Outlook"
  },
  {
    "id": "builtin-windows-cmd-ping",
    "name": "ping",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Réseau",
    "description": "Tester la connectivité et la latence. Linux : -c, -s, -i, -q, -4, -6. Windows : -n, -l, -t, -4, -6.",
    "syntax": "ping [options] destination",
    "example": "ping -n 4 192.168.1.1",
    "options": [
      {
        "flag": "-n nombre",
        "meaning": "Nombre de requêtes (Windows)"
      },
      {
        "flag": "-t",
        "meaning": "Ping continu sous Windows"
      },
      {
        "flag": "-l taille",
        "meaning": "Taille de la charge utile sous Windows"
      },
      {
        "flag": "-4",
        "meaning": "Forcer IPv4"
      },
      {
        "flag": "-6",
        "meaning": "Forcer IPv6"
      },
      {
        "flag": "-c",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, La communication, Le modèle OSI, Les premières commandes, L’adressage IPV4",
    "tags": [
      "réseau",
      "diagnostic"
    ],
    "examples": [
      "ping -n 4 192.168.1.1",
      "ping -c 4 192.168.1.1",
      "ping 127.0.0.1",
      "ping 192.168.1.1",
      "ping -c 4 192.168.1.20",
      "ping -c 4 192.168.2.140",
      "ping -c 4 8.8.8.8",
      "ping -c 4 www.google.com",
      "ping -c 4 127.0.0.1",
      "ping"
    ]
  },
  {
    "id": "extracted-bash-printf",
    "name": "printf",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Les unités informatiques",
    "description": "Convertir  de la base 2 vers la base 10 : affiche .  indique la base binaire et  le format décimal.",
    "syntax": "printf '%d\\n' \"$((2#11001))\"",
    "example": "printf '%d\\n' \"$((2#11001))\"",
    "examples": [
      "printf '%d\\n' \"$((2#11001))\"",
      "printf '%x\\n' 254",
      "printf '%o\\n' 156",
      "printf '%d\\n' 0x3F"
    ],
    "options": [],
    "notes": "Cours : Les unités informatiques"
  },
  {
    "id": "extracted-bash-pwd",
    "name": "pwd",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des utilisateurs et des groupes",
    "description": "Exemple issu du cours « Gestion des utilisateurs et des groupes ».",
    "syntax": "pwd [options] [arguments]",
    "example": "pwd",
    "examples": [
      "pwd"
    ],
    "options": [],
    "notes": "Cours : Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-reboot",
    "name": "reboot",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Debian en mode maintenance",
    "description": "Demander un redémarrage quand le système le permet. Sans option.",
    "syntax": "reboot [options] [arguments]",
    "example": "reboot",
    "examples": [
      "reboot"
    ],
    "options": [],
    "notes": "Cours : Debian en mode maintenance"
  },
  {
    "id": "extracted-bash-rm",
    "name": "rm",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des alias avec Bash",
    "description": "Supprimer le fichier exemple du TP. Argument : fichier cible ; action destructive, vérifier avant suppression.",
    "syntax": "rm fichier.txt",
    "example": "rm fichier.txt",
    "examples": [
      "rm fichier.txt",
      "rm -i fichier.txt",
      "rm essai_alias.txt",
      "rm /var/www/exemple",
      "rm partage_informatique/liste_serveurs.txt"
    ],
    "options": [
      {
        "flag": "-i",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Droits sur les fichiers et répertoires, Gestion des alias avec Bash, Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-bash-route",
    "name": "route",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "L’adressage IPV4",
    "description": "Afficher la table de routage Windows.",
    "syntax": "route print",
    "example": "route print",
    "examples": [
      "route print"
    ],
    "options": [],
    "notes": "Cours : Gestion du réseau, L’adressage IPV4"
  },
  {
    "id": "extracted-bash-shutdown",
    "name": "shutdown",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Debian en mode maintenance",
    "description": "Demander un arrêt normal si init fonctionne. -h : arrêt ; now : immédiatement. Peut échouer avec init=/bin/bash.",
    "syntax": "shutdown -h now",
    "example": "shutdown -h now",
    "examples": [
      "shutdown -h now",
      "shutdown -h +10",
      "shutdown -r now",
      "shutdown -r 16:30",
      "shutdown -c"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Debian en mode maintenance"
  },
  {
    "id": "extracted-bash-source",
    "name": "source",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des alias avec Bash",
    "description": "Exemple issu du cours « Gestion des alias avec Bash ».",
    "syntax": "source ~/.bashrc",
    "example": "source ~/.bashrc",
    "examples": [
      "source ~/.bashrc"
    ],
    "options": [],
    "notes": "Cours : Gestion des alias avec Bash"
  },
  {
    "id": "extracted-bash-stat",
    "name": "stat",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Les unités informatiques",
    "description": "Afficher les permissions en octal et le nom du fichier.  choisit le format,  affiche les permissions octales,  le nom.",
    "syntax": "stat -c '%a %n' /etc/passwd",
    "example": "stat -c '%a %n' /etc/passwd",
    "examples": [
      "stat -c '%a %n' /etc/passwd",
      "stat /etc/apt/sources.list"
    ],
    "options": [
      {
        "flag": "-c",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des espaces de stockage - File System, Les unités informatiques"
  },
  {
    "id": "extracted-bash-su",
    "name": "su",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Installation d’une distribution Debian",
    "description": "Exemple issu du cours « Gestion des utilisateurs et des groupes ».",
    "syntax": "su -",
    "example": "su -",
    "examples": [
      "su -",
      "su - jmartin",
      "su -l jmartin",
      "su -s /bin/bash jmartin",
      "su -c 'id' jmartin"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-s",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-c",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des utilisateurs et des groupes, Installation d’une distribution Debian"
  },
  {
    "id": "extracted-bash-sync",
    "name": "sync",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Debian en mode maintenance",
    "description": "Demander la synchronisation des écritures en attente vers le stockage. Sans option.",
    "syntax": "sync [options] [arguments]",
    "example": "sync",
    "examples": [
      "sync"
    ],
    "options": [],
    "notes": "Cours : Debian en mode maintenance"
  },
  {
    "id": "extracted-bash-tail",
    "name": "tail",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des paquets logiciels",
    "description": "Afficher les 30 dernières lignes du journal APT. -n : nombre de lignes ; 30 : quantité.",
    "syntax": "tail -n 30 /var/log/apt/history.log",
    "example": "tail -n 30 /var/log/apt/history.log",
    "examples": [
      "tail -n 30 /var/log/apt/history.log",
      "tail -n 5 /etc/passwd",
      "tail -n 5 /etc/group"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des paquets logiciels, Gestion des utilisateurs et des groupes"
  },
  {
    "id": "builtin-linux-bash-tar",
    "name": "tar",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Archivage",
    "description": "Créer, consulter, extraire et compresser des archives.",
    "syntax": "tar [options] -f archive.tar [fichiers]",
    "example": "tar -czvf sauvegarde.tar.gz /home/user",
    "options": [
      {
        "flag": "-c",
        "meaning": "Créer une archive"
      },
      {
        "flag": "-x",
        "meaning": "Extraire"
      },
      {
        "flag": "-t",
        "meaning": "Lister le contenu"
      },
      {
        "flag": "-f",
        "meaning": "Nom du fichier archive (argument requis)"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les fichiers traités"
      },
      {
        "flag": "-z",
        "meaning": "Compression gzip"
      },
      {
        "flag": "-j",
        "meaning": "Compression bzip2"
      },
      {
        "flag": "-C",
        "meaning": "Changer de répertoire avant extraction"
      },
      {
        "flag": "-u",
        "meaning": "Mettre à jour une archive TAR non compressée"
      },
      {
        "flag": "-cf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-xf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-xzf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-uvf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-tf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-tvf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-czf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-tzf",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Archivage et compression, Bibliothèque intégrée",
    "tags": [
      "archiver",
      "compression",
      "sauvegarde"
    ],
    "examples": [
      "tar -czvf sauvegarde.tar.gz /home/user",
      "tar -cf archive.tar fichier1 fichier2",
      "tar -xf archive.tar",
      "tar -xzf archive.tar.gz",
      "tar -uvf archive.tar home/user30/ok",
      "tar -tf archive.tar",
      "tar -tvf archive.tar",
      "tar -czf sauvegarde.tar.gz dossier/",
      "tar -tzf sauvegarde.tar.gz",
      "tar -xzf sauvegarde.tar.gz"
    ]
  },
  {
    "id": "extracted-bash-touch",
    "name": "touch",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des alias avec Bash",
    "description": "Créer un fichier témoin pour visualiser le masquage d’un dossier par un montage. Argument : chemin du fichier.",
    "syntax": "touch essai_alias.txt",
    "example": "touch essai_alias.txt",
    "examples": [
      "touch essai_alias.txt",
      "touch testjdoe",
      "touch /var/www/PASMONTE",
      "touch testumask01",
      "touch testumask02",
      "touch partage_informatique/liste_serveurs.txt"
    ],
    "options": [],
    "notes": "Cours : Droits sur les fichiers et répertoires, Gestion des alias avec Bash, Gestion des espaces de stockage - File System, Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-traceroute",
    "name": "traceroute",
    "environment": "Bash",
    "category": "Bash",
    "theme": "La communication",
    "description": "Afficher les routeurs traversés vers une destination sous Linux. Options : -4, -6, -n, -m, -w, -I.",
    "syntax": "traceroute [options] [arguments]",
    "example": "traceroute www.google.com",
    "examples": [
      "traceroute www.google.com",
      "traceroute -4 www.google.com",
      "traceroute"
    ],
    "options": [
      {
        "flag": "-4",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : La communication, Les premières commandes"
  },
  {
    "id": "extracted-bash-type",
    "name": "type",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Plus loin avec les variables",
    "description": "Exemple issu du cours « Gestion des espaces de stockage ».",
    "syntax": "type echo",
    "example": "type echo",
    "examples": [
      "type echo",
      "Type d'étiquette de disque : dos"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage, Plus loin avec les variables"
  },
  {
    "id": "extracted-bash-udevadm",
    "name": "udevadm",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage",
    "description": "Identifie le chemin du périphérique  dans sysfs.  et  sont des options longues.",
    "syntax": "udevadm info --query=path --name=/dev/sda",
    "example": "udevadm info --query=path --name=/dev/sda",
    "examples": [
      "udevadm info --query=path --name=/dev/sda"
    ],
    "options": [
      {
        "flag": "--query=path",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "--name=/dev/sda",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "--query",
        "meaning": "Identifie le chemin du périphérique `/dev/sda` dans sysfs. `--query` et `--name` sont des options longues."
      },
      {
        "flag": "--name",
        "meaning": "Identifie le chemin du périphérique `/dev/sda` dans sysfs. `--query` et `--name` sont des options longues."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage"
  },
  {
    "id": "extracted-bash-umask",
    "name": "umask",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Droits sur les fichiers et répertoires",
    "description": "Définir le masque de création : fichiers 640, dossiers 750. 0027 : bits de permissions retirés.",
    "syntax": "umask 0027",
    "example": "umask 0027",
    "examples": [
      "umask 0027"
    ],
    "options": [],
    "notes": "Cours : Droits sur les fichiers et répertoires"
  },
  {
    "id": "extracted-bash-unalias",
    "name": "unalias",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des alias avec Bash",
    "description": "Exemple issu du cours « Gestion des alias avec Bash ».",
    "syntax": "unalias nom_alias",
    "example": "unalias nom_alias",
    "examples": [
      "unalias nom_alias",
      "unalias rm",
      "unalias ll"
    ],
    "options": [],
    "notes": "Cours : Gestion des alias avec Bash"
  },
  {
    "id": "extracted-bash-w",
    "name": "w",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des espaces de stockage",
    "description": "Exemple issu du cours « Gestion des espaces de stockage ».",
    "syntax": "w [options] [arguments]",
    "example": "w",
    "examples": [
      "w"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage"
  },
  {
    "id": "extracted-bash-whereis",
    "name": "whereis",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Gestion des utilisateurs et des groupes",
    "description": "Exemple issu du cours « Gestion des utilisateurs et des groupes ».",
    "syntax": "whereis useradd",
    "example": "whereis useradd",
    "examples": [
      "whereis useradd"
    ],
    "options": [],
    "notes": "Cours : Gestion des utilisateurs et des groupes"
  },
  {
    "id": "extracted-bash-which",
    "name": "which",
    "environment": "Bash",
    "category": "Bash",
    "theme": "Plus loin avec les variables",
    "description": "Exemple issu du cours « Plus loin avec les variables ».",
    "syntax": "which ls",
    "example": "which ls",
    "examples": [
      "which ls"
    ],
    "options": [],
    "notes": "Cours : Plus loin avec les variables"
  },
  {
    "id": "builtin-windows-cmd-ipconfig",
    "name": "ipconfig",
    "environment": "CMD",
    "category": "CMD",
    "theme": "Réseau",
    "description": "Consulter la configuration IP, DNS et DHCP sous Windows. Options : /all, /release, /renew, /displaydns, /flushdns, /registerdns.",
    "syntax": "ipconfig [option]",
    "example": "ipconfig /all",
    "options": [
      {
        "flag": "/all",
        "meaning": "Afficher les paramètres détaillés, dont DHCP et DNS"
      },
      {
        "flag": "/release",
        "meaning": "Libérer le bail DHCP IPv4"
      },
      {
        "flag": "/renew",
        "meaning": "Renouveler le bail DHCP IPv4"
      },
      {
        "flag": "/flushdns",
        "meaning": "Vider le cache DNS client"
      },
      {
        "flag": "/displaydns",
        "meaning": "Afficher le cache DNS client"
      },
      {
        "flag": "/?",
        "meaning": "Afficher l’aide"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Les premières commandes, L’adressage IPV4",
    "tags": [
      "réseau",
      "adresse",
      "diagnostic"
    ],
    "examples": [
      "ipconfig /all",
      "ipconfig /release",
      "ipconfig /renew",
      "ipconfig /flushdns"
    ]
  },
  {
    "id": "builtin-windows-cmd-tracert",
    "name": "tracert",
    "environment": "CMD",
    "category": "CMD",
    "theme": "Réseau",
    "description": "Afficher les routeurs traversés vers une destination sous Windows. Options : /d, /h, /w, /4, /6.",
    "syntax": "tracert [options] destination",
    "example": "tracert -d 8.8.8.8",
    "options": [
      {
        "flag": "-d",
        "meaning": "Ne pas résoudre les noms DNS"
      },
      {
        "flag": "-h nombre",
        "meaning": "Nombre maximal de sauts"
      },
      {
        "flag": "-w ms",
        "meaning": "Délai d’attente par réponse"
      },
      {
        "flag": "-h",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-w",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-4",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Les premières commandes, L’adressage IPV4",
    "tags": [
      "réseau",
      "diagnostic"
    ],
    "examples": [
      "tracert -d 8.8.8.8",
      "tracert 1.1.1.1",
      "tracert www.google.com",
      "tracert -d -h 15 -w 1000 www.google.com",
      "tracert -4 www.google.com"
    ]
  },
  {
    "id": "builtin-linux-bash-apt",
    "name": "apt",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Paquets",
    "description": "Mettre à niveau le système en autorisant si nécessaire des suppressions de paquets. full-upgrade : résolution complète des dépendances.",
    "syntax": "sudo apt action [paquet]",
    "example": "apt install traceroute",
    "options": [
      {
        "flag": "update",
        "meaning": "Actualiser la liste des paquets"
      },
      {
        "flag": "upgrade",
        "meaning": "Mettre à niveau les paquets"
      },
      {
        "flag": "install",
        "meaning": "Installer"
      },
      {
        "flag": "remove",
        "meaning": "Désinstaller sans purger la configuration"
      },
      {
        "flag": "purge",
        "meaning": "Désinstaller et purger la configuration"
      },
      {
        "flag": "search",
        "meaning": "Rechercher un paquet"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Gestion des paquets logiciels, Les premières commandes",
    "tags": [
      "debian",
      "installation"
    ],
    "examples": [
      "apt install traceroute",
      "apt update",
      "apt upgrade",
      "apt full-upgrade",
      "apt install curl",
      "apt remove curl",
      "apt purge curl",
      "apt autoremove",
      "apt clean",
      "apt search openssh",
      "apt show openssh-server",
      "apt install openssh-server",
      "apt install curl vim",
      "apt remove openssh-server",
      "apt purge openssh-server",
      "apt"
    ]
  },
  {
    "id": "extracted-linux-administration-apt-cache",
    "name": "apt-cache",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des paquets logiciels",
    "description": "Rechercher les paquets contenant openssh dans leurs métadonnées.",
    "syntax": "apt-cache search openssh",
    "example": "apt-cache search openssh",
    "examples": [
      "apt-cache search openssh",
      "apt-cache show openssh-server"
    ],
    "options": [],
    "notes": "Cours : Gestion des paquets logiciels"
  },
  {
    "id": "extracted-linux-administration-apt-get",
    "name": "apt-get",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des paquets logiciels",
    "description": "Mettre à niveau en autorisant des changements de dépendances et des suppressions nécessaires.",
    "syntax": "apt-get update",
    "example": "apt-get update",
    "examples": [
      "apt-get update",
      "apt-get upgrade",
      "apt-get dist-upgrade",
      "apt-get install curl",
      "apt-get remove curl",
      "apt-get purge curl",
      "apt-get clean",
      "apt-get install openssh-server"
    ],
    "options": [],
    "notes": "Cours : Gestion des paquets logiciels"
  },
  {
    "id": "extracted-linux-administration-blkid",
    "name": "blkid",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Afficher TYPE, UUID et LABEL du volume ; sans argument, inspecter les périphériques détectés. Argument : LV cible.",
    "syntax": "blkid /dev/vgdata/lvweb",
    "example": "blkid /dev/vgdata/lvweb",
    "examples": [
      "blkid /dev/vgdata/lvweb"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-linux-administration-chgrp",
    "name": "chgrp",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Droits sur les fichiers et répertoires",
    "description": "Changer uniquement le groupe propriétaire. informatique : groupe ; chemin : cible.",
    "syntax": "chgrp informatique /data/commun",
    "example": "chgrp informatique /data/commun",
    "examples": [
      "chgrp informatique /data/commun",
      "chgrp informatique testdir"
    ],
    "options": [],
    "notes": "Cours : Droits sur les fichiers et répertoires"
  },
  {
    "id": "builtin-linux-bash-chmod",
    "name": "chmod",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Permissions",
    "description": "Ajouter l'écriture au groupe et retirer lecture et traversée aux autres. g : groupe ; o : autres ; + : ajouter ; - : retirer ; rwx : droits.",
    "syntax": "chmod [options] mode fichier",
    "example": "chmod 640 rapport.txt",
    "options": [
      {
        "flag": "-R",
        "meaning": "Appliquer récursivement"
      },
      {
        "flag": "u/g/o/a",
        "meaning": "Utilisateur / groupe / autres / tous"
      },
      {
        "flag": "+x",
        "meaning": "Ajouter le droit d’exécution"
      },
      {
        "flag": "640",
        "meaning": "Propriétaire lecture/écriture, groupe lecture, autres aucun droit"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Droits sur les fichiers et répertoires",
    "tags": [
      "utilisateurs",
      "droits",
      "sécurité"
    ],
    "examples": [
      "chmod 640 rapport.txt",
      "chmod g+w,o-rx /data/commun",
      "chmod 770 /data/commun",
      "chmod -R g+w,o-rx /data/commun",
      "chmod -R a+X /data/commun",
      "chmod g+s partage_informatique",
      "chmod +t partage_informatique",
      "chmod u+s fichier",
      "chmod 660 testjoe",
      "chmod 755 fichier.txt",
      "chmod g+w,o-rx testdir",
      "chmod g+w,o-r testjoe",
      "chmod a+X dirumask02",
      "chmod 770 partage_informatique",
      "chmod 2770 /data/partage_tssr"
    ]
  },
  {
    "id": "builtin-linux-bash-chown",
    "name": "chown",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Permissions",
    "description": "Changer récursivement le groupe. -R : récursif ; :users : nouveau groupe ; chemin : cible.",
    "syntax": "chown [options] utilisateur[:groupe] chemin",
    "example": "chown penthium:users /data",
    "options": [
      {
        "flag": "-R",
        "meaning": "Modifier récursivement"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les changements"
      },
      {
        "flag": "-h",
        "meaning": "Modifier le lien symbolique plutôt que sa cible"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Droits sur les fichiers et répertoires",
    "tags": [
      "utilisateurs",
      "groupes"
    ],
    "examples": [
      "chown penthium:users /data",
      "chown -R :users /data/commun",
      "chown utilisateur /data/commun",
      "chown :informatique testjoe",
      "chown :informatique partage_informatique",
      "chown root:informatique /data/partage_tssr"
    ]
  },
  {
    "id": "extracted-linux-administration-dpkg",
    "name": "dpkg",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des paquets logiciels",
    "description": "Lister les paquets locaux correspondant au motif ftp. -l : liste ; *ftp* : filtre.",
    "syntax": "dpkg -l 'ftp'",
    "example": "dpkg -l 'ftp'",
    "examples": [
      "dpkg -l 'ftp'",
      "dpkg -L openssh-client",
      "dpkg -S /usr/bin/scp",
      "dpkg -l",
      "dpkg -l '*ftp*'"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-L",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-S",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des paquets logiciels"
  },
  {
    "id": "extracted-linux-administration-dumpe2fs",
    "name": "dumpe2fs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Afficher les informations techniques du superbloc et du système de fichiers ext. Argument : /dev/sda1 = partition ext à examiner.",
    "syntax": "dumpe2fs /dev/sda1",
    "example": "dumpe2fs /dev/sda1",
    "examples": [
      "dumpe2fs /dev/sda1"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-linux-administration-fdisk",
    "name": "fdisk",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage",
    "description": "Ouvrir le partitionneur interactif sur le disque de test ; vérifier le nom du disque avant de modifier.",
    "syntax": "fdisk -l",
    "example": "fdisk -l",
    "examples": [
      "fdisk -l",
      "fdisk [options] <disque>",
      "fdisk /dev/sdb",
      "fdisk -l /dev/sda",
      "fdisk -l /dev/sdb"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage"
  },
  {
    "id": "extracted-linux-administration-init",
    "name": "init",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Debian en mode maintenance",
    "description": "Demander le passage au niveau d’arrêt lorsque le système init est actif. 0 : arrêt ; non adapté au shell direct.",
    "syntax": "init 0",
    "example": "init 0",
    "examples": [
      "init 0"
    ],
    "options": [],
    "notes": "Cours : Debian en mode maintenance"
  },
  {
    "id": "builtin-linux-bash-ip",
    "name": "ip",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Réseau",
    "description": "Afficher et gérer les interfaces, adresses et routes IP.",
    "syntax": "ip [options] objet commande",
    "example": "ip -br addr show",
    "options": [
      {
        "flag": "-br",
        "meaning": "Affichage condensé"
      },
      {
        "flag": "addr",
        "meaning": "Objet : gérer les adresses IP (ce n’est pas une option)."
      },
      {
        "flag": "link",
        "meaning": "Objet : gérer les interfaces réseau (ce n’est pas une option)."
      },
      {
        "flag": "route",
        "meaning": "Objet : gérer les routes IP (ce n’est pas une option)."
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "réseau",
      "adresse",
      "diagnostic"
    ],
    "examples": [
      "ip -br addr show",
      "ip -br addr",
      "ip link show",
      "ip route show",
      "ip route get 192.168.2.140",
      "ip neigh show",
      "ip route add 10.0.0.0/8 via 192.168.1.254",
      "ip route del 10.0.0.0/8 via 192.168.1.254",
      "ip route add default via 192.168.1.254"
    ]
  },
  {
    "id": "builtin-linux-bash-journalctl",
    "name": "journalctl",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Journaux",
    "description": "Consulter les journaux systemd.",
    "syntax": "journalctl [options]",
    "example": "journalctl -u ssh -n 50 --no-pager",
    "options": [
      {
        "flag": "-u",
        "meaning": "Filtrer par unité/service"
      },
      {
        "flag": "-n",
        "meaning": "Limiter au nombre de lignes"
      },
      {
        "flag": "-f",
        "meaning": "Suivre en temps réel"
      },
      {
        "flag": "-b",
        "meaning": "Journaux depuis le démarrage courant"
      },
      {
        "flag": "--since",
        "meaning": "Filtrer à partir d’une date"
      },
      {
        "flag": "--no-pager",
        "meaning": "Ne pas ouvrir le pager"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "logs",
      "dépannage"
    ],
    "examples": [
      "journalctl -u ssh -n 50 --no-pager"
    ]
  },
  {
    "id": "extracted-linux-administration-lsblk",
    "name": "lsblk",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage",
    "description": "Afficher disques, partitions, LV, types de FS, labels, UUID et montages. Option : -f = informations sur les systèmes de fichiers ; sans option = arborescence générale.",
    "syntax": "lsblk [options] [arguments]",
    "example": "lsblk -f",
    "examples": [
      "lsblk -f",
      "lsblk"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Debian en mode maintenance, Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage, Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-linux-administration-lvcreate",
    "name": "lvcreate",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Exemple issu du cours « Gestion avancée des espaces de stockage - LVM ».",
    "syntax": "lvcreate -n lvweb -L 2G vgdata",
    "example": "lvcreate -n lvweb -L 2G vgdata",
    "examples": [
      "lvcreate -n lvweb -L 2G vgdata",
      "lvcreate -n lvbdd -L 5G vgdata"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-L",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-lvdisplay",
    "name": "lvdisplay",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Exemple issu du cours « Gestion avancée des espaces de stockage - LVM ».",
    "syntax": "lvdisplay [options] [arguments]",
    "example": "lvdisplay /dev/vggroup1/lv2",
    "examples": [
      "lvdisplay /dev/vggroup1/lv2",
      "lvdisplay"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-lvextend",
    "name": "lvextend",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Ajouter 512M au LV et demander l'agrandissement du système de fichiers pris en charge grâce à .",
    "syntax": "lvextend -L 25G /dev/vgdata/lvbdd",
    "example": "lvextend -L 25G /dev/vgdata/lvbdd",
    "examples": [
      "lvextend -L 25G /dev/vgdata/lvbdd",
      "lvextend -l +100%FREE /dev/vgdata/lvweb",
      "lvextend -r -L +512M /dev/vggroup1/lv1",
      "lvextend -L +3G /dev/vgdata/lvweb"
    ],
    "options": [
      {
        "flag": "-L",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-l",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-r",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-lvreduce",
    "name": "lvreduce",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Consulter l'aide de la commande de réduction d'un LV sans effectuer de réduction ; opération réelle dangereuse, à préparer spécifiquement.",
    "syntax": "lvreduce --help",
    "example": "lvreduce --help",
    "examples": [
      "lvreduce --help"
    ],
    "options": [
      {
        "flag": "--help",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-lvs",
    "name": "lvs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Afficher les volumes logiques LVM (commande utilisée dans la démonstration du formateur). Sans option dans le support.",
    "syntax": "lvs [options] [arguments]",
    "example": "lvs",
    "examples": [
      "lvs"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-linux-administration-mount",
    "name": "mount",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Debian en mode maintenance",
    "description": "Monter un volume ext4. Option : -t = type ; ext4 = FS ; premier chemin = source ; second = point de montage. Autre option : -o (ro,rw,sync,async,exec,noexec,suid,nosuid,remount).",
    "syntax": "mount -o remount,rw /",
    "example": "mount -o remount,rw /",
    "examples": [
      "mount -o remount,rw /",
      "mount -t ext4 /dev/vgdata/lvweb /var/www",
      "mount /srv/bdd",
      "mount -t ext4 /dev/vgdata/lvweb /mnt/www",
      "mount -t ext4 /dev/sdc1 /mnt",
      "mount -t ext4 /dev/vgdata/lvbdd /mnt/bdd"
    ],
    "options": [
      {
        "flag": "-o",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-t",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Debian en mode maintenance, Gestion des espaces de stockage - File System"
  },
  {
    "id": "builtin-linux-bash-passwd",
    "name": "passwd",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Utilisateurs",
    "description": "Modifier le mot de passe du compte courant. Exemple SetUID du support ; exécuté par root, cible root par défaut.",
    "syntax": "passwd [utilisateur]",
    "example": "passwd utilisateur",
    "options": [
      {
        "flag": "-l",
        "meaning": "Verrouiller le mot de passe du compte"
      },
      {
        "flag": "-u",
        "meaning": "Déverrouiller le mot de passe"
      },
      {
        "flag": "-e",
        "meaning": "Forcer le changement à la prochaine connexion"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Debian en mode maintenance, Droits sur les fichiers et répertoires, Gestion des utilisateurs et des groupes, Installation d’une distribution Debian",
    "tags": [
      "utilisateurs",
      "comptes"
    ],
    "examples": [
      "passwd utilisateur",
      "passwd"
    ]
  },
  {
    "id": "extracted-linux-administration-pvcreate",
    "name": "pvcreate",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Initialiser une partition de test comme volume physique (PV). Peut accepter plusieurs périphériques.",
    "syntax": "pvcreate /dev/sdb1",
    "example": "pvcreate /dev/sdb1",
    "examples": [
      "pvcreate /dev/sdb1",
      "pvcreate /dev/sdb1 /dev/sdb2 /dev/sdc1 /dev/sdd",
      "pvcreate /dev/sdc1"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-pvdisplay",
    "name": "pvdisplay",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Exemple issu du cours « Gestion avancée des espaces de stockage - LVM ».",
    "syntax": "pvdisplay [options] [arguments]",
    "example": "pvdisplay /dev/sdb1",
    "examples": [
      "pvdisplay /dev/sdb1",
      "pvdisplay"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-pvs",
    "name": "pvs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Afficher une synthèse des volumes physiques.",
    "syntax": "pvs [options] [arguments]",
    "example": "pvs",
    "examples": [
      "pvs"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-resize2fs",
    "name": "resize2fs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Adapter la taille du système de fichiers ext à celle du volume sous-jacent. Argument : LV cible ; vérifier la taille du LV au préalable.",
    "syntax": "resize2fs --help",
    "example": "resize2fs --help",
    "examples": [
      "resize2fs --help",
      "resize2fs /dev/vgdata/lvweb"
    ],
    "options": [
      {
        "flag": "--help",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM, Gestion des espaces de stockage - File System"
  },
  {
    "id": "builtin-linux-bash-ss",
    "name": "ss",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Réseau",
    "description": "Afficher les sockets et ports sous Linux. Options : -a, -l, -n, -t, -u, -p, -4, -6.",
    "syntax": "ss [options]",
    "example": "ss -tulnp",
    "options": [
      {
        "flag": "-t",
        "meaning": "Connexions TCP"
      },
      {
        "flag": "-u",
        "meaning": "Connexions UDP"
      },
      {
        "flag": "-l",
        "meaning": "Sockets en écoute"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas résoudre les noms"
      },
      {
        "flag": "-p",
        "meaning": "Afficher les processus associés (droits requis parfois)"
      },
      {
        "flag": "-tuln",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-tulnp",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-tan",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Le modèle OSI, Les premières commandes",
    "tags": [
      "réseau",
      "ports"
    ],
    "examples": [
      "ss -tulnp",
      "ss -tuln",
      "ss -tan",
      "ss"
    ]
  },
  {
    "id": "builtin-linux-bash-systemctl",
    "name": "systemctl",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Services",
    "description": "Exemple issu du cours « Démarrage d'une distrubution Linux ».",
    "syntax": "systemctl action service",
    "example": "systemctl get-default",
    "options": [
      {
        "flag": "status",
        "meaning": "Afficher l’état"
      },
      {
        "flag": "start",
        "meaning": "Démarrer maintenant"
      },
      {
        "flag": "stop",
        "meaning": "Arrêter maintenant"
      },
      {
        "flag": "restart",
        "meaning": "Redémarrer"
      },
      {
        "flag": "enable",
        "meaning": "Activer au démarrage"
      },
      {
        "flag": "disable",
        "meaning": "Désactiver au démarrage"
      },
      {
        "flag": "--all",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Démarrage d'une distrubution Linux, Gestion du réseau",
    "tags": [
      "services",
      "administration"
    ],
    "examples": [
      "systemctl get-default",
      "systemctl list-units",
      "systemctl list-units --all",
      "systemctl status cron.service",
      "systemctl est la commande principale utilisée pour contrôler systemd.",
      "systemctl stop networking.service",
      "systemctl start networking.service",
      "systemctl restart networking.service",
      "systemctl restart NetworkManager",
      "systemctl set-default multi-user.target",
      "systemctl set-default graphical.target",
      "systemctl isolate rescue.target",
      "systemctl start cron.service",
      "systemctl stop cron.service",
      "systemctl restart cron.service",
      "systemctl enable cron.service",
      "systemctl disable cron.service"
    ]
  },
  {
    "id": "extracted-linux-administration-tcpdump",
    "name": "tcpdump",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "La communication",
    "description": "Capturer les trames ARP et paquets ICMP sur  si  est installé ;  désactive la résolution des noms,  choisit l'interface. À utiliser uniquement sur un réseau autorisé.",
    "syntax": "tcpdump -ni eth0 'arp or icmp'",
    "example": "tcpdump -ni eth0 'arp or icmp'",
    "examples": [
      "tcpdump -ni eth0 'arp or icmp'"
    ],
    "options": [
      {
        "flag": "-ni",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : La communication"
  },
  {
    "id": "extracted-linux-administration-tracepath",
    "name": "tracepath",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "La communication",
    "description": "Observer le chemin vers une destination si l'outil est installé ;  est une alternative, pas un doublon de cette entrée.",
    "syntax": "tracepath 192.168.2.140",
    "example": "tracepath 192.168.2.140",
    "examples": [
      "tracepath 192.168.2.140"
    ],
    "options": [],
    "notes": "Cours : La communication"
  },
  {
    "id": "extracted-linux-administration-tune2fs",
    "name": "tune2fs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Modifier le label d’un ext4 existant sans le reformater. Option : -L = étiquette ; WWW = valeur ; dernier argument = volume. Autres options : -l (superbloc), -i (intervalle), -c (nombre de montages).",
    "syntax": "tune2fs -L WWW /dev/vgdata/lvweb",
    "example": "tune2fs -L WWW /dev/vgdata/lvweb",
    "examples": [
      "tune2fs -L WWW /dev/vgdata/lvweb",
      "tune2fs -l /dev/sda1"
    ],
    "options": [
      {
        "flag": "-L",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      },
      {
        "flag": "-l",
        "meaning": "Option présente dans un exemple du cours ; consulter le contexte du module."
      }
    ],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-linux-administration-umount",
    "name": "umount",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Démonter un système de fichiers. Argument : point de montage ; possible aussi avec le chemin du périphérique.",
    "syntax": "umount /var/www",
    "example": "umount /var/www",
    "examples": [
      "umount /var/www",
      "umount /mnt/www",
      "umount /dev/vgdata/lvweb",
      "umount /mnt/bdd"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-linux-administration-update-grub",
    "name": "update-grub",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Debian en mode maintenance",
    "description": "Régénérer la configuration GRUB du système installé. Sans option.",
    "syntax": "update-grub [options] [arguments]",
    "example": "update-grub",
    "examples": [
      "update-grub"
    ],
    "options": [],
    "notes": "Cours : Debian en mode maintenance"
  },
  {
    "id": "builtin-linux-bash-useradd",
    "name": "useradd",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Utilisateurs",
    "description": "Créer un compte utilisateur local Linux.",
    "syntax": "sudo useradd [options] nom",
    "example": "useradd -m jmartin",
    "options": [
      {
        "flag": "-m",
        "meaning": "Créer le répertoire personnel"
      },
      {
        "flag": "-s",
        "meaning": "Définir le shell"
      },
      {
        "flag": "-G",
        "meaning": "Groupes secondaires"
      },
      {
        "flag": "-u",
        "meaning": "UID explicite"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "utilisateurs",
      "comptes"
    ],
    "examples": [
      "useradd -m jmartin",
      "useradd -m -s /bin/bash jmartin",
      "useradd -m -G informatique claude",
      "useradd -m -u 2001 claude",
      "useradd -m -g informatique claude",
      "useradd -r serviceapp"
    ]
  },
  {
    "id": "extracted-linux-administration-vgcreate",
    "name": "vgcreate",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Créer le groupe de volumes (VG)  à partir du PV indiqué. Peut accepter plusieurs PV.",
    "syntax": "vgcreate vgdata /dev/sdb1",
    "example": "vgcreate vgdata /dev/sdb1",
    "examples": [
      "vgcreate vgdata /dev/sdb1",
      "vgcreate vggroup1 /dev/sdb1 /dev/sdb2 /dev/sdc1"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-vgdisplay",
    "name": "vgdisplay",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Exemple issu du cours « Gestion avancée des espaces de stockage - LVM ».",
    "syntax": "vgdisplay [options] [arguments]",
    "example": "vgdisplay vggroup2",
    "examples": [
      "vgdisplay vggroup2",
      "vgdisplay"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-vgextend",
    "name": "vgextend",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Exemple issu du cours « Gestion avancée des espaces de stockage - LVM ».",
    "syntax": "vgextend vgdata /dev/sdc1",
    "example": "vgextend vgdata /dev/sdc1",
    "examples": [
      "vgextend vgdata /dev/sdc1",
      "vgextend vggroup1 /dev/sdd"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "extracted-linux-administration-vgs",
    "name": "vgs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Gestion avancée des espaces de stockage - LVM",
    "description": "Afficher une synthèse des groupes de volumes, notamment  et .",
    "syntax": "vgs [options] [arguments]",
    "example": "vgs",
    "examples": [
      "vgs"
    ],
    "options": [],
    "notes": "Cours : Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "builtin-powershell-get-childitem",
    "name": "Get-ChildItem",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Fichiers",
    "description": "Exemple issu du cours « Plus loin avec les variables ».",
    "syntax": "Get-ChildItem [options] [chemin]",
    "example": "Get-ChildItem C:\\Logs -Filter *.log -Recurse",
    "options": [
      {
        "flag": "-Path",
        "meaning": "Chemin à explorer"
      },
      {
        "flag": "-Filter",
        "meaning": "Filtre transmis au fournisseur"
      },
      {
        "flag": "-Recurse",
        "meaning": "Parcourir récursivement"
      },
      {
        "flag": "-Force",
        "meaning": "Inclure les éléments masqués"
      },
      {
        "flag": "-File",
        "meaning": "Afficher uniquement les fichiers"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, Plus loin avec les variables",
    "tags": [
      "fichiers",
      "rechercher"
    ],
    "examples": [
      "Get-ChildItem C:\\Logs -Filter *.log -Recurse",
      "Get-ChildItem Edition"
    ]
  },
  {
    "id": "builtin-powershell-get-localuser",
    "name": "Get-LocalUser",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Utilisateurs",
    "description": "Lister et examiner les utilisateurs locaux Windows.",
    "syntax": "Get-LocalUser [-Name nom]",
    "example": "Get-LocalUser -Name \"alice\"",
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer par nom"
      },
      {
        "flag": "-SID",
        "meaning": "Sélectionner un compte par SID"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "utilisateurs",
      "comptes"
    ],
    "examples": [
      "Get-LocalUser -Name \"alice\""
    ]
  },
  {
    "id": "builtin-powershell-get-netipaddress",
    "name": "Get-NetIPAddress",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Réseau",
    "description": "Afficher les adresses IP configurées sur Windows.",
    "syntax": "Get-NetIPAddress [options]",
    "example": "Get-NetIPAddress -AddressFamily IPv4",
    "options": [
      {
        "flag": "-AddressFamily",
        "meaning": "IPv4 ou IPv6"
      },
      {
        "flag": "-InterfaceAlias",
        "meaning": "Filtrer par nom d’interface"
      },
      {
        "flag": "-IPAddress",
        "meaning": "Filtrer par adresse IP"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée, L’adressage IPV4",
    "tags": [
      "réseau",
      "ip",
      "diagnostic"
    ],
    "examples": [
      "Get-NetIPAddress -AddressFamily IPv4"
    ]
  },
  {
    "id": "extracted-powershell-get-netipconfiguration",
    "name": "Get-NetIPConfiguration",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "L’adressage IPV4",
    "description": "Afficher la configuration IP en PowerShell.",
    "syntax": "Get-NetIPConfiguration [options] [arguments]",
    "example": "Get-NetIPConfiguration",
    "examples": [
      "Get-NetIPConfiguration"
    ],
    "options": [],
    "notes": "Cours : L’adressage IPV4"
  },
  {
    "id": "extracted-powershell-get-netroute",
    "name": "Get-NetRoute",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "L’adressage IPV4",
    "description": "Afficher les routes IPv4 en PowerShell.",
    "syntax": "Get-NetRoute -AddressFamily IPv4",
    "example": "Get-NetRoute -AddressFamily IPv4",
    "examples": [
      "Get-NetRoute -AddressFamily IPv4"
    ],
    "options": [],
    "notes": "Cours : L’adressage IPV4"
  },
  {
    "id": "builtin-powershell-get-service",
    "name": "Get-Service",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Services",
    "description": "Afficher les services Windows et leur état.",
    "syntax": "Get-Service [-Name nom]",
    "example": "Get-Service -Name Spooler",
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer par nom de service"
      },
      {
        "flag": "-DisplayName",
        "meaning": "Filtrer par nom affiché"
      },
      {
        "flag": "-DependentServices",
        "meaning": "Afficher les services dépendants"
      },
      {
        "flag": "-RequiredServices",
        "meaning": "Afficher les dépendances nécessaires"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "services",
      "diagnostic"
    ],
    "examples": [
      "Get-Service -Name Spooler"
    ]
  },
  {
    "id": "builtin-powershell-test-netconnection",
    "name": "Test-NetConnection",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Réseau",
    "description": "Tester une connectivité réseau et éventuellement un port TCP.",
    "syntax": "Test-NetConnection cible [options]",
    "example": "Test-NetConnection serveur.local -Port 443",
    "options": [
      {
        "flag": "-Port",
        "meaning": "Port TCP à tester"
      },
      {
        "flag": "-InformationLevel",
        "meaning": "Niveau de détails (Quiet ou Detailed)"
      },
      {
        "flag": "-TraceRoute",
        "meaning": "Afficher le chemin vers la destination"
      }
    ],
    "notes": "Cours : Bibliothèque intégrée",
    "tags": [
      "réseau",
      "diagnostic",
      "ports"
    ],
    "examples": [
      "Test-NetConnection serveur.local -Port 443"
    ]
  },
  {
    "id": "extracted-powershell-test-outlookconnectivity",
    "name": "Test-OutlookConnectivity",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Utilisation et dépannage d’Outlook",
    "description": "Cmdlet de diagnostic Exchange dans les environnements compatibles, pas une commande PowerShell Windows universelle",
    "syntax": "Test-OutlookConnectivity [options] [arguments]",
    "example": "Test-OutlookConnectivity",
    "examples": [
      "Test-OutlookConnectivity"
    ],
    "options": [],
    "notes": "Cours : Utilisation et dépannage d’Outlook"
  },
  {
    "id": "extracted-vim-vi",
    "name": "vi",
    "environment": "Vim",
    "category": "Vim",
    "theme": "Gestion des espaces de stockage - File System",
    "description": "Ouvrir le fichier des montages automatiques pour édition. Argument : chemin du fichier.",
    "syntax": "vi /etc/fstab",
    "example": "vi /etc/fstab",
    "examples": [
      "vi /etc/fstab"
    ],
    "options": [],
    "notes": "Cours : Gestion des espaces de stockage - File System"
  },
  {
    "id": "extracted-vim-vim",
    "name": "vim",
    "environment": "Vim",
    "category": "Vim",
    "theme": "Gestion des alias avec Bash",
    "description": "Éditer la configuration traditionnelle des dépôts. Chemin : fichier à modifier avec prudence.",
    "syntax": "vim ~/.bashrc",
    "example": "vim ~/.bashrc",
    "examples": [
      "vim ~/.bashrc",
      "vim /etc/network/interfaces",
      "vim /etc/resolv.conf",
      "vim /etc/apt/sources.list"
    ],
    "options": [],
    "notes": "Cours : Gestion des alias avec Bash, Gestion des paquets logiciels, Gestion du réseau"
  },
  {
    "id": "verified-course-ipconfig",
    "name": "ipconfig",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Commandes étudiées en formation TSSR",
    "description": "Consulter la configuration IP, DNS et DHCP sous Windows. Options : /all, /release, /renew, /displaydns, /flushdns, /registerdns.",
    "syntax": "ipconfig",
    "example": "ipconfig",
    "examples": [
      "ipconfig"
    ],
    "options": [],
    "notes": "Source : 11 (cours TSSR)"
  },
  {
    "id": "verified-course-netstat",
    "name": "netstat",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Commandes étudiées en formation TSSR",
    "description": "Examiner les connexions, ports et statistiques réseau. Linux : -a, -n, -t, -u, -l, -p, -r, -i. Windows : -a, -n, -o, -r, -e, -s.",
    "syntax": "netstat",
    "example": "netstat",
    "examples": [
      "netstat"
    ],
    "options": [],
    "notes": "Source : 11 (cours TSSR)"
  },
  {
    "id": "verified-course-vi",
    "name": "vi",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Commandes étudiées en formation TSSR",
    "description": "Ouvrir le fichier des montages automatiques pour édition. Argument : chemin du fichier.",
    "syntax": "vi /etc/fstab",
    "example": "vi /etc/fstab",
    "examples": [
      "vi /etc/fstab"
    ],
    "options": [],
    "notes": "Source : 13 (cours TSSR)"
  },
  {
    "id": "verified-course-vim",
    "name": "vim",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "theme": "Commandes étudiées en formation TSSR",
    "description": "Éditer la configuration traditionnelle des dépôts. Chemin : fichier à modifier avec prudence.",
    "syntax": "vim /etc/apt/sources.list",
    "example": "vim /etc/apt/sources.list",
    "examples": [
      "vim /etc/apt/sources.list"
    ],
    "options": [],
    "notes": "Source : 16 (cours TSSR)"
  },
  {
    "id": "supplement-ps-Remove-Item",
    "name": "Remove-Item",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Supprimer un fichier ou un répertoire.",
    "syntax": "Remove-Item -Path C:\\Temp\\test.txt -Force",
    "example": "Remove-Item -Path C:\\Temp\\test.txt -Force",
    "examples": [
      "Remove-Item -Path C:\\Temp\\test.txt -Force"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Chemin de l’élément à supprimer."
      },
      {
        "flag": "-Recurse",
        "meaning": "Supprimer également le contenu des dossiers."
      },
      {
        "flag": "-Force",
        "meaning": "Inclure les éléments protégés ou masqués selon le contexte."
      },
      {
        "flag": "-WhatIf",
        "meaning": "Simuler l’action sans l’exécuter."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Remove-LocalUser",
    "name": "Remove-LocalUser",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Supprimer un compte utilisateur local.",
    "syntax": "Remove-LocalUser -Name stagiaire",
    "example": "Remove-LocalUser -Name stagiaire",
    "examples": [
      "Remove-LocalUser -Name stagiaire"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Nom du compte local."
      },
      {
        "flag": "-SID",
        "meaning": "Identifiant de sécurité du compte."
      },
      {
        "flag": "-WhatIf",
        "meaning": "Simuler la suppression."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-New-Item",
    "name": "New-Item",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Créer un fichier ou un répertoire.",
    "syntax": "New-Item -Path C:\\Temp\\test -ItemType Directory",
    "example": "New-Item -Path C:\\Temp\\test -ItemType Directory",
    "examples": [
      "New-Item -Path C:\\Temp\\test -ItemType Directory"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Chemin de l’élément."
      },
      {
        "flag": "-ItemType",
        "meaning": "Type : File ou Directory."
      },
      {
        "flag": "-Force",
        "meaning": "Forcer la création lorsque cela est possible."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Set-Location",
    "name": "Set-Location",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Changer de répertoire courant.",
    "syntax": "Set-Location -Path C:\\Windows",
    "example": "Set-Location -Path C:\\Windows",
    "examples": [
      "Set-Location -Path C:\\Windows"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Chemin du dossier cible."
      },
      {
        "flag": "-LiteralPath",
        "meaning": "Chemin traité sans caractères génériques."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Copy-Item",
    "name": "Copy-Item",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Copier un fichier ou un dossier.",
    "syntax": "Copy-Item -Path .\\source.txt -Destination .\\copie.txt",
    "example": "Copy-Item -Path .\\source.txt -Destination .\\copie.txt",
    "examples": [
      "Copy-Item -Path .\\source.txt -Destination .\\copie.txt"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Élément source."
      },
      {
        "flag": "-Destination",
        "meaning": "Destination."
      },
      {
        "flag": "-Recurse",
        "meaning": "Inclure les sous-dossiers."
      },
      {
        "flag": "-Force",
        "meaning": "Forcer la copie lorsque cela est possible."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Move-Item",
    "name": "Move-Item",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Déplacer un fichier ou un dossier.",
    "syntax": "Move-Item -Path .\\source.txt -Destination C:\\Temp",
    "example": "Move-Item -Path .\\source.txt -Destination C:\\Temp",
    "examples": [
      "Move-Item -Path .\\source.txt -Destination C:\\Temp"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Élément source."
      },
      {
        "flag": "-Destination",
        "meaning": "Chemin de destination."
      },
      {
        "flag": "-Force",
        "meaning": "Forcer le déplacement lorsque cela est possible."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Get-Process",
    "name": "Get-Process",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Afficher les processus en cours.",
    "syntax": "Get-Process -Name explorer",
    "example": "Get-Process -Name explorer",
    "examples": [
      "Get-Process -Name explorer"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer par nom de processus."
      },
      {
        "flag": "-Id",
        "meaning": "Filtrer par identifiant du processus."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Stop-Process",
    "name": "Stop-Process",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Arrêter un processus.",
    "syntax": "Stop-Process -Name notepad",
    "example": "Stop-Process -Name notepad",
    "examples": [
      "Stop-Process -Name notepad"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Nom du processus."
      },
      {
        "flag": "-Id",
        "meaning": "Identifiant du processus."
      },
      {
        "flag": "-Force",
        "meaning": "Forcer l’arrêt."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Get-Content",
    "name": "Get-Content",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Lire le contenu d’un fichier.",
    "syntax": "Get-Content -Path .\\journal.log -Tail 20",
    "example": "Get-Content -Path .\\journal.log -Tail 20",
    "examples": [
      "Get-Content -Path .\\journal.log -Tail 20"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Chemin du fichier."
      },
      {
        "flag": "-Tail",
        "meaning": "Afficher les dernières lignes."
      },
      {
        "flag": "-Wait",
        "meaning": "Suivre les nouvelles lignes."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  },
  {
    "id": "supplement-ps-Set-ExecutionPolicy",
    "name": "Set-ExecutionPolicy",
    "environment": "PowerShell",
    "category": "PowerShell",
    "theme": "Référence complémentaire PowerShell",
    "description": "Configurer la stratégie d’exécution des scripts.",
    "syntax": "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser",
    "example": "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser",
    "examples": [
      "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"
    ],
    "options": [
      {
        "flag": "-ExecutionPolicy",
        "meaning": "Politique à appliquer."
      },
      {
        "flag": "-Scope",
        "meaning": "Portée de la configuration."
      }
    ],
    "notes": "Complément de référence : commande non attestée dans les cours actuellement accessibles du ZIP."
  }
];
