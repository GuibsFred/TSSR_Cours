(()=>{'use strict';
const KEY='tssr-personnalise-site-v1';
const themes=[['graphite','◈','Graphite & Acier','Acier froid et graphite','#8faebc'],['atelier','⚙','Atelier technologique','Cuivre, bronze et charbon','#c28b58'],['mat','▦','Industriel mat','Identité actuelle adoucie','#729ba7'],['retro','▤','Rétrofuturiste','Olive, ambre et métal patiné','#b8a16c']];
let current='mat';try{current=localStorage.getItem(KEY)||'mat'}catch(e){}if(!themes.some(t=>t[0]===current))current='mat';
function apply(id){current=id;document.documentElement.setAttribute('data-tssr-skin',id);try{localStorage.setItem(KEY,id)}catch(e){}document.querySelectorAll('#tssr-skin-menu [data-skin]').forEach(b=>b.setAttribute('aria-checked',String(b.dataset.skin===id)));}
apply(current);
function init(){const top=document.querySelector('header.top');if(!top||document.getElementById('tssr-skin-btn'))return;
const box=document.createElement('div');box.id='tssr-skin-control';
const button=document.createElement('button');button.type='button';button.id='tssr-skin-btn';button.textContent='⚙ Personnaliser le site';button.setAttribute('aria-haspopup','true');button.setAttribute('aria-expanded','false');
const menu=document.createElement('div');menu.id='tssr-skin-menu';menu.hidden=true;menu.setAttribute('role','menu');
const h=document.createElement('strong');h.textContent='Apparence du site';menu.append(h);
for(const [id,icon,name,description,color] of themes){const b=document.createElement('button');b.type='button';b.dataset.skin=id;b.setAttribute('role','menuitemradio');b.setAttribute('aria-checked',String(current===id));const sw=document.createElement('i');sw.style.background=color;const label=document.createElement('span');label.textContent=icon+' '+name;const desc=document.createElement('small');desc.textContent=description;label.append(desc);b.append(sw,label);b.addEventListener('click',()=>{apply(id);close()});menu.append(b)}
function close(){menu.hidden=true;button.setAttribute('aria-expanded','false')}
button.addEventListener('click',()=>{menu.hidden=!menu.hidden;button.setAttribute('aria-expanded',String(!menu.hidden))});document.addEventListener('click',e=>{if(!box.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
box.append(button,menu);top.append(box);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();