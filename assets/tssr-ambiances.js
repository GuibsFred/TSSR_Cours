(()=>{'use strict';
const key='tssr-ambiance-v1',choices=[['chalet','☀️','Chalet / Café','Lumières orange chaleureuses','#ffab49'],['cyber','💠','Cyber / Cyan','Éclairage bleu technologique','#37dcff'],['gaming','🌆','Gaming / Néon','Rose et violet','#fd638f'],['studio','❄️','Studio / Glacial','Blanc bleuté','#b6d8ff']];
let chosen='chalet';try{chosen=localStorage.getItem(key)||'chalet'}catch(e){}if(!choices.some(c=>c[0]===chosen))chosen='chalet';document.documentElement.dataset.tssrAmbiance=chosen;
function init(){const top=document.querySelector('header.top');if(!top||document.getElementById('tssr-amb-btn'))return;
const btn=document.createElement('button');btn.type='button';btn.id='tssr-amb-btn';btn.textContent='💡 Ambiance';btn.setAttribute('aria-label','Choisir une ambiance lumineuse');btn.setAttribute('aria-expanded','false');
const menu=document.createElement('section');menu.id='tssr-amb-menu';menu.hidden=true;menu.setAttribute('aria-label','Ambiances du bureau');
const title=document.createElement('h3');title.textContent='💡 Éclairage du bureau';menu.append(title);
for(const [id,emoji,name,desc,color] of choices){const option=document.createElement('button');option.type='button';option.dataset.amb=id;const sw=document.createElement('span');sw.className='swatch';sw.style.background=color;option.append(sw,document.createTextNode(emoji+' '+name));const small=document.createElement('small');small.textContent=desc;option.append(small);option.addEventListener('click',()=>{chosen=id;document.documentElement.dataset.tssrAmbiance=id;try{localStorage.setItem(key,id)}catch(e){}refresh();menu.hidden=true;btn.setAttribute('aria-expanded','false')});menu.append(option)}
const info=document.createElement('p');info.textContent='Les éclairages et la teinte de la scène changent ; les cours et les écrans restent inchangés.';menu.append(info);
function refresh(){menu.querySelectorAll('button[data-amb]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.amb===chosen)))}refresh();
const anchor=top.querySelector('#themeBtn');if(anchor)anchor.after(btn);else top.append(btn);document.body.append(menu);
btn.addEventListener('click',()=>{menu.hidden=!menu.hidden;btn.setAttribute('aria-expanded',String(!menu.hidden))});document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.hidden=true;btn.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.hidden=true;btn.setAttribute('aria-expanded','false')}})
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
