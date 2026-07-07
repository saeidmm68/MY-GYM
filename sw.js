const CACHE_NAME = 'fitpro-v1';
const urlsToCache = ['/MY-GYM/', '/MY-GYM/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/MY-GYM/'));
});

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  self.registration.showNotification(data.title || 'MY GYM', {
    body: data.body || '',
    icon: '/MY-GYM/icon-192.png',
    badge: '/MY-GYM/icon-192.png',
    tag: data.tag || 'mygym',
    vibrate: [200, 100, 200]
  });
});
