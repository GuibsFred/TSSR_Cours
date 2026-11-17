/* V98: tableau de bord de catalogue, filtre visuel uniquement, données inchangées */
(function(){'use strict';
let filter='all';
function update(){
 const grid=document.querySelector('#view .course-library-grid');if(!grid)return;
 const cards=[...grid.querySelectorAll(':scope > .mg-module-tile')];
 const states=cards.map(t=>{
  const label=t.querySelector('.tssr-module-status');
  const text=label?label.textContent.trim().toLowerCase():'';
  return text.includes('termin')?'done':text.includes('cours')?'progress':'new';
 });
 let summary=document.querySelector('#view .tssr-catalog-summary');
 if(!summary){summary=document.createElement('div');summary.className='tssr-catalog-summary';const bar=document.querySelector('#view .tssr-catalog-toolbar');if(bar)bar.parentNode.insertBefore(summary,bar);}
 const count=s=>states.filter(v=>v===s).length;
 const total=cards.length,done=count('done'),progress=count('progress'),fresh=count('new');
 summary.innerHTML='<span><strong>'+total+'</strong> Modules</span><span><strong>'+done+'</strong> Terminés</span><span><strong>'+progress+'</strong> En cours</span><span><strong>'+fresh+'</strong> Non commencés</span>';
 const bar=document.querySelector('#view .tssr-catalog-toolbar');
 if(bar&&!bar.querySelector('.tssr-catalog-tools')){
 const tools=document.createElement('div');tools.className='tssr-catalog-tools';
 tools.innerHTML='<button class="tssr-filter" data-filter="all">Tous</button><button class="tssr-filter" data-filter="progress">En cours</button><button class="tssr-filter" data-filter="done">Terminés</button><button class="tssr-filter" data-filter="new">Non commencés</button>';
 bar.prepend(tools);
 }
 cards.forEach((card,i)=>{card.hidden=filter!=='all'&&states[i]!==filter;});
 document.querySelectorAll('#view .tssr-filter').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.filter===filter));});
}
document.addEventListener('click',e=>{const btn=e.target.closest('#view .tssr-filter');if(btn){filter=btn.dataset.filter;update();}});
function init(){const view=document.querySelector('#view');if(!view)return;new MutationObserver(()=>{if(!view.querySelector('.course-library-grid'))filter='all';update()}).observe(view,{childList:true,subtree:false});update();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
