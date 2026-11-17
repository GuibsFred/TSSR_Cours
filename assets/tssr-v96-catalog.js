/* V96 – bascule grille/liste, non destructive, sans modifier les données des cours */
(function(){'use strict';
 var STORAGE='tssr-catalog-view-v96';
 var mode='grid';try{mode=localStorage.getItem(STORAGE)==='list'?'list':'grid'}catch(e){}
 function refresh(){
  var grid=document.querySelector('#view .course-library-grid');
  if(!grid)return;
  grid.classList.toggle('tssr-catalog-list',mode==='list');
  var bar=document.querySelector('#view .tssr-catalog-toolbar');
  if(!bar){bar=document.createElement('div');bar.className='tssr-catalog-toolbar';bar.innerHTML='<div class="tssr-view-switch" role="group" aria-label="Présentation des cours"><button type="button" data-tssr-view="grid">▦ Grille</button><button type="button" data-tssr-view="list">☷ Liste</button></div>';grid.parentNode.insertBefore(bar,grid);}
  bar.querySelectorAll('[data-tssr-view]').forEach(function(btn){btn.setAttribute('aria-pressed',String(btn.dataset.tssrView===mode));});
 }
 document.addEventListener('click',function(event){var btn=event.target.closest('[data-tssr-view]');if(!btn)return;mode=btn.dataset.tssrView==='list'?'list':'grid';try{localStorage.setItem(STORAGE,mode)}catch(e){}refresh();});
 function init(){var view=document.querySelector('#view');if(!view)return;var observer=new MutationObserver(function(){refresh()});observer.observe(view,{childList:true,subtree:false});refresh();}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
