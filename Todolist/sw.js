self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('cacheTitle').then(function(cache) {
			return cache.addAll([
				'index.html',
				'manifest.json',
				'sw.js',
				'images/favicon.png',
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});
