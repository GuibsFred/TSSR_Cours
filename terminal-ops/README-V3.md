# TERMINAL OPS — V3 « Centre d'intervention »

## Fonctionnalités disponibles

- Page `terminal-ops.html` intégrée au site TSSR existant (GitHub Pages).
- Vue hospitalière HQ (image WebP locale) avec cinq points d'inspection cliquables, zoom 100–150 %.
- Ticket d'incident à gauche : numéro, priorité, service demandeur, impact, problème, étapes, rapport d'incident.
- Console de commande Bash, PowerShell et CMD **simulée dans le navigateur**. Six missions du moteur préexistant restent jouables.
- Commandes supplémentaires liées à l'impression dans la simulation PowerShell : `Get-Printer`, `Get-PrintJob`, `Get-PrinterPort`, `Get-PrinterDriver`, `Get-Service Spooler`, `Start-Service Spooler`, `Restart-Service Spooler` et plusieurs variantes.
- Calcul de score indicatif : 100 points initiaux, moins 9 par erreur, 13 par indice, 2 par minute au-delà des cinq premières, minimum 20 ; XP gagnés à la première réussite de 60 % à 100 % de la base selon ce score.
- Profils/pseudos **locaux** distincts sur un même navigateur et sauvegardes exportables/importables au format JSON.
- Feuille de route de **100 niveaux par terminal**, soit 300 emplacements de progression, dont **seuls 2 par terminal (6 en tout) sont réellement développés et jouables**. Les 294 autres sont marqués verrouillés « À développer ».

## Limites importantes

Il ne s'agit PAS encore d'un terminal réel : le JavaScript local ne peut pas exécuter toutes les commandes Linux, Windows CMD ou PowerShell, avec leurs véritables erreurs. Le visuel central est une illustration HQ interactive en 2,5D, et non un environnement 3D temps réel.

GitHub Pages ne peut pas héberger les vrais shells côté serveur. Pour assurer une exécution réellement fidèle, il faut :

1. Un frontal qui ouvre une session sécurisée (ex. xterm.js + WebSocket) et authentifie le joueur.
2. Un orchestrateur serveur qui crée, contrôle et détruit les laboratoires. Ne jamais exposer un shell du serveur hôte.
3. Des environnements Linux isolés pour Bash, et **de vraies machines virtuelles Windows** pour CMD et les modules spécifiques de Windows PowerShell (par exemple `PrintManagement`).
4. Une politique d'isolation rigoureuse : ressources limitées, comptes sans privilèges excessifs, réseau cloisonné, sorties journalisées, quotas, TTL, réinitialisation par snapshot, protection contre la sortie de l'environnement.
5. Une évaluation des missions par l'état effectif du laboratoire après les commandes, et non par comparaison textuelle.
6. Une base de données avec comptes authentifiés si l'on veut synchroniser la progression et des classements fiables entre navigateurs.

Ne pas déployer des exécutants de commandes non isolés sur Internet. La création des 294 autres scénarios doit suivre l'ouverture de cet environnement.

## Installation

Copier le contenu du dossier `TSSR_Cours-main` à la racine du dépôt GitHub Pages. Le lien `terminal-ops.html` est déjà intégré dans le site. Tous les fichiers nouveaux sont dans le dossier `terminal-ops/` ; les contenus de cours du site n'ont pas été supprimés.

Pour tester en local : lancer `python -m http.server 8000` dans le dossier racine et ouvrir `http://localhost:8000/terminal-ops.html`.

## Vérifications

Syntaxe de `ops.js` et `ops-v3.js` contrôlée avec Node.js. Vérification structurelle des éléments HTML et des ressources locales. Un essai automatique Chromium n'a pas pu aboutir car l'environnement de test bloque les navigations navigateur, donc le rendu final doit être confirmé dans le navigateur de l'utilisateur.
