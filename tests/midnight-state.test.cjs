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
