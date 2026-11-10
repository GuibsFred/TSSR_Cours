# TERMINAL OPS V3.6 — Laboratoire CMD à état partagé

## Objectif
Première version de **moteur d'enquête informatique** autonome fonctionnant sur GitHub Pages, sans serveur ni installation. Le laboratoire utilise un état virtuel partagé : les commandes lisent ou modifient les mêmes objets (cache DNS, enregistrements DNS, IP, routes, services, fichiers, processus).

## Nouveauté principale
La mission CMD **« Le poste ne résout plus les noms »** s'appuie désormais sur l'état de la machine `ACCUEIL-07` :

- `ipconfig /all` expose la configuration IP.
- `ipconfig /displaydns` expose une ancienne adresse (`192.168.10.99`) dans le cache.
- `nslookup intranet.hopital.local` interroge directement le serveur DNS et affiche l'adresse actuelle (`192.168.10.25`). **Contrairement à `ping`, `nslookup` ne consulte pas le cache du client.**
- `ping intranet.hopital.local` utilise le cache ancien, et échoue avant correction.
- `ipconfig /flushdns` efface le cache de la machine.
- `ping intranet.hopital.local` résout ensuite la nouvelle adresse et confirme la réparation.

Le carnet d'enquête relève les observations. `sc stop Dnscache`, `ipconfig /release`, `route delete`, `taskkill`, `del` et d'autres commandes modifient les objets du laboratoire. Certaines actions peuvent créer des pannes secondaires. Le bouton de réinitialisation restaure l'état initial.

La mission **« Passerelle réseau inaccessible »** utilise aussi la table de routage partagée et la valide par son état, et non par une chaîne de texte exacte.

## Commandes
Le moteur propose un catalogue étendu de commandes CMD et variantes (help, ipconfig, ping, nslookup, route, netstat, arp, netsh, sc, tasklist, taskkill, commandes de fichiers et divers diagnostics). Les sous-commandes **ne sont pas toutes implémentées** : lorsqu'une variante n'est pas reconnue, elle doit répondre qu'elle n'est pas disponible dans ce laboratoire. Il ne s'agit pas d'un vrai `cmd.exe` Windows.

Les missions Bash et PowerShell conservent **leur moteur antérieur**. Les sept décors, le ticketing, les profils locaux et les scores sont conservés.

## Essai conseillé
Sélectionner la mission **CMD « Le poste ne résout plus les noms »** et taper :

```
help
ipconfig /all
ipconfig /displaydns
nslookup intranet.hopital.local
ping intranet.hopital.local
ipconfig /flushdns
ping intranet.hopital.local
```

Puis réinitialiser et essayer un diagnostic moins favorable :

```
sc stop Dnscache
sc query Dnscache
sc start Dnscache
```

## Limites
- Les valeurs et erreurs sont simulées à partir d'un état virtuel. Pas d'exécution réelle de commandes Windows.
- Les commandes génériques Bash/PowerShell et les quatre missions correspondantes n'ont pas encore migré sur le nouveau moteur.
- Les 300 niveaux restent un objectif ; six missions sont actuellement jouables.
- Les profils sont locaux ; pas de synchronisation multi-appareil.
- Le rendu des 7 cartes est à base d'illustrations, pas de modèles 3D navigables.

## Vérification technique
`node --check terminal-ops/sim-engine.js` et `node --check terminal-ops/ops.js` ; tests automatisés du chemin DNS, des routes et de la panne secondaire via `terminal-ops/tests/sim-engine.test.cjs`.
