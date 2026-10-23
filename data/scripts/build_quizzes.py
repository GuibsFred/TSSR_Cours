import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]/'quiz'
items=[]
for f in root.glob('*.json'):
 if f.name=='index.json':continue
 try:
  d=json.loads(f.read_text(encoding='utf8'))
  items.append({'title':d.get('title',f.stem),'file':'quiz/'+f.name})
 except (ValueError,OSError):continue
(root/'index.json').write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf8')
