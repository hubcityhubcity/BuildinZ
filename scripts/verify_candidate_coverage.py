"""Verify persisted Crimson coverage against its immutable evidence Git tree."""
import json, subprocess
from pathlib import Path
c=json.loads(Path('design/CRIMSON_CANDIDATE_COVERAGE.json').read_text())
paths=set(subprocess.check_output(['git','ls-tree','-r','--name-only',c['evidence_commit']],text=True).splitlines())
assert len(c['rows']) == c['required_slots'] == 300
keys=set()
covered=0
for r in c['rows']:
    key=(r['token_id'],r['stage'])
    assert key not in keys, key
    keys.add(key)
    assert r['stage'] in (1,2,3)
    slug=r['stage_name'].lower().replace(' ','-')
    prefix=f"assets/editions/crimson-commons-{slug}-stage-{r['stage']}-{r['finish_id'].lower()}-v"
    actual=sorted(p for p in paths if p.startswith(prefix) and p.endswith('.png'))
    assert actual == sorted(r['candidate_paths']), key
    assert r['status'] == ('candidate_present_not_certified' if actual else 'missing')
    assert r['final_certified'] is False
    covered += bool(actual)
assert covered == c['candidate_covered_slots']
assert 300-covered == c['missing_slots']
assert len({k[0] for k in keys}) == 100
print(f"Coverage snapshot verified: {covered} candidate slots, {300-covered} missing; no certification inferred.")
