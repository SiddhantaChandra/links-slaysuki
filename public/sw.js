const STATIC_CACHE = 'slaysuki-static-v1'
const PAGE_CACHE = 'slaysuki-pages-v1'
const SHELL_URLS = ['/', '/robots.txt', '/sitemap.xml']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PAGE_CACHE).then((cache) => cache.addAll(SHELL_URLS)).then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  const allowedCaches = new Set([STATIC_CACHE, PAGE_CACHE])

  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => (allowedCaches.has(key) ? Promise.resolve() : caches.delete(key)))))
      .then(() => self.clients.claim()),
  )
})

const isCacheableAsset = (request) => {
  if (request.method !== 'GET') {
    return false
  }

  const url = new URL(request.url)

  if (url.origin !== self.location.origin) {
    return false
  }

  return ['style', 'script', 'image', 'font'].includes(request.destination)
}

const staleWhileRevalidate = async (request, cacheName) => {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)
  const networkResponsePromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone())
      }

      return response
    })
    .catch(() => cachedResponse)

  return cachedResponse || networkResponsePromise
}

const networkFirstPage = async (request) => {
  const cache = await caches.open(PAGE_CACHE)

  try {
    const response = await fetch(request)

    if (response.ok) {
      cache.put(request, response.clone())
    }

    return response
  } catch {
    return (await cache.match(request)) || cache.match('/')
  }
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirstPage(event.request))
    return
  }

  if (isCacheableAsset(event.request)) {
    event.respondWith(staleWhileRevalidate(event.request, STATIC_CACHE))
  }
})