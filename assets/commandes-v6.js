/* Bibliothèque V10 : commandes et raccourcis vérifiés ; sources du site préservées. */
window.TSSR_COMMANDES_V6 = [
  {
    "id": "v6-linux-administration-ip",
    "name": "ip",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Ajouter temporairement une route statique IPv4 via la passerelle indiquée ; la passerelle doit être joignable et la configuration adaptée au réseau.",
    "syntax": "ip [options] objet commande",
    "examples": [
      "ip -br addr",
      "ip link show",
      "ip route show",
      "ip route get 192.168.2.140",
      "ip neigh show",
      "ip route add 10.0.0.0/8 via 192.168.1.254",
      "ip route del 10.0.0.0/8 via 192.168.1.254",
      "ip route add default via 192.168.1.254",
      "ip",
      "ip -4 addr",
      "ip -4 route",
      "ip neigh",
      "ip a",
      "ip r",
      "ip -br a",
      "ip a add X dev e",
      "ip r | grep default",
      "ip -br addr show"
    ],
    "options": [
      {
        "flag": "-4",
        "meaning": "Forcer IPv4"
      },
      {
        "flag": "-6",
        "meaning": "Forcer IPv6"
      },
      {
        "flag": "-br",
        "meaning": "Affichage condensé des interfaces"
      },
      {
        "flag": "-s",
        "meaning": "Afficher les statistiques"
      },
      {
        "flag": "addr",
        "meaning": "Gérer les adresses IP"
      },
      {
        "flag": "link",
        "meaning": "Gérer les interfaces réseau"
      },
      {
        "flag": "route",
        "meaning": "Consulter ou modifier les routes"
      },
      {
        "flag": "neigh",
        "meaning": "Consulter ou modifier les voisins ARP/NDP"
      },
      {
        "flag": "show",
        "meaning": "Afficher sans modifier"
      },
      {
        "flag": "add",
        "meaning": "Ajouter une entrée"
      },
      {
        "flag": "del",
        "meaning": "Supprimer une entrée"
      },
      {
        "flag": "set",
        "meaning": "Modifier une configuration"
      },
      {
        "flag": "dev",
        "meaning": "Préciser l’interface réseau"
      },
      {
        "flag": "via",
        "meaning": "Indiquer la passerelle"
      }
    ],
    "notes": "La communication · Les premières commandes · L’adressage IPV4 · Fiche mémo Bash · Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-ping",
    "name": "ping",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Tester la connectivité et la latence. Linux : -c, -s, -i, -q, -4, -6. Windows : -n, -l, -t, -4, -6.",
    "syntax": "ping [options] [arguments]",
    "examples": [
      "ping -c 4 192.168.1.20",
      "ping",
      "ping 127.0.0.1",
      "ping 192.168.1.1",
      "ping -c 4 192.168.1.1",
      "ping -c 4 h",
      "ping -c nombre destination"
    ],
    "options": [
      {
        "flag": "-c",
        "meaning": "Nombre de requêtes ICMP à envoyer (Linux)"
      },
      {
        "flag": "-i",
        "meaning": "Intervalle entre les requêtes en secondes (Linux)"
      },
      {
        "flag": "-s",
        "meaning": "Taille de la charge utile ICMP (Linux)"
      },
      {
        "flag": "-q",
        "meaning": "Afficher un résumé (Linux)"
      },
      {
        "flag": "-4",
        "meaning": "Utiliser IPv4"
      },
      {
        "flag": "-6",
        "meaning": "Utiliser IPv6"
      },
      {
        "flag": "-n",
        "meaning": "Nombre de requêtes (Windows)"
      },
      {
        "flag": "-t",
        "meaning": "Envoyer des requêtes en continu (Windows)"
      },
      {
        "flag": "-l",
        "meaning": "Taille de la charge utile en octets (Windows)"
      }
    ],
    "notes": "La communication · Les premières commandes · L’adressage IPV4 · Fiche mémo Bash · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-tracepath",
    "name": "tracepath",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Observer le chemin vers une destination si l'outil est installé ; traceroute est une alternative, pas un doublon de cette entrée.",
    "syntax": "tracepath [arguments]",
    "examples": [
      "tracepath 192.168.2.140",
      "tracepath destination"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Ne pas résoudre les adresses en noms DNS"
      },
      {
        "flag": "-m LONGUEUR",
        "meaning": "Définir la longueur maximale des paquets"
      },
      {
        "flag": "-p PORT",
        "meaning": "Définir le port UDP de départ"
      },
      {
        "flag": "-4",
        "meaning": "Utiliser IPv4"
      },
      {
        "flag": "-6",
        "meaning": "Utiliser IPv6"
      }
    ],
    "notes": "La communication · Catalogue réseau"
  },
  {
    "id": "v6-bash-tcpdump",
    "name": "tcpdump",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Capturer les trames ARP et paquets ICMP sur eth0 si tcpdump est installé ; -n désactive la résolution des noms, -i choisit l'interface. À utiliser uniquement sur un réseau autorisé.",
    "syntax": "tcpdump [arguments]",
    "examples": [
      "tcpdump -ni eth0 'arp or icmp'"
    ],
    "options": [
      {
        "flag": "-i INTERFACE",
        "meaning": "Choisir l’interface de capture"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas résoudre les adresses en noms"
      },
      {
        "flag": "-nn",
        "meaning": "Ne pas résoudre les adresses ni les ports"
      },
      {
        "flag": "-c N",
        "meaning": "Arrêter après N paquets"
      },
      {
        "flag": "-w FICHIER",
        "meaning": "Enregistrer la capture dans un fichier pcap"
      },
      {
        "flag": "-r FICHIER",
        "meaning": "Lire une capture enregistrée"
      }
    ],
    "notes": "La communication"
  },
  {
    "id": "v6-linux-administration-arp",
    "name": "arp",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher et gérer le cache ARP IPv4. Options : -a, -n, -i, -s, -d. Windows et Linux (ancien outil).",
    "syntax": "arp [options] [adresse_ip]",
    "examples": [
      "arp",
      "arp -a",
      "arp -n [adresse_ip]"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher les entrées ARP (Windows : toutes les interfaces ; Linux : affichage BSD)"
      },
      {
        "flag": "-n",
        "meaning": "Afficher les adresses numériques sans résolution DNS (Linux)"
      },
      {
        "flag": "-s IP MAC",
        "meaning": "Ajouter une entrée ARP statique"
      },
      {
        "flag": "-d IP",
        "meaning": "Supprimer une entrée ARP"
      },
      {
        "flag": "-i INTERFACE",
        "meaning": "Choisir une interface (Linux)"
      }
    ],
    "notes": "Les premières commandes · L’adressage IPV4 · Catalogue réseau"
  },
  {
    "id": "v6-cmd-ipconfig",
    "name": "ipconfig",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Consulter la configuration IP, DNS et DHCP sous Windows. Options : /all, /release, /renew, /displaydns, /flushdns, /registerdns.",
    "syntax": "ipconfig [option]",
    "examples": [
      "ipconfig",
      "ipconfig /all",
      "ipconfig /release",
      "ipconfig /renew",
      "ipconfig /release [nom_carte]",
      "ipconfig /renew [nom_carte]",
      "ipconfig /flushdns",
      "ipconfig /displaydns",
      "ipconfig /registerdns",
      "ipconfig /release6",
      "ipconfig /renew6"
    ],
    "options": [
      {
        "flag": "/all",
        "meaning": "Afficher tous les paramètres IP, DNS et DHCP"
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
        "flag": "/release6",
        "meaning": "Libérer le bail DHCPv6"
      },
      {
        "flag": "/renew6",
        "meaning": "Renouveler le bail DHCPv6"
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
        "flag": "/registerdns",
        "meaning": "Demander le réenregistrement DNS"
      },
      {
        "flag": "/?",
        "meaning": "Afficher l’aide"
      }
    ],
    "notes": "Les premières commandes · L’adressage IPV4 · Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-netstat",
    "name": "netstat",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Examiner les connexions, ports et statistiques réseau. Linux : -a, -n, -t, -u, -l, -p, -r, -i. Windows : -a, -n, -o, -r, -e, -s.",
    "syntax": "netstat [options] [arguments]",
    "examples": [
      "netstat"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher toutes les connexions et ports en écoute"
      },
      {
        "flag": "-n",
        "meaning": "Afficher les adresses et ports numériques"
      },
      {
        "flag": "-o",
        "meaning": "Afficher les PID (Windows)"
      },
      {
        "flag": "-b",
        "meaning": "Afficher les exécutables associés (Windows, droits élevés)"
      },
      {
        "flag": "-t",
        "meaning": "TCP (Linux)"
      },
      {
        "flag": "-u",
        "meaning": "UDP (Linux)"
      },
      {
        "flag": "-l",
        "meaning": "Ports en écoute (Linux)"
      },
      {
        "flag": "-p",
        "meaning": "Afficher les processus associés (Linux)"
      },
      {
        "flag": "-r",
        "meaning": "Afficher la table de routage"
      },
      {
        "flag": "-e",
        "meaning": "Afficher les statistiques Ethernet (Windows)"
      },
      {
        "flag": "-s",
        "meaning": "Afficher les statistiques par protocole"
      }
    ],
    "notes": "Les premières commandes"
  },
  {
    "id": "v6-linux-administration-ss",
    "name": "ss",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les sockets et ports sous Linux. Options : -a, -l, -n, -t, -u, -p, -4, -6.",
    "syntax": "ss [options]",
    "examples": [
      "ss",
      "ss -tuln",
      "ss -tulpn",
      "ss -tulnp",
      "ss -tan"
    ],
    "options": [
      {
        "flag": "-t",
        "meaning": "Sockets TCP"
      },
      {
        "flag": "-u",
        "meaning": "Sockets UDP"
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
        "meaning": "Afficher les processus associés"
      },
      {
        "flag": "-a",
        "meaning": "Afficher toutes les sockets"
      },
      {
        "flag": "-4",
        "meaning": "IPv4 seulement"
      },
      {
        "flag": "-6",
        "meaning": "IPv6 seulement"
      }
    ],
    "notes": "Les premières commandes · Fiche mémo Bash · Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-cmd-tracert",
    "name": "tracert",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Afficher les routeurs traversés vers une destination sous Windows. Options : /d, /h, /w, /4, /6.",
    "syntax": "tracert [options] destination",
    "examples": [
      "tracert",
      "tracert 1.1.1.1",
      "tracert -d 8.8.8.8",
      "tracert nom_ou_ip",
      "tracert -d nom_ou_ip",
      "tracert -h nombre nom_ou_ip",
      "tracert -w millisecondes nom_ou_ip",
      "tracert -4 nom",
      "tracert -6 nom"
    ],
    "options": [
      {
        "flag": "-d",
        "meaning": "Ne pas résoudre les noms DNS"
      },
      {
        "flag": "-h",
        "meaning": "Limiter le nombre de sauts"
      },
      {
        "flag": "-w",
        "meaning": "Fixer le délai d’attente en millisecondes"
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
        "flag": "-h nombre",
        "meaning": "Nombre maximal de sauts"
      },
      {
        "flag": "-w ms",
        "meaning": "Délai d’attente par réponse"
      }
    ],
    "notes": "Les premières commandes · L’adressage IPV4 · Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-traceroute",
    "name": "traceroute",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les routeurs traversés vers une destination sous Linux. Options : -4, -6, -n, -m, -w, -I.",
    "syntax": "traceroute [options] [arguments]",
    "examples": [
      "traceroute",
      "traceroute h",
      "traceroute destination",
      "traceroute -n destination",
      "traceroute -I destination",
      "traceroute -T -p PORT destination",
      "traceroute -m 12 -w 1 destination"
    ],
    "options": [
      {
        "flag": "-4",
        "meaning": "Forcer IPv4"
      },
      {
        "flag": "-6",
        "meaning": "Forcer IPv6"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas résoudre les noms"
      },
      {
        "flag": "-m",
        "meaning": "Nombre maximal de sauts"
      },
      {
        "flag": "-w",
        "meaning": "Délai d’attente"
      },
      {
        "flag": "-I",
        "meaning": "Utiliser des sondes ICMP"
      },
      {
        "flag": "-T",
        "meaning": "Utiliser des sondes TCP"
      },
      {
        "flag": "-p",
        "meaning": "Choisir le port de destination"
      }
    ],
    "notes": "Les premières commandes · Fiche mémo Bash · Catalogue réseau"
  },
  {
    "id": "v6-linux-administration-apt",
    "name": "apt",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Mettre à niveau le système en autorisant si nécessaire des suppressions de paquets. full-upgrade : résolution complète des dépendances.",
    "syntax": "apt action [paquet]",
    "examples": [
      "apt",
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
      "apt install p",
      "apt remove p",
      "apt purge p",
      "apt search p",
      "apt show p",
      "apt install openssh-server"
    ],
    "options": [
      {
        "flag": "update",
        "meaning": "Actualiser les index des dépôts"
      },
      {
        "flag": "upgrade",
        "meaning": "Mettre à niveau les paquets installés"
      },
      {
        "flag": "full-upgrade",
        "meaning": "Mise à niveau avec changements de dépendances, suppressions possibles"
      },
      {
        "flag": "install",
        "meaning": "Installer un ou plusieurs paquets"
      },
      {
        "flag": "remove",
        "meaning": "Désinstaller en conservant généralement les configurations"
      },
      {
        "flag": "purge",
        "meaning": "Désinstaller et purger les fichiers de configuration gérés"
      },
      {
        "flag": "autoremove",
        "meaning": "Supprimer les dépendances devenues inutiles"
      },
      {
        "flag": "clean",
        "meaning": "Effacer le cache des archives téléchargées"
      },
      {
        "flag": "search",
        "meaning": "Rechercher un paquet"
      },
      {
        "flag": "show",
        "meaning": "Afficher les détails d’un paquet"
      },
      {
        "flag": "-y",
        "meaning": "Répondre oui automatiquement (prudence)"
      },
      {
        "flag": "--reinstall",
        "meaning": "Réinstaller le paquet"
      }
    ],
    "notes": "Les premières commandes · Gestion des paquets logiciels · Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-bash-printf",
    "name": "printf",
    "environment": "Bash",
    "category": "Bash",
    "description": "Convertir 11001 de la base 2 vers la base 10 : affiche 25. 2# indique la base binaire et %d le format décimal.",
    "syntax": "printf [arguments]",
    "examples": [
      "printf '%d\\n' \"$((2#11001))\"",
      "printf '%x\\n' 254",
      "printf '%o\\n' 156",
      "printf '%d\\n' 0x3F"
    ],
    "options": [
      {
        "flag": "%s",
        "meaning": "Afficher une chaîne"
      },
      {
        "flag": "%d",
        "meaning": "Afficher un entier décimal"
      },
      {
        "flag": "%x",
        "meaning": "Afficher un entier en hexadécimal"
      },
      {
        "flag": "%o",
        "meaning": "Afficher un entier en octal"
      },
      {
        "flag": "\\n",
        "meaning": "Insérer un saut de ligne"
      },
      {
        "flag": "-v VARIABLE",
        "meaning": "Placer le résultat dans une variable Bash"
      }
    ],
    "notes": "Les unités informatiques"
  },
  {
    "id": "v6-bash-stat",
    "name": "stat",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher les permissions en octal et le nom du fichier. -c choisit le format, %a affiche les permissions octales, %n le nom.",
    "syntax": "stat [options] [arguments]",
    "examples": [
      "stat -c '%a %n' /etc/passwd",
      "stat /etc/apt/sources.list",
      "stat f"
    ],
    "options": [
      {
        "flag": "-c",
        "meaning": "Définir le format d’affichage"
      },
      {
        "flag": "--printf",
        "meaning": "Définir un format sans saut de ligne automatique"
      }
    ],
    "notes": "Les unités informatiques · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-ls",
    "name": "ls",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher le numéro d’inode et les détails du fichier. Options : -l = format long ; -i = numéro d’inode. Argument : chemin du fichier.",
    "syntax": "ls [options] [chemin]",
    "examples": [
      "ls -lh /var/log",
      "ls -l --block-size=1 /etc/passwd",
      "ls -l",
      "ls -ld /data/commun",
      "ls /sys/class/scsi_host/",
      "ls -li /etc/apt/sources.list",
      "ls -l /srv/bdd",
      "ls /etc/apt/sources.list.d/",
      "ls -l /etc/gshadow",
      "ls -l /home",
      "ls -ld /home/claude",
      "ls",
      "ls -lah",
      "ls /etc/cron.d",
      "ls -lah /var/log",
      "ls -la",
      "ls -l /srv/app/config.ini"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Affichage détaillé : droits, propriétaire, taille et dates"
      },
      {
        "flag": "-a",
        "meaning": "Inclure les fichiers cachés"
      },
      {
        "flag": "-h",
        "meaning": "Tailles lisibles avec -l"
      },
      {
        "flag": "-R",
        "meaning": "Parcourir récursivement"
      },
      {
        "flag": "-d",
        "meaning": "Afficher le répertoire lui-même"
      },
      {
        "flag": "-i",
        "meaning": "Afficher les numéros d’inode"
      },
      {
        "flag": "--block-size",
        "meaning": "Définir l’unité d’affichage des tailles"
      }
    ],
    "notes": "Les unités informatiques · Droits sur les fichiers et répertoires · Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Gestion des espaces de stockage - File System · Gestion des paquets logiciels · Gestion des utilisateurs et des groupes · Fiche mémo Bash · Fiche avec options · Simulateur terminal"
  },
  {
    "id": "v6-cmd-route",
    "name": "route",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Afficher la table de routage Windows.",
    "syntax": "route [options] [arguments]",
    "examples": [
      "route print",
      "route add",
      "route delete",
      "route add 0.0.0.0 mask 0.0.0.0 192.168.10.1",
      "route -p add 0.0.0.0 mask 0.0.0.0 192.168.10.1"
    ],
    "options": [
      {
        "flag": "print",
        "meaning": "Afficher la table de routage Windows"
      },
      {
        "flag": "add",
        "meaning": "Ajouter une route"
      },
      {
        "flag": "delete",
        "meaning": "Supprimer une route"
      },
      {
        "flag": "change",
        "meaning": "Modifier une route"
      },
      {
        "flag": "-p",
        "meaning": "Rendre persistante une route Windows ajoutée"
      },
      {
        "flag": "mask",
        "meaning": "Préciser le masque du réseau de destination"
      }
    ],
    "notes": "L’adressage IPV4 · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-bash-nslookup",
    "name": "nslookup",
    "environment": "Bash",
    "category": "Bash",
    "description": "Vérifier une résolution DNS.",
    "syntax": "nslookup [options] [arguments]",
    "examples": [
      "nslookup example.com",
      "nslookup h"
    ],
    "options": [
      {
        "flag": "-type",
        "meaning": "Préciser le type d’enregistrement DNS (A, AAAA, MX, NS…)"
      },
      {
        "flag": "serveur_dns",
        "meaning": "Interroger un serveur DNS précis"
      }
    ],
    "notes": "L’adressage IPV4 · Fiche mémo Bash"
  },
  {
    "id": "v6-powershell-get-netipaddress",
    "name": "Get-NetIPAddress",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Afficher les adresses IP configurées sur Windows.",
    "syntax": "Get-NetIPAddress [options]",
    "examples": [
      "Get-NetIPAddress -AddressFamily IPv4"
    ],
    "options": [
      {
        "flag": "-AddressFamily",
        "meaning": "Limiter à IPv4 ou IPv6"
      },
      {
        "flag": "-InterfaceAlias",
        "meaning": "Filtrer sur le nom de l’interface"
      },
      {
        "flag": "-IPAddress",
        "meaning": "Filtrer sur une adresse IP"
      }
    ],
    "notes": "L’adressage IPV4 · Fiche avec options"
  },
  {
    "id": "v6-powershell-get-netipconfiguration",
    "name": "Get-NetIPConfiguration",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Afficher la configuration IP en PowerShell.",
    "syntax": "Get-NetIPConfiguration [options] [arguments]",
    "examples": [
      "Get-NetIPConfiguration"
    ],
    "options": [
      {
        "flag": "-InterfaceAlias",
        "meaning": "Filtrer sur une interface"
      },
      {
        "flag": "-Detailed",
        "meaning": "Afficher davantage d’informations"
      }
    ],
    "notes": "L’adressage IPV4 · Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-netroute",
    "name": "Get-NetRoute",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Afficher les routes IPv4 en PowerShell.",
    "syntax": "Get-NetRoute [options] [arguments]",
    "examples": [
      "Get-NetRoute -AddressFamily IPv4"
    ],
    "options": [
      {
        "flag": "-AddressFamily",
        "meaning": "Choisir IPv4 ou IPv6"
      },
      {
        "flag": "-DestinationPrefix",
        "meaning": "Filtrer selon le préfixe de destination"
      },
      {
        "flag": "-InterfaceAlias",
        "meaning": "Filtrer selon l’interface"
      }
    ],
    "notes": "L’adressage IPV4"
  },
  {
    "id": "v6-linux-administration-passwd",
    "name": "passwd",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Modifier le mot de passe du compte courant. Exemple SetUID du support ; exécuté par root, cible root par défaut.",
    "syntax": "passwd [utilisateur]",
    "examples": [
      "passwd",
      "passwd utilisateur",
      "passwd nom",
      "passwd alice"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Verrouiller le mot de passe"
      },
      {
        "flag": "-u",
        "meaning": "Déverrouiller le mot de passe"
      },
      {
        "flag": "-S",
        "meaning": "Afficher l’état du mot de passe"
      },
      {
        "flag": "-e",
        "meaning": "Faire expirer le mot de passe"
      }
    ],
    "notes": "Debian en mode maintenance · Droits sur les fichiers et répertoires · Gestion des utilisateurs et des groupes · Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-linux-administration-mount",
    "name": "mount",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Monter un volume ext4. Option : -t = type ; ext4 = FS ; premier chemin = source ; second = point de montage. Autre option : -o (ro,rw,sync,async,exec,noexec,suid,nosuid,remount).",
    "syntax": "mount [options] [source] [point_de_montage]",
    "examples": [
      "mount -o remount,rw /",
      "mount -t ext4 /dev/vgdata/lvweb /var/www",
      "mount /srv/bdd",
      "mount",
      "mount p /mnt",
      "mount -a"
    ],
    "options": [
      {
        "flag": "-t",
        "meaning": "Préciser le type de système de fichiers"
      },
      {
        "flag": "-o",
        "meaning": "Indiquer les options de montage (rw, ro, remount…)"
      },
      {
        "flag": "-a",
        "meaning": "Monter les entrées éligibles de /etc/fstab"
      },
      {
        "flag": "-r",
        "meaning": "Monter en lecture seule"
      },
      {
        "flag": "-w",
        "meaning": "Monter en lecture-écriture"
      }
    ],
    "notes": "Debian en mode maintenance · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-sync",
    "name": "sync",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Demander la synchronisation des écritures en attente vers le stockage. Sans option.",
    "syntax": "sync [arguments]",
    "examples": [
      "sync"
    ],
    "options": [
      {
        "flag": "-f FICHIER",
        "meaning": "Synchroniser le système de fichiers contenant ce fichier"
      },
      {
        "flag": "--data",
        "meaning": "Synchroniser les données du fichier sans exiger toutes les métadonnées"
      },
      {
        "flag": "--help",
        "meaning": "Afficher l’aide"
      }
    ],
    "notes": "Debian en mode maintenance"
  },
  {
    "id": "v6-linux-administration-reboot",
    "name": "reboot",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Demander un redémarrage quand le système le permet. Sans option.",
    "syntax": "reboot [arguments]",
    "examples": [
      "reboot"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Forcer le redémarrage sans arrêt normal des services (dangereux)"
      },
      {
        "flag": "--help",
        "meaning": "Afficher l’aide lorsque disponible"
      }
    ],
    "notes": "Debian en mode maintenance · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-lsblk",
    "name": "lsblk",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher disques, partitions, LV, types de FS, labels, UUID et montages. Option : -f = informations sur les systèmes de fichiers ; sans option = arborescence générale.",
    "syntax": "lsblk [options] [arguments]",
    "examples": [
      "lsblk",
      "lsblk -f"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Afficher les systèmes de fichiers, UUID et points de montage"
      },
      {
        "flag": "-o",
        "meaning": "Choisir les colonnes à afficher"
      },
      {
        "flag": "-p",
        "meaning": "Afficher les chemins complets des périphériques"
      },
      {
        "flag": "-a",
        "meaning": "Afficher aussi les périphériques vides"
      },
      {
        "flag": "-J",
        "meaning": "Produire une sortie JSON"
      }
    ],
    "notes": "Debian en mode maintenance · Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-cat",
    "name": "cat",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher le fichier des comptes du système courant. Argument /etc/passwd : chemin du fichier.",
    "syntax": "cat [arguments]",
    "examples": [
      "cat /etc/passwd",
      "cat fichier.txt",
      "cat /etc/apt/sources.list",
      "cat /etc/group",
      "cat f",
      "cat /etc/os-release"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Numéroter toutes les lignes"
      },
      {
        "flag": "-b",
        "meaning": "Numéroter seulement les lignes non vides"
      },
      {
        "flag": "-A",
        "meaning": "Afficher les caractères de contrôle et fins de ligne"
      },
      {
        "flag": "-s",
        "meaning": "Réduire les suites de lignes vides"
      }
    ],
    "notes": "Debian en mode maintenance · Droits sur les fichiers et répertoires · Gestion des paquets logiciels · Gestion des utilisateurs et des groupes · Fiche mémo Bash"
  },
  {
    "id": "v6-powershell-update-grub",
    "name": "update-grub",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Régénérer la configuration GRUB du système installé. Sans option.",
    "syntax": "update-grub",
    "examples": [
      "update-grub"
    ],
    "options": [
      {
        "flag": "(sans option)",
        "meaning": "Régénérer /boot/grub/grub.cfg à partir de la configuration GRUB"
      }
    ],
    "notes": "Debian en mode maintenance"
  },
  {
    "id": "v6-linux-administration-shutdown",
    "name": "shutdown",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Demander un arrêt normal si init fonctionne. -h : arrêt ; now : immédiatement. Peut échouer avec init=/bin/bash.",
    "syntax": "shutdown [options] [arguments]",
    "examples": [
      "shutdown -h now"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Arrêter le système"
      },
      {
        "flag": "-r",
        "meaning": "Redémarrer"
      },
      {
        "flag": "-c",
        "meaning": "Annuler un arrêt programmé"
      },
      {
        "flag": "now",
        "meaning": "Exécuter immédiatement"
      },
      {
        "flag": "+10",
        "meaning": "Planifier dans dix minutes"
      }
    ],
    "notes": "Debian en mode maintenance"
  },
  {
    "id": "v6-bash-init",
    "name": "init",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Demander le passage au niveau d’arrêt lorsque le système init est actif. 0 : arrêt ; non adapté au shell direct.",
    "syntax": "init [arguments]",
    "examples": [
      "init 0"
    ],
    "options": [
      {
        "flag": "0",
        "meaning": "Demander l’arrêt du système"
      },
      {
        "flag": "1",
        "meaning": "Passer en mode secours (selon init)"
      },
      {
        "flag": "6",
        "meaning": "Demander un redémarrage"
      }
    ],
    "notes": "Debian en mode maintenance"
  },
  {
    "id": "v6-linux-administration-chmod",
    "name": "chmod",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Ajouter l'écriture au groupe et retirer lecture et traversée aux autres. g : groupe ; o : autres ; + : ajouter ; - : retirer ; rwx : droits.",
    "syntax": "chmod [options] mode fichier",
    "examples": [
      "chmod g+w,o-rx /data/commun",
      "chmod 770 /data/commun",
      "chmod -R g+w,o-rx /data/commun",
      "chmod -R a+X /data/commun",
      "chmod g+s partage_informatique",
      "chmod +t partage_informatique",
      "chmod u+s fichier",
      "chmod 755 f",
      "chmod +x f",
      "chmod u+rw,g-w f",
      "chmod -R 755 d",
      "chmod u+x,g-w f",
      "chmod +x s.sh",
      "chmod 640 rapport.txt",
      "chmod 640 /srv/app/config.ini"
    ],
    "options": [
      {
        "flag": "-R",
        "meaning": "Appliquer les modifications récursivement"
      },
      {
        "flag": "u",
        "meaning": "Propriétaire du fichier"
      },
      {
        "flag": "g",
        "meaning": "Groupe propriétaire"
      },
      {
        "flag": "o",
        "meaning": "Autres utilisateurs"
      },
      {
        "flag": "a",
        "meaning": "Tous les utilisateurs"
      },
      {
        "flag": "+x",
        "meaning": "Ajouter le droit d’exécution"
      },
      {
        "flag": "g+s",
        "meaning": "Activer le bit SetGID"
      },
      {
        "flag": "+t",
        "meaning": "Activer le Sticky Bit"
      },
      {
        "flag": "u/g/o/a",
        "meaning": "Utilisateur / groupe / autres / tous"
      },
      {
        "flag": "640",
        "meaning": "Propriétaire lecture/écriture, groupe lecture, autres aucun droit"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash · Fiche avec options · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-chown",
    "name": "chown",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Changer récursivement le groupe. -R : récursif ; :users : nouveau groupe ; chemin : cible.",
    "syntax": "chown [options] utilisateur[:groupe] chemin",
    "examples": [
      "chown penthium:users /data",
      "chown -R :users /data/commun",
      "chown u f",
      "chown u:g f",
      "chown -R u:g d",
      "chown -R alice:dev /srv/projet"
    ],
    "options": [
      {
        "flag": "-R",
        "meaning": "Modifier récursivement"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les modifications"
      },
      {
        "flag": "-h",
        "meaning": "Modifier le lien symbolique lui-même"
      },
      {
        "flag": "utilisateur:groupe",
        "meaning": "Définir le propriétaire et éventuellement le groupe"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-linux-administration-chgrp",
    "name": "chgrp",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Changer uniquement le groupe propriétaire. informatique : groupe ; chemin : cible.",
    "syntax": "chgrp [options] [arguments]",
    "examples": [
      "chgrp informatique /data/commun",
      "chgrp g f",
      "chgrp app /srv/app/config.ini"
    ],
    "options": [
      {
        "flag": "-R",
        "meaning": "Changer le groupe récursivement"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les modifications"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-umask",
    "name": "umask",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Définir le masque de création : fichiers 640, dossiers 750. 0027 : bits de permissions retirés.",
    "syntax": "umask [arguments]",
    "examples": [
      "umask",
      "umask 0027"
    ],
    "options": [
      {
        "flag": "-S",
        "meaning": "Afficher le masque sous forme symbolique"
      },
      {
        "flag": "0022",
        "meaning": "Masque courant : fichiers généralement 644 et dossiers 755"
      },
      {
        "flag": "0027",
        "meaning": "Masque : fichiers généralement 640 et dossiers 750"
      },
      {
        "flag": "0002",
        "meaning": "Masque : fichiers généralement 664 et dossiers 775"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-touch",
    "name": "touch",
    "environment": "Bash",
    "category": "Bash",
    "description": "Créer un fichier témoin pour visualiser le masquage d’un dossier par un montage. Argument : chemin du fichier.",
    "syntax": "touch [arguments]",
    "examples": [
      "touch testumask01",
      "touch /var/www/PASMONTE",
      "touch testjdoe",
      "touch f"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Modifier uniquement la date d’accès"
      },
      {
        "flag": "-m",
        "meaning": "Modifier uniquement la date de modification"
      },
      {
        "flag": "-t DATE",
        "meaning": "Fixer une date précise"
      },
      {
        "flag": "-r FICHIER",
        "meaning": "Reprendre les dates d’un fichier de référence"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Gestion des espaces de stockage - File System · Gestion des utilisateurs et des groupes · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-mkdir",
    "name": "mkdir",
    "environment": "Bash",
    "category": "Bash",
    "description": "Créer les points de montage. Option : -p = créer les parents manquants et ne pas échouer si le dossier existe. Arguments : répertoires.",
    "syntax": "mkdir [options] [arguments]",
    "examples": [
      "mkdir dirumask01",
      "mkdir -p /var/www /srv/bdd",
      "mkdir d",
      "mkdir -p a/b"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Créer les dossiers parents et ne pas échouer si existants"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-rm",
    "name": "rm",
    "environment": "Bash",
    "category": "Bash",
    "description": "Supprimer le fichier exemple du TP. Argument : fichier cible ; action destructive, vérifier avant suppression.",
    "syntax": "rm [options] [arguments]",
    "examples": [
      "rm partage_informatique/liste_serveurs.txt",
      "rm /var/www/exemple",
      "rm f",
      "rm -r d"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Supprimer récursivement"
      },
      {
        "flag": "-f",
        "meaning": "Forcer sans confirmation"
      },
      {
        "flag": "-i",
        "meaning": "Demander confirmation avant chaque suppression"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-cd",
    "name": "cd",
    "environment": "Bash",
    "category": "Bash",
    "description": "Se déplacer dans un répertoire. Argument : chemin ; nécessite le droit x sur les répertoires traversés.",
    "syntax": "cd [arguments]",
    "examples": [
      "cd /data/commun",
      "cd /usr/sbin",
      "cd /etc",
      "cd ..",
      "cd -",
      "cd ~",
      "cd"
    ],
    "options": [
      {
        "flag": "..",
        "meaning": "Aller au répertoire parent"
      },
      {
        "flag": "-",
        "meaning": "Revenir au répertoire précédent"
      },
      {
        "flag": "~",
        "meaning": "Aller au répertoire personnel"
      },
      {
        "flag": "-P",
        "meaning": "Utiliser le chemin physique sans liens symboliques"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Gestion des utilisateurs et des groupes · Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-cp",
    "name": "cp",
    "environment": "Bash",
    "category": "Bash",
    "description": "Copier un fichier. Arguments : source et destination ; droits nécessaires selon les répertoires.",
    "syntax": "cp [options] [arguments]",
    "examples": [
      "cp source destination",
      "cp /etc/fstab /etc/fstab.bak",
      "cp a b",
      "cp -r a b"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Copier récursivement les répertoires"
      },
      {
        "flag": "-a",
        "meaning": "Préserver autant que possible les attributs et la structure"
      },
      {
        "flag": "-i",
        "meaning": "Demander confirmation avant écrasement"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-mv",
    "name": "mv",
    "environment": "Bash",
    "category": "Bash",
    "description": "Déplacer ou renommer un fichier. Arguments : source et destination.",
    "syntax": "mv [options] [arguments]",
    "examples": [
      "mv source destination",
      "mv a b"
    ],
    "options": [
      {
        "flag": "-i",
        "meaning": "Demander confirmation avant écrasement"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas écraser un fichier existant"
      }
    ],
    "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-fdisk",
    "name": "fdisk",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Ouvrir le partitionneur interactif sur le disque de test ; vérifier le nom du disque avant de modifier.",
    "syntax": "fdisk [options] [arguments]",
    "examples": [
      "fdisk -l",
      "fdisk /dev/sdb"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Lister les tables de partitions"
      },
      {
        "flag": "-w",
        "meaning": "Définir la gestion du nettoyage des signatures (wipe)"
      },
      {
        "flag": "-b",
        "meaning": "Préciser la taille logique des secteurs"
      },
      {
        "flag": "--help",
        "meaning": "Afficher l’aide"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-udevadm",
    "name": "udevadm",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Identifie le chemin du périphérique /dev/sda dans sysfs. --query et --name sont des options longues.",
    "syntax": "udevadm [arguments]",
    "examples": [
      "udevadm info --query=path --name=/dev/sda"
    ],
    "options": [
      {
        "flag": "info",
        "meaning": "Afficher les informations udev d’un périphérique"
      },
      {
        "flag": "--query",
        "meaning": "path=Demander son chemin sysfs"
      },
      {
        "flag": "--name",
        "meaning": "PERIPHERIQUE=Sélectionner le périphérique"
      },
      {
        "flag": "monitor",
        "meaning": "Observer les événements udev"
      },
      {
        "flag": "trigger",
        "meaning": "Redéclencher des événements udev (prudence)"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage"
  },
  {
    "id": "v6-bash-echo",
    "name": "echo",
    "environment": "Bash",
    "category": "Bash",
    "description": "Demande au contrôleur SCSI host2 de rechercher les périphériques. À exécuter dans un shell administrateur ; adapter host2 à la machine.",
    "syntax": "echo [arguments]",
    "examples": [
      "echo '- - -' > /sys/class/scsi_host/host2/scan",
      "echo \"- - -\" > /sys/class/scsi_host/host2/scan",
      "echo \"- - -\" | sudo tee /sys/class/scsi_host/host2/scan",
      "echo $PATH",
      "echo \"texte\"",
      "echo \"$HOME\"",
      "echo \"Salut $nom\""
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Ne pas ajouter de saut de ligne final"
      },
      {
        "flag": "-e",
        "meaning": "Interpréter les séquences d’échappement (selon shell)"
      },
      {
        "flag": "$VARIABLE",
        "meaning": "Afficher la valeur d’une variable shell"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Gestion des utilisateurs et des groupes · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-dmesg",
    "name": "dmesg",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Affiche les messages du noyau Linux, utiles pour vérifier la détection d'un disque. Peut nécessiter sudo.",
    "syntax": "dmesg [options] [arguments]",
    "examples": [
      "dmesg",
      "dmesg | tail"
    ],
    "options": [
      {
        "flag": "-T",
        "meaning": "Afficher les dates lisibles"
      },
      {
        "flag": "-w",
        "meaning": "Suivre les messages du noyau"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-pvcreate",
    "name": "pvcreate",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Initialiser une partition de test comme volume physique (PV). Peut accepter plusieurs périphériques.",
    "syntax": "pvcreate [options] [arguments]",
    "examples": [
      "pvcreate /dev/sdb1"
    ],
    "options": [
      {
        "flag": "-ff",
        "meaning": "Forcer l’initialisation avec confirmations renforcées (dangereux)"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-vgcreate",
    "name": "vgcreate",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer le groupe de volumes (VG) vgdata à partir du PV indiqué. Peut accepter plusieurs PV.",
    "syntax": "vgcreate [options] [arguments]",
    "examples": [
      "vgcreate vgdata /dev/sdb1"
    ],
    "options": [
      {
        "flag": "-s",
        "meaning": "Définir la taille des extents physiques"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-lvcreate",
    "name": "lvcreate",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer le LV lvweb de 2G dans vgdata ; -n définit le nom et -L la taille.",
    "syntax": "lvcreate [options] [arguments]",
    "examples": [
      "lvcreate -n lvweb -L 2G vgdata",
      "lvcreate -L 5G vg"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Nom du volume logique"
      },
      {
        "flag": "-L",
        "meaning": "Taille du volume logique"
      },
      {
        "flag": "-s",
        "meaning": "Créer un instantané (snapshot)"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-vgextend",
    "name": "vgextend",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Ajouter un PV existant au VG vgdata pour augmenter sa capacité.",
    "syntax": "vgextend [options] [arguments]",
    "examples": [
      "vgextend vgdata /dev/sdc1"
    ],
    "options": [
      {
        "flag": "-t",
        "meaning": "Mode test sans écrire les métadonnées"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-lvextend",
    "name": "lvextend",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Ajouter 512M au LV et demander l'agrandissement du système de fichiers pris en charge grâce à -r.",
    "syntax": "lvextend [options] [arguments]",
    "examples": [
      "lvextend -L 25G /dev/vgdata/lvbdd",
      "lvextend -l +100%FREE /dev/vgdata/lvweb",
      "lvextend -r -L +512M /dev/vggroup1/lv1",
      "lvextend -rL +5G lv"
    ],
    "options": [
      {
        "flag": "-L",
        "meaning": "Fixer ou augmenter la taille en unités"
      },
      {
        "flag": "-r",
        "meaning": "Redimensionner aussi le système de fichiers pris en charge"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-lvreduce",
    "name": "lvreduce",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Consulter l'aide de la commande de réduction d'un LV sans effectuer de réduction ; opération réelle dangereuse, à préparer spécifiquement.",
    "syntax": "lvreduce [arguments]",
    "examples": [
      "lvreduce --help"
    ],
    "options": [
      {
        "flag": "-L TAILLE",
        "meaning": "Définir la taille finale du volume logique"
      },
      {
        "flag": "-l EXTENTS",
        "meaning": "Définir la taille en extents"
      },
      {
        "flag": "-r",
        "meaning": "Redimensionner également le système de fichiers pris en charge"
      },
      {
        "flag": "-t",
        "meaning": "Mode test sans appliquer les changements"
      },
      {
        "flag": "-y",
        "meaning": "Répondre oui aux confirmations (dangereux)"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-resize2fs",
    "name": "resize2fs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Adapter la taille du système de fichiers ext à celle du volume sous- jacent. Argument : LV cible ; vérifier la taille du LV au préalable.",
    "syntax": "resize2fs [options] [arguments]",
    "examples": [
      "resize2fs --help",
      "resize2fs /dev/vgdata/lvweb",
      "resize2fs /dev/sdb1"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Afficher la progression"
      },
      {
        "flag": "-f",
        "meaning": "Forcer l’opération"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-pvs",
    "name": "pvs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher une synthèse des volumes physiques.",
    "syntax": "pvs [arguments]",
    "examples": [
      "pvs",
      "pvs / vgs / lvs"
    ],
    "options": [
      {
        "flag": "-o COLONNES",
        "meaning": "Choisir les colonnes affichées"
      },
      {
        "flag": "--units g",
        "meaning": "Afficher les tailles en gigaoctets"
      },
      {
        "flag": "--noheadings",
        "meaning": "Masquer les en-têtes"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-vgs",
    "name": "vgs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher une synthèse des groupes de volumes, notamment VSize et VFree.",
    "syntax": "vgs [arguments]",
    "examples": [
      "vgs"
    ],
    "options": [
      {
        "flag": "-o COLONNES",
        "meaning": "Choisir les colonnes affichées"
      },
      {
        "flag": "--units g",
        "meaning": "Afficher les tailles en gigaoctets"
      },
      {
        "flag": "--noheadings",
        "meaning": "Masquer les en-têtes"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-lvs",
    "name": "lvs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les volumes logiques LVM (commande utilisée dans la démonstration du formateur). Sans option dans le support.",
    "syntax": "lvs [arguments]",
    "examples": [
      "lvs"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Inclure les volumes internes et cachés"
      },
      {
        "flag": "-o COLONNES",
        "meaning": "Choisir les colonnes affichées"
      },
      {
        "flag": "--units g",
        "meaning": "Afficher les tailles en gigaoctets"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-pvdisplay",
    "name": "pvdisplay",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les informations détaillées des PV ; peut cibler /dev/sdb1.",
    "syntax": "pvdisplay [arguments]",
    "examples": [
      "pvdisplay"
    ],
    "options": [
      {
        "flag": "-m",
        "meaning": "Afficher la correspondance des extents physiques et logiques"
      },
      {
        "flag": "-s",
        "meaning": "Affichage synthétique"
      },
      {
        "flag": "-c",
        "meaning": "Format colonnes historique"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-vgdisplay",
    "name": "vgdisplay",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les informations détaillées des VG ; peut cibler vggroup2.",
    "syntax": "vgdisplay [arguments]",
    "examples": [
      "vgdisplay"
    ],
    "options": [
      {
        "flag": "-s",
        "meaning": "Afficher un résumé des groupes de volumes"
      },
      {
        "flag": "-v",
        "meaning": "Afficher davantage de détails"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-lvdisplay",
    "name": "lvdisplay",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les informations détaillées des LV ; peut cibler /dev/vggroup1/lv2.",
    "syntax": "lvdisplay [arguments]",
    "examples": [
      "lvdisplay"
    ],
    "options": [
      {
        "flag": "-m",
        "meaning": "Afficher la correspondance des segments"
      },
      {
        "flag": "-v",
        "meaning": "Afficher davantage de détails"
      },
      {
        "flag": "-c",
        "meaning": "Format colonnes historique"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-bash-lvm",
    "name": "lvm",
    "environment": "Bash",
    "category": "Bash",
    "description": "Ouvrir le shell de gestion LVM.",
    "syntax": "lvm [arguments]",
    "examples": [
      "lvm"
    ],
    "options": [
      {
        "flag": "help",
        "meaning": "Afficher les commandes LVM disponibles"
      },
      {
        "flag": "version",
        "meaning": "Afficher la version"
      },
      {
        "flag": "pvscan",
        "meaning": "Rechercher les volumes physiques"
      },
      {
        "flag": "vgscan",
        "meaning": "Rechercher les groupes de volumes"
      },
      {
        "flag": "lvscan",
        "meaning": "Rechercher les volumes logiques"
      }
    ],
    "notes": "Gestion avancée des espaces de stockage - LVM"
  },
  {
    "id": "v6-linux-administration-dumpe2fs",
    "name": "dumpe2fs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les informations techniques du superbloc et du système de fichiers ext. Argument : /dev/sda1 = partition ext à examiner.",
    "syntax": "dumpe2fs [arguments]",
    "examples": [
      "dumpe2fs /dev/sda1"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Afficher uniquement les informations du superbloc"
      },
      {
        "flag": "-b",
        "meaning": "Afficher les blocs marqués défectueux"
      },
      {
        "flag": "-f",
        "meaning": "Forcer l’affichage malgré certaines incohérences"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-mkfs-ext4",
    "name": "mkfs.ext4",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer un système de fichiers ext4 sur le volume logique. Argument : volume cible. ATTENTION : détruit les données existantes.",
    "syntax": "mkfs.ext4 [options] [arguments]",
    "examples": [
      "mkfs.ext4 /dev/vgdata/lvweb",
      "mkfs.ext4 -L BDD /dev/vgdata/lvbdd",
      "mkfs.ext4 /dev/sdb1"
    ],
    "options": [
      {
        "flag": "-L",
        "meaning": "Définir une étiquette"
      },
      {
        "flag": "-F",
        "meaning": "Forcer le formatage (destructeur)"
      },
      {
        "flag": "-m",
        "meaning": "Définir le pourcentage de blocs réservés"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-mkfs-ntfs",
    "name": "mkfs.ntfs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer un système de fichiers NTFS. Argument : partition cible. Outil NTFS requis. DESTRUCTEUR.",
    "syntax": "mkfs.ntfs [arguments]",
    "examples": [
      "mkfs.ntfs /dev/sde1"
    ],
    "options": [
      {
        "flag": "-L NOM",
        "meaning": "Attribuer une étiquette au volume"
      },
      {
        "flag": "-Q",
        "meaning": "Formatage rapide"
      },
      {
        "flag": "-f",
        "meaning": "Alias du formatage rapide"
      },
      {
        "flag": "-C",
        "meaning": "Activer la compression NTFS par défaut"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-mkfs-exfat",
    "name": "mkfs.exfat",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer un système de fichiers exFAT. Argument : partition cible. Outil exFAT requis. DESTRUCTEUR.",
    "syntax": "mkfs.exfat [arguments]",
    "examples": [
      "mkfs.exfat /dev/sde1"
    ],
    "options": [
      {
        "flag": "-L NOM",
        "meaning": "Attribuer une étiquette au volume"
      },
      {
        "flag": "-c TAILLE",
        "meaning": "Choisir la taille des clusters en octets"
      },
      {
        "flag": "-V",
        "meaning": "Afficher la version de l’outil"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-mkfs-vfat",
    "name": "mkfs.vfat",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer un système de fichiers FAT32. Option : -F = type de FAT ; 32 = FAT32 ; dernier argument = partition. DESTRUCTEUR.",
    "syntax": "mkfs.vfat [options] [arguments]",
    "examples": [
      "mkfs.vfat -F 32 /dev/sde1"
    ],
    "options": [
      {
        "flag": "-F",
        "meaning": "Définir le type FAT (12, 16 ou 32)"
      },
      {
        "flag": "-n",
        "meaning": "Définir le nom du volume"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-tune2fs",
    "name": "tune2fs",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Modifier le label d’un ext4 existant sans le reformater. Option : -L = étiquette ; WWW = valeur ; dernier argument = volume. Autres options : -l (superbloc), -i (intervalle), -c (nombre de montages).",
    "syntax": "tune2fs [arguments]",
    "examples": [
      "tune2fs -L WWW /dev/vgdata/lvweb",
      "tune2fs -l /dev/sda1"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Afficher les paramètres du superbloc"
      },
      {
        "flag": "-L NOM",
        "meaning": "Changer l’étiquette du système de fichiers"
      },
      {
        "flag": "-c N",
        "meaning": "Définir le nombre de montages avant vérification"
      },
      {
        "flag": "-i INTERVALLE",
        "meaning": "Définir l’intervalle de vérification"
      },
      {
        "flag": "-m POURCENT",
        "meaning": "Définir le pourcentage de blocs réservés"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-fsck-ext4",
    "name": "fsck.ext4",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Vérifier l’intégrité d’un système de fichiers ext4. Argument : partition cible ; travailler sur un volume démonté.",
    "syntax": "fsck.ext4 [options] [arguments]",
    "examples": [
      "fsck.ext4 /dev/sdc1"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Forcer la vérification"
      },
      {
        "flag": "-n",
        "meaning": "Répondre non aux corrections"
      },
      {
        "flag": "-y",
        "meaning": "Répondre oui automatiquement (prudence)"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-blkid",
    "name": "blkid",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher TYPE, UUID et LABEL du volume ; sans argument, inspecter les périphériques détectés. Argument : LV cible.",
    "syntax": "blkid [arguments]",
    "examples": [
      "blkid /dev/vgdata/lvweb",
      "blkid"
    ],
    "options": [
      {
        "flag": "-o value",
        "meaning": "Afficher seulement les valeurs"
      },
      {
        "flag": "-s TYPE",
        "meaning": "Afficher seulement le type de système de fichiers"
      },
      {
        "flag": "-s UUID",
        "meaning": "Afficher seulement l’UUID"
      },
      {
        "flag": "-p",
        "meaning": "Effectuer une détection bas niveau"
      },
      {
        "flag": "-L LABEL",
        "meaning": "Trouver un périphérique par étiquette"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-findmnt",
    "name": "findmnt",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher le montage associé au point /var/www. Argument : point de montage ; sans argument, afficher les montages en arborescence.",
    "syntax": "findmnt [options] [arguments]",
    "examples": [
      "findmnt /var/www"
    ],
    "options": [
      {
        "flag": "-t",
        "meaning": "Filtrer par type de système de fichiers"
      },
      {
        "flag": "-S",
        "meaning": "Filtrer par source"
      },
      {
        "flag": "-o",
        "meaning": "Choisir les colonnes"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System"
  },
  {
    "id": "v6-linux-administration-umount",
    "name": "umount",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Démonter un système de fichiers. Argument : point de montage ; possible aussi avec le chemin du périphérique.",
    "syntax": "umount [options] [arguments]",
    "examples": [
      "umount /var/www",
      "umount /mnt"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Démontage différé lorsque la ressource n’est plus occupée"
      },
      {
        "flag": "-f",
        "meaning": "Forcer un démontage dans certains cas (prudence)"
      },
      {
        "flag": "-a",
        "meaning": "Démonter les systèmes de fichiers éligibles"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-vim-vi",
    "name": "vi",
    "environment": "Vim",
    "category": "Vim",
    "description": "Ouvrir le fichier des montages automatiques pour édition. Argument : chemin du fichier.",
    "syntax": "vi [options] fichier",
    "examples": [
      "vi /etc/fstab",
      "vi fichier"
    ],
    "options": [
      {
        "flag": "i",
        "meaning": "Passer en insertion"
      },
      {
        "flag": "Esc",
        "meaning": "Revenir au mode normal"
      },
      {
        "flag": ":w",
        "meaning": "Enregistrer"
      },
      {
        "flag": ":q",
        "meaning": "Quitter"
      },
      {
        "flag": ":wq",
        "meaning": "Enregistrer et quitter"
      },
      {
        "flag": ":q!",
        "meaning": "Quitter sans sauvegarder"
      },
      {
        "flag": "dd",
        "meaning": "Supprimer la ligne"
      },
      {
        "flag": "yy",
        "meaning": "Copier la ligne"
      },
      {
        "flag": "p",
        "meaning": "Coller"
      },
      {
        "flag": "Échap",
        "meaning": "Revenir au mode normal."
      }
    ],
    "notes": "Gestion des espaces de stockage - File System · Cours Vim et fiches mémo"
  },
  {
    "id": "v6-linux-administration-df",
    "name": "df",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher capacité, espace utilisé et libre d’un FS. Option : -h = unités lisibles ; argument facultatif = FS ou chemin. Autre option : -i (inodes).",
    "syntax": "df [options] [arguments]",
    "examples": [
      "df -h /dev/mapper/vgsys-lvroot",
      "df -i",
      "df -h",
      "df -h && free -h"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Afficher les tailles en unités lisibles"
      },
      {
        "flag": "-i",
        "meaning": "Afficher les statistiques d’inodes"
      },
      {
        "flag": "-T",
        "meaning": "Afficher le type de système de fichiers"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-du",
    "name": "du",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher la taille totale du dossier. Options : -h = unités lisibles ; -s = résumé ; argument = dossier. Variantes : du -h /var, du -sh /var/log/*.",
    "syntax": "du [options] [arguments]",
    "examples": [
      "du -hs /etc",
      "du -sh d"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Tailles lisibles"
      },
      {
        "flag": "-s",
        "meaning": "Afficher seulement le total"
      },
      {
        "flag": "-a",
        "meaning": "Inclure les fichiers"
      },
      {
        "flag": "-d",
        "meaning": "Limiter la profondeur d’exploration"
      }
    ],
    "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-apt-get",
    "name": "apt-get",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Gestionnaire de paquets APT pour Debian et Ubuntu : actualiser les index, installer, mettre à niveau, supprimer et nettoyer les paquets et leurs dépendances.",
    "syntax": "apt-get [options] sous-commande [paquet ...]",
    "examples": [
      "apt-get update",
      "apt-get upgrade",
      "apt-get -s dist-upgrade",
      "apt-get install nginx",
      "apt-get install --no-install-recommends git curl",
      "apt-get install --reinstall openssh-client",
      "apt-get remove nginx",
      "apt-get purge nginx",
      "apt-get autoremove",
      "apt-get clean",
      "apt-get download nginx",
      "apt-get check"
    ],
    "options": [
      {
        "flag": "update",
        "meaning": "Actualiser les index des dépôts ; ne met pas les paquets installés à niveau."
      },
      {
        "flag": "upgrade",
        "meaning": "Mettre à niveau les paquets sans supprimer de paquets installés."
      },
      {
        "flag": "dist-upgrade",
        "meaning": "Mettre à niveau en autorisant les changements de dépendances, y compris des suppressions."
      },
      {
        "flag": "install",
        "meaning": "Installer les paquets indiqués."
      },
      {
        "flag": "remove",
        "meaning": "Supprimer les paquets en conservant généralement leurs fichiers de configuration."
      },
      {
        "flag": "purge",
        "meaning": "Supprimer les paquets et leurs fichiers de configuration gérés par dpkg."
      },
      {
        "flag": "autoremove",
        "meaning": "Supprimer les dépendances installées automatiquement et devenues inutiles."
      },
      {
        "flag": "autoclean",
        "meaning": "Supprimer du cache les archives devenues indisponibles au téléchargement."
      },
      {
        "flag": "clean",
        "meaning": "Vider le cache local des archives téléchargées."
      },
      {
        "flag": "download",
        "meaning": "Télécharger un paquet binaire sans l’installer."
      },
      {
        "flag": "source",
        "meaning": "Récupérer les sources d’un paquet (dépôts sources nécessaires)."
      },
      {
        "flag": "build-dep",
        "meaning": "Installer les dépendances de compilation d’un paquet source."
      },
      {
        "flag": "check",
        "meaning": "Vérifier l’état des dépendances."
      },
      {
        "flag": "satisfy",
        "meaning": "Satisfaire des expressions de dépendances indiquées."
      },
      {
        "flag": "-y, --yes, --assume-yes",
        "meaning": "Répondre oui automatiquement aux confirmations, sauf opérations jugées dangereuses."
      },
      {
        "flag": "-s, --simulate",
        "meaning": "Simuler les opérations sans modifier les paquets."
      },
      {
        "flag": "-d, --download-only",
        "meaning": "Télécharger les archives sans les installer."
      },
      {
        "flag": "--reinstall",
        "meaning": "Réinstaller les paquets déjà installés avec install."
      },
      {
        "flag": "--no-install-recommends",
        "meaning": "Ne pas installer automatiquement les paquets seulement recommandés."
      },
      {
        "flag": "-f, --fix-broken",
        "meaning": "Tenter de corriger les dépendances cassées."
      },
      {
        "flag": "-q, --quiet",
        "meaning": "Réduire la verbosité de la sortie."
      },
      {
        "flag": "-V, --verbose-versions",
        "meaning": "Afficher les versions complètes des paquets."
      },
      {
        "flag": "--assume-no",
        "meaning": "Répondre non automatiquement aux confirmations."
      },
      {
        "flag": "-o CLE=VALEUR",
        "meaning": "Définir une option de configuration APT."
      },
      {
        "flag": "-t DISTRIBUTION",
        "meaning": "Définir une distribution cible pour la résolution des versions."
      },
      {
        "flag": "--purge",
        "meaning": "Purger les fichiers de configuration lors des suppressions appropriées."
      },
      {
        "flag": "--no-upgrade",
        "meaning": "Ne pas mettre à niveau les paquets déjà installés avec install."
      },
      {
        "flag": "--only-upgrade",
        "meaning": "Mettre à niveau uniquement les paquets déjà installés."
      }
    ],
    "notes": "update actualise les index, upgrade met à niveau les paquets ; les sous-commandes ne sont pas des options. Vérifier les changements annoncés avant une opération de suppression ou de mise à niveau."
  },
  {
    "id": "v6-linux-administration-apt-cache",
    "name": "apt-cache",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Rechercher les paquets contenant openssh dans leurs métadonnées.",
    "syntax": "apt-cache [options] [arguments]",
    "examples": [
      "apt-cache search openssh",
      "apt-cache show openssh-server"
    ],
    "options": [
      {
        "flag": "search",
        "meaning": "Rechercher dans les métadonnées des paquets"
      },
      {
        "flag": "show",
        "meaning": "Afficher les informations détaillées"
      },
      {
        "flag": "policy",
        "meaning": "Afficher les versions disponibles et priorités des dépôts"
      },
      {
        "flag": "depends",
        "meaning": "Afficher les dépendances d’un paquet"
      }
    ],
    "notes": "Gestion des paquets logiciels"
  },
  {
    "id": "v6-linux-administration-dpkg",
    "name": "dpkg",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Lister les paquets locaux correspondant au motif ftp. -l : liste ; *ftp* : filtre.",
    "syntax": "dpkg [options] [paquet]",
    "examples": [
      "dpkg -l '*ftp*'",
      "dpkg -L openssh-client",
      "dpkg -S /usr/bin/scp",
      "dpkg -l",
      "dpkg -L p"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Lister les paquets installés et leurs états"
      },
      {
        "flag": "-S",
        "meaning": "Rechercher le paquet propriétaire d’un fichier"
      },
      {
        "flag": "-i",
        "meaning": "Installer un paquet .deb local"
      },
      {
        "flag": "-r",
        "meaning": "Supprimer un paquet en conservant ses configurations"
      },
      {
        "flag": "-P",
        "meaning": "Purger un paquet et ses configurations"
      }
    ],
    "notes": "Gestion des paquets logiciels · Fiche mémo Bash"
  },
  {
    "id": "v6-vim-vim",
    "name": "vim",
    "environment": "Vim",
    "category": "Vim",
    "description": "Éditeur de texte modal : naviguer, modifier, rechercher et enregistrer des fichiers.",
    "syntax": "vim [options] fichier",
    "examples": [
      "vim /etc/apt/sources.list",
      "vim f",
      "vim fichier",
      "i  (mode insertion)",
      "Esc  (mode normal)",
      ":wq  (enregistrer et quitter)",
      ":q!  (quitter sans enregistrer)"
    ],
    "options": [
      {
        "flag": "i",
        "meaning": "Passer en mode insertion"
      },
      {
        "flag": "Esc",
        "meaning": "Revenir au mode normal"
      },
      {
        "flag": ":w",
        "meaning": "Enregistrer le fichier"
      },
      {
        "flag": ":q",
        "meaning": "Quitter si aucune modification en attente"
      },
      {
        "flag": ":wq",
        "meaning": "Enregistrer et quitter"
      },
      {
        "flag": ":q!",
        "meaning": "Quitter sans enregistrer"
      },
      {
        "flag": "dd",
        "meaning": "Supprimer la ligne courante"
      },
      {
        "flag": "yy",
        "meaning": "Copier la ligne courante"
      },
      {
        "flag": "p",
        "meaning": "Coller après le curseur"
      },
      {
        "flag": "/mot",
        "meaning": "Rechercher le texte mot"
      },
      {
        "flag": "n",
        "meaning": "Passer au résultat suivant"
      },
      {
        "flag": "u",
        "meaning": "Annuler la dernière modification"
      },
      {
        "flag": ":set number",
        "meaning": "Afficher les numéros de ligne"
      },
      {
        "flag": "Échap",
        "meaning": "Revenir au mode normal."
      }
    ],
    "notes": "Gestion des paquets logiciels · Fiche mémo Bash · Cours Vim et fiches mémo"
  },
  {
    "id": "v6-bash-less",
    "name": "less",
    "environment": "Bash",
    "category": "Bash",
    "description": "Lire l’historique des opérations APT page par page.",
    "syntax": "less [arguments]",
    "examples": [
      "less /var/log/apt/history.log",
      "less /var/log/dpkg.log",
      "less f",
      "less /var/log/syslog"
    ],
    "options": [
      {
        "flag": "-N",
        "meaning": "Afficher les numéros de ligne"
      },
      {
        "flag": "-S",
        "meaning": "Ne pas replier les lignes longues"
      },
      {
        "flag": "+F",
        "meaning": "Suivre les ajouts comme tail -f"
      },
      {
        "flag": "/MOT",
        "meaning": "Rechercher un mot dans le fichier"
      },
      {
        "flag": "q",
        "meaning": "Quitter le lecteur"
      }
    ],
    "notes": "Gestion des paquets logiciels · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-tail",
    "name": "tail",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher les 30 dernières lignes du journal APT. -n : nombre de lignes ; 30 : quantité.",
    "syntax": "tail [options] [arguments]",
    "examples": [
      "tail -n 30 /var/log/apt/history.log",
      "tail -n 5 /etc/passwd",
      "tail -n 5 /etc/group",
      "tail -n 10 f",
      "tail -f f"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Choisir le nombre de lignes"
      },
      {
        "flag": "-f",
        "meaning": "Suivre les ajouts en temps réel"
      }
    ],
    "notes": "Gestion des paquets logiciels · Gestion des utilisateurs et des groupes · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-grep",
    "name": "grep",
    "environment": "Bash",
    "category": "Bash",
    "description": "Rechercher les installations dans le journal dpkg. Motif : install ; chemin : journal.",
    "syntax": "grep [options] motif fichier",
    "examples": [
      "grep ' install ' /var/log/dpkg.log",
      "grep '^technicien:' /etc/group",
      "grep \"mot\" f",
      "grep -i \"mot\" f",
      "grep -r \"mot\" d",
      "grep -v \"mot\" f",
      "grep -i error f",
      "grep -c mot f",
      "grep -E 'a|b' f",
      "grep -rin \"error\" /var/log/monapp"
    ],
    "options": [
      {
        "flag": "-i",
        "meaning": "Ignorer la casse"
      },
      {
        "flag": "-r",
        "meaning": "Rechercher récursivement"
      },
      {
        "flag": "-n",
        "meaning": "Afficher les numéros de ligne"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les lignes ne correspondant pas"
      },
      {
        "flag": "-E",
        "meaning": "Utiliser les expressions régulières étendues"
      },
      {
        "flag": "-c",
        "meaning": "Compter les lignes correspondantes"
      },
      {
        "flag": "--color",
        "meaning": "Colorer les correspondances"
      }
    ],
    "notes": "Gestion des paquets logiciels · Gestion des utilisateurs et des groupes · Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-bash-make",
    "name": "make",
    "environment": "Bash",
    "category": "Bash",
    "description": "Installer le projet compilé selon la cible install du Makefile ; opération pouvant modifier le système.",
    "syntax": "make [arguments]",
    "examples": [
      "make",
      "make install"
    ],
    "options": [
      {
        "flag": "-j N",
        "meaning": "Exécuter jusqu’à N tâches en parallèle"
      },
      {
        "flag": "-n",
        "meaning": "Afficher les commandes sans les exécuter"
      },
      {
        "flag": "-f FICHIER",
        "meaning": "Choisir le Makefile"
      },
      {
        "flag": "-C DOSSIER",
        "meaning": "Exécuter make dans un répertoire"
      },
      {
        "flag": "install",
        "meaning": "Exécuter la cible install si elle existe"
      }
    ],
    "notes": "Gestion des paquets logiciels"
  },
  {
    "id": "v6-bash-curl",
    "name": "curl",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher la version de curl. --version : option longue.",
    "syntax": "curl [options] [arguments]",
    "examples": [
      "curl --version",
      "curl -I URL",
      "curl -v URL"
    ],
    "options": [
      {
        "flag": "-I",
        "meaning": "Récupérer les en-têtes HTTP"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les détails de la connexion"
      },
      {
        "flag": "--version",
        "meaning": "Afficher la version"
      },
      {
        "flag": "-L",
        "meaning": "Suivre les redirections"
      },
      {
        "flag": "-o",
        "meaning": "Écrire dans un fichier"
      }
    ],
    "notes": "Gestion des paquets logiciels · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-id",
    "name": "id",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher les identifiants et groupes de l'utilisateur courant.",
    "syntax": "id [arguments]",
    "examples": [
      "id",
      "id jmartin"
    ],
    "options": [
      {
        "flag": "-u",
        "meaning": "Afficher l’UID"
      },
      {
        "flag": "-g",
        "meaning": "Afficher le GID principal"
      },
      {
        "flag": "-n",
        "meaning": "Afficher les noms plutôt que les identifiants numériques"
      }
    ],
    "notes": "Gestion des utilisateurs et des groupes · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-su",
    "name": "su",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Ouvrir une session de connexion complète sous root.",
    "syntax": "su [arguments]",
    "examples": [
      "su",
      "su -",
      "su - jmartin",
      "su -l jmartin",
      "su -s /bin/bash jmartin",
      "su -c 'id' jmartin",
      "su - nom"
    ],
    "options": [
      {
        "flag": "-",
        "meaning": "Ouvrir un environnement de connexion complet"
      },
      {
        "flag": "-l",
        "meaning": "Ouvrir une session de connexion"
      },
      {
        "flag": "-c COMMANDE",
        "meaning": "Exécuter une commande sous une autre identité"
      },
      {
        "flag": "-s SHELL",
        "meaning": "Choisir le shell"
      },
      {
        "flag": "-m",
        "meaning": "Conserver l’environnement actuel"
      }
    ],
    "notes": "Gestion des utilisateurs et des groupes · Fiche mémo Bash"
  },
  {
    "id": "v6-bash-exit",
    "name": "exit",
    "environment": "Bash",
    "category": "Bash",
    "description": "Quitter le shell ou la session en cours.",
    "syntax": "exit [arguments]",
    "examples": [
      "exit"
    ],
    "options": [
      {
        "flag": "CODE",
        "meaning": "Quitter en renvoyant un code de sortie explicite"
      },
      {
        "flag": "0",
        "meaning": "Succès"
      },
      {
        "flag": "1",
        "meaning": "Échec générique"
      }
    ],
    "notes": "Gestion des utilisateurs et des groupes"
  },
  {
    "id": "v6-bash-pwd",
    "name": "pwd",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher le répertoire courant.",
    "syntax": "pwd [arguments]",
    "examples": [
      "pwd"
    ],
    "options": [
      {
        "flag": "-P",
        "meaning": "Afficher le chemin physique sans liens symboliques"
      },
      {
        "flag": "-L",
        "meaning": "Afficher le chemin logique (comportement courant)"
      }
    ],
    "notes": "Gestion des utilisateurs et des groupes · Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-whereis",
    "name": "whereis",
    "environment": "Bash",
    "category": "Bash",
    "description": "Rechercher les emplacements associés à useradd.",
    "syntax": "whereis [arguments]",
    "examples": [
      "whereis useradd"
    ],
    "options": [
      {
        "flag": "-b",
        "meaning": "Rechercher les exécutables"
      },
      {
        "flag": "-m",
        "meaning": "Rechercher les pages de manuel"
      },
      {
        "flag": "-s",
        "meaning": "Rechercher les sources"
      },
      {
        "flag": "-l",
        "meaning": "Afficher les chemins de recherche"
      }
    ],
    "notes": "Gestion des utilisateurs et des groupes"
  },
  {
    "id": "v6-bash-tree",
    "name": "tree",
    "environment": "Bash",
    "category": "Bash",
    "description": "Arborescence (2 niveaux)",
    "syntax": "tree [arguments]",
    "examples": [
      "tree -L 2"
    ],
    "options": [
      {
        "flag": "-L N",
        "meaning": "Limiter l’affichage à N niveaux"
      },
      {
        "flag": "-a",
        "meaning": "Afficher les fichiers cachés"
      },
      {
        "flag": "-d",
        "meaning": "Afficher seulement les répertoires"
      },
      {
        "flag": "-h",
        "meaning": "Afficher les tailles lisibles"
      },
      {
        "flag": "-I MOTIF",
        "meaning": "Exclure les noms correspondants"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-clear",
    "name": "clear",
    "environment": "Bash",
    "category": "Bash",
    "description": "Effacer l’écran",
    "syntax": "clear [arguments]",
    "examples": [
      "clear"
    ],
    "options": [
      {
        "flag": "-x",
        "meaning": "Effacer l’écran sans vider l’historique de défilement (si pris en charge)"
      },
      {
        "flag": "-T TERMINAL",
        "meaning": "Préciser le type de terminal"
      }
    ],
    "notes": "Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-history",
    "name": "history",
    "environment": "Bash",
    "category": "Bash",
    "description": "Historique des commandes",
    "syntax": "history [arguments]",
    "examples": [
      "history"
    ],
    "options": [
      {
        "flag": "N",
        "meaning": "Afficher les N dernières entrées"
      },
      {
        "flag": "-c",
        "meaning": "Effacer l’historique de la session"
      },
      {
        "flag": "-d N",
        "meaning": "Supprimer l’entrée N"
      },
      {
        "flag": "-w",
        "meaning": "Écrire l’historique dans le fichier"
      },
      {
        "flag": "-a",
        "meaning": "Ajouter les commandes de la session au fichier"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-ln",
    "name": "ln",
    "environment": "Bash",
    "category": "Bash",
    "description": "Lien symbolique",
    "syntax": "ln [arguments]",
    "examples": [
      "ln -s cible lien"
    ],
    "options": [
      {
        "flag": "-s",
        "meaning": "Créer un lien symbolique"
      },
      {
        "flag": "-f",
        "meaning": "Remplacer un lien existant"
      },
      {
        "flag": "-n",
        "meaning": "Traiter le lien vers dossier comme un fichier"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les opérations"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-rmdir",
    "name": "rmdir",
    "environment": "Bash",
    "category": "Bash",
    "description": "Supprimer (dossier vide)",
    "syntax": "rmdir [arguments]",
    "examples": [
      "rmdir d"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Supprimer aussi les répertoires parents devenus vides"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les suppressions"
      },
      {
        "flag": "--ignore-fail-on-non-empty",
        "meaning": "Ignorer l’échec si un répertoire n’est pas vide"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-head",
    "name": "head",
    "environment": "Bash",
    "category": "Bash",
    "description": "10 premières lignes",
    "syntax": "head [options] [arguments]",
    "examples": [
      "head -n 10 f"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Choisir le nombre de lignes à afficher"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-nano",
    "name": "nano",
    "environment": "Bash",
    "category": "Bash",
    "description": "Éditer (Ctrl+O, Ctrl+X)",
    "syntax": "nano [arguments]",
    "examples": [
      "nano f"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Afficher les numéros de ligne"
      },
      {
        "flag": "-m",
        "meaning": "Activer la souris"
      },
      {
        "flag": "-B",
        "meaning": "Créer une sauvegarde avant écriture"
      },
      {
        "flag": "-w",
        "meaning": "Désactiver le retour automatique à la ligne"
      },
      {
        "flag": "Ctrl+O",
        "meaning": "Enregistrer"
      },
      {
        "flag": "Ctrl+X",
        "meaning": "Quitter"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-wc",
    "name": "wc",
    "environment": "Bash",
    "category": "Bash",
    "description": "Compter les lignes",
    "syntax": "wc [options] [arguments]",
    "examples": [
      "wc -l f"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Compter les lignes"
      },
      {
        "flag": "-w",
        "meaning": "Compter les mots"
      },
      {
        "flag": "-c",
        "meaning": "Compter les octets"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-file",
    "name": "file",
    "environment": "Bash",
    "category": "Bash",
    "description": "Identifier le type",
    "syntax": "file [arguments]",
    "examples": [
      "file f"
    ],
    "options": [
      {
        "flag": "-b",
        "meaning": "Ne pas préfixer par le nom du fichier"
      },
      {
        "flag": "-i",
        "meaning": "Afficher le type MIME"
      },
      {
        "flag": "-L",
        "meaning": "Suivre les liens symboliques"
      },
      {
        "flag": "-z",
        "meaning": "Examiner les fichiers compressés"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-find",
    "name": "find",
    "environment": "Bash",
    "category": "Bash",
    "description": "Rechercher des fichiers et répertoires selon des critères.",
    "syntax": "find chemin [tests] [actions]",
    "examples": [
      "find . -name \"*.txt\"",
      "find . -mtime -1",
      "find /var/log -type f -name \"*.log\""
    ],
    "options": [
      {
        "flag": "-name",
        "meaning": "Filtrer par nom (casse respectée)"
      },
      {
        "flag": "-iname",
        "meaning": "Filtrer par nom sans la casse"
      },
      {
        "flag": "-type",
        "meaning": "Filtrer par type de fichier"
      },
      {
        "flag": "-mtime",
        "meaning": "Filtrer par date de modification en jours"
      },
      {
        "flag": "-exec",
        "meaning": "Exécuter une commande pour chaque résultat"
      },
      {
        "flag": "-maxdepth",
        "meaning": "Limiter la profondeur"
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
      }
    ],
    "notes": "Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-bash-sort",
    "name": "sort",
    "environment": "Bash",
    "category": "Bash",
    "description": "Compter les doublons",
    "syntax": "sort [options] [arguments]",
    "examples": [
      "sort f",
      "sort f | uniq -c"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Inverser l’ordre"
      },
      {
        "flag": "-n",
        "meaning": "Trier numériquement"
      },
      {
        "flag": "-u",
        "meaning": "Éliminer les doublons"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-cut",
    "name": "cut",
    "environment": "Bash",
    "category": "Bash",
    "description": "Extraire un champ",
    "syntax": "cut [arguments]",
    "examples": [
      "cut -d: -f1 f"
    ],
    "options": [
      {
        "flag": "-d DELIMITEUR",
        "meaning": "Définir le séparateur de champs"
      },
      {
        "flag": "-f LISTE",
        "meaning": "Choisir les champs"
      },
      {
        "flag": "-c LISTE",
        "meaning": "Choisir les positions de caractères"
      },
      {
        "flag": "-b LISTE",
        "meaning": "Choisir les positions d’octets"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-which",
    "name": "which",
    "environment": "Bash",
    "category": "Bash",
    "description": "Chemin d’une commande",
    "syntax": "which [arguments]",
    "examples": [
      "which bash"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher toutes les occurrences dans le PATH"
      },
      {
        "flag": "COMMANDE",
        "meaning": "Nom de l’exécutable recherché"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-man",
    "name": "man",
    "environment": "Bash",
    "category": "Bash",
    "description": "Manuel (q = quitter)",
    "syntax": "man [arguments]",
    "examples": [
      "man ls"
    ],
    "options": [
      {
        "flag": "-k MOT",
        "meaning": "Rechercher dans les descriptions des manuels"
      },
      {
        "flag": "-f COMMANDE",
        "meaning": "Afficher les descriptions courtes"
      },
      {
        "flag": "-a",
        "meaning": "Afficher toutes les pages correspondantes"
      },
      {
        "flag": "SECTION",
        "meaning": "Choisir une section du manuel"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-whoami",
    "name": "whoami",
    "environment": "Bash",
    "category": "Bash",
    "description": "Utilisateur actuel",
    "syntax": "whoami [arguments]",
    "examples": [
      "whoami"
    ],
    "options": [
      {
        "flag": "(sans option)",
        "meaning": "Afficher le nom de l’utilisateur effectif"
      },
      {
        "flag": "--help",
        "meaning": "Afficher l’aide"
      },
      {
        "flag": "--version",
        "meaning": "Afficher la version"
      }
    ],
    "notes": "Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-who",
    "name": "who",
    "environment": "Bash",
    "category": "Bash",
    "description": "Sessions connectées",
    "syntax": "who [arguments]",
    "examples": [
      "who"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher toutes les informations disponibles"
      },
      {
        "flag": "-b",
        "meaning": "Afficher l’heure du dernier démarrage"
      },
      {
        "flag": "-q",
        "meaning": "Afficher les utilisateurs et leur nombre"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-w",
    "name": "w",
    "environment": "Bash",
    "category": "Bash",
    "description": "Qui fait quoi",
    "syntax": "w [arguments]",
    "examples": [
      "w"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Masquer l’en-tête"
      },
      {
        "flag": "-s",
        "meaning": "Affichage court"
      },
      {
        "flag": "-i",
        "meaning": "Afficher les adresses IP plutôt que les noms"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-groups",
    "name": "groups",
    "environment": "Bash",
    "category": "Bash",
    "description": "Groupes de l’utilisateur",
    "syntax": "groups [arguments]",
    "examples": [
      "groups"
    ],
    "options": [
      {
        "flag": "UTILISATEUR",
        "meaning": "Afficher les groupes de l’utilisateur indiqué"
      },
      {
        "flag": "(sans argument)",
        "meaning": "Afficher les groupes de l’utilisateur courant"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-last",
    "name": "last",
    "environment": "Bash",
    "category": "Bash",
    "description": "5 dernières connexions",
    "syntax": "last [arguments]",
    "examples": [
      "last",
      "last -n 5"
    ],
    "options": [
      {
        "flag": "-n N",
        "meaning": "Limiter aux N dernières connexions"
      },
      {
        "flag": "-F",
        "meaning": "Afficher les dates complètes"
      },
      {
        "flag": "-x",
        "meaning": "Inclure les changements de niveau d’exécution et arrêts"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-uname",
    "name": "uname",
    "environment": "Bash",
    "category": "Bash",
    "description": "Noyau et système",
    "syntax": "uname [arguments]",
    "examples": [
      "uname -a"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher toutes les informations"
      },
      {
        "flag": "-r",
        "meaning": "Version du noyau"
      },
      {
        "flag": "-m",
        "meaning": "Architecture matérielle"
      },
      {
        "flag": "-s",
        "meaning": "Nom du noyau"
      },
      {
        "flag": "-n",
        "meaning": "Nom réseau du système"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-hostname",
    "name": "hostname",
    "environment": "Bash",
    "category": "Bash",
    "description": "Adresses IP locales",
    "syntax": "hostname [arguments]",
    "examples": [
      "hostname",
      "hostname -I"
    ],
    "options": [
      {
        "flag": "-I",
        "meaning": "Afficher les adresses IP configurées"
      },
      {
        "flag": "-f",
        "meaning": "Afficher le nom DNS complet"
      },
      {
        "flag": "-s",
        "meaning": "Afficher le nom court"
      }
    ],
    "notes": "Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-hostnamectl",
    "name": "hostnamectl",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Infos système (systemd)",
    "syntax": "hostnamectl [arguments]",
    "examples": [
      "hostnamectl"
    ],
    "options": [
      {
        "flag": "status",
        "meaning": "Afficher le nom et les informations de l’hôte"
      },
      {
        "flag": "set-hostname NOM",
        "meaning": "Modifier le nom de la machine"
      },
      {
        "flag": "--static",
        "meaning": "Agir sur le nom statique"
      },
      {
        "flag": "--transient",
        "meaning": "Agir sur le nom temporaire"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-date",
    "name": "date",
    "environment": "Bash",
    "category": "Bash",
    "description": "Date et heure",
    "syntax": "date [arguments]",
    "examples": [
      "date"
    ],
    "options": [
      {
        "flag": "+%F",
        "meaning": "Afficher la date au format AAAA-MM-JJ"
      },
      {
        "flag": "+%T",
        "meaning": "Afficher l’heure HH:MM:SS"
      },
      {
        "flag": "-u",
        "meaning": "Afficher l’heure UTC"
      },
      {
        "flag": "-d TEXTE",
        "meaning": "Interpréter une date fournie"
      },
      {
        "flag": "-s DATE",
        "meaning": "Régler la date système (privilèges requis)"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-uptime",
    "name": "uptime",
    "environment": "Bash",
    "category": "Bash",
    "description": "Durée depuis le démarrage",
    "syntax": "uptime [arguments]",
    "examples": [
      "uptime"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Afficher une durée lisible"
      },
      {
        "flag": "-s",
        "meaning": "Afficher la date de démarrage"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-free",
    "name": "free",
    "environment": "Bash",
    "category": "Bash",
    "description": "Mémoire RAM",
    "syntax": "free [arguments]",
    "examples": [
      "free -h"
    ],
    "options": [
      {
        "flag": "-h",
        "meaning": "Afficher des tailles lisibles"
      },
      {
        "flag": "-m",
        "meaning": "Afficher en mégaoctets"
      },
      {
        "flag": "-g",
        "meaning": "Afficher en gigaoctets"
      },
      {
        "flag": "-s N",
        "meaning": "Rafraîchir toutes les N secondes"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-lscpu",
    "name": "lscpu",
    "environment": "Bash",
    "category": "Bash",
    "description": "Informations processeur",
    "syntax": "lscpu [arguments]",
    "examples": [
      "lscpu"
    ],
    "options": [
      {
        "flag": "-e",
        "meaning": "Afficher les CPU sous forme de tableau"
      },
      {
        "flag": "-p",
        "meaning": "Afficher un format analysable"
      },
      {
        "flag": "-J",
        "meaning": "Afficher en JSON"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-poweroff",
    "name": "poweroff",
    "environment": "Bash",
    "category": "Bash",
    "description": "Éteindre",
    "syntax": "poweroff [arguments]",
    "examples": [
      "poweroff"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Forcer l’arrêt sans procédure normale (dangereux)"
      },
      {
        "flag": "--help",
        "meaning": "Afficher l’aide"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-ps",
    "name": "ps",
    "environment": "Bash",
    "category": "Bash",
    "description": "Tous les processus",
    "syntax": "ps [options] [arguments]",
    "examples": [
      "ps aux"
    ],
    "options": [
      {
        "flag": "aux",
        "meaning": "Afficher tous les processus avec détails et propriétaires"
      },
      {
        "flag": "-e",
        "meaning": "Afficher tous les processus"
      },
      {
        "flag": "-f",
        "meaning": "Format détaillé"
      }
    ],
    "notes": "Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-top",
    "name": "top",
    "environment": "Bash",
    "category": "Bash",
    "description": "Surveiller (q)",
    "syntax": "top [arguments]",
    "examples": [
      "top"
    ],
    "options": [
      {
        "flag": "-p PID",
        "meaning": "Surveiller un processus précis"
      },
      {
        "flag": "-u UTILISATEUR",
        "meaning": "Filtrer par utilisateur"
      },
      {
        "flag": "-d SECONDES",
        "meaning": "Définir le délai de rafraîchissement"
      },
      {
        "flag": "-b",
        "meaning": "Mode batch non interactif"
      },
      {
        "flag": "q",
        "meaning": "Quitter"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-kill",
    "name": "kill",
    "environment": "Bash",
    "category": "Bash",
    "description": "Forcer l’arrêt",
    "syntax": "kill [options] [arguments]",
    "examples": [
      "kill PID",
      "kill -9 PID",
      "kill 4242"
    ],
    "options": [
      {
        "flag": "-9",
        "meaning": "Envoyer SIGKILL (arrêt forcé)"
      },
      {
        "flag": "-15",
        "meaning": "Envoyer SIGTERM (arrêt propre par défaut)"
      }
    ],
    "notes": "Fiche mémo Bash · Simulateur terminal"
  },
  {
    "id": "v6-bash-pgrep",
    "name": "pgrep",
    "environment": "Bash",
    "category": "Bash",
    "description": "Trouver par nom",
    "syntax": "pgrep [arguments]",
    "examples": [
      "pgrep nom"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Rechercher dans la ligne de commande complète"
      },
      {
        "flag": "-u UTILISATEUR",
        "meaning": "Filtrer par utilisateur"
      },
      {
        "flag": "-l",
        "meaning": "Afficher les noms des processus"
      },
      {
        "flag": "-a",
        "meaning": "Afficher les lignes de commande"
      },
      {
        "flag": "-n",
        "meaning": "Prendre le plus récent"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-systemctl",
    "name": "systemctl",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Contrôler les services gérés par systemd.",
    "syntax": "systemctl action service",
    "examples": [
      "systemctl status s",
      "systemctl start s",
      "systemctl stop s",
      "systemctl restart s",
      "systemctl is-active s",
      "systemctl --failed",
      "systemctl reload s",
      "systemctl enable s",
      "systemctl disable s",
      "systemctl list-timers",
      "systemctl status ssh",
      "systemctl status nginx",
      "systemctl restart nginx"
    ],
    "options": [
      {
        "flag": "status",
        "meaning": "Afficher l’état d’une unité"
      },
      {
        "flag": "start",
        "meaning": "Démarrer immédiatement"
      },
      {
        "flag": "stop",
        "meaning": "Arrêter immédiatement"
      },
      {
        "flag": "restart",
        "meaning": "Redémarrer"
      },
      {
        "flag": "reload",
        "meaning": "Recharger la configuration sans redémarrage si pris en charge"
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
        "flag": "is-active",
        "meaning": "Tester si l’unité est active"
      },
      {
        "flag": "list-units",
        "meaning": "Lister les unités"
      },
      {
        "flag": "list-timers",
        "meaning": "Lister les minuteries"
      },
      {
        "flag": "get-default",
        "meaning": "Afficher la cible de démarrage"
      },
      {
        "flag": "set-default",
        "meaning": "Modifier la cible de démarrage"
      },
      {
        "flag": "isolate",
        "meaning": "Basculer vers une cible"
      },
      {
        "flag": "--failed",
        "meaning": "Afficher les unités en échec"
      },
      {
        "flag": "--all",
        "meaning": "Inclure les unités inactives"
      }
    ],
    "notes": "Fiche mémo Bash · Fiche avec options · Simulateur terminal"
  },
  {
    "id": "v6-linux-administration-journalctl",
    "name": "journalctl",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Consulter les journaux systemd.",
    "syntax": "journalctl [options]",
    "examples": [
      "journalctl -u s",
      "journalctl -u s -f",
      "journalctl -xe",
      "journalctl -b",
      "journalctl -p err",
      "journalctl -u ssh -n 50 --no-pager"
    ],
    "options": [
      {
        "flag": "-u",
        "meaning": "Filtrer sur une unité systemd"
      },
      {
        "flag": "-f",
        "meaning": "Suivre les nouveaux messages en direct"
      },
      {
        "flag": "-n",
        "meaning": "Limiter le nombre de lignes"
      },
      {
        "flag": "-b",
        "meaning": "Afficher les messages depuis le démarrage"
      },
      {
        "flag": "-p",
        "meaning": "Filtrer selon la priorité"
      },
      {
        "flag": "--since",
        "meaning": "Afficher les événements depuis une date"
      },
      {
        "flag": "--no-pager",
        "meaning": "Ne pas ouvrir de pagination"
      },
      {
        "flag": "-xe",
        "meaning": "Afficher les messages récents avec contexte"
      }
    ],
    "notes": "Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-bash-ssh",
    "name": "ssh",
    "environment": "Bash",
    "category": "Bash",
    "description": "Connexion SSH",
    "syntax": "ssh [options] [arguments]",
    "examples": [
      "ssh user@ip"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Préciser le port SSH"
      },
      {
        "flag": "-i",
        "meaning": "Préciser la clé privée"
      },
      {
        "flag": "-v",
        "meaning": "Activer les messages de diagnostic"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-scp",
    "name": "scp",
    "environment": "Bash",
    "category": "Bash",
    "description": "Copier un dossier",
    "syntax": "scp [options] [arguments]",
    "examples": [
      "scp f user@ip:/tmp",
      "scp -r d u@ip:/tmp"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Copier récursivement"
      },
      {
        "flag": "-P",
        "meaning": "Préciser le port SSH"
      },
      {
        "flag": "-i",
        "meaning": "Préciser la clé privée"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-getent",
    "name": "getent",
    "environment": "Bash",
    "category": "Bash",
    "description": "Infos d’un compte",
    "syntax": "getent [arguments]",
    "examples": [
      "getent hosts h",
      "getent passwd u"
    ],
    "options": [
      {
        "flag": "passwd",
        "meaning": "Consulter la base des utilisateurs"
      },
      {
        "flag": "group",
        "meaning": "Consulter la base des groupes"
      },
      {
        "flag": "hosts",
        "meaning": "Résoudre un nom d’hôte"
      },
      {
        "flag": "ahosts",
        "meaning": "Consulter les adresses via NSS"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-tar",
    "name": "tar",
    "environment": "Bash",
    "category": "Bash",
    "description": "Créer, consulter, extraire et compresser des archives.",
    "syntax": "tar [options] -f archive.tar [fichiers]",
    "examples": [
      "tar -czf a.tgz d",
      "tar -xzf a.tgz",
      "tar -tzf a.tgz",
      "tar -xzf a.tgz -C d",
      "tar -cjf a.tbz d",
      "tar -czvf sauvegarde.tar.gz /home/user"
    ],
    "options": [
      {
        "flag": "-c",
        "meaning": "Créer une archive"
      },
      {
        "flag": "-x",
        "meaning": "Extraire une archive"
      },
      {
        "flag": "-t",
        "meaning": "Lister le contenu"
      },
      {
        "flag": "-f",
        "meaning": "Préciser le fichier archive"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les fichiers traités"
      },
      {
        "flag": "-z",
        "meaning": "Utiliser gzip"
      },
      {
        "flag": "-j",
        "meaning": "Utiliser bzip2"
      },
      {
        "flag": "-u",
        "meaning": "Mettre à jour une archive TAR non compressée"
      }
    ],
    "notes": "Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-bash-unzip",
    "name": "unzip",
    "environment": "Bash",
    "category": "Bash",
    "description": "Extraire un ZIP",
    "syntax": "unzip [arguments]",
    "examples": [
      "unzip a.zip"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Afficher le contenu sans extraire"
      },
      {
        "flag": "-d DOSSIER",
        "meaning": "Choisir le dossier de destination"
      },
      {
        "flag": "-o",
        "meaning": "Écraser les fichiers sans demander"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas écraser les fichiers existants"
      },
      {
        "flag": "-t",
        "meaning": "Tester l’intégrité de l’archive"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-alias",
    "name": "alias",
    "environment": "Bash",
    "category": "Bash",
    "description": "Créer un raccourci",
    "syntax": "alias [arguments]",
    "examples": [
      "alias ll='ls -lah'"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Afficher les alias au format réutilisable"
      },
      {
        "flag": "NOM",
        "meaning": "Afficher la définition d’un alias"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-adduser",
    "name": "adduser",
    "environment": "Bash",
    "category": "Bash",
    "description": "Créer (assistant)",
    "syntax": "adduser [arguments]",
    "examples": [
      "adduser nom"
    ],
    "options": [
      {
        "flag": "--home CHEMIN",
        "meaning": "Choisir le répertoire personnel"
      },
      {
        "flag": "--shell SHELL",
        "meaning": "Choisir le shell"
      },
      {
        "flag": "--ingroup GROUPE",
        "meaning": "Choisir le groupe principal"
      },
      {
        "flag": "--disabled-password",
        "meaning": "Créer sans demander de mot de passe immédiatement"
      },
      {
        "flag": "--system",
        "meaning": "Créer un compte système"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-useradd",
    "name": "useradd",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer un compte utilisateur local Linux.",
    "syntax": "useradd [options] nom",
    "examples": [
      "useradd -m n",
      "useradd -m -s /bin/bash alice"
    ],
    "options": [
      {
        "flag": "-m",
        "meaning": "Créer le répertoire personnel"
      },
      {
        "flag": "-s",
        "meaning": "Choisir le shell de connexion"
      },
      {
        "flag": "-u",
        "meaning": "Fixer l’UID"
      },
      {
        "flag": "-g",
        "meaning": "Définir le groupe principal"
      },
      {
        "flag": "-r",
        "meaning": "Créer un compte système"
      },
      {
        "flag": "-c",
        "meaning": "Définir le commentaire du compte"
      }
    ],
    "notes": "Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-linux-administration-usermod",
    "name": "usermod",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Verrouiller le compte",
    "syntax": "usermod [options] utilisateur",
    "examples": [
      "usermod -aG g u",
      "usermod -L u"
    ],
    "options": [
      {
        "flag": "-aG",
        "meaning": "Ajouter aux groupes secondaires sans retirer les groupes existants"
      },
      {
        "flag": "-G",
        "meaning": "Remplacer la liste des groupes secondaires"
      },
      {
        "flag": "-s",
        "meaning": "Changer le shell"
      },
      {
        "flag": "-d",
        "meaning": "Définir le répertoire personnel"
      },
      {
        "flag": "-m",
        "meaning": "Déplacer le contenu du répertoire personnel avec -d"
      },
      {
        "flag": "-e",
        "meaning": "Fixer la date d’expiration"
      },
      {
        "flag": "-L",
        "meaning": "Verrouiller le mot de passe"
      },
      {
        "flag": "-U",
        "meaning": "Déverrouiller le mot de passe"
      },
      {
        "flag": "-c",
        "meaning": "Modifier le commentaire"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-gpasswd",
    "name": "gpasswd",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Retirer d’un groupe",
    "syntax": "gpasswd [options] [arguments]",
    "examples": [
      "gpasswd -d u g"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Ajouter un utilisateur à un groupe"
      },
      {
        "flag": "-d",
        "meaning": "Retirer un utilisateur d’un groupe"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-userdel",
    "name": "userdel",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Supprimer + dossier",
    "syntax": "userdel [options] [arguments]",
    "examples": [
      "userdel -r u"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Supprimer aussi le répertoire personnel et le courrier utilisateur"
      },
      {
        "flag": "-f",
        "meaning": "Forcer certaines suppressions (risqué)"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-groupadd",
    "name": "groupadd",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Créer un groupe",
    "syntax": "groupadd [options] [arguments]",
    "examples": [
      "groupadd g"
    ],
    "options": [
      {
        "flag": "-g",
        "meaning": "Fixer le GID"
      },
      {
        "flag": "-r",
        "meaning": "Créer un groupe système"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-chage",
    "name": "chage",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Expiration du MDP",
    "syntax": "chage [arguments]",
    "examples": [
      "chage -l u"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Afficher les paramètres d’expiration du mot de passe"
      },
      {
        "flag": "-d DATE",
        "meaning": "Fixer la date du dernier changement"
      },
      {
        "flag": "-M JOURS",
        "meaning": "Durée maximale du mot de passe"
      },
      {
        "flag": "-W JOURS",
        "meaning": "Préavis d’expiration"
      },
      {
        "flag": "-E DATE",
        "meaning": "Date d’expiration du compte"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-visudo",
    "name": "visudo",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Éditer sudoers (sûr)",
    "syntax": "visudo [arguments]",
    "examples": [
      "visudo"
    ],
    "options": [
      {
        "flag": "-c",
        "meaning": "Vérifier la syntaxe de sudoers"
      },
      {
        "flag": "-f FICHIER",
        "meaning": "Éditer ou vérifier un fichier sudoers spécifique"
      },
      {
        "flag": "-s",
        "meaning": "Activer une vérification stricte"
      },
      {
        "flag": "-q",
        "meaning": "Mode silencieux de vérification"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-lastb",
    "name": "lastb",
    "environment": "Bash",
    "category": "Bash",
    "description": "Échecs de connexion",
    "syntax": "lastb [arguments]",
    "examples": [
      "lastb"
    ],
    "options": [
      {
        "flag": "-n N",
        "meaning": "Afficher les N dernières tentatives échouées"
      },
      {
        "flag": "-F",
        "meaning": "Afficher les dates complètes"
      },
      {
        "flag": "-i",
        "meaning": "Afficher les adresses IP numériques"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-lsof",
    "name": "lsof",
    "environment": "Bash",
    "category": "Bash",
    "description": "Qui utilise le port 80",
    "syntax": "lsof [options] [arguments]",
    "examples": [
      "lsof -i :80"
    ],
    "options": [
      {
        "flag": "-i",
        "meaning": "Filtrer les connexions réseau et ports"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-dig",
    "name": "dig",
    "environment": "Bash",
    "category": "Bash",
    "description": "Interroger un DNS précis",
    "syntax": "dig [options] [arguments]",
    "examples": [
      "dig h +short",
      "dig @8.8.8.8 h",
      "dig nom [type]",
      "dig @serveur nom"
    ],
    "options": [
      {
        "flag": "+short",
        "meaning": "Afficher une réponse courte"
      },
      {
        "flag": "@serveur",
        "meaning": "Choisir le serveur DNS à interroger"
      }
    ],
    "notes": "Fiche mémo Bash · Catalogue réseau"
  },
  {
    "id": "v6-linux-administration-resolvectl",
    "name": "resolvectl",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "DNS utilisés (systemd)",
    "syntax": "resolvectl [arguments]",
    "examples": [
      "resolvectl status"
    ],
    "options": [
      {
        "flag": "status",
        "meaning": "Afficher les DNS configurés"
      },
      {
        "flag": "query NOM",
        "meaning": "Résoudre un nom DNS"
      },
      {
        "flag": "dns INTERFACE SERVEUR",
        "meaning": "Définir les DNS d’une interface (temporaire)"
      },
      {
        "flag": "flush-caches",
        "meaning": "Vider le cache DNS"
      },
      {
        "flag": "statistics",
        "meaning": "Afficher les statistiques du résolveur"
      }
    ],
    "notes": "Fiche mémo Bash · Catalogue réseau"
  },
  {
    "id": "v6-linux-administration-nmcli",
    "name": "nmcli",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "NetworkManager",
    "syntax": "nmcli [options] [arguments]",
    "examples": [
      "nmcli dev status",
      "nmcli device show [interface]"
    ],
    "options": [
      {
        "flag": "device",
        "meaning": "Gérer ou consulter les périphériques"
      },
      {
        "flag": "connection",
        "meaning": "Gérer les profils de connexion"
      },
      {
        "flag": "show",
        "meaning": "Afficher les informations"
      },
      {
        "flag": "status",
        "meaning": "Afficher l’état"
      }
    ],
    "notes": "Fiche mémo Bash · Catalogue réseau"
  },
  {
    "id": "v6-linux-administration-ufw",
    "name": "ufw",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Activer en dernier",
    "syntax": "ufw [options] [arguments]",
    "examples": [
      "ufw status verbose",
      "ufw allow 22/tcp",
      "ufw enable",
      "ufw allow from IP",
      "ufw deny 23",
      "ufw delete allow 22",
      "ufw reload",
      "ufw disable"
    ],
    "options": [
      {
        "flag": "status",
        "meaning": "Afficher l’état du pare-feu"
      },
      {
        "flag": "verbose",
        "meaning": "Afficher davantage de détails"
      },
      {
        "flag": "allow",
        "meaning": "Autoriser un port ou un flux"
      },
      {
        "flag": "deny",
        "meaning": "Bloquer un port ou un flux"
      },
      {
        "flag": "delete",
        "meaning": "Supprimer une règle"
      },
      {
        "flag": "enable",
        "meaning": "Activer le pare-feu"
      },
      {
        "flag": "disable",
        "meaning": "Désactiver le pare-feu"
      },
      {
        "flag": "reload",
        "meaning": "Recharger les règles"
      },
      {
        "flag": "from",
        "meaning": "Préciser une adresse source"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-iptables",
    "name": "iptables",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Règles netfilter",
    "syntax": "iptables [arguments]",
    "examples": [
      "iptables -L -n"
    ],
    "options": [
      {
        "flag": "-L",
        "meaning": "Afficher les règles de la chaîne"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas résoudre les adresses et ports"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les compteurs et détails"
      },
      {
        "flag": "-A CHAINE",
        "meaning": "Ajouter une règle"
      },
      {
        "flag": "-D CHAINE",
        "meaning": "Supprimer une règle"
      },
      {
        "flag": "-P CHAINE CIBLE",
        "meaning": "Définir la politique par défaut"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-nft",
    "name": "nft",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Règles nftables",
    "syntax": "nft [arguments]",
    "examples": [
      "nft list ruleset"
    ],
    "options": [
      {
        "flag": "list ruleset",
        "meaning": "Afficher toutes les tables, chaînes et règles"
      },
      {
        "flag": "list tables",
        "meaning": "Afficher les tables"
      },
      {
        "flag": "add rule",
        "meaning": "Ajouter une règle"
      },
      {
        "flag": "delete rule",
        "meaning": "Supprimer une règle"
      },
      {
        "flag": "-a",
        "meaning": "Afficher les handles des règles"
      },
      {
        "flag": "-f FICHIER",
        "meaning": "Charger des règles depuis un fichier"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-crontab",
    "name": "crontab",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Éditer ses tâches",
    "syntax": "crontab [options] [arguments]",
    "examples": [
      "crontab -e",
      "crontab -l"
    ],
    "options": [
      {
        "flag": "-e",
        "meaning": "Modifier la crontab de l’utilisateur"
      },
      {
        "flag": "-l",
        "meaning": "Lister les tâches planifiées"
      },
      {
        "flag": "-r",
        "meaning": "Supprimer la crontab (attention)"
      },
      {
        "flag": "-u",
        "meaning": "Préciser l’utilisateur cible"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-at",
    "name": "at",
    "environment": "Bash",
    "category": "Bash",
    "description": "Exécution unique (at)",
    "syntax": "at [arguments]",
    "examples": [
      "at now + 5 min"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Lister les tâches en attente"
      },
      {
        "flag": "-d ID",
        "meaning": "Supprimer une tâche"
      },
      {
        "flag": "-c ID",
        "meaning": "Afficher le contenu d’une tâche"
      },
      {
        "flag": "now + 5 minutes",
        "meaning": "Planifier une exécution dans cinq minutes"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-sed",
    "name": "sed",
    "environment": "Bash",
    "category": "Bash",
    "description": "Remplacer dans le fichier",
    "syntax": "sed [options] [arguments]",
    "examples": [
      "sed 's/a/b/' f",
      "sed -i 's/a/b/' f"
    ],
    "options": [
      {
        "flag": "-i",
        "meaning": "Modifier le fichier sur place"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas afficher automatiquement chaque ligne"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-awk",
    "name": "awk",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher la 1re colonne",
    "syntax": "awk [arguments]",
    "examples": [
      "awk '{print $1}' f"
    ],
    "options": [
      {
        "flag": "-F SEPARATEUR",
        "meaning": "Définir le séparateur de champs"
      },
      {
        "flag": "-f SCRIPT",
        "meaning": "Lire un programme awk depuis un fichier"
      },
      {
        "flag": "-v NOM",
        "meaning": "VALEUR=Définir une variable awk"
      },
      {
        "flag": "{print $1}",
        "meaning": "Afficher le premier champ"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-tr",
    "name": "tr",
    "environment": "Bash",
    "category": "Bash",
    "description": "Mettre en majuscules",
    "syntax": "tr [arguments]",
    "examples": [
      "tr a-z A-Z"
    ],
    "options": [
      {
        "flag": "-d CARACTERES",
        "meaning": "Supprimer les caractères indiqués"
      },
      {
        "flag": "-s CARACTERES",
        "meaning": "Compresser les répétitions"
      },
      {
        "flag": "-c",
        "meaning": "Complémenter l’ensemble des caractères"
      },
      {
        "flag": "a-z A-Z",
        "meaning": "Convertir les minuscules en majuscules"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-diff",
    "name": "diff",
    "environment": "Bash",
    "category": "Bash",
    "description": "Comparer deux fichiers",
    "syntax": "diff [arguments]",
    "examples": [
      "diff f1 f2"
    ],
    "options": [
      {
        "flag": "-u",
        "meaning": "Afficher un diff unifié"
      },
      {
        "flag": "-r",
        "meaning": "Comparer récursivement les répertoires"
      },
      {
        "flag": "-q",
        "meaning": "Indiquer seulement si les fichiers diffèrent"
      },
      {
        "flag": "-y",
        "meaning": "Afficher les différences côte à côte"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-linux-administration-e2fsck",
    "name": "e2fsck",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Vérifier (démonté)",
    "syntax": "e2fsck [arguments]",
    "examples": [
      "e2fsck -f /dev/sdb1"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Forcer la vérification même si le système semble propre"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas effectuer de modifications"
      },
      {
        "flag": "-p",
        "meaning": "Réparer automatiquement les problèmes sans interaction lorsque possible"
      },
      {
        "flag": "-y",
        "meaning": "Répondre oui à toutes les réparations (risqué)"
      },
      {
        "flag": "-C 0",
        "meaning": "Afficher une barre de progression"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-zip",
    "name": "zip",
    "environment": "Bash",
    "category": "Bash",
    "description": "Créer un ZIP",
    "syntax": "zip [arguments]",
    "examples": [
      "zip -r a.zip d"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Archiver récursivement un répertoire"
      },
      {
        "flag": "-9",
        "meaning": "Compression maximale"
      },
      {
        "flag": "-0",
        "meaning": "Ne pas compresser"
      },
      {
        "flag": "-e",
        "meaning": "Chiffrer l’archive (méthode historique peu sûre)"
      },
      {
        "flag": "-u",
        "meaning": "Mettre à jour les fichiers de l’archive"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-gzip",
    "name": "gzip",
    "environment": "Bash",
    "category": "Bash",
    "description": "Compresser des fichiers au format gzip.",
    "syntax": "gzip [options] fichier",
    "examples": [
      "gzip f",
      "gzip -k rapport.log"
    ],
    "options": [
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
      },
      {
        "flag": "-d",
        "meaning": "Décompresser"
      },
      {
        "flag": "-k",
        "meaning": "Conserver le fichier source"
      }
    ],
    "notes": "Fiche mémo Bash · Fiche avec options"
  },
  {
    "id": "v6-bash-gunzip",
    "name": "gunzip",
    "environment": "Bash",
    "category": "Bash",
    "description": "Décompresser",
    "syntax": "gunzip [arguments]",
    "examples": [
      "gunzip f.gz"
    ],
    "options": [
      {
        "flag": "-k",
        "meaning": "Conserver le fichier compressé"
      },
      {
        "flag": "-c",
        "meaning": "Écrire le résultat sur la sortie standard"
      },
      {
        "flag": "-f",
        "meaning": "Forcer la décompression"
      },
      {
        "flag": "-t",
        "meaning": "Tester l’intégrité"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-rsync",
    "name": "rsync",
    "environment": "Bash",
    "category": "Bash",
    "description": "Synchroniser (local)",
    "syntax": "rsync [options] [arguments]",
    "examples": [
      "rsync -av src/ dst/",
      "rsync -avz s u@ip:/d"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Mode archive (attributs et récursivité)"
      },
      {
        "flag": "-v",
        "meaning": "Afficher les détails"
      },
      {
        "flag": "-z",
        "meaning": "Compresser pendant le transfert"
      },
      {
        "flag": "--delete",
        "meaning": "Supprimer à destination les éléments absents de la source (prudence)"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-sha256sum",
    "name": "sha256sum",
    "environment": "Bash",
    "category": "Bash",
    "description": "Empreinte de contrôle",
    "syntax": "sha256sum [arguments]",
    "examples": [
      "sha256sum f"
    ],
    "options": [
      {
        "flag": "-c FICHIER",
        "meaning": "Vérifier des empreintes depuis un fichier"
      },
      {
        "flag": "-b",
        "meaning": "Lire les fichiers en mode binaire"
      },
      {
        "flag": "--tag",
        "meaning": "Afficher au format BSD"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-read",
    "name": "read",
    "environment": "Bash",
    "category": "Bash",
    "description": "Demander une saisie",
    "syntax": "read [arguments]",
    "examples": [
      "read -p \"Nom ? \" v"
    ],
    "options": [
      {
        "flag": "-p INVITE",
        "meaning": "Afficher une invite avant lecture"
      },
      {
        "flag": "-r",
        "meaning": "Ne pas interpréter les antislashs"
      },
      {
        "flag": "-s",
        "meaning": "Masquer la saisie"
      },
      {
        "flag": "-t SECONDES",
        "meaning": "Définir un délai d’attente"
      },
      {
        "flag": "-a TABLEAU",
        "meaning": "Lire les mots dans un tableau"
      }
    ],
    "notes": "Fiche mémo Bash"
  },
  {
    "id": "v6-bash-bzip2",
    "name": "bzip2",
    "environment": "Bash",
    "category": "Bash",
    "description": "Compresser des fichiers au format bzip2.",
    "syntax": "bzip2 [options] fichier",
    "examples": [
      "bzip2 -k rapport.log"
    ],
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
      },
      {
        "flag": "-1",
        "meaning": "Bloc de compression plus petit"
      },
      {
        "flag": "-9",
        "meaning": "Bloc de compression plus grand"
      },
      {
        "flag": "-t",
        "meaning": "Tester l’intégrité"
      }
    ],
    "notes": "Fiche avec options"
  },
  {
    "id": "v6-cmd-ping",
    "name": "ping",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Tester la joignabilité IP d’une destination.",
    "syntax": "ping [options] destination",
    "examples": [
      "ping -n 4 192.168.1.1",
      "ping -n nombre destination",
      "ping",
      "ping -n 2",
      "ping 192.168.10.1"
    ],
    "options": [
      {
        "flag": "-c",
        "meaning": "Nombre de requêtes ICMP à envoyer (Linux)"
      },
      {
        "flag": "-i",
        "meaning": "Intervalle entre les requêtes en secondes (Linux)"
      },
      {
        "flag": "-s",
        "meaning": "Taille de la charge utile ICMP (Linux)"
      },
      {
        "flag": "-q",
        "meaning": "Afficher un résumé (Linux)"
      },
      {
        "flag": "-4",
        "meaning": "Utiliser IPv4"
      },
      {
        "flag": "-6",
        "meaning": "Utiliser IPv6"
      },
      {
        "flag": "-n",
        "meaning": "Nombre de requêtes (Windows)"
      },
      {
        "flag": "-t",
        "meaning": "Envoyer des requêtes en continu (Windows)"
      },
      {
        "flag": "-l",
        "meaning": "Taille de la charge utile en octets (Windows)"
      },
      {
        "flag": "-n nombre",
        "meaning": "Nombre de requêtes (Windows)"
      },
      {
        "flag": "-l taille",
        "meaning": "Taille de la charge utile sous Windows"
      }
    ],
    "notes": "Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-cmd-nslookup",
    "name": "nslookup",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Interroger un serveur DNS.",
    "syntax": "nslookup [options] nom [serveur]",
    "examples": [
      "nslookup -type=MX exemple.fr",
      "nslookup nom [serveur_dns]",
      "nslookup",
      "nslookup intranet.agence.local"
    ],
    "options": [
      {
        "flag": "-type",
        "meaning": "Préciser le type d’enregistrement DNS (A, AAAA, MX, NS…)"
      },
      {
        "flag": "serveur_dns",
        "meaning": "Interroger un serveur DNS précis"
      },
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
      },
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
    "notes": "Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-localuser",
    "name": "Get-LocalUser",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Lister et examiner les utilisateurs locaux Windows.",
    "syntax": "Get-LocalUser [-Name nom]",
    "examples": [
      "Get-LocalUser -Name \"alice\""
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer par nom de compte"
      },
      {
        "flag": "-SID",
        "meaning": "Rechercher un compte par identifiant de sécurité"
      }
    ],
    "notes": "Fiche avec options"
  },
  {
    "id": "v6-powershell-get-service",
    "name": "Get-Service",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Afficher les services Windows et leur état.",
    "syntax": "Get-Service [-Name nom]",
    "examples": [
      "Get-Service -Name Spooler",
      "Get-Service"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer sur le nom technique du service"
      },
      {
        "flag": "-DisplayName",
        "meaning": "Filtrer sur le nom affiché"
      },
      {
        "flag": "-DependentServices",
        "meaning": "Afficher les services dépendants"
      },
      {
        "flag": "-RequiredServices",
        "meaning": "Afficher les dépendances requises"
      }
    ],
    "notes": "Fiche avec options · Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-powershell-test-netconnection",
    "name": "Test-NetConnection",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Tester une connectivité réseau et éventuellement un port TCP.",
    "syntax": "Test-NetConnection cible [options]",
    "examples": [
      "Test-NetConnection serveur.local -Port 443",
      "Test-NetConnection -ComputerName hôte -Port port"
    ],
    "options": [
      {
        "flag": "-ComputerName",
        "meaning": "Nom DNS ou adresse IP cible"
      },
      {
        "flag": "-Port",
        "meaning": "Port TCP à tester"
      },
      {
        "flag": "-InformationLevel",
        "meaning": "Choisir Quiet ou Detailed"
      },
      {
        "flag": "-TraceRoute",
        "meaning": "Afficher le chemin réseau"
      }
    ],
    "notes": "Fiche avec options · Catalogue réseau"
  },
  {
    "id": "v6-powershell-get-childitem",
    "name": "Get-ChildItem",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Lister les fichiers et répertoires.",
    "syntax": "Get-ChildItem [options] [chemin]",
    "examples": [
      "Get-ChildItem C:\\Logs -Filter *.log -Recurse",
      "Get-ChildItem"
    ],
    "options": [
      {
        "flag": "-Path",
        "meaning": "Chemin à parcourir"
      },
      {
        "flag": "-Filter",
        "meaning": "Filtrer les noms"
      },
      {
        "flag": "-Recurse",
        "meaning": "Parcourir les sous-dossiers"
      },
      {
        "flag": "-Force",
        "meaning": "Inclure les éléments cachés"
      },
      {
        "flag": "-File",
        "meaning": "Afficher seulement les fichiers"
      },
      {
        "flag": "-Directory",
        "meaning": "Afficher seulement les dossiers"
      },
      {
        "flag": "show",
        "meaning": "Afficher sans modifier la configuration"
      },
      {
        "flag": "brief",
        "meaning": "Résumé compact"
      }
    ],
    "notes": "Fiche avec options · Simulateur terminal"
  },
  {
    "id": "v6-cmd-arp",
    "name": "arp",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "arp -a | arp -s adresse_ip adresse_mac | arp -d adresse_ip",
    "examples": [
      "arp -a [adresse_ip] [-N adresse_ip_interface]",
      "arp -d adresse_ip [adresse_ip_interface]",
      "arp -s adresse_ip adresse_mac [adresse_ip_interface]",
      "arp -a",
      "arp -d"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher les entrées du cache ARP"
      },
      {
        "flag": "-s IP MAC",
        "meaning": "Ajouter une entrée ARP statique"
      },
      {
        "flag": "-d IP",
        "meaning": "Supprimer une entrée ARP"
      },
      {
        "flag": "-N IP",
        "meaning": "Limiter l’affichage à une interface donnée"
      }
    ],
    "notes": "Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-netneighbor",
    "name": "Get-NetNeighbor",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-NetNeighbor [arguments]",
    "examples": [
      "Get-NetNeighbor [-AddressFamily IPv4]"
    ],
    "options": [
      {
        "flag": "-AddressFamily IPv4",
        "meaning": "Afficher seulement les voisins IPv4"
      },
      {
        "flag": "-InterfaceAlias NOM",
        "meaning": "Filtrer par interface"
      },
      {
        "flag": "-IPAddress IP",
        "meaning": "Filtrer par adresse IP"
      },
      {
        "flag": "-State ETAT",
        "meaning": "Filtrer par état du voisin"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-cmd-netstat",
    "name": "netstat",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "netstat [options] [arguments]",
    "examples": [
      "netstat -ano",
      "netstat -an",
      "netstat -abno",
      "netstat -r",
      "netstat -e",
      "netstat -s",
      "netstat -ano | findstr :PORT"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher toutes les connexions et ports en écoute"
      },
      {
        "flag": "-n",
        "meaning": "Afficher les adresses et ports numériques"
      },
      {
        "flag": "-o",
        "meaning": "Afficher les PID (Windows)"
      },
      {
        "flag": "-b",
        "meaning": "Afficher les exécutables associés (Windows, droits élevés)"
      },
      {
        "flag": "-t",
        "meaning": "TCP (Linux)"
      },
      {
        "flag": "-u",
        "meaning": "UDP (Linux)"
      },
      {
        "flag": "-l",
        "meaning": "Ports en écoute (Linux)"
      },
      {
        "flag": "-p",
        "meaning": "Afficher les processus associés (Linux)"
      },
      {
        "flag": "-r",
        "meaning": "Afficher la table de routage"
      },
      {
        "flag": "-e",
        "meaning": "Afficher les statistiques Ethernet (Windows)"
      },
      {
        "flag": "-s",
        "meaning": "Afficher les statistiques par protocole"
      }
    ],
    "notes": "Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-nettcpconnection",
    "name": "Get-NetTCPConnection",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-NetTCPConnection [options] [arguments]",
    "examples": [
      "Get-NetTCPConnection [-LocalPort PORT]"
    ],
    "options": [
      {
        "flag": "-LocalPort",
        "meaning": "Filtrer sur le port local"
      },
      {
        "flag": "-RemotePort",
        "meaning": "Filtrer sur le port distant"
      },
      {
        "flag": "-State",
        "meaning": "Filtrer selon l’état TCP"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-bash-ifconfig",
    "name": "ifconfig",
    "environment": "Bash",
    "category": "Bash",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "ifconfig [arguments]",
    "examples": [
      "ifconfig -a"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher aussi les interfaces inactives"
      },
      {
        "flag": "up",
        "meaning": "Activer une interface"
      },
      {
        "flag": "down",
        "meaning": "Désactiver une interface"
      },
      {
        "flag": "netmask MASQUE",
        "meaning": "Définir un masque IPv4 (outil ancien)"
      },
      {
        "flag": "mtu N",
        "meaning": "Définir la MTU"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-linux-administration-mtr",
    "name": "mtr",
    "environment": "Bash",
    "category": "Bash",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "mtr [arguments]",
    "examples": [
      "mtr -rw -c N destination"
    ],
    "options": [
      {
        "flag": "-r",
        "meaning": "Mode rapport non interactif"
      },
      {
        "flag": "-w",
        "meaning": "Rapport large"
      },
      {
        "flag": "-c N",
        "meaning": "Nombre de cycles de test"
      },
      {
        "flag": "-n",
        "meaning": "Ne pas résoudre les noms DNS"
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
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-linux-administration-nc",
    "name": "nc",
    "environment": "Bash",
    "category": "Bash",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "nc [options] [arguments]",
    "examples": [
      "nc -vz hôte port"
    ],
    "options": [
      {
        "flag": "-v",
        "meaning": "Mode verbeux"
      },
      {
        "flag": "-z",
        "meaning": "Tester un port sans transmettre de données"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-powershell-get-help",
    "name": "Get-Help",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-Help [options] [arguments]",
    "examples": [
      "Get-Help Get-LocalGroup",
      "Get-Help about_*",
      "Get-Help about_Aliases",
      "Get-Help"
    ],
    "options": [
      {
        "flag": "-Examples",
        "meaning": "Afficher les exemples"
      },
      {
        "flag": "-Full",
        "meaning": "Afficher l’aide complète"
      },
      {
        "flag": "-Detailed",
        "meaning": "Afficher les paramètres et exemples"
      },
      {
        "flag": "-Online",
        "meaning": "Ouvrir l’aide en ligne"
      }
    ],
    "notes": "Catalogue réseau · Simulateur terminal"
  },
  {
    "id": "v6-powershell-update-help",
    "name": "Update-Help",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Update-Help [arguments]",
    "examples": [
      "Update-Help -UICulture en-US"
    ],
    "options": [
      {
        "flag": "-UICulture CULTURE",
        "meaning": "Choisir la langue des fichiers d’aide"
      },
      {
        "flag": "-Module NOM",
        "meaning": "Limiter à un module"
      },
      {
        "flag": "-Force",
        "meaning": "Forcer la mise à jour"
      },
      {
        "flag": "-ErrorAction SilentlyContinue",
        "meaning": "Masquer certaines erreurs non bloquantes"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-powershell-get-alias",
    "name": "Get-Alias",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-Alias [options] [arguments]",
    "examples": [
      "Get-Alias"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer sur un alias"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-powershell-get-localgroup",
    "name": "Get-LocalGroup",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-LocalGroup [options] [arguments]",
    "examples": [
      "Get-LocalGroup",
      "Get-LocalGroup | Select-Object *",
      "Get-LocalGroup | Format-List *"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer par nom de groupe"
      },
      {
        "flag": "-SID",
        "meaning": "Filtrer par SID"
      }
    ],
    "notes": "Catalogue réseau"
  },
  {
    "id": "v6-cmd-help",
    "name": "help",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "help [arguments]",
    "examples": [
      "help",
      "help <commande>"
    ],
    "options": [
      {
        "flag": "COMMANDE",
        "meaning": "Afficher l’aide d’une commande interne"
      },
      {
        "flag": "/?",
        "meaning": "Afficher l’aide de help"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-cls",
    "name": "cls",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "cls [arguments]",
    "examples": [
      "cls"
    ],
    "options": [
      {
        "flag": "(sans option)",
        "meaning": "Effacer l’écran de la console CMD"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-ver",
    "name": "ver",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "ver [arguments]",
    "examples": [
      "ver"
    ],
    "options": [
      {
        "flag": "(sans option)",
        "meaning": "Afficher la version de Windows"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-hostname",
    "name": "hostname",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "hostname [arguments]",
    "examples": [
      "hostname"
    ],
    "options": [
      {
        "flag": "(sans option)",
        "meaning": "Afficher le nom de l’ordinateur"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-whoami",
    "name": "whoami",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "whoami [arguments]",
    "examples": [
      "whoami",
      "whoami /groups",
      "whoami /priv"
    ],
    "options": [
      {
        "flag": "/user",
        "meaning": "Afficher le SID et le compte courant"
      },
      {
        "flag": "/groups",
        "meaning": "Afficher les groupes et leurs attributs"
      },
      {
        "flag": "/priv",
        "meaning": "Afficher les privilèges"
      },
      {
        "flag": "/all",
        "meaning": "Afficher toutes les informations"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-echo",
    "name": "echo",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "echo [arguments]",
    "examples": [
      "echo"
    ],
    "options": [
      {
        "flag": "on",
        "meaning": "Activer l’affichage des commandes dans un script"
      },
      {
        "flag": "off",
        "meaning": "Désactiver l’affichage des commandes"
      },
      {
        "flag": "TEXTE",
        "meaning": "Afficher du texte"
      },
      {
        "flag": "%VARIABLE%",
        "meaning": "Afficher une variable d’environnement"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-set",
    "name": "set",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "set [arguments]",
    "examples": [
      "set"
    ],
    "options": [
      {
        "flag": "NOM",
        "meaning": "VALEUR=Définir une variable d’environnement"
      },
      {
        "flag": "/p NOM",
        "meaning": "INVITE=Demander une saisie"
      },
      {
        "flag": "/a EXPRESSION",
        "meaning": "Effectuer un calcul entier"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-date",
    "name": "date",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "date [arguments]",
    "examples": [
      "date"
    ],
    "options": [
      {
        "flag": "/t",
        "meaning": "Afficher la date sans demander de modification"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-time",
    "name": "time",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "time [arguments]",
    "examples": [
      "time"
    ],
    "options": [
      {
        "flag": "/t",
        "meaning": "Afficher l’heure sans demander de modification"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-cd",
    "name": "cd",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "cd [arguments]",
    "examples": [
      "cd"
    ],
    "options": [
      {
        "flag": "..",
        "meaning": "Monter au dossier parent"
      },
      {
        "flag": "\\",
        "meaning": "Aller à la racine du lecteur courant"
      },
      {
        "flag": "/d CHEMIN",
        "meaning": "Changer de lecteur et de dossier"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-chdir",
    "name": "chdir",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "chdir [arguments]",
    "examples": [
      "chdir"
    ],
    "options": [
      {
        "flag": "..",
        "meaning": "Monter au dossier parent"
      },
      {
        "flag": "/d CHEMIN",
        "meaning": "Changer de lecteur et de dossier"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-dir",
    "name": "dir",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "dir [options] [arguments]",
    "examples": [
      "dir"
    ],
    "options": [
      {
        "flag": "/a",
        "meaning": "Inclure les fichiers avec attributs particuliers"
      },
      {
        "flag": "/s",
        "meaning": "Parcourir les sous-répertoires"
      },
      {
        "flag": "/b",
        "meaning": "Affichage simple"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-type",
    "name": "type",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "type [arguments]",
    "examples": [
      "type"
    ],
    "options": [
      {
        "flag": "FICHIER",
        "meaning": "Afficher le contenu d’un fichier texte"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-more",
    "name": "more",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "more [arguments]",
    "examples": [
      "more"
    ],
    "options": [
      {
        "flag": "FICHIER",
        "meaning": "Afficher un texte page par page"
      },
      {
        "flag": "/c",
        "meaning": "Effacer l’écran avant affichage"
      },
      {
        "flag": "/e",
        "meaning": "Activer les fonctions étendues"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-tree",
    "name": "tree",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "tree [arguments]",
    "examples": [
      "tree"
    ],
    "options": [
      {
        "flag": "/f",
        "meaning": "Afficher aussi les fichiers"
      },
      {
        "flag": "/a",
        "meaning": "Utiliser les caractères ASCII"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-where",
    "name": "where",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "where [arguments]",
    "examples": [
      "where"
    ],
    "options": [
      {
        "flag": "/r DOSSIER",
        "meaning": "Rechercher récursivement dans un dossier"
      },
      {
        "flag": "/q",
        "meaning": "Ne renvoyer que le code retour"
      },
      {
        "flag": "/t",
        "meaning": "Afficher les tailles et dates"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-findstr",
    "name": "findstr",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "findstr [arguments]",
    "examples": [
      "findstr"
    ],
    "options": [
      {
        "flag": "/i",
        "meaning": "Ignorer la casse"
      },
      {
        "flag": "/s",
        "meaning": "Rechercher dans les sous-dossiers"
      },
      {
        "flag": "/n",
        "meaning": "Afficher les numéros de ligne"
      },
      {
        "flag": "/r",
        "meaning": "Utiliser des expressions régulières"
      },
      {
        "flag": "/c:CHAINE",
        "meaning": "Rechercher une chaîne littérale"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-copy",
    "name": "copy",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "copy [arguments]",
    "examples": [
      "copy"
    ],
    "options": [
      {
        "flag": "/y",
        "meaning": "Écraser sans demander"
      },
      {
        "flag": "/-y",
        "meaning": "Demander avant écrasement"
      },
      {
        "flag": "/b",
        "meaning": "Copier en mode binaire"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-move",
    "name": "move",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "move [arguments]",
    "examples": [
      "move"
    ],
    "options": [
      {
        "flag": "/y",
        "meaning": "Écraser sans demander"
      },
      {
        "flag": "/-y",
        "meaning": "Demander confirmation avant écrasement"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-ren",
    "name": "ren",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "ren [arguments]",
    "examples": [
      "ren"
    ],
    "options": [
      {
        "flag": "ANCIEN NOUVEAU",
        "meaning": "Renommer un fichier ou un dossier"
      },
      {
        "flag": "/?",
        "meaning": "Afficher l’aide"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-del",
    "name": "del",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "del [arguments]",
    "examples": [
      "del"
    ],
    "options": [
      {
        "flag": "/p",
        "meaning": "Demander confirmation"
      },
      {
        "flag": "/f",
        "meaning": "Forcer la suppression des fichiers en lecture seule"
      },
      {
        "flag": "/s",
        "meaning": "Supprimer aussi dans les sous-dossiers"
      },
      {
        "flag": "/q",
        "meaning": "Mode silencieux"
      },
      {
        "flag": "/a:ATTRIBUTS",
        "meaning": "Filtrer selon les attributs"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-mkdir",
    "name": "mkdir",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "mkdir [options] [arguments]",
    "examples": [
      "mkdir"
    ],
    "options": [
      {
        "flag": "-p",
        "meaning": "Créer les dossiers parents et ne pas échouer si existants"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-md",
    "name": "md",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "md [arguments]",
    "examples": [
      "md"
    ],
    "options": [
      {
        "flag": "CHEMIN",
        "meaning": "Créer un répertoire, y compris les parents manquants"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-rmdir",
    "name": "rmdir",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "rmdir [arguments]",
    "examples": [
      "rmdir"
    ],
    "options": [
      {
        "flag": "/s",
        "meaning": "Supprimer le dossier et tout son contenu"
      },
      {
        "flag": "/q",
        "meaning": "Ne pas demander confirmation (avec /s)"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-rd",
    "name": "rd",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "rd [arguments]",
    "examples": [
      "rd"
    ],
    "options": [
      {
        "flag": "/s",
        "meaning": "Supprimer le dossier et son contenu"
      },
      {
        "flag": "/q",
        "meaning": "Supprimer sans confirmation"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-pathping",
    "name": "pathping",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "pathping [arguments]",
    "examples": [
      "pathping"
    ],
    "options": [
      {
        "flag": "/n",
        "meaning": "Ne pas résoudre les noms DNS"
      },
      {
        "flag": "/h N",
        "meaning": "Limiter le nombre de sauts"
      },
      {
        "flag": "/q N",
        "meaning": "Définir le nombre de requêtes par saut"
      },
      {
        "flag": "/w MS",
        "meaning": "Définir le délai d’attente"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-getmac",
    "name": "getmac",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "getmac [arguments]",
    "examples": [
      "getmac"
    ],
    "options": [
      {
        "flag": "/v",
        "meaning": "Afficher des informations détaillées"
      },
      {
        "flag": "/fo csv",
        "meaning": "Format CSV"
      },
      {
        "flag": "/s ORDINATEUR",
        "meaning": "Interroger un ordinateur distant (droits requis)"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-netsh",
    "name": "netsh",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "netsh [options] [arguments]",
    "examples": [
      "netsh interface ipv4 show config",
      "netsh interface ipv4 show interfaces",
      "netsh advfirewall show allprofiles"
    ],
    "options": [
      {
        "flag": "interface",
        "meaning": "Gérer les interfaces"
      },
      {
        "flag": "advfirewall",
        "meaning": "Gérer le pare-feu Windows"
      },
      {
        "flag": "show",
        "meaning": "Afficher les paramètres"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-net",
    "name": "net",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "net [options] [arguments]",
    "examples": [
      "net",
      "net use",
      "net view",
      "net localgroup"
    ],
    "options": [
      {
        "flag": "user",
        "meaning": "Gérer les comptes"
      },
      {
        "flag": "localgroup",
        "meaning": "Gérer les groupes locaux"
      },
      {
        "flag": "use",
        "meaning": "Gérer les connexions réseau"
      },
      {
        "flag": "view",
        "meaning": "Afficher les ressources partagées"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-net-user",
    "name": "net user",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "net user [options] [arguments]",
    "examples": [
      "net user"
    ],
    "options": [
      {
        "flag": "/add",
        "meaning": "Créer un compte local"
      },
      {
        "flag": "/delete",
        "meaning": "Supprimer un compte"
      },
      {
        "flag": "/active:yes",
        "meaning": "Activer le compte"
      },
      {
        "flag": "/active:no",
        "meaning": "Désactiver le compte"
      },
      {
        "flag": "/domain",
        "meaning": "Exécuter l’opération sur le domaine si autorisé"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-sc",
    "name": "sc",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "sc [options] [arguments]",
    "examples": [
      "sc query",
      "sc queryex",
      "sc stop",
      "sc start"
    ],
    "options": [
      {
        "flag": "query",
        "meaning": "Afficher l’état des services"
      },
      {
        "flag": "queryex",
        "meaning": "Afficher des détails supplémentaires"
      },
      {
        "flag": "start",
        "meaning": "Démarrer un service"
      },
      {
        "flag": "stop",
        "meaning": "Arrêter un service"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-tasklist",
    "name": "tasklist",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "tasklist [options] [arguments]",
    "examples": [
      "tasklist",
      "tasklist /svc"
    ],
    "options": [
      {
        "flag": "/svc",
        "meaning": "Afficher les services hébergés par processus"
      },
      {
        "flag": "/fi",
        "meaning": "Filtrer les processus"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-taskkill",
    "name": "taskkill",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "taskkill [options] [arguments]",
    "examples": [
      "taskkill"
    ],
    "options": [
      {
        "flag": "/PID",
        "meaning": "Préciser le PID"
      },
      {
        "flag": "/IM",
        "meaning": "Préciser le nom de l’image"
      },
      {
        "flag": "/F",
        "meaning": "Forcer l’arrêt"
      },
      {
        "flag": "/T",
        "meaning": "Terminer aussi les processus enfants"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-systeminfo",
    "name": "systeminfo",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "systeminfo [arguments]",
    "examples": [
      "systeminfo"
    ],
    "options": [
      {
        "flag": "/fo csv",
        "meaning": "Afficher en CSV"
      },
      {
        "flag": "/s ORDINATEUR",
        "meaning": "Interroger un poste distant"
      },
      {
        "flag": "/nh",
        "meaning": "Masquer les en-têtes (table/csv)"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-driverquery",
    "name": "driverquery",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "driverquery [arguments]",
    "examples": [
      "driverquery"
    ],
    "options": [
      {
        "flag": "/v",
        "meaning": "Afficher les pilotes avec détails"
      },
      {
        "flag": "/si",
        "meaning": "Afficher les pilotes signés"
      },
      {
        "flag": "/fo csv",
        "meaning": "Afficher en CSV"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-wmic",
    "name": "wmic",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "wmic [arguments]",
    "examples": [
      "wmic"
    ],
    "options": [
      {
        "flag": "os get Caption",
        "meaning": "Afficher la version de Windows"
      },
      {
        "flag": "cpu get Name",
        "meaning": "Afficher le processeur"
      },
      {
        "flag": "logicaldisk get",
        "meaning": "Afficher les lecteurs logiques (outil déprécié)"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-gpresult",
    "name": "gpresult",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "gpresult [arguments]",
    "examples": [
      "gpresult /r"
    ],
    "options": [
      {
        "flag": "/r",
        "meaning": "Afficher un résumé des stratégies appliquées"
      },
      {
        "flag": "/h FICHIER",
        "meaning": "Générer un rapport HTML"
      },
      {
        "flag": "/scope user",
        "meaning": "Limiter aux stratégies utilisateur"
      },
      {
        "flag": "/scope computer",
        "meaning": "Limiter aux stratégies ordinateur"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-gpupdate",
    "name": "gpupdate",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "gpupdate [arguments]",
    "examples": [
      "gpupdate /force"
    ],
    "options": [
      {
        "flag": "/force",
        "meaning": "Réappliquer toutes les stratégies"
      },
      {
        "flag": "/target:user",
        "meaning": "Mettre à jour les stratégies utilisateur"
      },
      {
        "flag": "/target:computer",
        "meaning": "Mettre à jour les stratégies ordinateur"
      },
      {
        "flag": "/wait:SECONDES",
        "meaning": "Définir l’attente maximale"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-sfc",
    "name": "sfc",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "sfc [arguments]",
    "examples": [
      "sfc /scannow"
    ],
    "options": [
      {
        "flag": "/scannow",
        "meaning": "Vérifier et réparer les fichiers système"
      },
      {
        "flag": "/verifyonly",
        "meaning": "Vérifier sans réparer"
      },
      {
        "flag": "/scanfile",
        "meaning": "FICHIER=Analyser un fichier précis"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-chkdsk",
    "name": "chkdsk",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "chkdsk [arguments]",
    "examples": [
      "chkdsk"
    ],
    "options": [
      {
        "flag": "/f",
        "meaning": "Réparer les erreurs du système de fichiers"
      },
      {
        "flag": "/r",
        "meaning": "Rechercher les secteurs défectueux et récupérer les données lisibles"
      },
      {
        "flag": "/scan",
        "meaning": "Analyser en ligne sur NTFS"
      },
      {
        "flag": "/x",
        "meaning": "Forcer le démontage si nécessaire"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-cmd-eventcreate",
    "name": "eventcreate",
    "environment": "Windows CMD",
    "category": "CMD",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "eventcreate [arguments]",
    "examples": [
      "eventcreate"
    ],
    "options": [
      {
        "flag": "/id N",
        "meaning": "Définir l’identifiant de l’événement"
      },
      {
        "flag": "/t TYPE",
        "meaning": "Définir le type (ERROR, WARNING, INFORMATION)"
      },
      {
        "flag": "/so SOURCE",
        "meaning": "Définir la source"
      },
      {
        "flag": "/d TEXTE",
        "meaning": "Définir la description"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-location",
    "name": "Get-Location",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-Location [options] [arguments]",
    "examples": [
      "Get-Location"
    ],
    "options": [
      {
        "flag": "-PSProvider",
        "meaning": "Filtrer sur le fournisseur PowerShell"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-date",
    "name": "Get-Date",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-Date [options] [arguments]",
    "examples": [
      "Get-Date"
    ],
    "options": [
      {
        "flag": "-Format",
        "meaning": "Choisir le format de date et d’heure"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-process",
    "name": "Get-Process",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-Process [options] [arguments]",
    "examples": [
      "Get-Process"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer sur le nom du processus"
      },
      {
        "flag": "-Id",
        "meaning": "Filtrer sur un PID"
      },
      {
        "flag": "-IncludeUserName",
        "meaning": "Inclure le compte propriétaire si autorisé"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-stop-process",
    "name": "Stop-Process",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Stop-Process [options] [arguments]",
    "examples": [
      "Stop-Process -Id 5580"
    ],
    "options": [
      {
        "flag": "-Id",
        "meaning": "Identifier le processus par PID"
      },
      {
        "flag": "-Name",
        "meaning": "Identifier le processus par nom"
      },
      {
        "flag": "-Force",
        "meaning": "Forcer l’arrêt du processus"
      },
      {
        "flag": "-WhatIf",
        "meaning": "Simuler l’action sans l’exécuter"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-start-service",
    "name": "Start-Service",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Start-Service [options] [arguments]",
    "examples": [
      "Start-Service -Name Spooler"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Nom du service à démarrer"
      },
      {
        "flag": "-DisplayName",
        "meaning": "Nom affiché du service"
      },
      {
        "flag": "-WhatIf",
        "meaning": "Simuler le démarrage"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-clear-host",
    "name": "Clear-Host",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Clear-Host",
    "examples": [
      "Clear-Host"
    ],
    "options": [
      {
        "flag": "(sans paramètre)",
        "meaning": "Effacer l’affichage de la console PowerShell"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-printer",
    "name": "Get-Printer",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-Printer [options] [arguments]",
    "examples": [
      "Get-Printer"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer par imprimante"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-printjob",
    "name": "Get-PrintJob",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-PrintJob [options] [arguments]",
    "examples": [
      "Get-PrintJob"
    ],
    "options": [
      {
        "flag": "-PrinterName",
        "meaning": "Nom de l’imprimante dont afficher les travaux"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-printerport",
    "name": "Get-PrinterPort",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-PrinterPort [options] [arguments]",
    "examples": [
      "Get-PrinterPort"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer sur le port d’imprimante"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-get-printerdriver",
    "name": "Get-PrinterDriver",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Get-PrinterDriver [options] [arguments]",
    "examples": [
      "Get-PrinterDriver"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Filtrer sur le pilote d’imprimante"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v6-powershell-restart-service",
    "name": "Restart-Service",
    "environment": "PowerShell",
    "category": "PowerShell",
    "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
    "syntax": "Restart-Service [options] [arguments]",
    "examples": [
      "Restart-Service Spooler"
    ],
    "options": [
      {
        "flag": "-Name",
        "meaning": "Nom du service à redémarrer"
      },
      {
        "flag": "-Force",
        "meaning": "Forcer le redémarrage lorsque possible"
      },
      {
        "flag": "-WhatIf",
        "meaning": "Simuler sans modifier"
      }
    ],
    "notes": "Simulateur terminal"
  },
  {
    "id": "v10-vim-221",
    "name": "i",
    "environment": "Vim",
    "category": "Vim",
    "description": "Passer en insertion avant le curseur",
    "syntax": "i",
    "examples": [
      "i"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; insertion à la position du curseur."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-222",
    "name": "I",
    "environment": "Vim",
    "category": "Vim",
    "description": "Insérer au début de la ligne",
    "syntax": "I",
    "examples": [
      "I"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; insertion au premier caractère non blanc."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-223",
    "name": "a",
    "environment": "Vim",
    "category": "Vim",
    "description": "Insérer après le curseur",
    "syntax": "a",
    "examples": [
      "a"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; insertion juste après le curseur."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-224",
    "name": "A",
    "environment": "Vim",
    "category": "Vim",
    "description": "Insérer à la fin de la ligne",
    "syntax": "A",
    "examples": [
      "A"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; insertion à la fin de la ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-225",
    "name": "o",
    "environment": "Vim",
    "category": "Vim",
    "description": "Ouvrir une ligne en dessous",
    "syntax": "o",
    "examples": [
      "o"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; crée une ligne sous la ligne courante et passe en insertion."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-226",
    "name": "O",
    "environment": "Vim",
    "category": "Vim",
    "description": "Ouvrir une ligne au-dessus",
    "syntax": "O",
    "examples": [
      "O"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; crée une ligne au-dessus et passe en insertion."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-227",
    "name": "Esc",
    "environment": "Vim",
    "category": "Vim",
    "description": "Revenir au mode normal",
    "syntax": "Esc",
    "examples": [
      "Esc"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Quitte le mode insertion, visuel ou une commande en cours."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-228",
    "name": "h",
    "environment": "Vim",
    "category": "Vim",
    "description": "Déplacer le curseur à gauche",
    "syntax": "h",
    "examples": [
      "h"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; déplacement d’un caractère à gauche."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-229",
    "name": "j",
    "environment": "Vim",
    "category": "Vim",
    "description": "Déplacer le curseur vers le bas",
    "syntax": "j",
    "examples": [
      "j"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; déplacement d’une ligne vers le bas."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-230",
    "name": "k",
    "environment": "Vim",
    "category": "Vim",
    "description": "Déplacer le curseur vers le haut",
    "syntax": "k",
    "examples": [
      "k"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; déplacement d’une ligne vers le haut."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-231",
    "name": "l",
    "environment": "Vim",
    "category": "Vim",
    "description": "Déplacer le curseur à droite",
    "syntax": "l",
    "examples": [
      "l"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; déplacement d’un caractère à droite."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-232",
    "name": "w",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller au mot suivant",
    "syntax": "w",
    "examples": [
      "w"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; aller au début du mot suivant."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-233",
    "name": "b",
    "environment": "Vim",
    "category": "Vim",
    "description": "Revenir au mot précédent",
    "syntax": "b",
    "examples": [
      "b"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; aller au début du mot précédent."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-234",
    "name": "e",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller à la fin du mot",
    "syntax": "e",
    "examples": [
      "e"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; positionner le curseur à la fin du mot."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-235",
    "name": "0",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller au début physique de la ligne",
    "syntax": "0",
    "examples": [
      "0"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; se placer en colonne zéro."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-236",
    "name": "^",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller au premier caractère non blanc",
    "syntax": "^",
    "examples": [
      "^"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; ignorer les espaces initiaux."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-237",
    "name": "$",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller à la fin de la ligne",
    "syntax": "$",
    "examples": [
      "$"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; se placer au dernier caractère de la ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-238",
    "name": "gg",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller au début du fichier",
    "syntax": "gg",
    "examples": [
      "gg"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; première ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-239",
    "name": "G",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller à la fin du fichier",
    "syntax": "G",
    "examples": [
      "G"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; dernière ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-240",
    "name": "nG",
    "environment": "Vim",
    "category": "Vim",
    "description": "Aller à la ligne n",
    "syntax": "42G",
    "examples": [
      "42G"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; remplacer 42 par le numéro de ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-241",
    "name": "Ctrl+f",
    "environment": "Vim",
    "category": "Vim",
    "description": "Descendre d’une page",
    "syntax": "Ctrl+f",
    "examples": [
      "Ctrl+f"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; défilement d’un écran vers le bas."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-242",
    "name": "Ctrl+b",
    "environment": "Vim",
    "category": "Vim",
    "description": "Remonter d’une page",
    "syntax": "Ctrl+b",
    "examples": [
      "Ctrl+b"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; défilement d’un écran vers le haut."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-243",
    "name": "x",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer le caractère sous le curseur",
    "syntax": "x",
    "examples": [
      "x"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; supprime le caractère courant."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-244",
    "name": "X",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer le caractère précédent",
    "syntax": "X",
    "examples": [
      "X"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; supprime le caractère avant le curseur."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-245",
    "name": "dd",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer la ligne courante",
    "syntax": "dd",
    "examples": [
      "dd"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; la ligne supprimée est placée dans un registre."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-246",
    "name": "3dd",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer trois lignes",
    "syntax": "3dd",
    "examples": [
      "3dd"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; le nombre avant dd indique combien de lignes supprimer."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-247",
    "name": "dw",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer jusqu’au début du mot suivant",
    "syntax": "dw",
    "examples": [
      "dw"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; supprimer depuis le curseur jusqu’au début du mot suivant."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-248",
    "name": "d$",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer jusqu’à la fin de la ligne",
    "syntax": "d$",
    "examples": [
      "d$"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; supprimer du curseur à la fin de la ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-249",
    "name": "D",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer jusqu’à la fin de la ligne",
    "syntax": "D",
    "examples": [
      "D"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; équivalent à d$."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-250",
    "name": "yy",
    "environment": "Vim",
    "category": "Vim",
    "description": "Copier la ligne courante",
    "syntax": "yy",
    "examples": [
      "yy"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; copie la ligne dans un registre."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-251",
    "name": "3yy",
    "environment": "Vim",
    "category": "Vim",
    "description": "Copier trois lignes",
    "syntax": "3yy",
    "examples": [
      "3yy"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; le nombre indique combien de lignes copier."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-252",
    "name": "yw",
    "environment": "Vim",
    "category": "Vim",
    "description": "Copier jusqu’au mot suivant",
    "syntax": "yw",
    "examples": [
      "yw"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; copie depuis le curseur jusqu’au début du mot suivant."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-253",
    "name": "p",
    "environment": "Vim",
    "category": "Vim",
    "description": "Coller après le curseur",
    "syntax": "p",
    "examples": [
      "p"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; colle après le curseur ou sous la ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-254",
    "name": "P",
    "environment": "Vim",
    "category": "Vim",
    "description": "Coller avant le curseur",
    "syntax": "P",
    "examples": [
      "P"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; colle avant le curseur ou au-dessus de la ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-255",
    "name": "u",
    "environment": "Vim",
    "category": "Vim",
    "description": "Annuler la dernière modification",
    "syntax": "u",
    "examples": [
      "u"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; annule une modification."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-256",
    "name": "Ctrl+r",
    "environment": "Vim",
    "category": "Vim",
    "description": "Rétablir une modification annulée",
    "syntax": "Ctrl+r",
    "examples": [
      "Ctrl+r"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; rétablit une action annulée avec u."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-257",
    "name": ".",
    "environment": "Vim",
    "category": "Vim",
    "description": "Répéter la dernière modification",
    "syntax": ".",
    "examples": [
      "."
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; rejoue la dernière commande de modification."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-258",
    "name": "r",
    "environment": "Vim",
    "category": "Vim",
    "description": "Remplacer un caractère",
    "syntax": "rX",
    "examples": [
      "rX"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; r suivi du caractère de remplacement."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-259",
    "name": "R",
    "environment": "Vim",
    "category": "Vim",
    "description": "Activer le mode remplacement",
    "syntax": "R",
    "examples": [
      "R"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; saisie en écrasant les caractères existants."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-260",
    "name": "cc",
    "environment": "Vim",
    "category": "Vim",
    "description": "Changer toute la ligne",
    "syntax": "cc",
    "examples": [
      "cc"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; efface le contenu de la ligne et passe en insertion."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-261",
    "name": "cw",
    "environment": "Vim",
    "category": "Vim",
    "description": "Changer un mot",
    "syntax": "cw",
    "examples": [
      "cw"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; supprime jusqu’au mot suivant et passe en insertion."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-262",
    "name": "v",
    "environment": "Vim",
    "category": "Vim",
    "description": "Activer la sélection visuelle",
    "syntax": "v",
    "examples": [
      "v"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; sélection caractère par caractère."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-263",
    "name": "V",
    "environment": "Vim",
    "category": "Vim",
    "description": "Sélectionner des lignes",
    "syntax": "V",
    "examples": [
      "V"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; sélection par lignes complètes."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-264",
    "name": "Ctrl+v",
    "environment": "Vim",
    "category": "Vim",
    "description": "Sélectionner un bloc rectangulaire",
    "syntax": "Ctrl+v",
    "examples": [
      "Ctrl+v"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; sélection en colonnes (mode visuel bloc)."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-265",
    "name": ":w",
    "environment": "Vim",
    "category": "Vim",
    "description": "Enregistrer le fichier",
    "syntax": ":w",
    "examples": [
      ":w"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; enregistre les modifications."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-266",
    "name": ":q",
    "environment": "Vim",
    "category": "Vim",
    "description": "Quitter Vim",
    "syntax": ":q",
    "examples": [
      ":q"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; quitte si aucune modification non enregistrée."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-267",
    "name": ":q!",
    "environment": "Vim",
    "category": "Vim",
    "description": "Quitter sans enregistrer",
    "syntax": ":q!",
    "examples": [
      ":q!"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; abandonne les modifications non enregistrées."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-268",
    "name": ":wq",
    "environment": "Vim",
    "category": "Vim",
    "description": "Enregistrer et quitter",
    "syntax": ":wq",
    "examples": [
      ":wq"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; sauvegarde puis quitte."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-269",
    "name": ":x",
    "environment": "Vim",
    "category": "Vim",
    "description": "Enregistrer si nécessaire et quitter",
    "syntax": ":x",
    "examples": [
      ":x"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; écrit si le fichier a été modifié puis quitte."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-270",
    "name": ":w fichier",
    "environment": "Vim",
    "category": "Vim",
    "description": "Enregistrer sous un autre nom",
    "syntax": ":w copie.txt",
    "examples": [
      ":w copie.txt"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; écrit le contenu dans le fichier indiqué."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-271",
    "name": ":e fichier",
    "environment": "Vim",
    "category": "Vim",
    "description": "Ouvrir un fichier",
    "syntax": ":e /etc/hosts",
    "examples": [
      ":e /etc/hosts"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; édite le fichier indiqué."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-272",
    "name": ":set number",
    "environment": "Vim",
    "category": "Vim",
    "description": "Afficher les numéros de ligne",
    "syntax": ":set number",
    "examples": [
      ":set number"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; active la numérotation."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-273",
    "name": ":set nonumber",
    "environment": "Vim",
    "category": "Vim",
    "description": "Masquer les numéros de ligne",
    "syntax": ":set nonumber",
    "examples": [
      ":set nonumber"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; désactive la numérotation."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-274",
    "name": ":set autoindent",
    "environment": "Vim",
    "category": "Vim",
    "description": "Activer l’indentation automatique",
    "syntax": ":set autoindent",
    "examples": [
      ":set autoindent"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; reprend l’indentation de la ligne précédente."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-275",
    "name": ":set paste",
    "environment": "Vim",
    "category": "Vim",
    "description": "Activer le mode collage",
    "syntax": ":set paste",
    "examples": [
      ":set paste"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; limite l’auto-indentation pendant le collage."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-276",
    "name": ":set nopaste",
    "environment": "Vim",
    "category": "Vim",
    "description": "Désactiver le mode collage",
    "syntax": ":set nopaste",
    "examples": [
      ":set nopaste"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; restaure le comportement normal."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-277",
    "name": ":syntax on",
    "environment": "Vim",
    "category": "Vim",
    "description": "Activer la coloration syntaxique",
    "syntax": ":syntax on",
    "examples": [
      ":syntax on"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; active la coloration syntaxique."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-278",
    "name": ":set ignorecase",
    "environment": "Vim",
    "category": "Vim",
    "description": "Ignorer la casse lors des recherches",
    "syntax": ":set ignorecase",
    "examples": [
      ":set ignorecase"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; rend la recherche insensible à la casse."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-279",
    "name": ":set hlsearch",
    "environment": "Vim",
    "category": "Vim",
    "description": "Surligner les résultats de recherche",
    "syntax": ":set hlsearch",
    "examples": [
      ":set hlsearch"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; surligne les correspondances."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-280",
    "name": "/motif",
    "environment": "Vim",
    "category": "Vim",
    "description": "Rechercher vers l’avant",
    "syntax": "/erreur",
    "examples": [
      "/erreur"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; / suivi du texte ou motif à chercher."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-281",
    "name": "?motif",
    "environment": "Vim",
    "category": "Vim",
    "description": "Rechercher vers l’arrière",
    "syntax": "?erreur",
    "examples": [
      "?erreur"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; ? suivi du motif recherché."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-282",
    "name": "n",
    "environment": "Vim",
    "category": "Vim",
    "description": "Résultat suivant",
    "syntax": "n",
    "examples": [
      "n"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; répète la recherche dans le même sens."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-283",
    "name": "N",
    "environment": "Vim",
    "category": "Vim",
    "description": "Résultat précédent",
    "syntax": "N",
    "examples": [
      "N"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode normal ; répète la recherche dans le sens opposé."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-284",
    "name": ":%s/ancien/nouveau/g",
    "environment": "Vim",
    "category": "Vim",
    "description": "Remplacer toutes les occurrences",
    "syntax": ":%s/ancien/nouveau/g",
    "examples": [
      ":%s/ancien/nouveau/g"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; % = toutes les lignes, g = toutes les occurrences par ligne."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-285",
    "name": ":%s/ancien/nouveau/gc",
    "environment": "Vim",
    "category": "Vim",
    "description": "Remplacer avec confirmation",
    "syntax": ":%s/ancien/nouveau/gc",
    "examples": [
      ":%s/ancien/nouveau/gc"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; c demande confirmation pour chaque remplacement."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-286",
    "name": ":g/motif/d",
    "environment": "Vim",
    "category": "Vim",
    "description": "Supprimer les lignes correspondant à un motif",
    "syntax": ":g/^#/d",
    "examples": [
      ":g/^#/d"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; supprime toutes les lignes correspondant au motif."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-vim-287",
    "name": ":help",
    "environment": "Vim",
    "category": "Vim",
    "description": "Ouvrir l’aide de Vim",
    "syntax": ":help",
    "examples": [
      ":help"
    ],
    "options": [
      {
        "flag": "Mode et utilisation",
        "meaning": "Mode commande ; :help sujet affiche la documentation du sujet."
      }
    ],
    "notes": "Raccourci interne de Vim : à saisir dans le mode indiqué, sans lancer de commande shell."
  },
  {
    "id": "v10-curated-htop",
    "name": "htop",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher et gérer les processus de façon interactive",
    "syntax": "htop [options]",
    "examples": [
      "htop",
      "htop -u root"
    ],
    "options": [
      {
        "flag": "-d DIXIEMES",
        "meaning": "Définir le délai de rafraîchissement en dixièmes de seconde."
      },
      {
        "flag": "-u UTILISATEUR",
        "meaning": "Afficher uniquement les processus de cet utilisateur."
      },
      {
        "flag": "-p PID1,PID2",
        "meaning": "Limiter la vue aux PID indiqués."
      },
      {
        "flag": "-s COLONNE",
        "meaning": "Trier sur la colonne indiquée."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-pkill",
    "name": "pkill",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Envoyer un signal aux processus correspondant à un nom ou motif",
    "syntax": "pkill [options] motif",
    "examples": [
      "pkill -f mon_script.py",
      "pkill -TERM nginx"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Faire correspondre le motif à la ligne de commande complète."
      },
      {
        "flag": "-u UTILISATEUR",
        "meaning": "Limiter aux processus de cet utilisateur."
      },
      {
        "flag": "-SIGNAL",
        "meaning": "Choisir le signal envoyé ; TERM par défaut."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-killall",
    "name": "killall",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Envoyer un signal aux processus portant un nom donné",
    "syntax": "killall [options] nom",
    "examples": [
      "killall -s TERM firefox"
    ],
    "options": [
      {
        "flag": "-s SIGNAL",
        "meaning": "Envoyer le signal indiqué."
      },
      {
        "flag": "-i",
        "meaning": "Demander confirmation avant chaque signal."
      },
      {
        "flag": "-u UTILISATEUR",
        "meaning": "Limiter aux processus de cet utilisateur."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-nice",
    "name": "nice",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Lancer un processus avec une priorité d’ordonnancement ajustée",
    "syntax": "nice [-n AJUSTEMENT] commande",
    "examples": [
      "nice -n 10 tar -cf archive.tar /var/log"
    ],
    "options": [
      {
        "flag": "-n AJUSTEMENT",
        "meaning": "Appliquer une valeur de nice relative (priorité CPU) ; valeur par défaut 10."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-renice",
    "name": "renice",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Modifier la valeur de nice d’un processus existant",
    "syntax": "renice -n PRIORITE -p PID",
    "examples": [
      "renice -n 10 -p 1234"
    ],
    "options": [
      {
        "flag": "-n PRIORITE",
        "meaning": "Définir la nouvelle valeur de nice."
      },
      {
        "flag": "-p PID",
        "meaning": "Cibler un identifiant de processus."
      },
      {
        "flag": "-u UTILISATEUR",
        "meaning": "Cibler les processus d’un utilisateur."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-jobs",
    "name": "jobs",
    "environment": "Bash",
    "category": "Bash",
    "description": "Lister les tâches gérées par le shell courant",
    "syntax": "jobs [options]",
    "examples": [
      "jobs",
      "jobs -l"
    ],
    "options": [
      {
        "flag": "-l",
        "meaning": "Afficher également les PID."
      },
      {
        "flag": "-p",
        "meaning": "Afficher seulement les PID des tâches."
      },
      {
        "flag": "-r",
        "meaning": "Afficher uniquement les tâches en cours."
      },
      {
        "flag": "-s",
        "meaning": "Afficher uniquement les tâches suspendues."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-fg",
    "name": "fg",
    "environment": "Bash",
    "category": "Bash",
    "description": "Ramener une tâche en avant-plan",
    "syntax": "fg [%numero]",
    "examples": [
      "fg %1"
    ],
    "options": [
      {
        "flag": "%numero",
        "meaning": "Identifier le numéro de tâche affiché par jobs ; sans argument, tâche courante."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-bg",
    "name": "bg",
    "environment": "Bash",
    "category": "Bash",
    "description": "Reprendre une tâche suspendue en arrière-plan",
    "syntax": "bg [%numero]",
    "examples": [
      "bg %1"
    ],
    "options": [
      {
        "flag": "%numero",
        "meaning": "Identifier la tâche à reprendre en arrière-plan."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-nohup",
    "name": "nohup",
    "environment": "Bash",
    "category": "Bash",
    "description": "Lancer une commande en ignorant le signal SIGHUP",
    "syntax": "nohup commande [arguments]",
    "examples": [
      "nohup ./sauvegarde.sh > sauvegarde.log 2>&1 &"
    ],
    "options": [
      {
        "flag": "commande",
        "meaning": "Programme à lancer ; la sortie peut être redirigée vers nohup.out."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-unset",
    "name": "unset",
    "environment": "Bash",
    "category": "Bash",
    "description": "Supprimer une variable ou une fonction du shell",
    "syntax": "unset [options] nom",
    "examples": [
      "unset MA_VARIABLE",
      "unset -f ma_fonction"
    ],
    "options": [
      {
        "flag": "-v",
        "meaning": "Supprimer une variable shell."
      },
      {
        "flag": "-f",
        "meaning": "Supprimer une fonction shell."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-sleep",
    "name": "sleep",
    "environment": "Bash",
    "category": "Bash",
    "description": "Suspendre l’exécution pendant une durée",
    "syntax": "sleep DUREE[SUFFIXE]",
    "examples": [
      "sleep 5",
      "sleep 2m"
    ],
    "options": [
      {
        "flag": "s",
        "meaning": "Secondes (valeur par défaut)."
      },
      {
        "flag": "m",
        "meaning": "Minutes."
      },
      {
        "flag": "h",
        "meaning": "Heures."
      },
      {
        "flag": "d",
        "meaning": "Jours."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-shopt",
    "name": "shopt",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher ou modifier les options spécifiques de Bash",
    "syntax": "shopt [-s|-u|-p] [option]",
    "examples": [
      "shopt -s nullglob",
      "shopt -p globstar"
    ],
    "options": [
      {
        "flag": "-s",
        "meaning": "Activer l’option spécifiée."
      },
      {
        "flag": "-u",
        "meaning": "Désactiver l’option spécifiée."
      },
      {
        "flag": "-p",
        "meaning": "Afficher les options sous une forme réutilisable dans un script."
      },
      {
        "flag": "nullglob",
        "meaning": "Motif sans correspondance remplacé par une liste vide."
      },
      {
        "flag": "globstar",
        "meaning": "Activer ** pour parcourir récursivement les répertoires."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-logname",
    "name": "logname",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher le nom de connexion initial de la session",
    "syntax": "logname",
    "examples": [
      "logname"
    ],
    "options": [],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-tty",
    "name": "tty",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher le terminal associé à l’entrée standard",
    "syntax": "tty [options]",
    "examples": [
      "tty"
    ],
    "options": [
      {
        "flag": "-s",
        "meaning": "Mode silencieux ; le code de retour indique si l’entrée est un terminal."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-env",
    "name": "env",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher l’environnement ou exécuter une commande avec un environnement modifié",
    "syntax": "env [options] [NOM=VALEUR] [commande]",
    "examples": [
      "env",
      "env LANG=C date"
    ],
    "options": [
      {
        "flag": "-i",
        "meaning": "Démarrer avec un environnement vide."
      },
      {
        "flag": "-u NOM",
        "meaning": "Supprimer une variable de l’environnement transmis."
      },
      {
        "flag": "NOM=VALEUR",
        "meaning": "Définir temporairement une variable pour la commande."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-cal",
    "name": "cal",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher un calendrier dans le terminal",
    "syntax": "cal [options] [mois] [annee]",
    "examples": [
      "cal",
      "cal -y 2026"
    ],
    "options": [
      {
        "flag": "-3",
        "meaning": "Afficher le mois précédent, courant et suivant."
      },
      {
        "flag": "-y",
        "meaning": "Afficher toute l’année."
      },
      {
        "flag": "-m",
        "meaning": "Commencer la semaine le lundi sur les versions compatibles."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-logout",
    "name": "logout",
    "environment": "Bash",
    "category": "Bash",
    "description": "Fermer un shell de connexion",
    "syntax": "logout",
    "examples": [
      "logout"
    ],
    "options": [],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-readlink",
    "name": "readlink",
    "environment": "Bash",
    "category": "Bash",
    "description": "Afficher la cible d’un lien symbolique ou résoudre un chemin",
    "syntax": "readlink [options] chemin",
    "examples": [
      "readlink /bin/sh",
      "readlink -f /bin/sh"
    ],
    "options": [
      {
        "flag": "-f",
        "meaning": "Résoudre récursivement les liens symboliques et normaliser le chemin."
      },
      {
        "flag": "-e",
        "meaning": "Exiger que tous les composants du chemin existent."
      },
      {
        "flag": "-n",
        "meaning": "Ne pas ajouter de saut de ligne final."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-dos2unix",
    "name": "dos2unix",
    "environment": "Bash",
    "category": "Bash",
    "description": "Convertir les fins de ligne CRLF Windows vers LF Unix",
    "syntax": "dos2unix [options] fichier",
    "examples": [
      "dos2unix script.sh"
    ],
    "options": [
      {
        "flag": "-n SOURCE DESTINATION",
        "meaning": "Écrire le résultat dans un nouveau fichier."
      },
      {
        "flag": "-k",
        "meaning": "Conserver la date du fichier d’origine."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-unix2dos",
    "name": "unix2dos",
    "environment": "Bash",
    "category": "Bash",
    "description": "Convertir les fins de ligne LF Unix vers CRLF Windows",
    "syntax": "unix2dos [options] fichier",
    "examples": [
      "unix2dos fichier.txt"
    ],
    "options": [
      {
        "flag": "-n SOURCE DESTINATION",
        "meaning": "Écrire le résultat dans un nouveau fichier."
      },
      {
        "flag": "-k",
        "meaning": "Conserver la date du fichier d’origine."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-wall",
    "name": "wall",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Envoyer un message aux utilisateurs connectés",
    "syntax": "wall [options] [fichier]",
    "examples": [
      "echo \"Maintenance à 22 h\" | wall"
    ],
    "options": [
      {
        "flag": "-n",
        "meaning": "Ne pas afficher la bannière de diffusion."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  },
  {
    "id": "v10-curated-lsb_release",
    "name": "lsb_release",
    "environment": "Linux — Administration",
    "category": "Linux — Administration",
    "description": "Afficher les informations de la distribution Linux",
    "syntax": "lsb_release [options]",
    "examples": [
      "lsb_release -a"
    ],
    "options": [
      {
        "flag": "-a",
        "meaning": "Afficher toutes les informations disponibles."
      },
      {
        "flag": "-d",
        "meaning": "Afficher la description."
      },
      {
        "flag": "-r",
        "meaning": "Afficher la version."
      }
    ],
    "notes": "Commande documentée pour la révision TSSR. Les options disponibles peuvent varier selon la version installée."
  }
];
