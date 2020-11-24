const name = 'pwa'
const files = [
    '/',
    '/favicon.ico',
    '/logo192.png'
];
self.addEventListener('activate', (e) => {
    console.log("[serviceworker] activvate")
})

self.addEventListener('install', (e) => {
    console.log('[serviceworker]install')
    e.waitUntill(
        caches.open(name).then((cache) => {
            console.log('serviceWorker caching app shell')
            return cache.addAll(files)
        })
    )
})
self.addEventListener('fetch', res => {
    //console.log('fetch event', res);
    res.respondWith(
        caches.match(res.request).then(cacheRes => {
            return cacheRes || fetch(res.request).then(fetchRes => {
                return caches.open(cacheName).then(cache => {
                    cache.put(res.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    );
});