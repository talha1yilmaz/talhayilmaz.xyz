"""Integration checks against local Wrangler only; never publish."""
import json,urllib.request,urllib.error,uuid
BASE='http://127.0.0.1:8787'
def req(path,method='GET',data=None,origin=BASE,headers=None):
    h={'Origin':origin,**(headers or {})}
    if data is not None:h['Content-Type']='application/json'
    request=urllib.request.Request(BASE+path,data=json.dumps(data).encode() if data is not None else None,method=method,headers=h)
    try:
        with urllib.request.urlopen(request) as r:return r.status,json.load(r)
    except urllib.error.HTTPError as e:return e.code,json.load(e)
code,session=req('/api/session');assert code==200 and session.get('local') is True,'Run only against explicit local development mode.'
code,snapshot=req('/api/site');assert code==200
data=snapshot['data'];rev=snapshot['revision']
assert req('/api/site','PUT',{'revision':rev,'data':data},'https://untrusted.example')[0]==403
assert req('/api/site','PUT',{'revision':rev+100,'data':data})[0]==409
invalid=json.loads(json.dumps(data));invalid['articles'][0]['slug']='../../escape'
assert req('/api/site','PUT',{'revision':rev,'data':invalid})[0]==400
code,saved=req('/api/site','PUT',{'revision':rev,'data':data});assert code==200 and saved['revision']==rev+1
assert req('/api/site','PUT',{'revision':rev,'data':data})[0]==409
code,history=req('/api/history');assert code==200 and history[0]['revision']==rev+1
assert req('/api/history/'+str(rev+1))[1]==data
code,publish=req('/api/publish','POST',{'revision':rev+1,'id':str(uuid.uuid4())});assert code==400 and 'GitHub App' in publish['error'],'Unconfigured publish must fail without creating a job.'
assert req('/api/publications')[1]==[]
print('PASS: same-origin mutation, invalid content, optimistic locking, persistence, revision restore, missing publishing credentials.')

# Exercise multi-chunk storage with a real PNG and deterministic padding.
from pathlib import Path
import hashlib
payload=(Path(__file__).resolve().parents[1]/'assets/projects/kpss-kurdu.png').read_bytes()+b'\0'*(1200*1024)
request=urllib.request.Request(BASE+'/api/media',data=payload,method='POST',headers={'Origin':BASE,'Content-Type':'image/png','X-File-Name':'local-roundtrip.png'})
with urllib.request.urlopen(request) as response:uploaded=json.load(response)
with urllib.request.urlopen(BASE+uploaded['url']) as response:
    assert response.headers['Content-Type']=='image/png'
    assert hashlib.sha256(response.read()).digest()==hashlib.sha256(payload).digest()
print('PASS: multi-chunk media upload/download preserves all bytes.')
