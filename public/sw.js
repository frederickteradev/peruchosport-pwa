const CACHE_NAME = 'vue-pwa-cache-v1';

// Archivos estáticos que sabemos que están en public/
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/logo.webp',
    '/accesorios.webp',
    '/camisa.webp',
    '/camiseta_grafica_featured.webp',
    '/camisetas_fetured.webp',

    '/fotos_peruchosport.webp',

    '/gorras.webp',
    '/gorras_fetured.webp',
    '/jeans_fetured.webp',
    '/outfit_fetured.webp',
    '/outfit2_fetured.webp',
    '/pantalones.webp',
    '/polos_fetured.webp',
    '/sueter_fetured.webp',
    '/shorts.webp',
    '/sueter.webp',
    '/short_fetured.webp'
  ];

// Instalar y precachear archivos estáticos
self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Precaching archivos estáticos');
      return cache.addAll(STATIC_ASSETS);
})
);
});

// Activar y limpiar cachés antiguas
self.addEventListener('activate', event => {
  console.log('[SW] Activado');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key!== CACHE_NAME) {
            console.log('[SW] Borrando caché antigua:', key);
            return caches.delete(key);
}
})
)
)
);
});

// Interceptar peticiones y servir desde caché o red
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Cachear dinámicamente todo lo que venga de /assets/
  if (requestUrl.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return (
          cached ||
          fetch(event.request).then(response => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, response.clone());
              return response;
});
})
);
})
);
    return;
}

  // Para otros archivos, usar caché primero
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
})
);
});