#!/usr/bin/env python3
"""Validate Crimson production plan; never infer rendered/certified readiness."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
plan=json.loads((root/'design/CRIMSON_COMMONS_EDITION_PLAN.json').read_text())
registry=json.loads((root/'metadata/genesis-token-registry.json').read_text())
expected={t['token_id']:t for t in registry['tokens'] if t['neighborhood_key']=='crimson-commons'}
actual=plan['editions']
assert len(actual)==100 and len({t['token_id'] for t in actual})==100
assert {t['token_id'] for t in actual}==set(expected)
specs={s['finish_id']:s for s in plan['finish_specifications']}
assert len(specs)==20 and len(plan['finish_specifications'])==20
for t in actual:
    canon=expected[t['token_id']]
    for key in ('token_key','identity_id','building_type','edition','base_rarity','stage_names'):
        assert t[key]==canon[key], (t['token_id'],key)
    assert t['finish_id'] in specs
    assert t['finish_name']==specs[t['finish_id']]['finish_name']
    assert specs[t['finish_id']]['geometry_changes']=='none'
    assert t['render_status']=='not_produced' and t['image_uris'] is None
print('PASS:100 canonical tokens,20 finish recipes,no final-render or URI claims')
