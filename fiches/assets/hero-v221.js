(()=>{'use strict';
const W=1672,H=941;let host,canvas,ctx,raf=0,last=0;
const screens=[{x:485,y:410,w:270,h:228},{x:777,y:412,w:330,h:248},{x:1140,y:425,w:440,h:306}];
function paint(t){raf=requestAnimationFrame(paint);if(!host?.isConnected||!ctx)return;if(t-last<40)return;last=t;
const r=host.getBoundingClientRect();if(r.width<10||r.height<10)return;const d=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(r.width*d);canvas.height=Math.round(r.height*d);
ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,r.width,r.height);
// Match CSS object-fit: cover, object-position: center 65%.
const scale=Math.max(r.width/W,r.height/H),ox=(r.width-W*scale)/2,oy=(r.height-H*scale)*.65;
ctx.translate(ox,oy);ctx.scale(scale,scale);const sec=t/1000;
// Activity stays inside the actual screens, with no glowing rectangles outside.
for(let i=0;i<screens.length;i++){const a=screens[i];ctx.save();ctx.beginPath();ctx.rect(a.x+8,a.y+8,a.w-18,a.h-25);ctx.clip();
if(i===0){const line=Math.floor(sec/2)%8;ctx.fillStyle='rgba(70,180,230,.20)';ctx.fillRect(a.x+40,a.y+31+line*23,90,15);}
if(i===1){for(let k=0;k<14;k++){const y=a.y+25+k*14,x=a.x+52+(k%4)*11;ctx.fillStyle=`rgba(${k%3===0?'98,216,165':'130,189,235'},${.15+.09*Math.sin(sec*1.2+k)})`;ctx.fillRect(x,y,25+((k*17)%130),2)}ctx.fillStyle='rgba(115,239,179,.65)';ctx.fillRect(a.x+55,a.y+28+(Math.floor(sec*1.4)%13)*14,4,11);}
if(i===2){for(let k=0;k<4;k++){const x=a.x+60+k*84;ctx.fillStyle=`rgba(59,195,242,${.05+.04*Math.sin(sec*.7+k)})`;ctx.fillRect(x,a.y+165,58,34)}}ctx.restore();}
// Extra steam above existing mug, slowly curling and fading.
ctx.save();ctx.beginPath();ctx.rect(1035,520,105,205);ctx.clip();for(let i=0;i<5;i++){ctx.beginPath();for(let k=0;k<34;k++){const q=k/33,x=1080+(i-2)*7+Math.sin(q*9-sec*.7+i*1.7)*12+q*7,y=700-q*165; k?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.lineWidth=2.5+i*.4;ctx.strokeStyle=`rgba(237,245,249,${(.11+.03*Math.sin(sec+i))*(1-i*.09)})`;ctx.stroke()}ctx.restore();
// One subtle, warm shimmer, on the small desk lamp at the far right.
const light=ctx.createRadialGradient(1641,777,3,1641,777,65);light.addColorStop(0,`rgba(255,195,95,${.15+.07*Math.sin(sec*1.7)+.025*Math.sin(sec*3.1)})`);light.addColorStop(1,'rgba(255,140,40,0)');ctx.fillStyle=light;ctx.fillRect(1570,705,102,140);
}
function attach(){const el=document.querySelector('.tssr-studio-home .studio-scene');if(!el)return;if(el===host)return;host=el;canvas?.remove();canvas=document.createElement('canvas');canvas.className='v20-effects';canvas.setAttribute('aria-hidden','true');host.appendChild(canvas);ctx=canvas.getContext('2d');if(!raf)raf=requestAnimationFrame(paint)}
new MutationObserver(attach).observe(document.body,{childList:true,subtree:true});attach();
})();