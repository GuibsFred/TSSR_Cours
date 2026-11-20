(()=>{'use strict';
const W=1672,H=941,photoUrl='assets/tssr-v20-scene-3840.jpg?v=22.0.0';
let host=null,canvas=null,ctx=null,frame=0,last=0;
const flakes=Array.from({length:105},(_,i)=>({x:(i*97.7)%W,y:(i*61.2)%385,r:.6+(i%5)*.27,v:8+(i%9)*2.7,phase:i*1.83}));
const areas=[[[478,394],[749,395],[748,615],[476,611]],[[770,400],[1110,402],[1110,650],[766,640]],[[1136,415],[1582,427],[1580,738],[1130,667]]];
function poly(p){ctx.beginPath();p.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath()}
function draw(t){if(!host||!host.isConnected){frame=0;return}frame=requestAnimationFrame(draw);if(t-last<32)return;last=t;
const img=host.querySelector('img.v19-cinema');if(!img)return;
const rect=host.getBoundingClientRect(),iw=rect.width,ih=rect.height;if(iw<2||ih<2)return;
const dpr=Math.min(devicePixelRatio||1,1.5),pw=Math.round(iw*dpr),ph=Math.round(ih*dpr);
if(canvas.width!==pw||canvas.height!==ph){canvas.width=pw;canvas.height=ph}
ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,pw,ph);
const cover=window.matchMedia('(max-width:750px)').matches;
const sc=(cover?Math.max:Math.min)(pw/W,ph/H),ox=(pw-W*sc)/2,oy=(ph-H*sc)/2;
ctx.setTransform(sc,0,0,sc,ox,oy);const sec=t/1000;
// Flakes appear only on the outdoor glass, never over the displays.
ctx.save();ctx.beginPath();ctx.rect(775,0,897,391);ctx.rect(370,0,385,385);ctx.clip();
for(const f of flakes){const y=(f.y+sec*f.v)%395,x=(f.x+Math.sin(sec*.6+f.phase)*13+W)%W;ctx.fillStyle=`rgba(241,248,255,${.20+f.r*.13})`;ctx.beginPath();ctx.arc(x,y,f.r,0,Math.PI*2);ctx.fill()}
ctx.restore();
// Very subtle screen activity clipped inside each monitor.
areas.forEach((a,j)=>{ctx.save();poly(a);ctx.clip();if(j===0){for(let k=0;k<8;k++){const y=444+k*20;ctx.fillStyle=`rgba(44,192,230,${.11+.09*Math.sin(sec*1.1+k)})`;ctx.fillRect(545,y,45+((k*31+Math.floor(sec*3)*7)%72),2)}}
if(j===1){for(let k=0;k<13;k++){const y=432+k*15;ctx.fillStyle=`rgba(${k%3?'58,191,229':'239,146,95'},${.12+.12*Math.sin(sec*1.5+k*.7)})`;ctx.fillRect(818+((k*11)%70),y,20+((k*31+Math.floor(sec*3)*6)%90),2.1)}ctx.fillStyle='rgba(80,220,210,.34)';ctx.fillRect(826,431+(Math.floor(sec*1.5)%12)*15,2,12)}
if(j===2){for(let k=0;k<4;k++){ctx.fillStyle=`rgba(100,210,255,${.07+.06*Math.sin(sec*1.3+k)})`;ctx.fillRect(1200+k*90,555,65,36)}}ctx.restore()});
// Coffee vapor: wisps rise from the cup at original image coordinates.
ctx.save();ctx.beginPath();ctx.rect(1020,520,120,185);ctx.clip();for(let i=0;i<4;i++){ctx.beginPath();for(let k=0;k<24;k++){let q=k/23, x=1070+i*9+Math.sin(q*9-sec*.85+i)*8,y=671-q*115; k?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.lineWidth=3+i*.5;ctx.strokeStyle=`rgba(237,244,248,${.07+.04*Math.sin(sec+i)})`;ctx.stroke()}ctx.restore();
// Fireplace flicker only where the actual fire is visible in the photograph.
ctx.save();ctx.beginPath();ctx.rect(0,390,72,215);ctx.clip();const glow=ctx.createRadialGradient(15,500,4,15,500,105);glow.addColorStop(0,`rgba(255,156,42,${.09+.06*Math.sin(sec*8)+.03*Math.sin(sec*13)})`);glow.addColorStop(1,'rgba(255,90,0,0)');ctx.fillStyle=glow;ctx.fillRect(0,390,80,220);ctx.restore();}
function attach(){const h=document.querySelector('.tssr-studio-home .studio-scene');if(!h)return;if(h!==host){host=h;canvas?.remove();canvas=document.createElement('canvas');canvas.className='v20-effects';canvas.setAttribute('aria-hidden','true');host.appendChild(canvas);ctx=canvas.getContext('2d');if(!frame)frame=requestAnimationFrame(draw)}const img=host.querySelector('img.v19-cinema');if(img&&img.getAttribute('src')!==photoUrl)img.src=photoUrl;}
new MutationObserver(attach).observe(document.body,{childList:true,subtree:true});attach();
})();