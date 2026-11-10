/* TERMINAL OPS — simulateur pédagogique à état partagé (CMD, DNS et réseau).
   Aucun programme Windows n'est exécuté : les sorties sont générées depuis l'état du laboratoire.
   Les commandes implémentées sont documentées ; les autres sont signalées explicitement. */
(()=>{'use strict';
const clone=x=>JSON.parse(JSON.stringify(x));
const INITIAL={
 machine:'ACCUEIL-07',user:'AGENCE\\Technicien',cwd:'C:\\Users\\Technicien',ip:'192.168.10.42',mask:'255.255.255.0',gateway:'192.168.10.1',dns:'192.168.10.10',mac:'00-25-96-4A-10-07',dhcp:'192.168.10.5',
 dnsRecords:{'intranet.agence.local':'192.168.10.25','srv-fichiers.agence.local':'192.168.10.30','dns-agence.local':'192.168.10.10','accueil-07.agence.local':'192.168.10.42','srv-app.agence.local':'192.168.10.20'},
 cache:{'intranet.agence.local':'192.168.10.99','srv-fichiers.agence.local':'192.168.10.30'},
 routes:[{target:'192.168.10.0',mask:'255.255.255.0',gateway:'On-link'},{target:'0.0.0.0',mask:'0.0.0.0',gateway:'192.168.10.1'}],
 services:{Dnscache:'RUNNING',EventLog:'RUNNING',LanmanWorkstation:'RUNNING',LanmanServer:'RUNNING',Spooler:'RUNNING',W32Time:'RUNNING'},
 files:{'c:\\users\\technicien\\notes.txt':'Dossier de test du service informatique.','c:\\users\\technicien\\diagnostic.txt':'Journal local de maintenance.','c:\\windows\\system32\\drivers\\etc\\hosts':'# localhost\n127.0.0.1 localhost'},
 processes:[{pid:4,name:'System'},{pid:804,name:'svchost.exe'},{pid:1180,name:'explorer.exe'},{pid:1544,name:'spoolsv.exe'},{pid:2012,name:'chrome.exe'}],
 observations:[],events:[],corruption:[],steps:[false,false,false],pingedAfterFix:false,examinedConfig:false,examinedDNS:false,inspectedRoutes:false,routeRestored:false,mission:'cmd-dns'
};
let s=clone(INITIAL);
const names=['help','help <commande>','?','cls','ver','hostname','whoami','whoami /groups','whoami /priv','echo','set','date','time','cd','chdir','dir','type','more','tree','where','findstr','copy','move','ren','del','mkdir','md','rmdir','rd','ipconfig','ipconfig /all','ipconfig /displaydns','ipconfig /flushdns','ipconfig /release','ipconfig /renew','ping','ping -n 2','nslookup','tracert','pathping','arp -a','arp -d','route print','route add','route delete','netstat -ano','netstat -r','getmac','netsh interface ipv4 show config','netsh interface ipv4 show interfaces','netsh advfirewall show allprofiles','net','net use','net view','net user','net localgroup','sc query','sc queryex','sc stop','sc start','tasklist','tasklist /svc','taskkill','systeminfo','driverquery','wmic','gpresult /r','gpupdate /force','sfc /scannow','chkdsk','eventcreate'];
const HELP={ipconfig:'ipconfig [/all | /displaydns | /flushdns | /release | /renew]\nAffiche et modifie la configuration IP et le cache du poste.',nslookup:'nslookup [nom] [serveur DNS]\nInterroge directement un serveur DNS : ne lit PAS le cache DNS local.',ping:'ping [-n nombre] <adresse ou nom>\nLa résolution du nom utilise le cache local si présent.',route:'route PRINT | ADD destination MASK masque passerelle | DELETE destination',netstat:'netstat [-ano | -r] : connexions simulées et table de routage.',sc:'sc QUERY [service] | STOP service | START service',taskkill:'taskkill /PID identifiant [/F]',findstr:'findstr texte fichier : cherche une chaîne dans un fichier virtuel.',help:'help [commande] — catalogue des commandes disponibles; seules les variantes prises en charge fonctionnent.'};
const ipValid=x=>{if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(x||''))return false;return x.split('.').every(v=>+v>=0&&+v<=255)};
const result=(v,type='result',extra={})=>({v,type,...extra});
const err=v=>result(v,'error');
const ok=v=>result(v,'good');
const warn=v=>result(v,'note');
const event=(message,tag='INFO')=>{s.events.unshift({tag,message});s.events=s.events.slice(0,20)};
const observe=(name)=>{if(!s.observations.includes(name))s.observations.push(name)};
const goodGateway=()=>s.routes.some(r=>r.target==='0.0.0.0'&&r.gateway===s.gateway);
const cacheWorks=()=>s.services.Dnscache==='RUNNING';
const resolve=(name,usesCache)=>{const key=name.toLowerCase().replace(/\.$/,'');if(ipValid(key))return key;if(usesCache&&cacheWorks()&&Object.hasOwn(s.cache,key))return s.cache[key];const v=s.dnsRecords[key];if(v&&usesCache&&cacheWorks())s.cache[key]=v;return v||null};
const connected=(ip)=>{if(ip==='127.0.0.1'||ip===s.ip||ip==='192.168.10.1'||ip==='192.168.10.10'||ip==='192.168.10.25'||ip==='192.168.10.30'||ip==='192.168.10.20')return true;if(ip==='192.168.10.99')return false;return goodGateway()&&ip==='8.8.8.8'};
const cacheRows=()=>Object.entries(s.cache).map(([name,ip])=>`    ${name.padEnd(34)} ${ip}`).join('\n')||'    (cache vide)';
function reset(mission){s=clone(INITIAL);s.mission=mission||'cmd-dns';if(mission==='cmd-route'){s.routes=s.routes.filter(r=>r.target!=='0.0.0.0');s.cache['intranet.agence.local']=s.dnsRecords['intranet.agence.local']}event('Environnement de laboratoire initialisé')}
function normalizePath(p){let path=(p||'.').trim().replace(/^"|"$/g,'').replace(/\//g,'\\');if(path==='.')return s.cwd.toLowerCase();if(/^[a-z]:\\/i.test(path))return path.toLowerCase();if(path.startsWith('\\'))return ('c:'+path).toLowerCase();return (s.cwd+'\\'+path).toLowerCase().replace(/\\\.\\/g,'\\')}
function info(){return [`Configuration IP Windows — ${s.machine}`,'Carte Ethernet Ethernet0 :',`   Suffixe DNS propre à la connexion : agence.local`,`   Adresse physique . . . . . . . . : ${s.mac}`,`   DHCP activé. . . . . . . . . . . : Oui`,`   Adresse IPv4. . . . . . . . . . : ${s.ip}`,`   Masque de sous-réseau . . . . . : ${s.mask}`,`   Passerelle par défaut . . . . . : ${goodGateway()?s.gateway:'(absente)'}`,`   Serveurs DNS . . . . . . . . . : ${s.dns}`,`   Serveur DHCP . . . . . . . . . : ${s.dhcp}`].join('\n')}
function checkProgress(command){const completed=[];if(s.mission==='cmd-dns'){
 if(s.examinedConfig){s.steps[0]=true}if(s.examinedDNS){s.steps[1]=true}if(s.pingedAfterFix&&s.services.Dnscache==='RUNNING'&&s.corruption.length===0){s.steps[2]=true}
 }else if(s.mission==='cmd-route'){
 if(s.examinedConfig)s.steps[0]=true;if(s.inspectedRoutes)s.steps[1]=true;if(s.routeRestored&&goodGateway())s.steps[2]=true;
 }
 s.steps.forEach((v,i)=>{if(v)completed.push(i)});return completed
}
function execute(line){const raw=(line||'').trim();if(!raw)return result('');const tokens=raw.match(/"[^"]*"|\S+/g)||[];const cmd=tokens[0].toLowerCase(),args=tokens.slice(1),a=args.map(x=>x.replace(/^"|"$/g,'')),lowerArgs=a.map(x=>x.toLowerCase()),all=raw.toLowerCase();let r;
 const readNetwork=['ipconfig','nslookup','ping','tracert','pathping','arp','route','netstat','getmac','netsh'];
 if(cmd==='help'||cmd==='?'){r=warn(args.length?HELP[lowerArgs[0]]||'Aide générale : commande disponible dans le catalogue, consulter help.':`COMMANDES DU LABORATOIRE CMD (${names.length} entrées et variantes)\n\n`+names.join(' · ')+'\n\nAttention : laboratoire simulé, pas Windows réel. Les arguments et sous-commandes non pris en charge sont signalés.\n\nDiagnostic : ipconfig /all, ipconfig /displaydns, nslookup, ping, route print, arp -a, netstat -ano.\nPour approfondir : help ipconfig, help nslookup, help ping.');}
 else if(cmd==='cls'){r=result('', 'clear')}
 else if(cmd==='ver')r=result('Microsoft Windows [version simulée 10.0.22631] — laboratoire TERMINAL OPS');
 else if(cmd==='hostname')r=result(s.machine);
 else if(cmd==='whoami')r=result(lowerArgs.includes('/groups')?'INFORMATIONS DE GROUPE\nAGENCE\\Techniciens · Utilisateurs':lowerArgs.includes('/priv')?'SeChangeNotifyPrivilege   Activé\nSeShutdownPrivilege       Désactivé':s.user);
 else if(cmd==='date'||cmd==='time')r=result('Date/heure du laboratoire : 10/11/2026 09:15');
 else if(cmd==='echo')r=result(args.join(' '));
 else if(cmd==='set')r=result('COMPUTERNAME='+s.machine+'\nUSERNAME=Technicien\nUSERPROFILE=C:\\Users\\Technicien\nTEMP=C:\\Windows\\Temp');
 else if(cmd==='cd'||cmd==='chdir'){if(!a.length)r=result(s.cwd);else{const p=normalizePath(a[0]);if(['c:\\','c:\\users','c:\\users\\technicien','c:\\windows','c:\\windows\\system32','c:\\windows\\system32\\drivers','c:\\windows\\system32\\drivers\\etc'].includes(p)){s.cwd=p.replace(/^c:/,'C:');r=result('')}else r=err('Le chemin d’accès spécifié est introuvable.')}}
 else if(cmd==='dir'||cmd==='tree'){const pref=s.cwd.toLowerCase()+'\\';const items=Object.keys(s.files).filter(p=>p.startsWith(pref)).map(p=>p.slice(pref.length)).filter(p=>!p.includes('\\'));r=result(`Répertoire de ${s.cwd}\n`+(items.join('\n')||'(aucun fichier)'))}
 else if(cmd==='type'||cmd==='more'){const p=normalizePath(a[0]);r=s.files[p]!==undefined?result(s.files[p]):err('Le fichier spécifié est introuvable.')}
 else if(cmd==='findstr'){const sought=a[0]?.toLowerCase(),p=normalizePath(a[1]);r=!sought||!a[1]?err('Syntaxe : findstr terme fichier'):s.files[p]===undefined?err('Fichier introuvable'):result(s.files[p].split('\n').filter(x=>x.toLowerCase().includes(sought)).join('\n')||'Aucune correspondance')}
 else if(cmd==='where')r=result((a[0]||'').toLowerCase()==='ipconfig'?'C:\\Windows\\System32\\ipconfig.exe':'INFO : aucun fichier correspondant aux critères spécifiés.');
 else if(cmd==='mkdir'||cmd==='md')r=warn('Répertoire créé dans le laboratoire (gestion des dossiers simplifiée).');
 else if(['copy','move','ren','del','erase'].includes(cmd)){const src=normalizePath(a[0]);const dst=normalizePath(a[1]);if(s.files[src]===undefined)r=err('Fichier introuvable.');else if(cmd==='del'||cmd==='erase'){delete s.files[src];event('Fichier supprimé : '+src,'WARNING');r=ok('1 fichier supprimé.')}else if(!a[1])r=err('Syntaxe incorrecte : argument de destination manquant.');else {s.files[dst]=s.files[src];if(cmd!=='copy')delete s.files[src];r=ok('1 fichier traité.')}}
 else if(cmd==='rmdir'||cmd==='rd')r=warn('Aucun dossier de laboratoire vide ciblé.');
 else if(cmd==='ipconfig'){
 const op=lowerArgs[0]||'';if(!op||op==='/all'){s.examinedConfig=true;r=result(op==='/all'?info():`Carte Ethernet Ethernet0 :\n   Adresse IPv4 : ${s.ip}\n   Masque : ${s.mask}\n   Passerelle : ${goodGateway()?s.gateway:'(absente)'}`)}
 else if(op==='/displaydns'){s.examinedConfig=true;observe('cache');r=warn('Cache de résolution DNS local :\n'+cacheRows())}
 else if(op==='/flushdns'){s.cache={};event('Cache DNS vidé');r=ok('Configuration IP de Windows\nCache de résolution DNS vidé avec succès.')}
 else if(op==='/release'){s.ip='0.0.0.0';s.corruption.push('Adresse IP libérée');event('Bail DHCP libéré : poste hors réseau','WARNING');r=warn('Carte Ethernet0 : adresse IPv4 libérée.')}
 else if(op==='/renew'){s.ip='192.168.10.42';s.corruption=s.corruption.filter(x=>x!=='Adresse IP libérée');event('Bail DHCP renouvelé');r=ok('Bail DHCP renouvelé : '+s.ip)}
 else r=err('Paramètre non reconnu. Tapez help ipconfig.');
 }
 else if(cmd==='nslookup'){
 const name=(a[0]||'intranet.agence.local').toLowerCase();const dnsServer=a[1]||s.dns;const ip=s.dnsRecords[name];s.examinedDNS=true;observe('dns-server');r=ip?result(`Serveur : dns-agence.local\nAddress: ${dnsServer}\n\nNom : ${name}\nAddress: ${ip}`):err(`Serveur : dns-agence.local\n*** ${name} : domaine inexistant (NXDOMAIN)`);
 }
 else if(cmd==='ping'||cmd==='tracert'||cmd==='pathping'){
 const tgt=a.find(x=>!x.startsWith('-'))||'';if(!tgt)r=err('Syntaxe : ping [-n N] adresse');else {const ip=resolve(tgt,true);if(!ip)r=err('La requête Ping n’a pas pu trouver l’hôte '+tgt+'. Vérifiez le nom et essayez à nouveau.');else{
 const alive=s.ip!=='0.0.0.0'&&connected(ip)&&(ip.startsWith('192.168.10.')||goodGateway());
 if(tgt.toLowerCase()==='intranet.agence.local'&&alive&&ip===s.dnsRecords[tgt.toLowerCase()]&&s.mission==='cmd-dns')s.pingedAfterFix=true;
 if(tgt.toLowerCase()==='intranet.agence.local')observe('ping-intranet');
 if(tgt.toLowerCase()==='192.168.10.1'&&alive&&s.mission==='cmd-route')s.routeRestored=goodGateway();
 if(cmd==='ping')r=alive?ok(`Envoi d’une requête 'ping' sur ${tgt} [${ip}]\nRéponse de ${ip} : octets=32 temps<1 ms TTL=64\nPaquets : envoyés = 4, reçus = 4, perdus = 0 (perte 0 %)`):err(`Envoi d’une requête 'ping' sur ${tgt} [${ip}]\nDélai d’attente de la demande dépassé.\nPaquets : envoyés = 4, reçus = 0, perdus = 4 (perte 100 %)`);
 else r=warn(`Détermination de l’itinéraire vers ${tgt} [${ip}]\n  1   ${s.gateway}\n  2   ${alive?ip:'* * * délai dépassé'}`);
 }} }
 else if(cmd==='route'){
 const op=lowerArgs[0]||'print';if(op==='print'){s.inspectedRoutes=true;r=result(`Table de routage IPv4\nDestination       Masque             Passerelle\n`+s.routes.map(t=>`${t.target.padEnd(18)}${t.mask.padEnd(19)}${t.gateway}`).join('\n'))}
 else if(op==='add'){const target=a[1],mask=lowerArgs[2]==='mask'?a[3]:null,gw=lowerArgs[2]==='mask'?a[4]:null;if(!ipValid(target)||!ipValid(mask)||!ipValid(gw))r=err('Syntaxe : route add destination MASK masque passerelle');else {s.routes=s.routes.filter(x=>x.target!==target);s.routes.push({target,mask,gateway:gw});event('Route ajoutée '+target+' via '+gw);r=ok('OK ! Route ajoutée.') }}
 else if(op==='delete'){const target=a[1];const before=s.routes.length;s.routes=s.routes.filter(x=>x.target!==target);if(before===s.routes.length)r=err('Route introuvable.');else{event('Route supprimée : '+target,'WARNING');r=ok('OK ! Route supprimée.')}}else r=err('Opération route inconnue. Tapez help route.');
 }
 else if(cmd==='arp'){if(lowerArgs[0]==='-a'||!a.length)r=result(`Interface : ${s.ip}\n  Adresse Internet       Adresse physique\n  192.168.10.1           00-10-5A-10-00-01\n  192.168.10.10          00-10-5A-10-00-0A\n  192.168.10.25          00-10-5A-10-00-19`);else if(lowerArgs[0]==='-d')r=ok('Cache ARP vidé.');else r=err('Paramètre arp inconnu.');}
 else if(cmd==='getmac')r=result('Connexion Ethernet0   '+s.mac);
 else if(cmd==='netstat')r=lowerArgs.includes('-r')?execute('route print'):result('Connexions actives\nProto Adresse locale        Adresse distante        État       PID\nTCP   192.168.10.42:50382    192.168.10.25:443      ESTABLISHED 2012\nTCP   192.168.10.42:50401    192.168.10.10:53       TIME_WAIT   804');
 else if(cmd==='netsh'){if(all.includes('show config')||all.includes('show interfaces'))r=result(info());else if(all.includes('advfirewall show'))r=result('Profil Domaine : ACTIVÉ\nProfil Privé : ACTIVÉ\nProfil Public : ACTIVÉ');else r=err('Sous-commande netsh non disponible dans ce laboratoire.');}
 else if(cmd==='sc'){
 const op=lowerArgs[0]||'query',service=a[1]||'Dnscache';const match=Object.keys(s.services).find(x=>x.toLowerCase()===service.toLowerCase());if(op==='query'||op==='queryex')r=match?result(`SERVICE_NAME: ${match}\n        STATE : ${s.services[match]==='RUNNING'?'4  RUNNING':'1  STOPPED'}`):result(Object.entries(s.services).map(([k,v])=>`${k.padEnd(22)} ${v}`).join('\n'));
 else if(!match)r=err('[SC] OpenService ÉCHEC 1060 : le service spécifié n’existe pas.');else if(op==='stop'){s.services[match]='STOPPED';event('Service '+match+' arrêté','WARNING');r=warn('[SC] ControlService réussite : '+match+' arrêté.')}else if(op==='start'){s.services[match]='RUNNING';event('Service '+match+' démarré');r=ok('[SC] StartService réussite : '+match+' démarré.')}else r=err('Syntaxe : sc query | start | stop service.');
 }
 else if(cmd==='tasklist')r=result('Nom de l’image               PID\n'+s.processes.map(p=>p.name.padEnd(29)+p.pid).join('\n'));
 else if(cmd==='taskkill'){const at=lowerArgs.indexOf('/pid'),pid=Number(a[at+1]);const p=s.processes.find(x=>x.pid===pid);if(at<0||!p)r=err('ERREUR : processus introuvable ou paramètre invalide.');else if(pid===4)r=err('ERREUR : accès refusé au processus système.');else {s.processes=s.processes.filter(x=>x!==p);event('Processus '+p.name+' terminé','WARNING');r=ok('Opération réussie : PID '+pid+' terminé.')}}
 else if(cmd==='systeminfo')r=result(`Nom de l’hôte : ${s.machine}\nNom du système : Microsoft Windows (simulé)\nFabricant : TERMINAL OPS LAB\nDomaine : AGENCE.LOCAL\nMémoire physique totale : 8 Go`);
 else if(cmd==='driverquery')r=result('Nom du module      Type\ne1dexpress         Pilote réseau\nprintqueue         Pilote d’impression');
 else if(cmd==='net'){const op=lowerArgs[0]||'';if(op==='user')r=result('Comptes du poste : Administrateur, Technicien, Invité');else if(op==='localgroup')r=result('Groupes locaux : Administrateurs, Utilisateurs, Opérateurs');else if(op==='view')r=result('\u005c\u005cSRV-FICHIERS\n\u005c\u005cWIN-SRV-02');else if(op==='use')r=result('Lecteurs réseau : Z: \\SRV-FICHIERS\\Partage');else r=err('Sous-commande net non disponible.');}
 else if(cmd==='gpresult')r=result('Stratégies de groupe : GPO-Postes-Administratifs, GPO-Securite');
 else if(cmd==='gpupdate')r=ok('Mise à jour de stratégie simulée terminée.');
 else if(cmd==='sfc'||cmd==='chkdsk')r=warn('Contrôle diagnostique simulé : aucune anomalie détectée.');
 else if(cmd==='wmic')r=warn('WMIC est obsolète ; commande non installée dans cet environnement de laboratoire.');
 else if(cmd==='eventcreate')r=warn('Syntaxe restreinte : création d’événement non prise en charge dans ce laboratoire.');
 else if(cmd==='color'||cmd==='title')r=result('Paramètre d’affichage ignoré par la console intégrée.');
 else if(cmd==='exit')r=warn('Session de laboratoire conservée pour ne pas fermer le jeu.');
 else r=err(`'${tokens[0]}' n’est pas reconnu comme commande interne ou externe dans ce laboratoire. Tapez help.`);
 const steps=checkProgress(cmd);return {...r,steps,observations:[...s.observations],snapshot:getState()}
}
function getState(){return clone(s)}
function status(){return {mission:s.mission,steps:[...s.steps],services:clone(s.services),cache:clone(s.cache),routes:clone(s.routes),observations:[...s.observations],corruption:[...s.corruption],events:clone(s.events),healthyDNS:s.services.Dnscache==='RUNNING'&&resolve('intranet.agence.local',false)===resolve('intranet.agence.local',true)}}
window.TerminalOpsSim={reset,execute,getState,status,commands:[...names]};reset('cmd-dns');
})();
