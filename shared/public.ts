import './site.css';
import './motion.css';

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){
 document.documentElement.classList.add('motion-ready');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll('.section,.hero-note,.hero-main,.project-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
}
const note=document.querySelector<HTMLElement>('.hero-note');
if(note){
 const wrap=document.createElement('div');wrap.className='science-visual';wrap.setAttribute('aria-label','Kurumlar, teknoloji ve toplum arasındaki ilişkilerin kavramsal gösterimi');
 const canvas=document.createElement('canvas');wrap.append(canvas);note.prepend(wrap);const ctx=canvas.getContext('2d');
 if(ctx){
  let frame=0,running=false,visible=true,w=320,h=230;const labels=['KURUMLAR','TEKNOLOJİ','TOPLUM'];
  const resize=()=>{w=wrap.clientWidth||320;h=220;const d=Math.min(devicePixelRatio,2);canvas.width=w*d;canvas.height=h*d;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(d,0,0,d,0,0);if(!running)draw(0)};
  function draw(t:number){if(!ctx)return;ctx.clearRect(0,0,w,h);const time=reduced?0:t*.00012;const cx=w/2,cy=h/2;ctx.lineWidth=.65;
   const points=Array.from({length:36},(_,i)=>{const phi=Math.acos(1-2*(i+.5)/36),theta=Math.PI*(1+Math.sqrt(5))*i+time;return {x:cx+Math.cos(theta)*Math.sin(phi)*85,y:cy+Math.cos(phi)*79,z:Math.sin(theta)*Math.sin(phi)}});
   for(let i=0;i<points.length;i++){const a=points[i];for(let j=i+1;j<points.length;j++){const b=points[j],dist=Math.hypot(a.x-b.x,a.y-b.y);if(dist<54&&Math.abs(a.z-b.z)<.7){ctx.strokeStyle=`rgba(69,91,66,${.07+Math.max(0,a.z)*.12})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}ctx.fillStyle=i%7===0?'#873e35':`rgba(69,91,66,${.3+(a.z+1)*.23})`;ctx.beginPath();ctx.arc(a.x,a.y,i%7===0?3:1.6,0,Math.PI*2);ctx.fill()}
   ctx.font='9px sans-serif';ctx.letterSpacing='1px';ctx.fillStyle='#697563';ctx.textAlign='center';labels.forEach((s,i)=>{const angle=i*2*Math.PI/3-Math.PI/2;ctx.fillText(s,cx+Math.cos(angle)*(w/2-47),cy+Math.sin(angle)*100)});
   if(running)frame=requestAnimationFrame(draw);
  }
  const sync=()=>{const next=!reduced&&!document.hidden&&visible;if(next&&!running){running=true;frame=requestAnimationFrame(draw)}else if(!next&&running){running=false;cancelAnimationFrame(frame)}};
  new ResizeObserver(resize).observe(wrap);new IntersectionObserver(e=>{visible=e[0].isIntersecting;sync()}).observe(wrap);document.addEventListener('visibilitychange',sync);resize();sync();
 }
}
