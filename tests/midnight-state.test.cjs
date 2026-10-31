const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const script=[...fs.readFileSync('index.html','utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];
function boot(old,blocked=false){
 const nodes=new Map(),groups={};let saved=old,confirm=true;
 function node(id,dataset={}){if(!nodes.has(id))nodes.set(id,{dataset,style:{},handlers:{},setAttribute(){},addEventListener(k,f){this.handlers[k]=f;},click(){this.handlers.click?.();}});return nodes.get(id);}
 for(const [attr,prefix,ids] of [['evolution','choose',['neon','pulse','holo','midnight','crown']],['building','own',['neon','pulse','holo','midnight','crown']],['preview','preview',[1,2,3]]])groups['[data-'+attr+']']=ids.map(id=>node(prefix+'-'+id,{[attr]:String(id)}));
 const document={getElementById:node,querySelectorAll:s=>groups[s],querySelector:s=>groups['[data-evolution]'].find(x=>s.includes('"'+x.dataset.evolution+'"'))};
 vm.runInNewContext(script,{document,window:{},localStorage:{getItem(){if(blocked)throw Error();return JSON.stringify(saved)},setItem(k,v){if(blocked)throw Error();saved=JSON.parse(v)}},confirm:()=>confirm});
 return {node,read:()=>saved,cancel:()=>{confirm=false}};
}
const legacy={stage:2,pulseStage:3,holoStage:2,balance:500,owned:['neon','midnight'],days:14};
let a=boot(legacy);a.node('choose-midnight').click();assert.equal(a.node('building-name').textContent,'Midnight Lounge');
a.node('preview-3').click();assert.equal(a.node('evolution-title').textContent,'Eclipse Citadel');assert.equal(a.node('building-name').textContent,'Midnight Lounge');
a.node('evolve').click();assert.equal(a.read().midnightStage,2);assert.equal(a.read().balance,380);
a.node('evolve').click();assert.equal(a.read().midnightStage,3);assert.equal(a.read().balance,100);assert.equal(a.read().stage,2);assert.equal(a.read().pulseStage,3);assert.equal(a.read().holoStage,2);
a.node('evolve').click();assert.equal(a.read().balance,100);
a=boot(a.read());a.node('choose-midnight').click();assert.equal(a.node('building-name').textContent,'Eclipse Citadel');
a.node('own-midnight').click();a.node('own-midnight').click();assert.equal(a.read().midnightStage,3);
a.node('choose-neon').click();a.node('evolve').click();assert.match(a.node('message').textContent,/Not enough/);assert.equal(a.read().balance,100);
a.node('earn').click();assert.equal(a.read().balance,240);
let b=boot(legacy);b.node('choose-midnight').click();b.cancel();b.node('evolve').click();assert.equal(b.read().balance,500);
let c=boot(null,true);c.node('earn').click();assert.equal(c.node('balance').textContent,'270');
console.log('PASS: legacy save, independent stages, preview isolation, shared balance, costs, cap, reload, recollect persistence, insufficient funds, cancellation, blocked storage');
// Crown uses its own saved field while sharing the same mock balance.
let d=boot({...legacy,owned:['neon','midnight','crown'],midnightStage:2});
d.node('choose-crown').click();assert.equal(d.node('building-name').textContent,'Crown Spire');
d.node('preview-3').click();assert.equal(d.node('evolution-title').textContent,'Crown of Neon');assert.equal(d.node('building-name').textContent,'Crown Spire');
assert.match(d.node('hero-art').src,/crown-stage-3-v2.png$/);
d.node('evolve').click();assert.equal(d.read().crownStage,2);assert.equal(d.read().balance,380);assert.match(d.node('hero-art').src,/crown-stage-2-v2.png$/);
d.node('evolve').click();assert.equal(d.read().crownStage,3);assert.equal(d.read().balance,100);assert.equal(d.read().midnightStage,2);assert.equal(d.read().stage,2);assert.equal(d.read().pulseStage,3);assert.equal(d.read().holoStage,2);
assert.match(d.node('buildings').innerHTML,/<strong>Crown of Neon<\/strong>/);
d.node('evolve').click();assert.equal(d.read().balance,100);
d=boot(d.read());d.node('choose-crown').click();assert.equal(d.node('building-name').textContent,'Crown of Neon');
d.node('own-crown').click();d.node('own-crown').click();assert.equal(d.read().crownStage,3);
let e=boot({...legacy,owned:['neon','crown'],balance:0});e.node('choose-crown').click();e.node('evolve').click();assert.match(e.node('message').textContent,/Not enough/);
let f=boot({...legacy,owned:['neon','crown']});f.node('choose-crown').click();f.cancel();f.node('evolve').click();assert.equal(f.read().balance,500);
console.log('PASS: Crown legacy default, three versioned paths, previews, 120/280 costs, independent five-stage state, card name, cap, reload, recollect, insufficient balance and cancellation');
// Corrected technology artwork follows existing saved evolution state.
let g=boot({...legacy,holoStage:1,owned:['neon','holo'],balance:500});g.node('choose-holo').click();assert.equal(g.node('building-name').textContent,'HoloTech Tower');assert.match(g.node('hero-art').src,/holotech-stage-1-signage-v1.png$/);
g.node('evolve').click();assert.equal(g.read().holoStage,2);assert.equal(g.read().balance,380);assert.match(g.node('hero-art').src,/holotech-stage-2-signage-v1.png$/);assert.match(g.node('buildings').innerHTML,/<strong>Quantum Spire<\/strong>/);
g.node('evolve').click();assert.equal(g.read().holoStage,3);assert.equal(g.read().balance,100);assert.match(g.node('hero-art').src,/holotech-stage-3-signage-v1.png$/);assert.match(g.node('buildings').innerHTML,/<strong>Omninet Nexus<\/strong>/);assert.equal(g.read().stage,2);assert.equal(g.read().pulseStage,3);
g=boot(g.read());g.node('choose-holo').click();assert.equal(g.node('building-name').textContent,'Omninet Nexus');g.node('preview-1').click();assert.equal(g.node('building-name').textContent,'Omninet Nexus');assert.equal(g.node('evolution-title').textContent,'HoloTech Tower');
console.log('PASS: HoloTech versioned paths, exact card names, evolution costs, independent state, reload and preview isolation');

// Collection cards must use saved stage, never the active preview or another lineage.
for (let stage=1;stage<=3;stage++) {
 const h=boot({...legacy,stage,pulseStage:stage});
 const neon=['Neon Residences','Skyline Habitat','Aurora Arcology'][stage-1];
 const pulse=['Pulse Plaza','Spectrum Galleria','Infinity Bazaar'][stage-1];
 function cards(){
  const html=h.node('buildings').innerHTML;
  assert.ok(html.includes('assets/neon-residences-stage-'+stage+'.webp" alt="Concept art for '+neon));
  assert.ok(html.includes('<strong>'+neon+'</strong><small>Residential</small>'));
  assert.ok(html.includes('assets/pulse-stage-'+stage+'.png" alt="Concept art for '+pulse));
  assert.ok(html.includes('<strong>'+pulse+'</strong><small>Retail</small>'));
 }
 cards(); h.node('preview-'+(stage===3?1:3)).click(); cards();
 h.node('choose-pulse').click(); cards();
}
console.log('PASS: all Neon/Pulse saved-stage card names, type separation, image paths and preview isolation');
