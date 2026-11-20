/* TSSR — progressive enhancement; never modifies source course data. */
(function(){
'use strict';
function enhance(){
 document.querySelectorAll('#view .tssr-v82-reading-body').forEach(function(body){
  if(body.dataset.editorialReady==='yes')return;
  body.dataset.editorialReady='yes';body.classList.add('tssr-editorial');
  var heads=[...body.children].filter(function(n){return /^H[23]$/.test(n.tagName)});
  heads.forEach(function(h,i){
   if(h.tagName==='H2'){
    h.classList.add('tssr-ed-chapter');
    var match=h.textContent.trim().match(/^(\d{1,2})\s*[.\-–—)]\s*(.*)$/);
    if(match){h.textContent='';var badge=document.createElement('span');badge.className='tssr-ed-number';badge.textContent=match[1];var title=document.createElement('span');title.className='tssr-ed-title';title.textContent=match[2];h.append(badge,title)}
   }else h.classList.add('tssr-ed-subtitle');
  });
  body.querySelectorAll('img').forEach(function(img){
   img.loading='lazy';img.decoding='async';
   if(!img.closest('figure')){
    var figure=document.createElement('figure');figure.className='tssr-ed-figure';img.parentNode.insertBefore(figure,img);figure.appendChild(img);
    if(img.alt&&img.alt.trim()){var cap=document.createElement('figcaption');cap.textContent=img.alt;figure.appendChild(cap)}
   }
  });
  body.querySelectorAll('table').forEach(function(table){
   if(table.closest('.tssr-ed-table-scroll'))return;
   var wrap=document.createElement('div');wrap.className='tssr-ed-table-scroll';table.parentNode.insertBefore(wrap,table);wrap.appendChild(table);
  });
  body.querySelectorAll('pre').forEach(function(pre){pre.classList.add('tssr-ed-terminal')});
 });
}
var queued=false;
function schedule(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;enhance()})}
function init(){var v=document.getElementById('view');if(!v)return;new MutationObserver(schedule).observe(v,{childList:true,subtree:true});schedule()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
