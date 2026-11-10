# TERMINAL OPS V3.9 — carte / ticket / équipement cohérents

## Correctifs
- Les six missions disponibles se déroulent désormais dans **la même petite agence**, qui correspond aux niveaux d'initiation et à leur décor.
- L'illustration de l'agence est remplacée par une **version sans alerte rouge figée** ; elle reste une illustration 2,5D, pas une véritable scène 3D.
- Sept pièces et services identifiables directement dans l'image : Direction, Comptabilité, Commercial, RH, Local technique, Support IT, Accueil.
- Chaque pièce possède une **liste fixe** des machines de l'agence. Une machine n'est plus attribuée arbitrairement à un service.
- La machine connectée est clairement affichée. La sélection d'un poste Windows bascule depuis Bash sur CMD ou PowerShell ; la sélection d'un hôte Linux bascule sur Bash.
- La réponse des commandes simples (hostname, configuration IP, répertoires, processus, services) dépend de la **machine actuellement connectée**. Le moteur d'incident n'agit que sur la machine cible.
- Le domaine du laboratoire CMD est `agence.local` (et non plus `hopital.local`).
- Les missions ne font plus référence à un portail patient hospitalier dans une agence.
- Fin de mission : la zone cesse d'être indiquée comme en incident par le moteur.

## Recettes validées dans un navigateur de test en DOM
- Linux Nginx : `ss -tulpn`, `kill 4242`, `systemctl restart nginx`, `systemctl status nginx`.
- Linux permissions : `ls -l /srv/app/config.ini`, `chgrp app /srv/app/config.ini`, `chmod 640 /srv/app/config.ini`.
- PowerShell impression : `Get-Printer`, `Get-Service Spooler`, `Start-Service Spooler`, `Get-Service Spooler`.
- PowerShell processus : `Get-Process`, `Get-Process -Id 5580`, `Stop-Process -Id 5580`, `Get-Process`.
- CMD DNS : `ipconfig /all`, `ipconfig /displaydns`, `nslookup intranet.agence.local`, `ping intranet.agence.local`, `ipconfig /flushdns`, `ping intranet.agence.local`.
- CMD routage : `ipconfig /all`, `route print`, `route add 0.0.0.0 mask 0.0.0.0 192.168.10.1`, `ping 192.168.10.1`.
- Cliquer sur Commercial / PC-03 ne permet pas de résoudre par erreur une panne de Nginx sur ghpl-web.
- Vérification Node du moteur CMD (DNS, routes, DHCP, services).

## Limites techniques
- Simulations uniquement. Les commandes ne s'exécutent pas sur un vrai Linux / Windows.
- Les postes non-cibles prennent en charge un **ensemble limité de commandes de consultation** ; l'intégralité de l'administration multi-machine n'est pas implémentée.
- Les sept cartes visuelles existent, mais les six scénarios jouables sont encore des scénarios du premier palier. Les autres niveaux restent en préparation.
- Les états verts dessinés dans l'illustration ne sont pas des signaux techniques en temps réel : les informations fiables viennent du terminal et de la fiche d'équipement.
- Les suites de tests automatisées ont vérifié la logique et les interactions. Un contrôle de rendu visuel intégral sur GitHub Pages reste recommandé.
