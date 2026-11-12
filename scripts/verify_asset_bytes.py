#!/usr/bin/env python3
"""Check every inventoried asset against actual checkout bytes; not visual certification."""
import hashlib,json
from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'design/ASSET_MANIFEST.json').read_text())
errors=[];seen=set();decoded=0
for a in manifest['assets']:
    name=a['path']
    if name in seen:errors.append(name+': duplicate path')
    seen.add(name)
    p=(root/name).resolve()
    if root not in p.parents or not name.startswith('assets/') or not p.is_file():
        errors.append(name+': missing or unsafe path');continue
    if p.suffix.lower() in ('.png','.jpg','.jpeg','.webp','.gif'):
        try:
            with Image.open(p) as im:
                im.verify()
            with Image.open(p) as im:
                im.load()
                if im.width < 1 or im.height < 1: raise ValueError('zero dimensions')
                recorded=a.get('dimensions')
                if recorded is not None:
                    if not isinstance(recorded,dict) or recorded.get('width')!=im.width or recorded.get('height')!=im.height:
                        raise ValueError('recorded dimensions mismatch')
            decoded+=1
        except Exception as exc: errors.append(name+': image decode failed: '+str(exc))
    b=p.read_bytes()
    if len(b)!=a['bytes']:errors.append(name+': byte length mismatch')
    blob=hashlib.sha1(('blob '+str(len(b))+'\\0').encode().replace(b'\\0',bytes([0]))+b).hexdigest()
    if blob!=a['git_blob_sha']:errors.append(name+': Git blob mismatch')
    if a.get('sha256') and hashlib.sha256(b).hexdigest()!=a['sha256']:
        errors.append(name+': SHA256 mismatch')
actual={str(p.relative_to(root)) for p in (root/'assets').rglob('*') if p.is_file()}
for name in sorted(actual-seen):errors.append(name+': not inventoried')
assert len(seen)==manifest['summary']['asset_files'],'inventory summary mismatch'
for error in errors:print('FAIL',error)
print(f'{len(seen)} inventoried assets; {decoded} raster images decoded; {len(errors)} errors; no visual certification inferred')
raise SystemExit(bool(errors))
