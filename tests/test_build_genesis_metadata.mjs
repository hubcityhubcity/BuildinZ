import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {checkRegistry,checkImages,makeMetadata,prepareRelease} from '../scripts/build_genesis_metadata.mjs';

const cid='bafybeigdyrzt5sfp7udm7hu76uhf4uc7jtqz4ka7swmsrd7t53kaom4kda';
const token={token_id:1,token_key:'BZ-0001',neighborhood_name:'Neon Heights',
  identity_id:'N01-I01',building_type:'Residential',edition:1,base_rarity:'Common',
  initial_stage:1,evolution_persists_on_transfer:true,
  stage_names:{1:'Neon Residences',2:'Skyline Habitat',3:'Aurora Arcology'}};
const makeImage=(stage)=>({token_id:1,stage,canonical_name:token.stage_names[String(stage)],
  uri:'ipfs://'+cid+'/1-'+stage+'.png',sha256:String(stage).padStart(64,'0'),
  verified:true,edition_variant_confirmed:true});

test('canonical token stage/rarity persists between metadata documents',()=>{
  assert.equal(checkRegistry([token],1).stage_files,3);
  const images=[1,2,3].map(makeImage);
  assert.equal(checkImages([token],images).verified,3);
  const one=makeMetadata(token,1,images[0]);
  const three=makeMetadata(token,3,images[2]);
  assert.match(one.name,/Neon Residences/);
  assert.match(three.name,/Aurora Arcology/);
  assert.notEqual(one.image,three.image);
  assert.equal(one.attributes.find(x=>x.trait_type==='Base Rarity').value,
    three.attributes.find(x=>x.trait_type==='Base Rarity').value);
  assert.equal(three.attributes.find(x=>x.trait_type==='Evolution Stage').value,3);
});
test('partial artwork never passes release completeness gate',()=>{
  assert.equal(checkImages([token],[makeImage(1)],{complete:false}).missing,2);
  assert.throws(()=>checkImages([token],[makeImage(1)]),/release blocked/);
});
test('rejected: stage-name drift, unverifiable art, mutable URI',()=>{
  const a=makeImage(1);
  assert.throws(()=>checkImages([token],[{...a,canonical_name:'Wrong'}]),/stage name/);
  assert.throws(()=>checkImages([token],[{...a,verified:false}]),/unverified/);
  assert.throws(()=>checkImages([token],[{...a,uri:'https:\/\/example.com/img.png'}]),/IPFS URI/);
});
test('rejected: duplicate artwork bytes and token/stage binding',()=>{
  const a=makeImage(1), b=makeImage(2);
  assert.throws(()=>checkImages([token],[a,{...b,sha256:a.sha256}]),/duplicated image/);
  assert.throws(()=>checkImages([token],[a,{...a}]),/duplicate image record/);
  assert.throws(()=>makeMetadata(token,2,a),/asset mismatch/);
});
test('rejected: missing local bytes and corrupted registry',()=>{
  const images=[1,2,3].map(s=>({...makeImage(s),local_path:'assets/not-there.png'}));
  assert.throws(()=>checkImages([token],images,{verifyBytes:true}),/missing\/unsafe local image/);
  assert.throws(()=>prepareRelease([token],images),/expected 1000 canonical tokens/);
  assert.throws(()=>checkRegistry([{...token,initial_stage:2}],1),/evolution invariant/);
});

test('per-identity rarity rejects offsetting swaps with unchanged global totals',()=>{
  const tokens=JSON.parse(readFileSync(new URL('../metadata/genesis-token-registry.json',import.meta.url),'utf8')).tokens;
  assert.equal(checkRegistry(tokens).identities,50);
  const changed=structuredClone(tokens);
  const first=changed.find(t=>t.base_rarity==='Common');
  const other=changed.find(t=>t.identity_id!==first.identity_id&&t.base_rarity==='Legendary');
  [first.base_rarity,other.base_rarity]=[other.base_rarity,first.base_rarity];
  const counts=list=>list.reduce((out,t)=>{out[t.base_rarity]=(out[t.base_rarity]||0)+1;return out;},{});
  assert.deepEqual(counts(changed),counts(tokens));
  assert.throws(()=>checkRegistry(changed),/rarity allocation within/);
});
