// Trabajador de la app instalable. Por ahora NO guarda nada en el teléfono:
// todo se pide siempre a internet, así cada cambio publicado se ve de inmediato.
// (Aquí se agregará el modo sin internet cuando se apruebe.)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* sin caché: el navegador lo pide normal */ });
