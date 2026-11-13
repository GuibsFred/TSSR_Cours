"use strict";
/* Linux Operator: le contrôle vérifie les fichiers réels du système 9p, pas la commande tapée. */
const $ = (id) => document.getElementById(id);
const missions = [
 {title:"Créer ton premier fichier",kind:"Fichiers",desc:"Dans ton dossier /home/tssr, crée le répertoire mission01 puis un fichier pret.txt contenant exactement MISSION_OK. Tu choisis librement les commandes Bash.",target:"/home/tssr/mission01/pret.txt  →  MISSION_OK",check: async emu => (await textFile(emu,"/home/tssr/mission01/pret.txt")).trim()==="MISSION_OK"},
 {title:"Sauvegarde d'un fichier",kind:"Administration",desc:"Le fichier sources/inventaire.txt existe déjà. Crée le dossier backup et copies-y ce fichier, en conservant son contenu.",target:"/home/tssr/backup/inventaire.txt  (copie identique)",check: async emu => (await textFile(emu,"/home/tssr/backup/inventaire.txt"))===(await textFile(emu,"/home/tssr/sources/inventaire.txt"))},
 {title:"Extraire les erreurs",kind:"Dépannage",desc:"Dans logs/serveur.log, recherche les lignes contenant ERROR et enregistre seulement ces lignes dans resultats/erreurs.txt. Le fichier obtenu doit être complet et sans lignes supplémentaires.",target:"/home/tssr/resultats/erreurs.txt  (lignes ERROR)",check: async emu => {const src=await textFile(emu,"/home/tssr/logs/serveur.log"),dst=await textFile(emu,"/home/tssr/resultats/erreurs.txt");return dst.trimEnd()===src.split(/\r?\n/).filter(x=>x.includes("ERROR")).join("\n").trimEnd();}}
];
let emu=null,term=null,fit=null,selected=0,booting=false;
let completed=new Set();
try{completed=new Set(JSON.parse(localStorage.getItem("linux-operator-done-v1")||"[]"))}catch{}
function status(message,ok=false){$("status").textContent=message;$("powerLed").classList.toggle("active",ok)}
function feedback(message,good){$("feedback").textContent=message;$("feedback").className=good?"good":"bad"}
function drawMissions(){
 $("progress").textContent=completed.size+" / "+missions.length;
 $("missionList").innerHTML="";
 missions.forEach((m,i)=>{
  const b=document.createElement("button");b.className="mission-row"+(i===selected?" active":"")+(completed.has(i)?" done":"");
  b.innerHTML='<span class="mission-index">'+(completed.has(i)?"✓":String(i+1).padStart(2,"0"))+'</span><span class="mission-name"><b>'+m.title+'</b><small>'+m.kind+'</small></span>';
  b.addEventListener("click",()=>{selected=i;drawMissions();feedback("",false)});$("missionList").appendChild(b);
 });
 const m=missions[selected];$("missionNum").textContent=String(selected+1).padStart(2,"0");$("missionTitle").textContent=m.title;$("missionDesc").textContent=m.desc;$("missionTarget").textContent=m.target;
}
async function textFile(emulator,path){const bytes=await emulator.read_file(path);if(!bytes)throw Error("Fichier absent");return new TextDecoder("utf-8").decode(bytes)}
async function checkMission(){
 if(!emu)return feedback("Démarre d'abord Linux.",false);
 $("check").disabled=true;feedback("Vérification de l'état du système…",false);
 try{const passed=await missions[selected].check(emu);
  if(passed){completed.add(selected);localStorage.setItem("linux-operator-done-v1",JSON.stringify([...completed]));drawMissions();feedback("✓ Mission réussie ! Le système de fichiers confirme le résultat.",true)}
  else feedback("Pas encore validé : vérifie le chemin et le contenu du fichier.",false);
 }catch(e){feedback("Pas encore validé : fichier attendu absent ou inaccessible.",false)}
 $("check").disabled=false;term?.focus();
}
async function start(){
 if(booting||emu)return;
 booting=true;$("boot").disabled=true;status("Vérification des fichiers Linux…");
 if(typeof window.V86!=="function"||!window.Terminal||!window.FitAddon?.FitAddon){status("Moteur absent : compiler les ressources avec GitHub Actions");$("boot").disabled=false;booting=false;return}
 try{
  // Vérifie une ressource générée par le workflow avant de lancer le chargement du noyau.
  const probe=await fetch("./assets/alpine-fs.json",{method:"GET",cache:"no-store"});if(!probe.ok)throw Error("alpine-fs.json absent (construction GitHub non effectuée)");
  await probe.body?.cancel();
  $("terminal").replaceChildren();
  term=new window.Terminal({cursorBlink:true,convertEol:false,fontFamily:'"Cascadia Code",Consolas,"Liberation Mono",monospace',fontSize:14,lineHeight:1.24,theme:{background:"#07121e",foreground:"#d5e7e8",cursor:"#53e3bd",selectionBackground:"#376374"},allowTransparency:false,scrollback:3500});
  fit=new window.FitAddon.FitAddon();term.loadAddon(fit);term.open($("terminal"));fit.fit();term.writeln("\x1b[36m[Linux Operator]\x1b[0m Initialisation du système Linux...");
  emu=new window.V86({wasm_path:"./assets/v86.wasm",memory_size:384*1024*1024,vga_memory_size:8*1024*1024,screen_container:$("screen_container"),bios:{url:"./assets/seabios.bin"},vga_bios:{url:"./assets/vgabios.bin"},filesystem:{baseurl:"./assets/rootfs-flat",basefs:"./assets/alpine-fs.json"},bzimage_initrd_from_filesystem:true,cmdline:"rw root=host9p rootfstype=9p rootflags=trans=virtio,cache=loose modules=virtio_pci tsc=reliable console=ttyS0,115200",autostart:true,disable_keyboard:true});
  const backlog=[];let scheduled=false,history="";
  const flush=()=>{scheduled=false;if(backlog.length){const bytes=new Uint8Array(backlog.splice(0));term.write(bytes)}};
  emu.add_listener("serial0-output-byte",byte=>{backlog.push(byte);history=(history+String.fromCharCode(byte)).slice(-1200);if(!scheduled){scheduled=true;requestAnimationFrame(flush)}if(history.includes("root@operator")||history.includes("LINUX OPERATOR PRÊT")){status("Bash disponible",true);$("runtime").textContent="ALPINE · VRAI BASH"}});
  emu.add_listener("emulator-ready",()=>{status("Émulateur prêt — démarrage Linux…");$("runtime").textContent="CHARGEMENT DU NOYAU"});
  term.onData(data=>emu.serial0_send(data));
  $("restart").disabled=false;$("check").disabled=false;
  $("boot").textContent="Linux démarré";
  window.addEventListener("resize",()=>fit?.fit());term.focus();
 }catch(err){console.error(err);status("Erreur de lancement : "+err.message);if(term)term.writeln("\r\n\x1b[31m"+err.message+"\x1b[0m");$("boot").disabled=false;emu=null;booting=false;}
}
window.addEventListener("DOMContentLoaded",()=>{
 drawMissions();$("boot").addEventListener("click",start);$("check").addEventListener("click",checkMission);
 $("restart").addEventListener("click",()=>{if(confirm("Réinitialiser le Linux ? Les fichiers créés dans la VM seront perdus."))location.reload()});
 $("fullscreen").addEventListener("click",async()=>{const p=document.querySelector(".console-panel");if(!document.fullscreenElement)await p.requestFullscreen();else await document.exitFullscreen();setTimeout(()=>fit?.fit(),200)});
 document.addEventListener("fullscreenchange",()=>fit?.fit());
});
