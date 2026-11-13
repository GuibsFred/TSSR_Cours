# Linux Operator OS — Prototype TSSR basé sur v86

## Ce qui est fourni

- Interface moderne en français, terminal xterm.js et trois missions d'entraînement.
- Moteur v86 fourni dans `vendor/v86/` (code source de l'archive fournie).
- Dockerfile Alpine i386 installant **GNU Bash**, Vim, find, grep, awk et d'autres commandes.
- Workflow GitHub Actions qui compile v86 et construit un système de fichiers Linux 9p.
- Fichiers locaux uniquement après compilation : aucune connexion à un serveur Linux externe.

**État actuel : kit de construction, pas une machine Linux déjà prête.** `assets/` est vide jusqu'à l'exécution réussie du workflow. L'émulateur n'a pas pu être démarré dans l'environnement de préparation : la compilation et le démarrage doivent être testés après le premier push.

## Mode d'emploi — GitHub Desktop

1. Décompresser l'archive à la **racine** du dépôt local de ton site TSSR, sans écraser ses cours ni son index. Conserver le dossier caché `.github`.
2. Ouvrir GitHub Desktop : voir `linux-operator/` et `.github/workflows/linux-operator.yml` dans les changements.
3. Commit puis **Push origin**.
4. Dans GitHub : onglet **Actions**, choisir **Construire Linux Operator (v86 + Alpine Bash)**, puis **Run workflow** si nécessaire. Le push initial peut lancer automatiquement la compilation.
5. Attendre le résultat vert. Le workflow ajoute les fichiers construits dans `linux-operator/assets/` et les publie dans une nouvelle validation Git.
6. Ouvrir **`https://TON-COMPTE.github.io/NOM-DU-DEPOT/linux-operator/`** (ou l'adresse GitHub Pages de ton site suivie de `/linux-operator/`).
7. Cliquer sur **Démarrer Linux**. Attendre le message Bash, saisir des commandes et tester les trois missions.

Le site doit être publié sur GitHub Pages depuis la branche où le workflow valide les ressources. Si le dépôt interdit aux Actions d'écrire, autoriser les permissions de lecture/écriture dans **Settings → Actions → General → Workflow permissions**, ou adapter la stratégie de publication. Les branches protégées peuvent empêcher le commit automatique. En cas d'échec, lire le journal du workflow dans Actions.

## Pourquoi Linux 32 bits ?

L'émulateur v86 est x86 32 bits ; une image x86_64 ne fonctionne pas. On compile Alpine 32 bits avec GNU Bash au lieu de simplement utiliser le shell `ash` fourni par défaut.

## Fonctionnement des validations

Les validations de missions lisent les **vrais fichiers du système Linux 9p** à l'aide de l'API v86 `read_file`. Elles ne contrôlent pas l'orthographe d'une commande précise : une autre méthode correcte est acceptée.

Les fichiers créés sont en mémoire et **ne sont pas persistants au rechargement**. Le compteur de missions, lui, est mémorisé dans ce navigateur. Le système Linux est isolé de la machine hôte, mais reste un environnement d'exécution de code dans le navigateur : éviter d'y placer des secrets.

## Limitations

- Prototype = 3 missions initiales. Les 50 niveaux et le jeu d'aventure viennent après validation du moteur Linux.
- Réseau Linux non configuré ; les activités `ping` et les mises à jour via `apk` ne sont pas garanties.
- Les performances varient selon l'ordinateur et le navigateur. Chrome et Edge récents recommandés.
- Le workflow doit accéder à Internet pour obtenir Rust, Alpine et les dépendances. Après construction, les assets sont hébergés dans GitHub Pages.
- L'interface et la compatibilité n'ont pas été testées en situation réelle dans Chrome/Edge à cette étape. Aucun démarrage n'est garanti avant ce test.

## Crédits et licences

Code source v86 : https://github.com/copy/v86 — licence BSD-2-Clause. Les binaires générés incluent son texte de licence.
xterm.js : https://github.com/xtermjs/xterm.js — licence MIT.
Alpine Linux, Linux kernel et GNU Bash conservent leurs licences propres (GPL et autres) ; redistribuer les ressources selon les notices applicables.
