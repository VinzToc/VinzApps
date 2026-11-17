importScripts('version.js');
// Préfixe propre à VinZ Apps : ne touche jamais aux caches de Mes Apps EPS (même domaine vinztoc.github.io).
const P='vinz-apps-v',V=P+APP_VERSION,F=['./','index.html','version.js','config.js','apps.json','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/vinzneuron.png','icons/mesappseps.png'];
const T=2500; // réseau muet au-delà de 2,5 s → copie hors ligne
const net=r=>new Promise((ok,ko)=>{const t=setTimeout(()=>ko(new Error('timeout')),T);fetch(r,{cache:'no-cache'}).then(x=>{clearTimeout(t);ok(x)},e=>{clearTimeout(t);ko(e)})});
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>fetch(u,{cache:'reload'}).then(r=>r.ok&&c.put(u,r)).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith(P)&&x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
// Réseau d'abord, copie locale en secours. Seules les ressources de ce dépôt sont mises en cache.
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||!q.url.startsWith(self.registration.scope))return;
 e.respondWith(net(q).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put(q,c))}return r})
  .catch(()=>caches.match(q,{ignoreSearch:true}).then(h=>h||(q.mode==='navigate'?caches.match('index.html').then(x=>x||caches.match('./')):undefined)||Response.error())))});
