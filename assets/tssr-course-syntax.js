/* Display-only syntax enhancement for $TSSR courses. No stored data changes. */
(function(){'use strict';
const commands=new Set('id groupadd groupmod groupdel gpasswd useradd usermod userdel chsh passwd su sudo cat tail ls pwd cd echo whereis touch exit getent whoami chage visudo man adduser deluser groups chmod chown mkdir cp mv rm grep find apt apt-get dpkg systemctl ip ping ss mount umount df du lsblk fdisk tar bash nano vim head less more cut sort uniq wc sed awk ps kill hostname hostnamectl journalctl free top'.split(' '));
const palette={cmd:'#207C8C',course:'#801B30',opt:'#801B30',extra:'#A38700',arg:'#D97923'}; function paint(el,cls){if(palette[cls]){el.style.setProperty('color',palette[cls],'important');el.style.setProperty('-webkit-text-fill-color',palette[cls],'important')}} function span(cls,value){const s=document.createElement('span');s.className='ts110-'+cls;s.textContent=value;paint(s,cls);return s}
function enhance(body){if(!body||body.dataset.ts110)return;
const known=new Set(commands), status=new Map();
body.querySelectorAll('h3,h4').forEach(h=>{const m=h.textContent.trim().match(/^\d+(?:\.\d+)*\s*[—–-]\s*([\w.+-]+)$/);if(m){known.add(m[1]);h.classList.add('ts110-heading');paint(h,'cmd')}});
const rows=[...body.querySelectorAll('li,p')].filter(r=>!r.querySelector('li,p,pre,table')&&/\[(Cours|Complément)\]\s*$/i.test(r.textContent));
function tokens(s){return s.match(/"(?:\\.|[^"\\])*"|'[^']*'|\s+|[^\s]+/g)||[]}
function flags(s){return s.match(/(?:^|\s|\/)(--?[\w-]+)(?=\s|$|\/)/g)?.map(x=>x.trim().replace(/^\//,''))||[]}
for(const row of rows){const code=row.querySelector('code');if(!code)continue;const cmd=code.textContent.trim().split(/\s+/)[0];known.add(cmd);const kind=/\[Cours\]\s*$/i.test(row.textContent)?'course':'extra';const prefix=row.textContent.split(code.textContent)[0];for(const f of flags(prefix))status.set(cmd+' '+f,kind);row.classList.add('ts110-row');const li=row.closest('li');if(li)li.classList.add('ts110-row');const walker=document.createTreeWalker(row,NodeFilter.SHOW_TEXT);let n,last;while(n=walker.nextNode())if(n.textContent.trim())last=n;if(last)last.textContent=last.textContent.replace(/\s*\[(Cours|Complément)\]\s*$/i,'');for(const el of row.querySelectorAll('strong,b')){if(/^\s*-/.test(el.textContent)){el.classList.add('ts110-'+kind);paint(el,kind);if(el.parentElement.tagName==='SPAN')paint(el.parentElement,kind)}} }
for(const code of body.querySelectorAll('code')){if(code.closest('pre,table'))continue;const raw=code.textContent;const first=raw.trim().split(/\s+/)[0];if(!known.has(first)&&!/^\.\/[\w.-]+$/.test(first))continue;code.classList.add('ts110-code');for(const [k,v] of Object.entries({background:'transparent',border:'0',padding:'0','box-shadow':'none','border-radius':'0'}))code.style.setProperty(k,v,'important');let index=0;code.replaceChildren();for(const t of tokens(raw)){if(/^\s+$/.test(t)){code.append(document.createTextNode(t));continue}let cls='arg';if(index===0||(first==='sudo'&&index===1&&known.has(t)))cls='cmd';else if(/^--?[A-Za-z0-9]/.test(t)||t==='-'){cls=status.get(first+' '+t)||'opt';if(cls==='opt'&&/^-[A-Za-z]{2,}$/.test(t)){const parts=[...t.slice(1)].map(c=>status.get(first+' -'+c));if(parts.every(x=>x&&x===parts[0]))cls=parts[0];else if(parts.some(Boolean)){code.append(span('opt','-'));for(let i=0;i<parts.length;i++)code.append(span(parts[i]||'opt',t[i+1]));index++;continue}}}else if(/^(?:\[options\]|<options>)$/i.test(t))cls='opt';code.append(span(cls,t));index++}}
// Build display-only grids from tagged option rows, preserving the original code tokens.
for(const row of rows){
 const code=row.querySelector('code.ts110-code'); if(!code)continue;
 const range=document.createRange();range.selectNodeContents(row);range.setEndBefore(code);
 const prefix=range.toString().trim();
 const m=prefix.match(/^\s*(--?[\w-]+|-)\s*(?:\/\s*(--[\w-]+)|\[([\w-]+)\])?\s*[—–:-]?\s*$/);if(!m)continue;
 const after=document.createRange();after.selectNodeContents(row);after.setStartAfter(code);
 const desc=after.toString().replace(/^\s*[—–:]\s*/, '').trim();
 const cmd=code.textContent.trim().split(/\s+/)[0];const kind=status.get(cmd+' '+m[1])||'course';
 const option=span(kind,m[1]);option.classList.add('ts112-short');
 const long=document.createElement('span');long.className='ts112-long';long.textContent=m[3]?'['+m[3]+']':m[2]?'['+m[2].slice(2)+']':'';
 const example=document.createElement('span');example.className='ts112-example';example.append(code.cloneNode(true));
 const explanation=document.createElement('span');explanation.className='ts112-desc';explanation.textContent=desc;
 row.replaceChildren(option,long,example,explanation);row.classList.add('ts112-grid');
}
body.dataset.ts110='1';
const layout=body.closest('.tssr-vfinal-layout');if(layout){layout.querySelectorAll('.tssr-v82-command code').forEach(code=>{const first=code.textContent.trim().split(/\s+/)[0];code.querySelectorAll('span').forEach(el=>{let cls=el.classList.contains('tssr-syn-cmd')?'cmd':el.classList.contains('tssr-syn-opt')?'opt':'arg';if(cls==='opt')cls=status.get(first+' '+el.textContent)||cls;paint(el,cls)})});layout.querySelectorAll('.tssr-essentials .tssr-v82-panel-scroll').forEach(enhance);}
}
window.tssrEnhanceCourseSyntax=enhance;
let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;document.querySelectorAll('#view .tssr-v82-reading-body, #view .tssr-fiche-layout').forEach(enhance)})}function init(){const v=document.getElementById('view');if(v){new MutationObserver(schedule).observe(v,{childList:true,subtree:true});schedule()}}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();})();
