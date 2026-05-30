const SHELL_CACHE = "bussin-shell-v28";
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css?v=20260310-10",
  "./script.js?v=20260310-10",
  "./data/cebu-search-db.json",
  "./data/cebu-demand-profile.json",
  "./data/cebu-landmarks.json",
  "./manifest.webmanifest",
  "./assets/bussin_logo_dualcolor.svg",
  "./assets/bussin-logo.svg"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(PRECACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(
      names
        .filter((name) => name.startsWith("bussin-shell-") && name !== SHELL_CACHE)
        .map((name) => caches.delete(name))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const networkResponse = await fetch(event.request);
      const cache = await caches.open(SHELL_CACHE);
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      const cached = await caches.match(event.request);
      if (cached) return cached;

      if (event.request.mode === "navigate") {
        const fallback = await caches.match("./index.html");
        if (fallback) return fallback;
      }

      throw error;
    }
  })());
});
