/* Répertoire de commandes extrait de commandes_TSSR.txt — TSSR V6 */
window.TSSR_COMMANDES_V6 = [
 {
  "id": "v6-linux-administration-ip",
  "name": "ip",
  "environment": "Linux / Bash",
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
    "flag": "show         Afficher",
    "meaning": "add/del      Ajouter ou supprimer"
   }
  ],
  "notes": "La communication · Les premières commandes · L’adressage IPV4 · Fiche mémo Bash · Fiche avec options · Catalogue réseau · Simulateur terminal"
 },
 {
  "id": "v6-linux-administration-ping",
  "name": "ping",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "La communication · Les premières commandes · L’adressage IPV4 · Fiche mémo Bash · Catalogue réseau · Simulateur terminal"
 },
 {
  "id": "v6-linux-administration-tracepath",
  "name": "tracepath",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Observer le chemin vers une destination si l'outil est installé ; traceroute est une alternative, pas un doublon de cette entrée.",
  "syntax": "tracepath [options] [arguments]",
  "examples": [
   "tracepath 192.168.2.140",
   "tracepath destination"
  ],
  "options": [],
  "notes": "La communication · Catalogue réseau"
 },
 {
  "id": "v6-bash-tcpdump",
  "name": "tcpdump",
  "environment": "Bash",
  "category": "Bash",
  "description": "Capturer les trames ARP et paquets ICMP sur eth0 si tcpdump est installé ; -n désactive la résolution des noms, -i choisit l'interface. À utiliser uniquement sur un réseau autorisé.",
  "syntax": "tcpdump [options] [arguments]",
  "examples": [
   "tcpdump -ni eth0 'arp or icmp'"
  ],
  "options": [
   {
    "flag": "-ni",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "La communication"
 },
 {
  "id": "v6-linux-administration-arp",
  "name": "arp",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher et gérer le cache ARP IPv4. Options : -a, -n, -i, -s, -d. Windows et Linux (ancien outil).",
  "syntax": "arp [options] [arguments]",
  "examples": [
   "arp",
   "arp -a",
   "arp -n [adresse_ip]"
  ],
  "options": [
   {
    "flag": "-a",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-n",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "notes": "Les premières commandes · L’adressage IPV4 · Fiche avec options · Catalogue réseau · Simulateur terminal"
 },
 {
  "id": "v6-linux-administration-netstat",
  "name": "netstat",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Examiner les connexions, ports et statistiques réseau. Linux : -a, -n, -t, -u, -l, -p, -r, -i. Windows : -a, -n, -o, -r, -e, -s.",
  "syntax": "netstat [options] [arguments]",
  "examples": [
   "netstat"
  ],
  "options": [],
  "notes": "Les premières commandes"
 },
 {
  "id": "v6-linux-administration-ss",
  "name": "ss",
  "environment": "Linux / Bash",
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
  "environment": "Linux / Bash",
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
    "flag": "-n",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-I",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-T",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-p",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-m",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-w",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Les premières commandes · Fiche mémo Bash · Catalogue réseau"
 },
 {
  "id": "v6-linux-administration-apt",
  "name": "apt",
  "environment": "Linux / Bash",
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
    "meaning": "Actualiser la liste des paquets"
   },
   {
    "flag": "upgrade",
    "meaning": "Mettre à niveau les paquets"
   },
   {
    "flag": "install      Installer",
    "meaning": "remove       Désinstaller sans purger la configuration"
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
  "notes": "Les premières commandes · Gestion des paquets logiciels · Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-bash-printf",
  "name": "printf",
  "environment": "Bash",
  "category": "Bash",
  "description": "Convertir 11001 de la base 2 vers la base 10 : affiche 25. 2# indique la base binaire et %d le format décimal.",
  "syntax": "printf [options] [arguments]",
  "examples": [
   "printf '%d\\n' \"$((2#11001))\"",
   "printf '%x\\n' 254",
   "printf '%o\\n' 156",
   "printf '%d\\n' 0x3F"
  ],
  "options": [],
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/etc",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "flag": "-p",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "options": [],
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
    "flag": "-IPAddress",
    "meaning": "Filtrer par adresse IP"
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
  "syntax": "get-netipconfiguration [options] [arguments]",
  "examples": [
   "Get-NetIPConfiguration"
  ],
  "options": [],
  "notes": "L’adressage IPV4 · Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-netroute",
  "name": "Get-NetRoute",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Afficher les routes IPv4 en PowerShell.",
  "syntax": "get-netroute [options] [arguments]",
  "examples": [
   "Get-NetRoute -AddressFamily IPv4"
  ],
  "options": [
   {
    "flag": "-AddressFamily",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "L’adressage IPV4"
 },
 {
  "id": "v6-linux-administration-passwd",
  "name": "passwd",
  "environment": "Linux / Bash",
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
  "notes": "Debian en mode maintenance · Droits sur les fichiers et répertoires · Gestion des utilisateurs et des groupes · Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-linux-administration-mount",
  "name": "mount",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Monter un volume ext4. Option : -t = type ; ext4 = FS ; premier chemin = source ; second = point de montage. Autre option : -o (ro,rw,sync,async,exec,noexec,suid,nosuid,remount).",
  "syntax": "mount [options] [arguments]",
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
    "flag": "-o",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-t",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/srv",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/mnt",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-a",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Debian en mode maintenance · Gestion des espaces de stockage - File System · Fiche mémo Bash"
 },
 {
  "id": "v6-bash-sync",
  "name": "sync",
  "environment": "Bash",
  "category": "Bash",
  "description": "Demander la synchronisation des écritures en attente vers le stockage. Sans option.",
  "syntax": "sync [options] [arguments]",
  "examples": [
   "sync"
  ],
  "options": [],
  "notes": "Debian en mode maintenance"
 },
 {
  "id": "v6-linux-administration-reboot",
  "name": "reboot",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Demander un redémarrage quand le système le permet. Sans option.",
  "syntax": "reboot [options] [arguments]",
  "examples": [
   "reboot"
  ],
  "options": [],
  "notes": "Debian en mode maintenance · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-lsblk",
  "name": "lsblk",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "cat [options] [arguments]",
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
    "flag": "/etc",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Debian en mode maintenance · Droits sur les fichiers et répertoires · Gestion des paquets logiciels · Gestion des utilisateurs et des groupes · Fiche mémo Bash"
 },
 {
  "id": "v6-powershell-update-grub",
  "name": "update-grub",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Régénérer la configuration GRUB du système installé. Sans option.",
  "syntax": "update-grub [options] [arguments]",
  "examples": [
   "update-grub"
  ],
  "options": [],
  "notes": "Debian en mode maintenance"
 },
 {
  "id": "v6-linux-administration-shutdown",
  "name": "shutdown",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Demander un arrêt normal si init fonctionne. -h : arrêt ; now : immédiatement. Peut échouer avec init=/bin/bash.",
  "syntax": "shutdown [options] [arguments]",
  "examples": [
   "shutdown -h now"
  ],
  "options": [
   {
    "flag": "-h",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Debian en mode maintenance"
 },
 {
  "id": "v6-bash-init",
  "name": "init",
  "environment": "Bash",
  "category": "Bash",
  "description": "Demander le passage au niveau d’arrêt lorsque le système init est actif. 0 : arrêt ; non adapté au shell direct.",
  "syntax": "init [options] [arguments]",
  "examples": [
   "init 0"
  ],
  "options": [],
  "notes": "Debian en mode maintenance"
 },
 {
  "id": "v6-linux-administration-chmod",
  "name": "chmod",
  "environment": "Linux / Bash",
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
  "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash · Fiche avec options · Simulateur terminal"
 },
 {
  "id": "v6-linux-administration-chown",
  "name": "chown",
  "environment": "Linux / Bash",
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
    "meaning": "Afficher les changements"
   },
   {
    "flag": "-h",
    "meaning": "Modifier le lien symbolique plutôt que sa cible"
   }
  ],
  "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-linux-administration-chgrp",
  "name": "chgrp",
  "environment": "Linux / Bash",
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
    "flag": "/data",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/srv",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-bash-umask",
  "name": "umask",
  "environment": "Bash",
  "category": "Bash",
  "description": "Définir le masque de création : fichiers 640, dossiers 750. 0027 : bits de permissions retirés.",
  "syntax": "umask [options] [arguments]",
  "examples": [
   "umask",
   "umask 0027"
  ],
  "options": [],
  "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash"
 },
 {
  "id": "v6-bash-touch",
  "name": "touch",
  "environment": "Bash",
  "category": "Bash",
  "description": "Créer un fichier témoin pour visualiser le masquage d’un dossier par un montage. Argument : chemin du fichier.",
  "syntax": "touch [options] [arguments]",
  "examples": [
   "touch testumask01",
   "touch /var/www/PASMONTE",
   "touch testjdoe",
   "touch f"
  ],
  "options": [
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/srv",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "cd [options] [arguments]",
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
    "flag": "/data",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/usr",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/etc",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "flag": "/etc",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "options": [],
  "notes": "Droits sur les fichiers et répertoires · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-fdisk",
  "name": "fdisk",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-udevadm",
  "name": "udevadm",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Identifie le chemin du périphérique /dev/sda dans sysfs. --query et --name sont des options longues.",
  "syntax": "udevadm [options] [arguments]",
  "examples": [
   "udevadm info --query=path --name=/dev/sda"
  ],
  "options": [
   {
    "flag": "--query",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "--name",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "echo [options] [arguments]",
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
    "flag": "/sys",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Gestion des utilisateurs et des groupes · Fiche mémo Bash"
 },
 {
  "id": "v6-bash-dmesg",
  "name": "dmesg",
  "environment": "Bash",
  "category": "Bash",
  "description": "Affiche les messages du noyau Linux, utiles pour vérifier la détection d'un disque. Peut nécessiter sudo.",
  "syntax": "dmesg [options] [arguments]",
  "examples": [
   "dmesg",
   "dmesg | tail"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-pvcreate",
  "name": "pvcreate",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Initialiser une partition de test comme volume physique (PV). Peut accepter plusieurs périphériques.",
  "syntax": "pvcreate [options] [arguments]",
  "examples": [
   "pvcreate /dev/sdb1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-vgcreate",
  "name": "vgcreate",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Créer le groupe de volumes (VG) vgdata à partir du PV indiqué. Peut accepter plusieurs PV.",
  "syntax": "vgcreate [options] [arguments]",
  "examples": [
   "vgcreate vgdata /dev/sdb1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-lvcreate",
  "name": "lvcreate",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-vgextend",
  "name": "vgextend",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Ajouter un PV existant au VG vgdata pour augmenter sa capacité.",
  "syntax": "vgextend [options] [arguments]",
  "examples": [
   "vgextend vgdata /dev/sdc1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-lvextend",
  "name": "lvextend",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-l",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-rL",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-lvreduce",
  "name": "lvreduce",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Consulter l'aide de la commande de réduction d'un LV sans effectuer de réduction ; opération réelle dangereuse, à préparer spécifiquement.",
  "syntax": "lvreduce [options] [arguments]",
  "examples": [
   "lvreduce --help"
  ],
  "options": [
   {
    "flag": "--help",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-resize2fs",
  "name": "resize2fs",
  "environment": "Linux / Bash",
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
    "flag": "--help",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage - File System · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-pvs",
  "name": "pvs",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher une synthèse des volumes physiques.",
  "syntax": "pvs [options] [arguments]",
  "examples": [
   "pvs",
   "pvs / vgs / lvs"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-vgs",
  "name": "vgs",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher une synthèse des groupes de volumes, notamment VSize et VFree.",
  "syntax": "vgs [options] [arguments]",
  "examples": [
   "vgs"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-lvs",
  "name": "lvs",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher les volumes logiques LVM (commande utilisée dans la démonstration du formateur). Sans option dans le support.",
  "syntax": "lvs [options] [arguments]",
  "examples": [
   "lvs"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM · Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-pvdisplay",
  "name": "pvdisplay",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher les informations détaillées des PV ; peut cibler /dev/sdb1.",
  "syntax": "pvdisplay [options] [arguments]",
  "examples": [
   "pvdisplay"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-vgdisplay",
  "name": "vgdisplay",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher les informations détaillées des VG ; peut cibler vggroup2.",
  "syntax": "vgdisplay [options] [arguments]",
  "examples": [
   "vgdisplay"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-lvdisplay",
  "name": "lvdisplay",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher les informations détaillées des LV ; peut cibler /dev/vggroup1/lv2.",
  "syntax": "lvdisplay [options] [arguments]",
  "examples": [
   "lvdisplay"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-bash-lvm",
  "name": "lvm",
  "environment": "Bash",
  "category": "Bash",
  "description": "Ouvrir le shell de gestion LVM.",
  "syntax": "lvm [options] [arguments]",
  "examples": [
   "lvm"
  ],
  "options": [],
  "notes": "Gestion avancée des espaces de stockage - LVM"
 },
 {
  "id": "v6-linux-administration-dumpe2fs",
  "name": "dumpe2fs",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher les informations techniques du superbloc et du système de fichiers ext. Argument : /dev/sda1 = partition ext à examiner.",
  "syntax": "dumpe2fs [options] [arguments]",
  "examples": [
   "dumpe2fs /dev/sda1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-mkfs-ext4",
  "name": "mkfs.ext4",
  "environment": "Linux / Bash",
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
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-mkfs-ntfs",
  "name": "mkfs.ntfs",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Créer un système de fichiers NTFS. Argument : partition cible. Outil NTFS requis. DESTRUCTEUR.",
  "syntax": "mkfs.ntfs [options] [arguments]",
  "examples": [
   "mkfs.ntfs /dev/sde1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-mkfs-exfat",
  "name": "mkfs.exfat",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Créer un système de fichiers exFAT. Argument : partition cible. Outil exFAT requis. DESTRUCTEUR.",
  "syntax": "mkfs.exfat [options] [arguments]",
  "examples": [
   "mkfs.exfat /dev/sde1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-mkfs-vfat",
  "name": "mkfs.vfat",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Créer un système de fichiers FAT32. Option : -F = type de FAT ; 32 = FAT32 ; dernier argument = partition. DESTRUCTEUR.",
  "syntax": "mkfs.vfat [options] [arguments]",
  "examples": [
   "mkfs.vfat -F 32 /dev/sde1"
  ],
  "options": [
   {
    "flag": "-F",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-tune2fs",
  "name": "tune2fs",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Modifier le label d’un ext4 existant sans le reformater. Option : -L = étiquette ; WWW = valeur ; dernier argument = volume. Autres options : -l (superbloc), -i (intervalle), -c (nombre de montages).",
  "syntax": "tune2fs [options] [arguments]",
  "examples": [
   "tune2fs -L WWW /dev/vgdata/lvweb",
   "tune2fs -l /dev/sda1"
  ],
  "options": [
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-l",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-fsck-ext4",
  "name": "fsck.ext4",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Vérifier l’intégrité d’un système de fichiers ext4. Argument : partition cible ; travailler sur un volume démonté.",
  "syntax": "fsck.ext4 [options] [arguments]",
  "examples": [
   "fsck.ext4 /dev/sdc1"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-blkid",
  "name": "blkid",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher TYPE, UUID et LABEL du volume ; sans argument, inspecter les périphériques détectés. Argument : LV cible.",
  "syntax": "blkid [options] [arguments]",
  "examples": [
   "blkid /dev/vgdata/lvweb",
   "blkid"
  ],
  "options": [
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-findmnt",
  "name": "findmnt",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher le montage associé au point /var/www. Argument : point de montage ; sans argument, afficher les montages en arborescence.",
  "syntax": "findmnt [options] [arguments]",
  "examples": [
   "findmnt /var/www"
  ],
  "options": [
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System"
 },
 {
  "id": "v6-linux-administration-umount",
  "name": "umount",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Démonter un système de fichiers. Argument : point de montage ; possible aussi avec le chemin du périphérique.",
  "syntax": "umount [options] [arguments]",
  "examples": [
   "umount /var/www",
   "umount /mnt"
  ],
  "options": [
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/mnt",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "vi [options] [arguments]",
  "examples": [
   "vi /etc/fstab",
   "vi fichier"
  ],
  "options": [
   {
    "flag": "i",
    "meaning": "Passer en mode insertion (dans Vim)."
   },
   {
    "flag": "Échap",
    "meaning": "Revenir au mode normal."
   },
   {
    "flag": ":w",
    "meaning": "Enregistrer le fichier."
   },
   {
    "flag": ":q",
    "meaning": "Quitter Vim."
   },
   {
    "flag": ":wq",
    "meaning": "Enregistrer puis quitter."
   },
   {
    "flag": ":q!",
    "meaning": "Quitter sans enregistrer les modifications."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System · Cours Vim et fiches mémo"
 },
 {
  "id": "v6-linux-administration-df",
  "name": "df",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-i",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-du",
  "name": "du",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Afficher la taille totale du dossier. Options : -h = unités lisibles ; -s = résumé ; argument = dossier. Variantes : du -h /var, du -sh /var/log/*.",
  "syntax": "du [options] [arguments]",
  "examples": [
   "du -hs /etc",
   "du -sh d"
  ],
  "options": [
   {
    "flag": "-hs",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/etc",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-sh",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des espaces de stockage - File System · Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-apt-get",
  "name": "apt-get",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Mettre à niveau en autorisant des changements de dépendances et des suppressions nécessaires.",
  "syntax": "apt-get [options] [arguments]",
  "examples": [
   "apt-get update",
   "apt-get upgrade",
   "apt-get dist-upgrade",
   "apt-get install curl",
   "apt-get remove curl",
   "apt-get purge curl",
   "apt-get clean"
  ],
  "options": [],
  "notes": "Gestion des paquets logiciels"
 },
 {
  "id": "v6-linux-administration-apt-cache",
  "name": "apt-cache",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Rechercher les paquets contenant openssh dans leurs métadonnées.",
  "syntax": "apt-cache [options] [arguments]",
  "examples": [
   "apt-cache search openssh",
   "apt-cache show openssh-server"
  ],
  "options": [],
  "notes": "Gestion des paquets logiciels"
 },
 {
  "id": "v6-linux-administration-dpkg",
  "name": "dpkg",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Lister les paquets locaux correspondant au motif ftp. -l : liste ; *ftp* : filtre.",
  "syntax": "dpkg [options] [arguments]",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-S",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/usr",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Gestion des paquets logiciels · Fiche mémo Bash"
 },
 {
  "id": "v6-vim-vim",
  "name": "vim",
  "environment": "Vim",
  "category": "Vim",
  "description": "Éditer la configuration traditionnelle des dépôts. Chemin : fichier à modifier avec prudence.",
  "syntax": "vim [options] [arguments]",
  "examples": [
   "vim /etc/apt/sources.list",
   "vim f",
   "vim fichier"
  ],
  "options": [
   {
    "flag": "i",
    "meaning": "Passer en mode insertion (dans Vim)."
   },
   {
    "flag": "Échap",
    "meaning": "Revenir au mode normal."
   },
   {
    "flag": ":w",
    "meaning": "Enregistrer le fichier."
   },
   {
    "flag": ":q",
    "meaning": "Quitter Vim."
   },
   {
    "flag": ":wq",
    "meaning": "Enregistrer puis quitter."
   },
   {
    "flag": ":q!",
    "meaning": "Quitter sans enregistrer les modifications."
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
  "syntax": "less [options] [arguments]",
  "examples": [
   "less /var/log/apt/history.log",
   "less /var/log/dpkg.log",
   "less f",
   "less /var/log/syslog"
  ],
  "options": [
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/var",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/etc",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-f",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "notes": "Gestion des paquets logiciels · Gestion des utilisateurs et des groupes · Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-bash-make",
  "name": "make",
  "environment": "Bash",
  "category": "Bash",
  "description": "Installer le projet compilé selon la cible install du Makefile ; opération pouvant modifier le système.",
  "syntax": "make [options] [arguments]",
  "examples": [
   "make",
   "make install"
  ],
  "options": [],
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
    "flag": "--version",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-I",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-v",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "id [options] [arguments]",
  "examples": [
   "id",
   "id jmartin"
  ],
  "options": [],
  "notes": "Gestion des utilisateurs et des groupes · Fiche mémo Bash"
 },
 {
  "id": "v6-bash-su",
  "name": "su",
  "environment": "Bash",
  "category": "Bash",
  "description": "Ouvrir une session de connexion complète sous root.",
  "syntax": "su [options] [arguments]",
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
    "flag": "-l",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-s",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/bin",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-c",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "exit [options] [arguments]",
  "examples": [
   "exit"
  ],
  "options": [],
  "notes": "Gestion des utilisateurs et des groupes"
 },
 {
  "id": "v6-bash-pwd",
  "name": "pwd",
  "environment": "Bash",
  "category": "Bash",
  "description": "Afficher le répertoire courant.",
  "syntax": "pwd [options] [arguments]",
  "examples": [
   "pwd"
  ],
  "options": [],
  "notes": "Gestion des utilisateurs et des groupes · Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-bash-whereis",
  "name": "whereis",
  "environment": "Bash",
  "category": "Bash",
  "description": "Rechercher les emplacements associés à useradd.",
  "syntax": "whereis [options] [arguments]",
  "examples": [
   "whereis useradd"
  ],
  "options": [],
  "notes": "Gestion des utilisateurs et des groupes"
 },
 {
  "id": "v6-bash-tree",
  "name": "tree",
  "environment": "Bash",
  "category": "Bash",
  "description": "Arborescence (2 niveaux)",
  "syntax": "tree [options] [arguments]",
  "examples": [
   "tree -L 2"
  ],
  "options": [
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "clear [options] [arguments]",
  "examples": [
   "clear"
  ],
  "options": [],
  "notes": "Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-bash-history",
  "name": "history",
  "environment": "Bash",
  "category": "Bash",
  "description": "Historique des commandes",
  "syntax": "history [options] [arguments]",
  "examples": [
   "history"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-ln",
  "name": "ln",
  "environment": "Bash",
  "category": "Bash",
  "description": "Lien symbolique",
  "syntax": "ln [options] [arguments]",
  "examples": [
   "ln -s cible lien"
  ],
  "options": [
   {
    "flag": "-s",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "rmdir [options] [arguments]",
  "examples": [
   "rmdir d"
  ],
  "options": [],
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "nano [options] [arguments]",
  "examples": [
   "nano f"
  ],
  "options": [],
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "file [options] [arguments]",
  "examples": [
   "file f"
  ],
  "options": [],
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
    "flag": "-c",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "cut [options] [arguments]",
  "examples": [
   "cut -d: -f1 f"
  ],
  "options": [
   {
    "flag": "-d",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-f1",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "which [options] [arguments]",
  "examples": [
   "which bash"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-man",
  "name": "man",
  "environment": "Bash",
  "category": "Bash",
  "description": "Manuel (q = quitter)",
  "syntax": "man [options] [arguments]",
  "examples": [
   "man ls"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-whoami",
  "name": "whoami",
  "environment": "Bash",
  "category": "Bash",
  "description": "Utilisateur actuel",
  "syntax": "whoami [options] [arguments]",
  "examples": [
   "whoami"
  ],
  "options": [],
  "notes": "Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-bash-who",
  "name": "who",
  "environment": "Bash",
  "category": "Bash",
  "description": "Sessions connectées",
  "syntax": "who [options] [arguments]",
  "examples": [
   "who"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-w",
  "name": "w",
  "environment": "Bash",
  "category": "Bash",
  "description": "Qui fait quoi",
  "syntax": "w [options] [arguments]",
  "examples": [
   "w"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-groups",
  "name": "groups",
  "environment": "Bash",
  "category": "Bash",
  "description": "Groupes de l’utilisateur",
  "syntax": "groups [options] [arguments]",
  "examples": [
   "groups"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-last",
  "name": "last",
  "environment": "Bash",
  "category": "Bash",
  "description": "5 dernières connexions",
  "syntax": "last [options] [arguments]",
  "examples": [
   "last",
   "last -n 5"
  ],
  "options": [
   {
    "flag": "-n",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "uname [options] [arguments]",
  "examples": [
   "uname -a"
  ],
  "options": [
   {
    "flag": "-a",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "hostname [options] [arguments]",
  "examples": [
   "hostname",
   "hostname -I"
  ],
  "options": [
   {
    "flag": "-I",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-linux-administration-hostnamectl",
  "name": "hostnamectl",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Infos système (systemd)",
  "syntax": "hostnamectl [options] [arguments]",
  "examples": [
   "hostnamectl"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-date",
  "name": "date",
  "environment": "Bash",
  "category": "Bash",
  "description": "Date et heure",
  "syntax": "date [options] [arguments]",
  "examples": [
   "date"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-uptime",
  "name": "uptime",
  "environment": "Bash",
  "category": "Bash",
  "description": "Durée depuis le démarrage",
  "syntax": "uptime [options] [arguments]",
  "examples": [
   "uptime"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-free",
  "name": "free",
  "environment": "Bash",
  "category": "Bash",
  "description": "Mémoire RAM",
  "syntax": "free [options] [arguments]",
  "examples": [
   "free -h"
  ],
  "options": [
   {
    "flag": "-h",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "lscpu [options] [arguments]",
  "examples": [
   "lscpu"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-poweroff",
  "name": "poweroff",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Éteindre",
  "syntax": "poweroff [options] [arguments]",
  "examples": [
   "poweroff"
  ],
  "options": [],
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
  "options": [],
  "notes": "Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-bash-top",
  "name": "top",
  "environment": "Bash",
  "category": "Bash",
  "description": "Surveiller (q)",
  "syntax": "top [options] [arguments]",
  "examples": [
   "top"
  ],
  "options": [],
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
  "options": [],
  "notes": "Fiche mémo Bash · Simulateur terminal"
 },
 {
  "id": "v6-bash-pgrep",
  "name": "pgrep",
  "environment": "Bash",
  "category": "Bash",
  "description": "Trouver par nom",
  "syntax": "pgrep [options] [arguments]",
  "examples": [
   "pgrep nom"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-systemctl",
  "name": "systemctl",
  "environment": "Linux / Bash",
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
    "flag": "restart      Redémarrer",
    "meaning": "enable       Activer au démarrage"
   },
   {
    "flag": "disable",
    "meaning": "Désactiver au démarrage"
   }
  ],
  "notes": "Fiche mémo Bash · Fiche avec options · Simulateur terminal"
 },
 {
  "id": "v6-linux-administration-journalctl",
  "name": "journalctl",
  "environment": "Linux / Bash",
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
  "options": [],
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
    "flag": "/tmp",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "getent [options] [arguments]",
  "examples": [
   "getent hosts h",
   "getent passwd u"
  ],
  "options": [],
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
    "flag": "-x           Extraire",
    "meaning": "-t           Lister le contenu"
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
  "notes": "Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-bash-unzip",
  "name": "unzip",
  "environment": "Bash",
  "category": "Bash",
  "description": "Extraire un ZIP",
  "syntax": "unzip [options] [arguments]",
  "examples": [
   "unzip a.zip"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-alias",
  "name": "alias",
  "environment": "Bash",
  "category": "Bash",
  "description": "Créer un raccourci",
  "syntax": "alias [options] [arguments]",
  "examples": [
   "alias ll='ls -lah'"
  ],
  "options": [
   {
    "flag": "-lah",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "adduser [options] [arguments]",
  "examples": [
   "adduser nom"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-useradd",
  "name": "useradd",
  "environment": "Linux / Bash",
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
  "notes": "Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-linux-administration-usermod",
  "name": "usermod",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Verrouiller le compte",
  "syntax": "usermod [options] [arguments]",
  "examples": [
   "usermod -aG g u",
   "usermod -L u"
  ],
  "options": [
   {
    "flag": "-aG",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-gpasswd",
  "name": "gpasswd",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Retirer d’un groupe",
  "syntax": "gpasswd [options] [arguments]",
  "examples": [
   "gpasswd -d u g"
  ],
  "options": [
   {
    "flag": "-d",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-userdel",
  "name": "userdel",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Supprimer + dossier",
  "syntax": "userdel [options] [arguments]",
  "examples": [
   "userdel -r u"
  ],
  "options": [
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-groupadd",
  "name": "groupadd",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Créer un groupe",
  "syntax": "groupadd [options] [arguments]",
  "examples": [
   "groupadd g"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-chage",
  "name": "chage",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Expiration du MDP",
  "syntax": "chage [options] [arguments]",
  "examples": [
   "chage -l u"
  ],
  "options": [
   {
    "flag": "-l",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-visudo",
  "name": "visudo",
  "environment": "Bash",
  "category": "Bash",
  "description": "Éditer sudoers (sûr)",
  "syntax": "visudo [options] [arguments]",
  "examples": [
   "visudo"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-lastb",
  "name": "lastb",
  "environment": "Bash",
  "category": "Bash",
  "description": "Échecs de connexion",
  "syntax": "lastb [options] [arguments]",
  "examples": [
   "lastb"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-lsof",
  "name": "lsof",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Qui utilise le port 80",
  "syntax": "lsof [options] [arguments]",
  "examples": [
   "lsof -i :80"
  ],
  "options": [
   {
    "flag": "-i",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-dig",
  "name": "dig",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Interroger un DNS précis",
  "syntax": "dig [options] [arguments]",
  "examples": [
   "dig h +short",
   "dig @8.8.8.8 h",
   "dig nom [type]",
   "dig @serveur nom"
  ],
  "options": [],
  "notes": "Fiche mémo Bash · Catalogue réseau"
 },
 {
  "id": "v6-linux-administration-resolvectl",
  "name": "resolvectl",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "DNS utilisés (systemd)",
  "syntax": "resolvectl [options] [arguments]",
  "examples": [
   "resolvectl status"
  ],
  "options": [],
  "notes": "Fiche mémo Bash · Catalogue réseau"
 },
 {
  "id": "v6-linux-administration-nmcli",
  "name": "nmcli",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "NetworkManager",
  "syntax": "nmcli [options] [arguments]",
  "examples": [
   "nmcli dev status",
   "nmcli device show [interface]"
  ],
  "options": [],
  "notes": "Fiche mémo Bash · Catalogue réseau"
 },
 {
  "id": "v6-linux-administration-ufw",
  "name": "ufw",
  "environment": "Linux / Bash",
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
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-iptables",
  "name": "iptables",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Règles netfilter",
  "syntax": "iptables [options] [arguments]",
  "examples": [
   "iptables -L -n"
  ],
  "options": [
   {
    "flag": "-L",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-n",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-nft",
  "name": "nft",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Règles nftables",
  "syntax": "nft [options] [arguments]",
  "examples": [
   "nft list ruleset"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-crontab",
  "name": "crontab",
  "environment": "Linux / Bash",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-l",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "at [options] [arguments]",
  "examples": [
   "at now + 5 min"
  ],
  "options": [],
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "awk [options] [arguments]",
  "examples": [
   "awk '{print $1}' f"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-tr",
  "name": "tr",
  "environment": "Bash",
  "category": "Bash",
  "description": "Mettre en majuscules",
  "syntax": "tr [options] [arguments]",
  "examples": [
   "tr a-z A-Z"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-diff",
  "name": "diff",
  "environment": "Bash",
  "category": "Bash",
  "description": "Comparer deux fichiers",
  "syntax": "diff [options] [arguments]",
  "examples": [
   "diff f1 f2"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-linux-administration-e2fsck",
  "name": "e2fsck",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Vérifier (démonté)",
  "syntax": "e2fsck [options] [arguments]",
  "examples": [
   "e2fsck -f /dev/sdb1"
  ],
  "options": [
   {
    "flag": "-f",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/dev",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "zip [options] [arguments]",
  "examples": [
   "zip -r a.zip d"
  ],
  "options": [
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "flag": "-d           Décompresser",
    "meaning": "-k           Conserver le fichier source"
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
  "notes": "Fiche mémo Bash · Fiche avec options"
 },
 {
  "id": "v6-bash-gunzip",
  "name": "gunzip",
  "environment": "Bash",
  "category": "Bash",
  "description": "Décompresser",
  "syntax": "gunzip [options] [arguments]",
  "examples": [
   "gunzip f.gz"
  ],
  "options": [],
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
    "flag": "-av",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-avz",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/d",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "sha256sum [options] [arguments]",
  "examples": [
   "sha256sum f"
  ],
  "options": [],
  "notes": "Fiche mémo Bash"
 },
 {
  "id": "v6-bash-read",
  "name": "read",
  "environment": "Bash",
  "category": "Bash",
  "description": "Demander une saisie",
  "syntax": "read [options] [arguments]",
  "examples": [
   "read -p \"Nom ? \" v"
  ],
  "options": [
   {
    "flag": "-p",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "flag": "-d           Décompresser",
    "meaning": "-k           Conserver le fichier source"
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
    "meaning": "Filtrer par nom"
   },
   {
    "flag": "-SID",
    "meaning": "Sélectionner un compte par SID"
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
    "meaning": "Filtrer par nom de service"
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
    "flag": "-Port",
    "meaning": "Port TCP à tester"
   },
   {
    "flag": "-TraceRoute",
    "meaning": "Afficher le chemin vers la destination"
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
  "syntax": "arp [options] [arguments]",
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-N",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-d",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-s",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "get-netneighbor [options] [arguments]",
  "examples": [
   "Get-NetNeighbor [-AddressFamily IPv4]"
  ],
  "options": [
   {
    "flag": "-AddressFamily",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
    "flag": "-ano",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-an",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-abno",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-e",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-s",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "get-nettcpconnection [options] [arguments]",
  "examples": [
   "Get-NetTCPConnection [-LocalPort PORT]"
  ],
  "options": [
   {
    "flag": "-LocalPort",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "ifconfig [options] [arguments]",
  "examples": [
   "ifconfig -a"
  ],
  "options": [
   {
    "flag": "-a",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Catalogue réseau"
 },
 {
  "id": "v6-linux-administration-mtr",
  "name": "mtr",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "mtr [options] [arguments]",
  "examples": [
   "mtr -rw -c N destination"
  ],
  "options": [
   {
    "flag": "-rw",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "-c",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   }
  ],
  "notes": "Catalogue réseau"
 },
 {
  "id": "v6-linux-administration-nc",
  "name": "nc",
  "environment": "Linux / Bash",
  "category": "Linux — Administration",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "nc [options] [arguments]",
  "examples": [
   "nc -vz hôte port"
  ],
  "options": [
   {
    "flag": "-vz",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "get-help [options] [arguments]",
  "examples": [
   "Get-Help Get-LocalGroup",
   "Get-Help about_*",
   "Get-Help about_Aliases",
   "Get-Help"
  ],
  "options": [],
  "notes": "Catalogue réseau · Simulateur terminal"
 },
 {
  "id": "v6-powershell-update-help",
  "name": "Update-Help",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "update-help [options] [arguments]",
  "examples": [
   "Update-Help -UICulture en-US"
  ],
  "options": [
   {
    "flag": "-UICulture",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "get-alias [options] [arguments]",
  "examples": [
   "Get-Alias"
  ],
  "options": [],
  "notes": "Catalogue réseau"
 },
 {
  "id": "v6-powershell-get-localgroup",
  "name": "Get-LocalGroup",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-localgroup [options] [arguments]",
  "examples": [
   "Get-LocalGroup",
   "Get-LocalGroup | Select-Object *",
   "Get-LocalGroup | Format-List *"
  ],
  "options": [],
  "notes": "Catalogue réseau"
 },
 {
  "id": "v6-cmd-help",
  "name": "help",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "help [options] [arguments]",
  "examples": [
   "help",
   "help <commande>"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-cls",
  "name": "cls",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "cls [options] [arguments]",
  "examples": [
   "cls"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-ver",
  "name": "ver",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "ver [options] [arguments]",
  "examples": [
   "ver"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-hostname",
  "name": "hostname",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "hostname [options] [arguments]",
  "examples": [
   "hostname"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-whoami",
  "name": "whoami",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "whoami [options] [arguments]",
  "examples": [
   "whoami",
   "whoami /groups",
   "whoami /priv"
  ],
  "options": [
   {
    "flag": "/groups",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
   },
   {
    "flag": "/priv",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "echo [options] [arguments]",
  "examples": [
   "echo"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-set",
  "name": "set",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "set [options] [arguments]",
  "examples": [
   "set"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-date",
  "name": "date",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "date [options] [arguments]",
  "examples": [
   "date"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-time",
  "name": "time",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "time [options] [arguments]",
  "examples": [
   "time"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-cd",
  "name": "cd",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "cd [options] [arguments]",
  "examples": [
   "cd"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-chdir",
  "name": "chdir",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "chdir [options] [arguments]",
  "examples": [
   "chdir"
  ],
  "options": [],
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
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-type",
  "name": "type",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "type [options] [arguments]",
  "examples": [
   "type"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-more",
  "name": "more",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "more [options] [arguments]",
  "examples": [
   "more"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-tree",
  "name": "tree",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "tree [options] [arguments]",
  "examples": [
   "tree"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-where",
  "name": "where",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "where [options] [arguments]",
  "examples": [
   "where"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-findstr",
  "name": "findstr",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "findstr [options] [arguments]",
  "examples": [
   "findstr"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-copy",
  "name": "copy",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "copy [options] [arguments]",
  "examples": [
   "copy"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-move",
  "name": "move",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "move [options] [arguments]",
  "examples": [
   "move"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-ren",
  "name": "ren",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "ren [options] [arguments]",
  "examples": [
   "ren"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-del",
  "name": "del",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "del [options] [arguments]",
  "examples": [
   "del"
  ],
  "options": [],
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
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-md",
  "name": "md",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "md [options] [arguments]",
  "examples": [
   "md"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-rmdir",
  "name": "rmdir",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "rmdir [options] [arguments]",
  "examples": [
   "rmdir"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-rd",
  "name": "rd",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "rd [options] [arguments]",
  "examples": [
   "rd"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-pathping",
  "name": "pathping",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "pathping [options] [arguments]",
  "examples": [
   "pathping"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-getmac",
  "name": "getmac",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "getmac [options] [arguments]",
  "examples": [
   "getmac"
  ],
  "options": [],
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
  "options": [],
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
  "options": [],
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
  "options": [],
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
  "options": [],
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
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-systeminfo",
  "name": "systeminfo",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "systeminfo [options] [arguments]",
  "examples": [
   "systeminfo"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-driverquery",
  "name": "driverquery",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "driverquery [options] [arguments]",
  "examples": [
   "driverquery"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-wmic",
  "name": "wmic",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "wmic [options] [arguments]",
  "examples": [
   "wmic"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-gpresult",
  "name": "gpresult",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "gpresult [options] [arguments]",
  "examples": [
   "gpresult /r"
  ],
  "options": [
   {
    "flag": "/r",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "gpupdate [options] [arguments]",
  "examples": [
   "gpupdate /force"
  ],
  "options": [
   {
    "flag": "/force",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "sfc [options] [arguments]",
  "examples": [
   "sfc /scannow"
  ],
  "options": [
   {
    "flag": "/scannow",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "chkdsk [options] [arguments]",
  "examples": [
   "chkdsk"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-cmd-eventcreate",
  "name": "eventcreate",
  "environment": "Windows CMD",
  "category": "CMD",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "eventcreate [options] [arguments]",
  "examples": [
   "eventcreate"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-location",
  "name": "Get-Location",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-location [options] [arguments]",
  "examples": [
   "Get-Location"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-date",
  "name": "Get-Date",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-date [options] [arguments]",
  "examples": [
   "Get-Date"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-process",
  "name": "Get-Process",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-process [options] [arguments]",
  "examples": [
   "Get-Process"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-stop-process",
  "name": "Stop-Process",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "stop-process [options] [arguments]",
  "examples": [
   "Stop-Process -Id 5580"
  ],
  "options": [
   {
    "flag": "-Id",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "start-service [options] [arguments]",
  "examples": [
   "Start-Service -Name Spooler"
  ],
  "options": [
   {
    "flag": "-Name",
    "meaning": "Option présente dans un exemple du support ; explication détaillée à compléter."
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
  "syntax": "clear-host [options] [arguments]",
  "examples": [
   "Clear-Host"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-printer",
  "name": "Get-Printer",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-printer [options] [arguments]",
  "examples": [
   "Get-Printer"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-printjob",
  "name": "Get-PrintJob",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-printjob [options] [arguments]",
  "examples": [
   "Get-PrintJob"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-printerport",
  "name": "Get-PrinterPort",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-printerport [options] [arguments]",
  "examples": [
   "Get-PrinterPort"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-get-printerdriver",
  "name": "Get-PrinterDriver",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "get-printerdriver [options] [arguments]",
  "examples": [
   "Get-PrinterDriver"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 },
 {
  "id": "v6-powershell-restart-service",
  "name": "Restart-Service",
  "environment": "PowerShell",
  "category": "PowerShell",
  "description": "Commande relevée dans les supports ou simulateurs TSSR ; voir les exemples disponibles.",
  "syntax": "restart-service [options] [arguments]",
  "examples": [
   "Restart-Service Spooler"
  ],
  "options": [],
  "notes": "Simulateur terminal"
 }
];
