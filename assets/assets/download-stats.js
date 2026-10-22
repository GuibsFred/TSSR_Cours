/* TSSR — téléchargements : compteur public + suivi des clics. */
(()=>{'use strict';
const BASE='https://oufajxuuoooncadbubvu.supabase.co/rest/v1/rpc/';
const KEY='sb_publishable_HflBjuU2gTvO8MUhIoydWw_joDHg3jx';
const fmt=new Intl.NumberFormat('fr-FR');
const totals={total:0,outils:{}};
const headers={'apikey':KEY,'Content-Type':'application/json'};
async function rpc(name,data){const res=await fetch(BASE+name,{method:'POST',headers,body:JSON.stringify(data)});if(!res.ok)throw Error('RPC '+name+': '+res.status);return res.json()}
function visitor(){let v=localStorage.getItem('tssr-stats-visitor');if(!v||!/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(v)){v=crypto.randomUUID();localStorage.setItem('tssr-stats-visitor',v)}return v}
function paint(){document.querySelectorAll('[data-tool-download-count]').forEach(el=>{const id=el.getAttribute('data-tool-download-count');el.textContent=fmt.format(Number(totals.outils[id])||0)});document.querySelectorAll('[data-total-downloads]').forEach(el=>el.textContent=fmt.format(totals.total));}
async function refresh(){try{const data=await rpc('lire_telechargements',{});totals.total=Number(data.total)||0;totals.outils=data.outils||{};paint()}catch(e){console.warn('Compteur téléchargements indisponible',e)}}
let scheduled=false;const observer=new MutationObserver(()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;paint()})});
function start(){const view=document.getElementById('view');if(view)observer.observe(view,{childList:true,subtree:false});refresh()}
document.addEventListener('click',event=>{const link=event.target.closest('a[data-tool-download]');if(!link)return;const id=link.getAttribute('data-tool-download');if(!id)return;
// Ne bloque jamais le téléchargement si Supabase est lent ou indisponible.
const recentKey='tssr-download-'+id;const now=Date.now();const last=Number(sessionStorage.getItem(recentKey)||0);if(now-last<60000)return;sessionStorage.setItem(recentKey,String(now));
rpc('enregistrer_telechargement',{p_tool_id:id,p_visitor_id:visitor()}).then(()=>refresh()).catch(e=>console.warn('Téléchargement non comptabilisé',e));
},true);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
