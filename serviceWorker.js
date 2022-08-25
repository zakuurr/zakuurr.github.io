const versionApp = "satria-portfolio-v1";
const assets = [
    "/",
    "/index.html",
    "/css/index.css",
    "/css/dark.css",
    "/css/bottomNav.css",
    "/css/portfolio.css",
    "/css/about.css",
    "/css/button.css",
    "/css/utility/text.css",
    "/js/index.js",
    "/img/icon72x72.png",
    "/img/icon96x96.png",
    "/img/icon128x128.png",
    "/img/icon144x144.png",
    "/img/icon152x152.png",
    "/img/icon192x192.png",
    "/img/icon384x384.png",
    "/img/icon512x512.png",
    '/img/me.png',
    '/img/skillfully.png',
    '/img/react.png',
    '/img/personal.svg',
    '/img/qisst-pay.svg',
    '/img/store.svg',
    '/img/bos.svg',

];

self.addEventListener('install' , (installEvent) => {
    installEvent.waitUntil(
        caches.open(versionApp).then(cache => {
           return cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(versionApp)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('activate', function(event) {

  var cacheAllowlist = versionApp;

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});