'use strict';
let vm = null;
const $ = id => document.getElementById(id);
const status = (label, type='') => { $('status').textContent = '● ' + label; $('status').className = 'status ' + type; };
const msg = text => { $('message').textContent = text; };
function loadScript(src) { return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Chargement impossible : '+src));document.head.append(s);}); }
async function start() {
  $('start').disabled=true;status('Chargement…');msg('Chargement du moteur v86…');
  try {
    const c=window.LAB_CONFIG;
    if (!window.V86) await loadScript(c.js);
    if (!window.V86) throw new Error('Le moteur v86 n’a pas exposé V86.');
    vm=new window.V86({
      wasm_path:c.wasm,
      memory_size:c.memoryMB*1024*1024,
      vga_memory_size:8*1024*1024,
      screen_container:$('screen_container'),
      bios:{url:c.bios},vga_bios:{url:c.vgaBios},
      filesystem:{baseurl:c.filesystemBase,basefs:c.filesystemJson},
      bzimage_initrd_from_filesystem:true,
      cmdline:'rw root=host9p rootfstype=9p rootflags=trans=virtio,cache=loose modules=virtio_pci tsc=reliable',
      autostart:true
    });
    vm.add_listener('emulator-ready',()=>{status('Linux initialisé','ok');msg('Linux initialisé. Attends l’invite de connexion puis clique dans la console.');$('reset').disabled=false;$('save').disabled=false;$('restore').disabled=false;});
    vm.add_listener('emulator-started',()=>{status('VM en marche','ok');msg('Démarrage Linux en cours…');});
    vm.add_listener('emulator-stopped',()=>status('VM arrêtée'));
    $('reset').disabled=false;
  } catch(e){console.error(e);status('Erreur','error');msg('Échec : '+e.message+' — Vérifie les ressources et la politique CORS. Voir README.');$('start').disabled=false;}
}
$('start').addEventListener('click',start);
$('reset').addEventListener('click',()=>{if(vm&&confirm('Réinitialiser la VM ? Les modifications non sauvegardées seront perdues.')){vm.destroy();vm=null;$('screen_container').innerHTML='<div class="vga-text"></div><canvas style="display:none"></canvas>';$('start').disabled=false;$('save').disabled=true;$('restore').disabled=true;$('reset').disabled=true;status('En attente');msg('Machine réinitialisée. Clique sur Démarrer Linux.');}});
$('save').addEventListener('click',async()=>{if(!vm)return;try{msg('Création de l’instantané…');const data=await vm.save_state();const url=URL.createObjectURL(new Blob([data],{type:'application/octet-stream'}));const a=document.createElement('a');a.href=url;a.download='tssr-linux-snapshot.bin';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);msg('Instantané exporté. Conserve-le pour restaurer cette session.');}catch(e){msg('Sauvegarde impossible : '+e.message);}});
$('restore').addEventListener('change',async e=>{const f=e.target.files[0];if(!f||!vm)return;if(!confirm('Restaurer cet instantané ? La session actuelle sera remplacée.'))return;try{msg('Restauration en cours…');await vm.restore_state(await f.arrayBuffer());vm.run();msg('Instantané restauré.');}catch(err){msg('Restauration impossible : '+err.message+' (utilise une image et une version de v86 compatibles).');}e.target.value='';});
