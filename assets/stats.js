/* Statistiques publiques TSSR — aucun accès à data/custom.json */
(()=>{'use strict';
const URL='https://oufajxuuoooncadbubvu.supabase.co';
const KEY='sb_publishable_HflBjuU2gTvO8MUhIoydWw_joDHg3jx';
const HEAD={'apikey':KEY,'Content-Type':'application/json'};
const fmt=new Intl.NumberFormat('fr-FR');
const uuid=()=>crypto.randomUUID();
function identity(){let id=localStorage.getItem('tssr-stats-visitor');if(!id||!/^[\da-f]{8}-[\da-f-]{27,}$/i.test(id)){id=uuid();localStorage.setItem('tssr-stats-visitor',id)}return id}
async function rpc(name,body){const r=await fetch(URL+'/rest/v1/rpc/'+name,{method:'POST',headers:HEAD,body:JSON.stringify(body)});if(!r.ok)throw Error('Statistiques indisponibles ('+r.status+')');return r.json()}
let currentCourse='',liked=false,working=false,visits='—',likes='—';
async function totals(){try{const d=await rpc('lire_statistiques',{});visits=fmt.format(Number(d.visites)||0);likes=fmt.format(Number(d.likes)||0);document.querySelectorAll('[data-stats-visits]').forEach(x=>x.textContent=visits);document.querySelectorAll('[data-stats-likes]').forEach(x=>x.textContent=likes)}catch(e){console.warn(e)}}
async function courseState(id){try{const r=await fetch(URL+'/rest/v1/course_likes?select=visitor_id&course_id=eq.'+encodeURIComponent(id)+'&visitor_id=eq.'+identity()+'&limit=1',{headers:{apikey:KEY}});if(!r.ok)throw Error('Lecture indisponible');const rows=await r.json();if(currentCourse!==id)return;liked=rows.length>0;updateButton()}catch(e){console.warn(e);const b=document.getElementById('tssr-like-button');if(b)b.disabled=true}}
function updateButton(){const b=document.getElementById('tssr-like-button');if(b){b.textContent=liked?'♥ Je n’aime plus':'♡ J’aime ce cours';b.setAttribute('aria-pressed',String(liked));b.disabled=working}}
function mount(){const home=document.querySelector('.v84-home .v81-hero');if(home&&!document.getElementById('tssr-stats-bar')){home.insertAdjacentHTML('afterend','<div class="tssr-stats-bar" id="tssr-stats-bar" aria-label="Statistiques du site"><span>👁 Visites : <strong data-stats-visits>'+visits+'</strong></span><span>👍 J’aime : <strong data-stats-likes>'+likes+'</strong></span><span>⬇ Téléchargements : <strong data-total-downloads>—</strong></span></div>')}
const article=document.querySelector('#view article.article');const path=decodeURIComponent(location.hash.slice(1));const id=path.startsWith('page=')?path.slice(5):'';const course=article&&id&&document.querySelector('#view .articlebar .pill')?.textContent?.trim()==='Cours';if(course){if(!document.getElementById('tssr-course-like')){article.insertAdjacentHTML('beforeend','<div class="tssr-course-like" id="tssr-course-like"><button type="button" id="tssr-like-button" disabled>♡ J’aime ce cours</button><span>Ton avis compte !</span></div>')}if(currentCourse!==id){currentCourse=id;liked=false;courseState(id)}}else currentCourse=''}
let queued=false;const obs=new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;mount()})});obs.observe(document.getElementById('view'),{childList:true,subtree:false});
document.addEventListener('click',async e=>{if(!e.target.closest('#tssr-like-button')||working||!currentCourse)return;working=true;updateButton();const id=currentCourse;try{const result=await rpc('basculer_like',{p_course_id:id,p_visitor_id:identity()});if(currentCourse===id){liked=result===true;updateButton()}await totals()}catch(err){console.warn(err);alert('Impossible d’enregistrer le J’aime pour le moment.')}finally{working=false;updateButton()}});
async function start(){mount();await totals();try{if(!sessionStorage.getItem('tssr-stats-session')){await rpc('enregistrer_visite',{p_visitor_id:identity()});sessionStorage.setItem('tssr-stats-session','1');await totals()}}catch(e){console.warn('Visite non enregistrée',e)}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
