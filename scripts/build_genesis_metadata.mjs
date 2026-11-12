#!/usr/bin/env node
// BuildinZ Genesis metadata builder. Zero dependencies, Node 18+.
// Strictly a release-preparation tool: never deploys, pins or mints.
import {readFileSync, existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {resolve, dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const TOKEN_FILE=join(ROOT,'metadata/genesis-token-registry.json');
const IMAGE_FILE=join(ROOT,'metadata/release-image-manifest.json');
const OUTPUT=join(ROOT,'metadata/release');
const STAGES=[1,2,3];
const RARITY={Common:400,Uncommon:250,Rare:200,Epic:100,Legendary:50};
const sha=value=>createHash('sha256').update(value).digest('hex');
const requireThat=(condition,message)=>{if(!condition) throw new Error(message)};
const ipfs=/^ipfs:\/\/(?:bafy[a-z2-7]{20,}|Qm[1-9A-HJ-NP-Za-km-z]{44})(?:\/[A-Za-z0-9._~%+\/-]+)?$/;

export function checkRegistry(tokens,expected=1000) {
  requireThat(Array.isArray(tokens)&&tokens.length===expected,'expected '+expected+' canonical tokens');
  const identities=new Map(), counts={};
  for(let i=0;i<tokens.length;i++){
    const t=tokens[i], id=i+1;
    requireThat(t.token_id===id && t.token_key==='BZ-'+String(id).padStart(4,'0'),'token order/key error at '+id);
    requireThat(t.initial_stage===1 && t.evolution_persists_on_transfer===true,'evolution invariant at '+id);
    requireThat(t.identity_id && t.neighborhood_name && t.building_type,'identity fields missing at '+id);
    requireThat(Number.isInteger(t.edition)&&t.edition>=1&&t.edition<=20,'edition out of range at '+id);
    requireThat(Object.hasOwn(RARITY,t.base_rarity),'invalid rarity at '+id);
    requireThat(t.stage_names && Object.keys(t.stage_names).sort().join(',')==='1,2,3','stage names missing at '+id);
    for(const s of STAGES) requireThat(typeof t.stage_names[s]==='string'&&t.stage_names[s].trim(),'empty stage name at '+id);
    const stable=JSON.stringify([t.neighborhood_name,t.building_type,t.stage_names]);
    if(!identities.has(t.identity_id)) identities.set(t.identity_id,{stable,editions:new Set(),rarities:{}});
    const group=identities.get(t.identity_id);
    requireThat(group.stable===stable,'canonical identity drift at '+id);
    requireThat(!group.editions.has(t.edition),'repeated identity edition at '+id);
    group.editions.add(t.edition);
    group.rarities[t.base_rarity]=(group.rarities[t.base_rarity]||0)+1;
    counts[t.base_rarity]=(counts[t.base_rarity]||0)+1;
  }
  if(expected===1000){
    requireThat(identities.size===50,'must have 50 identities');
    requireThat([...identities.values()].every(v=>v.editions.size===20),'must have 20 editions/identity');
    for(const [tier,n] of Object.entries(RARITY)) requireThat(counts[tier]===n,'incorrect '+tier+' rarity allocation');
    for(const [identity,group] of identities) for(const [tier,n] of Object.entries({Common:8,Uncommon:5,Rare:4,Epic:2,Legendary:1}))
      requireThat(group.rarities[tier]===n,'incorrect '+tier+' rarity allocation within '+identity);
  }
  return {tokens:tokens.length,identities:identities.size,stage_files:tokens.length*3};
}

export function checkImages(tokens,images,{complete=true,verifyBytes=false,root=ROOT}={}) {
  requireThat(Array.isArray(images),'image manifest must contain images array');
  const reference=new Map(tokens.map(t=>[t.token_id,t]));
  const byStage=new Map(),uris=new Set(),hashes=new Set();
  for(const a of images){
    const t=reference.get(a.token_id), key=a.token_id+':'+a.stage;
    requireThat(t,'unknown token '+key);
    requireThat(STAGES.includes(a.stage),'bad stage '+key);
    requireThat(!byStage.has(key),'duplicate image record '+key);
    requireThat(a.canonical_name===t.stage_names[String(a.stage)],'incorrect artwork stage name '+key);
    requireThat(a.verified===true && a.edition_variant_confirmed===true,'unverified or reused-edition candidate '+key);
    requireThat(typeof a.uri==='string'&&ipfs.test(a.uri)&&!a.uri.includes('..'),'non-permanent or invalid IPFS URI '+key);
    requireThat(typeof a.sha256==='string'&&/^[a-f0-9]{64}$/.test(a.sha256),'invalid SHA-256 '+key);
    requireThat(!uris.has(a.uri) && !hashes.has(a.sha256),'duplicated image URI or bytes '+key);
    if(verifyBytes){
      requireThat(typeof a.local_path==='string'&&a.local_path,'local_path required '+key);
      const local=resolve(root,a.local_path);
      requireThat(local.startsWith(resolve(root)+'/')&&existsSync(local),'missing/unsafe local image '+key);
      requireThat(sha(readFileSync(local))===a.sha256,'local image hash mismatch '+key);
    }
    uris.add(a.uri);hashes.add(a.sha256);byStage.set(key,a);
  }
  const missing=tokens.length*3-byStage.size;
  if(complete) requireThat(missing===0,'release blocked: '+missing+' missing image records');
  return {verified:byStage.size,missing,required:tokens.length*3,byStage};
}

export function makeMetadata(t,stage,a){
  requireThat(STAGES.includes(stage)&&a.token_id===t.token_id&&a.stage===stage,'token-stage asset mismatch');
  requireThat(a.canonical_name===t.stage_names[String(stage)],'stage name mismatch');
  return {
    name:t.stage_names[String(stage)]+' · '+t.token_key,
    description:'BuildinZ Genesis — '+t.neighborhood_name+' '+t.building_type+', edition '+t.edition+' of 20. This collectible evolves on the same token through three permanent stages. Its identity and base rarity remain unchanged across evolution and transfer.',
    image:a.uri,
    attributes:[
      {trait_type:'Neighborhood',value:t.neighborhood_name},
      {trait_type:'Building Type',value:t.building_type},
      {trait_type:'Identity',value:t.identity_id},
      {trait_type:'Edition',display_type:'number',value:t.edition},
      {trait_type:'Base Rarity',value:t.base_rarity},
      {trait_type:'Evolution Stage',display_type:'number',value:stage},
      {trait_type:'Stage Name',value:t.stage_names[String(stage)]}
    ],
    properties:{token_key:t.token_key,image_sha256:a.sha256}
  };
}

export function prepareRelease(tokens,images,root=ROOT){
  checkRegistry(tokens);
  const audit=checkImages(tokens,images,{verifyBytes:true,root});
  const files=[];
  for(const t of tokens) for(const stage of STAGES){
    const a=audit.byStage.get(t.token_id+':'+stage);
    const path=t.token_id+'/'+stage+'.json';
    const content=JSON.stringify(makeMetadata(t,stage,a),null,2)+'\n';
    files.push({path,content,sha256:sha(content)});
  }
  requireThat(files.length===3000,'expected 3,000 stage documents');
  return {files,releaseManifest:{
    schema_version:'1.0.0',status:'prepared-not-pinned-or-deployed',
    token_count:1000,stage_metadata_count:3000,
    image_manifest_sha256:sha(JSON.stringify([...images].sort((a,b)=>a.token_id-b.token_id||a.stage-b.stage))),
    files:files.map(f=>({path:f.path,sha256:f.sha256}))
  }};
}

function run(){
  const mode=process.argv[2]||'--check';
  requireThat(['--check','--build'].includes(mode),'usage: --check or --build');
  const source=JSON.parse(readFileSync(TOKEN_FILE,'utf8'));
  requireThat(source.status==='registry-only-not-mint-ready','unexpected registry status');
  checkRegistry(source.tokens);
  if(!existsSync(IMAGE_FILE)){
    console.log('BLOCKED: no release-image-manifest.json; 0/3,000 verified image records provided. No output written.');
    if(mode==='--build') process.exitCode=1;
    return;
  }
  const asset=JSON.parse(readFileSync(IMAGE_FILE,'utf8'));
  requireThat(asset.schema_version==='1.0.0','unsupported release-image-manifest schema');
  const audit=checkImages(source.tokens,asset.images,{complete:false,verifyBytes:true});
  console.log(audit.verified+'/'+audit.required+' validated token-stage images; '+audit.missing+' missing.');
  if(mode==='--check') return;
  requireThat(audit.missing===0,'cannot release metadata without all 3,000 images');
  const built=prepareRelease(source.tokens,asset.images);
  for(const f of built.files){
    const dest=join(OUTPUT,f.path);
    mkdirSync(dirname(dest),{recursive:true});
    writeFileSync(dest,f.content);
  }
  writeFileSync(join(OUTPUT,'RELEASE_MANIFEST.json'),JSON.stringify(built.releaseManifest,null,2)+'\n');
  console.log('PREPARED 3,000 stage metadata JSON files; no blockchain or IPFS action occurred.');
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  try{run()}catch(e){console.error('BLOCKED: '+e.message);process.exitCode=1}
}
