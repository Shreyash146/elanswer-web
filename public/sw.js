// Enhanced Service Worker for Elanswer Website
const CACHE_VERSION = 'v2';
const STATIC_CACHE_NAME = `elanswer-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `elanswer-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE_NAME = `elanswer-images-${CACHE_VERSION}`;
const API_CACHE_NAME = `elanswer-api-${CACHE_VERSION}`;

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon.png',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

// Cache strategies by resource type
const CACHE_STRATEGIES = {
  // Static assets - Cache first, network fallback
  static: /\.(?:js|css|woff|woff2|ttf|eot)$/,
  // Images - Cache first with stale-while-revalidate
  images: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
  // API calls - Network first with cache fallback
  api: /\/api\//,
  // External resources
  external: /^https:\/\/(?:fonts\.googleapis\.com|fonts\.gstatic\.com|cal\.com|tally\.so)/
};

// Cache durations (in seconds)
const CACHE_DURATIONS = {
  static: 31536000, // 1 year
  images: 2592000,  // 30 days
  api: 300,         // 5 minutes
  html: 3600        // 1 hour
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');

  const currentCaches = [STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME, IMAGE_CACHE_NAME, API_CACHE_NAME];

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!currentCaches.includes(cacheName)) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests (except fonts and CDN assets)
  if (url.origin !== location.origin && !shouldCacheExternal(url)) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

        // Fetch from network and cache if appropriate
        return fetch(request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Determine cache name
            const cacheName = isStaticAsset(request.url) ? STATIC_CACHE_NAME : DYNAMIC_CACHE_NAME;

            // Cache the response
            caches.open(cacheName)
              .then((cache) => {
                console.log('Service Worker: Caching new resource', request.url);
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('Service Worker: Fetch failed', error);
            
            // Return offline fallback for HTML pages
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html') || new Response(
                '<h1>Offline</h1><p>You are currently offline. Please check your internet connection.</p>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
            
            throw error;
          });
      })
  );
});

// Helper functions
function shouldCacheExternal(url) {
  return CACHE_PATTERNS.some(pattern => pattern.test(url.href));
}

function isStaticAsset(url) {
  return /\.(png|jpg|jpeg|svg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$/.test(url);
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      handleBackgroundSync()
    );
  }
});

function handleBackgroundSync() {
  // Implement background sync logic here
  // For example, send queued form submissions when back online
  return Promise.resolve();
}

// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New notification from Elanswer',
    icon: '/favicon.png',
    badge: '/favicon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Elanswer', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

// Message handling
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('Service Worker: Script loaded');
