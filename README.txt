BASH OPERATOR CENTER — PROTOTYPE v0.1
=====================================

CE QUI EST FOURNI
- Une page autonome /linux-lab/ avec intégration du moteur v86.
- Une configuration Alpine Linux 32 bits (projet v86) et sa console.
- Boutons de démarrage, remise à zéro, export/import d'instantané.
- Aucun faux interpréteur de commandes : Linux est exécuté par v86.

IMPORTANT — LIMITES HONNÊTES
- Les ressources v86 / Linux ne sont PAS incluses dans le ZIP : la page
  les récupère à l'adresse publique copy.sh/v86 définie dans config.js.
- L'accès distant, les autorisations CORS et le démarrage réel ne peuvent
  pas être vérifiés dans cet environnement de production du ZIP.
- L'image Alpine officielle v86 peut démarrer avec ash (BusyBox), pas GNU Bash.
  Pour respecter l'exigence « VRAI BASH », il faudra préparer une image
  Linux i386 avec le paquet bash installé, puis pointer config.js dessus.
  Le ZIP est donc une BASE TECHNIQUE, pas encore le Bash final promis.
- Les boutons de mission et l'analyse des réponses ne sont pas implémentés.
- Les instantanés doivent être compatibles avec l'image et la version v86.
- Une session n'est pas partagée avec les autres visiteurs.

INSTALLATION SUR GITHUB PAGES
1. Décompresser ce ZIP dans la racine de ton dépôt TSSR.
2. Commit/push le dossier linux-lab.
3. Ouvrir https://TON-COMPTE.github.io/TON-DEPOT/linux-lab/
4. Cliquer sur « Démarrer Linux » et vérifier l'invite de commande.
5. Si une erreur CORS ou 404 apparaît, héberger les ressources v86 et
   l'image Linux dans le dépôt (ou un CDN autorisant CORS), puis adapter
   linux-lab/config.js.

AUCUN FICHIER EXISTANT DU SITE N'EST MODIFIÉ.

Sources techniques :
https://github.com/copy/v86/blob/master/examples/alpine.html
https://github.com/copy/v86/blob/master/docs/filesystem.md
https://github.com/copy/v86
