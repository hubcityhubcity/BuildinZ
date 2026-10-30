#!/usr/bin/env python3
"""Check source labels against the owner-authored standard; not visual art QA.
Run: python scripts/verify_collection_labels.py
"""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]

def audit(root):
    standard = (root / 'design/COLLECTION_CONSISTENCY_STANDARD.md').read_text()
    rows = [tuple(c.strip() for c in line.strip('|').split('|'))
            for line in standard.splitlines() if line.startswith('| ')]
    canon = {row[1]: row for row in rows if len(row) == 4 and row[0] != 'Stable type'}
    errors = []
    checked = 0
    if len(canon) != 5:
        return ['Expected five canonical Neon Heights lineages'], 0
    for page in sorted(root.glob('*.html')):
        source = page.read_text()
        for match in re.finditer(r"const\s+(\w+Stages)\s*=\s*\[(.*?)\];", source, re.S):
            names = re.findall(r"\{\s*name:\s*'([^']+)'", match[2])
            if not names or names[0] not in canon:
                errors.append(f'{page.name}: unknown lineage in {match[1]}')
            elif tuple(names) != canon[names[0]][1:]:
                errors.append(f'{page.name}: {match[1]} names differ from canon: {names}')
            checked += 1
        for name, role in re.findall(r"name:'([^']+)',role:'([^']+)'", source):
            if name in canon and role != canon[name][0]:
                errors.append(f'{page.name}: {name} type {role!r}, expected {canon[name][0]!r}')
        for role in re.findall(r"active==='pulse'\?'([^']+)'", source):
            if role in ('Commercial', 'Retail') and role != canon['Pulse Plaza'][0]:
                errors.append(f'{page.name}: Pulse evolution type differs from canon')
    if checked == 0:
        errors.append('No stage arrays found; update the parser for the current source format')
    return errors, checked

if __name__ == '__main__':
    errors, checked = audit(ROOT)
    for error in errors:
        print('FAIL:', error)
    print(f'{checked} stage arrays checked; {len(errors)} errors. Artwork lettering and rendered UI require separate visual QA.')
    sys.exit(bool(errors))
