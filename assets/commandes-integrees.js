/* Bibliothèque TSSR : fiches validées et options documentées. */
window.TSSR_COMMANDES_INTEGREES = [
  {
    "id": "builtin-linux-bash-tar",
    "name": "tar",
    "environment": "Linux / Bash",
    "category": "Archivage",
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
      }
    ],
    "notes": "Attention : -u ne met pas directement à jour une archive .tar.gz.",
    "tags": [
      "archiver",
      "compression",
      "sauvegarde"
    ]
  },
  {
    "id": "builtin-linux-bash-gzip",
    "name": "gzip",
    "environment": "Linux / Bash",
    "category": "Compression",
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
    "notes": "",
    "tags": [
      "archiver",
      "compresser"
    ]
  },
  {
    "id": "builtin-linux-bash-bzip2",
    "name": "bzip2",
    "environment": "Linux / Bash",
    "category": "Compression",
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
    "notes": "",
    "tags": [
      "archiver",
      "compresser"
    ]
  },
  {
    "id": "builtin-linux-bash-ls",
    "name": "ls",
    "environment": "Linux / Bash",
    "category": "Fichiers",
    "theme": "Fichiers",
    "description": "Afficher le contenu d’un répertoire.",
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
      }
    ],
    "notes": "",
    "tags": [
      "fichiers",
      "dossiers"
    ]
  },
  {
    "id": "builtin-linux-bash-find",
    "name": "find",
    "environment": "Linux / Bash",
    "category": "Recherche",
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
    "notes": "",
    "tags": [
      "rechercher",
      "fichiers"
    ]
  },
  {
    "id": "builtin-linux-bash-grep",
    "name": "grep",
    "environment": "Linux / Bash",
    "category": "Recherche",
    "theme": "Recherche",
    "description": "Rechercher du texte dans un fichier ou une sortie.",
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
    "notes": "",
    "tags": [
      "rechercher",
      "texte"
    ]
  },
  {
    "id": "builtin-linux-bash-chmod",
    "name": "chmod",
    "environment": "Linux / Bash",
    "category": "Permissions",
    "theme": "Permissions",
    "description": "Modifier les droits d’accès aux fichiers.",
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
    "notes": "",
    "tags": [
      "utilisateurs",
      "droits",
      "sécurité"
    ]
  },
  {
    "id": "builtin-linux-bash-chown",
    "name": "chown",
    "environment": "Linux / Bash",
    "category": "Permissions",
    "theme": "Permissions",
    "description": "Changer le propriétaire ou le groupe d’un fichier.",
    "syntax": "chown [options] utilisateur[:groupe] chemin",
    "example": "sudo chown -R alice:dev /srv/projet",
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
    "notes": "",
    "tags": [
      "utilisateurs",
      "groupes"
    ]
  },
  {
    "id": "builtin-linux-bash-useradd",
    "name": "useradd",
    "environment": "Linux / Bash",
    "category": "Utilisateurs",
    "theme": "Utilisateurs",
    "description": "Créer un compte utilisateur local Linux.",
    "syntax": "sudo useradd [options] nom",
    "example": "sudo useradd -m -s /bin/bash alice",
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
    "notes": "",
    "tags": [
      "utilisateurs",
      "comptes"
    ]
  },
  {
    "id": "builtin-linux-bash-passwd",
    "name": "passwd",
    "environment": "Linux / Bash",
    "category": "Utilisateurs",
    "theme": "Utilisateurs",
    "description": "Définir ou modifier un mot de passe de compte.",
    "syntax": "passwd [utilisateur]",
    "example": "sudo passwd alice",
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
    "notes": "",
    "tags": [
      "utilisateurs",
      "comptes"
    ]
  },
  {
    "id": "builtin-linux-bash-ip",
    "name": "ip",
    "environment": "Linux / Bash",
    "category": "Réseau",
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
        "meaning": "Gérer les adresses"
      },
      {
        "flag": "link",
        "meaning": "Gérer les interfaces"
      },
      {
        "flag": "route",
        "meaning": "Gérer la table de routage"
      },
      {
        "flag": "show",
        "meaning": "Afficher"
      },
      {
        "flag": "add/del",
        "meaning": "Ajouter ou supprimer"
      }
    ],
    "notes": "",
    "tags": [
      "réseau",
      "adresse",
      "diagnostic"
    ]
  },
  {
    "id": "builtin-linux-bash-ss",
    "name": "ss",
    "environment": "Linux / Bash",
    "category": "Réseau",
    "theme": "Réseau",
    "description": "Afficher les sockets et ports réseau.",
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
      }
    ],
    "notes": "",
    "tags": [
      "réseau",
      "ports"
    ]
  },
  {
    "id": "builtin-linux-bash-systemctl",
    "name": "systemctl",
    "environment": "Linux / Bash",
    "category": "Services",
    "theme": "Services",
    "description": "Contrôler les services gérés par systemd.",
    "syntax": "systemctl action service",
    "example": "sudo systemctl status ssh",
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
      }
    ],
    "notes": "",
    "tags": [
      "services",
      "administration"
    ]
  },
  {
    "id": "builtin-linux-bash-journalctl",
    "name": "journalctl",
    "environment": "Linux / Bash",
    "category": "Journaux",
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
    "notes": "",
    "tags": [
      "logs",
      "dépannage"
    ]
  },
  {
    "id": "builtin-linux-bash-apt",
    "name": "apt",
    "environment": "Linux / Bash",
    "category": "Paquets",
    "theme": "Paquets",
    "description": "Installer et gérer les paquets Debian.",
    "syntax": "sudo apt action [paquet]",
    "example": "sudo apt install openssh-server",
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
    "notes": "",
    "tags": [
      "debian",
      "installation"
    ]
  },
  {
    "id": "builtin-windows-cmd-ipconfig",
    "name": "ipconfig",
    "environment": "Windows CMD",
    "category": "Réseau",
    "theme": "Réseau",
    "description": "Afficher et diagnostiquer la configuration TCP/IP Windows.",
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
    "notes": "",
    "tags": [
      "réseau",
      "adresse",
      "diagnostic"
    ]
  },
  {
    "id": "builtin-windows-cmd-ping",
    "name": "ping",
    "environment": "Windows CMD",
    "category": "Réseau",
    "theme": "Réseau",
    "description": "Tester la joignabilité IP d’une destination.",
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
      }
    ],
    "notes": "",
    "tags": [
      "réseau",
      "diagnostic"
    ]
  },
  {
    "id": "builtin-windows-cmd-tracert",
    "name": "tracert",
    "environment": "Windows CMD",
    "category": "Réseau",
    "theme": "Réseau",
    "description": "Afficher les routeurs traversés vers une destination.",
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
      }
    ],
    "notes": "",
    "tags": [
      "réseau",
      "diagnostic"
    ]
  },
  {
    "id": "builtin-windows-cmd-nslookup",
    "name": "nslookup",
    "environment": "Windows CMD",
    "category": "DNS",
    "theme": "DNS",
    "description": "Interroger un serveur DNS.",
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
    "notes": "",
    "tags": [
      "dns",
      "réseau"
    ]
  },
  {
    "id": "builtin-windows-cmd-net-user",
    "name": "net user",
    "environment": "Windows CMD",
    "category": "Utilisateurs",
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
    "notes": "",
    "tags": [
      "utilisateurs",
      "comptes"
    ]
  },
  {
    "id": "builtin-powershell-get-localuser",
    "name": "Get-LocalUser",
    "environment": "PowerShell",
    "category": "Utilisateurs",
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
    "notes": "",
    "tags": [
      "utilisateurs",
      "comptes"
    ]
  },
  {
    "id": "builtin-powershell-get-service",
    "name": "Get-Service",
    "environment": "PowerShell",
    "category": "Services",
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
    "notes": "",
    "tags": [
      "services",
      "diagnostic"
    ]
  },
  {
    "id": "builtin-powershell-get-netipaddress",
    "name": "Get-NetIPAddress",
    "environment": "PowerShell",
    "category": "Réseau",
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
    "notes": "",
    "tags": [
      "réseau",
      "ip",
      "diagnostic"
    ]
  },
  {
    "id": "builtin-powershell-test-netconnection",
    "name": "Test-NetConnection",
    "environment": "PowerShell",
    "category": "Réseau",
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
    "notes": "",
    "tags": [
      "réseau",
      "diagnostic",
      "ports"
    ]
  },
  {
    "id": "builtin-powershell-get-childitem",
    "name": "Get-ChildItem",
    "environment": "PowerShell",
    "category": "Fichiers",
    "theme": "Fichiers",
    "description": "Lister les fichiers et répertoires.",
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
    "notes": "",
    "tags": [
      "fichiers",
      "rechercher"
    ]
  },
  {
    "id": "builtin-cisco-ios-show-ip-interface-brief",
    "name": "show ip interface brief",
    "environment": "Cisco IOS",
    "category": "Réseau",
    "theme": "Réseau",
    "description": "Afficher rapidement les interfaces Cisco et leurs adresses IP.",
    "syntax": "show ip interface brief",
    "example": "show ip interface brief",
    "options": [
      {
        "flag": "show",
        "meaning": "Afficher sans modifier la configuration"
      },
      {
        "flag": "ip interface",
        "meaning": "Informations IP des interfaces"
      },
      {
        "flag": "brief",
        "meaning": "Résumé compact"
      }
    ],
    "notes": "",
    "tags": [
      "cisco",
      "interfaces",
      "réseau"
    ]
  }
];
