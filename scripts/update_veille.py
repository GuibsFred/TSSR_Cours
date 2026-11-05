"""RSS/Atom -> veille-it.js. No external dependencies or AI content rewriting."""
import datetime, email.utils, html, json, re, urllib.request, xml.etree.ElementTree as ET
from pathlib import Path

FEEDS = [
    ('CERT-FR', 'Sécurité', 'https://www.cert.ssi.gouv.fr/feed/'),
    ('IT-Connect', 'Infrastructures', 'https://www.it-connect.fr/feed/'),
    ('Le Monde Informatique', 'Infrastructures', 'https://www.lemondeinformatique.fr/flux-rss/thematique/toutes-les-actualites/rss.xml'),
    ('Numerama', 'Cybersécurité', 'https://www.numerama.com/feed/'),
]
OUT = Path(__file__).resolve().parents[1] / 'data' / 'veille-it.js'
NS={'atom':'http://www.w3.org/2005/Atom'}
def clean(t):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', str(t or '')))).strip()[:650]
def date_of(s):
    if not s: return ''
    try:
        return email.utils.parsedate_to_datetime(s).date().isoformat()
    except Exception:
        return s[:10]
def read_feed(source, category, url):
    req=urllib.request.Request(url, headers={'User-Agent':'TSSR-Personal-TechWatch/1.0'})
    with urllib.request.urlopen(req,timeout=20) as res: xml=res.read(2_000_000)
    root=ET.fromstring(xml)
    items=[]
    if root.tag.endswith('feed'):
        for e in root.findall('atom:entry',NS)[:18]:
            link=next((a.attrib.get('href','') for a in e.findall('atom:link',NS) if a.attrib.get('rel','alternate')=='alternate'), '')
            if not link:
                a=e.find('atom:link',NS);link=a.attrib.get('href','') if a is not None else ''
            items.append(dict(title=clean(e.findtext('atom:title',default='',namespaces=NS)),summary=clean(e.findtext('atom:summary',default='',namespaces=NS) or e.findtext('atom:content',default='',namespaces=NS)),url=link,date=date_of(e.findtext('atom:updated',default='',namespaces=NS)),source=source,category=category))
    else:
        for e in root.findall('.//item')[:18]:
            items.append(dict(title=clean(e.findtext('title')),summary=clean(e.findtext('description')),url=(e.findtext('link') or '').strip(),date=date_of(e.findtext('pubDate')),source=source,category=category))
    return [i for i in items if i['title'] and i['url'].startswith('https://')]
def main():
    results=[]
    for source,cat,url in FEEDS:
        try:
            items=read_feed(source,cat,url);results+=items
            print(source,len(items))
        except Exception as e: print(source,'unavailable:',str(e)[:180])
    if not results:
        print('No feed available: keep previous journal, do not overwrite.')
        return
    seen=set();unique=[]
    for n in sorted(results,key=lambda x:x['date'],reverse=True):
        if n['url'] not in seen: seen.add(n['url']);unique.append(n)
    OUT.write_text('window.TSSR_NEWS = '+json.dumps(unique[:120],ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
if __name__=='__main__':main()
