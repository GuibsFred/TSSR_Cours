import json,re
from pathlib import Path
root=Path(__file__).resolve().parents[1]
entries=[]
for folder,kind in [('content','cours'),('fiches','fiches'),('tp','tp'),('commandes','commandes'),('glossaire','glossaire')]:
 for f in (root/folder).rglob('*.md'):
  s=f.read_text(encoding='utf-8')
  header=re.match(r'^---\s*\n(.*?)\n---',s,re.S)
  meta={}
  if header:
   for line in header.group(1).splitlines():
    if ':' in line:
     k,v=line.split(':',1);meta[k.strip()]=v.strip().strip('"\'')
  title=meta.get('title',f.stem)
  category=meta.get('category','Autres')
  try: order=int(meta.get('order',9999))
  except ValueError: order=9999
  body=s[header.end():] if header else s
  plain=re.sub(r'!\[[^]]*\]\([^)]*\)|[\[\]#*`>_]',' ',body)
  entries.append(dict(title=title,file=f.relative_to(root).as_posix(),category=category,order=order,kind=kind,search=plain[:16000]))
entries.sort(key=lambda x:(x['kind'],x['order'],x['title'].casefold()))
(root/'content/index.json').write_text(json.dumps(entries,ensure_ascii=False,indent=2),encoding='utf8')
print('Index:',len(entries),'pages')
