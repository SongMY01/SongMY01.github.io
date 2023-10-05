'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0830ace2dc9720668b0fa57b0862dc4c",
"index.html": "4993c8deea1c870377c33478b6915073",
"/": "4993c8deea1c870377c33478b6915073",
"main.dart.js": "7576ac2e4c97c4deaeb3875e786cbe55",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "26f353f171d4c58204e85e78cb1c636c",
"assets/AssetManifest.json": "3234093f87b98932bc2b6cbbed427561",
"assets/NOTICES": "67de7244f33f67993d6f98234bb74b37",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6f10544edcc87123e79dc728dd9dd47e",
"assets/fonts/MaterialIcons-Regular.otf": "5cd9319d524a55ea81b1d70a0d6c3c13",
"assets/assets/image%252058.png": "a4b652c3c56dcd176f082a1c81e5d079",
"assets/assets/image%252065.png": "ee81f0e43d138fd4fbd323b960c67fe2",
"assets/assets/image%252071.png": "54b22adcae82ce10031997faf62dce3f",
"assets/assets/image%252059.png": "89e2b15dc2399f2c461b26f6c43b5e99",
"assets/assets/image%252067.png": "01ca688d39d9a5ef4879c167e3f346aa",
"assets/assets/image%252072.png": "aee1106f20289116778d15879609c378",
"assets/assets/image%252062.png": "2ba1d55588b928027940f61a037d008a",
"assets/assets/image%252077.png": "f6194fb22793635ec5d11a7afcebb476",
"assets/assets/image%252063.png": "dfbdcf7e9169de0524358af89c4c82a1",
"assets/assets/image%252075.png": "d2c838e723edac93509212b25ea50910",
"assets/assets/image%252060.png": "b3b44124ca3210c870a87035e7513276",
"assets/assets/image%252074.png": "ff0798ae118fc0d841b1d9d920802394",
"assets/assets/Rectangle%2520104.png": "beb3152b45942b18fa7164dda95fc6c3",
"assets/assets/Korea%25201.png": "f4e97c6184eb6d9830714b82976bfa3a",
"assets/assets/image%252010.png": "c0dd2abdafd52cfc526f41f74c292400",
"assets/assets/image%252039.png": "746c85a79091728189a3cf62b2c4b946",
"assets/assets/image%252015.png": "a26e14bae1a3d4083490f07bcb9c3b61",
"assets/assets/Kakao1.png": "dec0cd503760bf4855a7063f8649d306",
"assets/assets/Dasin.png": "f99eb56f7e03c47b916be02a61c8bf2e",
"assets/assets/image%25206.png": "4afc963ae7f50517460e4da268af74c0",
"assets/assets/image%252079.png": "ba9aff4b10012b34d60e32dafcf43e23",
"assets/assets/image%252078.png": "010458450872e55eb816e819ef0a016a",
"assets/assets/Kum%25201.png": "8cf0372cf4b3e8d081be7e0a8d154b89",
"assets/assets/kakao.png": "a1f8701739d1a8c37174a5896eab57fd",
"assets/assets/image%252075@2x.png": "53b0cf8b4aaae85507de6c0ea12f678b",
"assets/assets/icon/Navigation/messi.png": "e74b4434a0df02f5e79053a54b242bcc",
"assets/assets/icon/Navigation/Final.png": "e94a189b9caa10d6fea9e9e73e04701c",
"assets/assets/icon/Navigation/Home.png": "89b69bab1172a70b87b1fc1b2738d2e1",
"assets/assets/icon/Navigation/Vector%25201.png": "512996787018d4ad562ca028c78fc85f",
"assets/assets/icon/Navigation/Vector%25202.png": "fe1a6fa3b2c9df10db849598eafe12b7",
"assets/assets/icon/Navigation/send.png": "4026eaa29dc86a2105b3c07e0b752ad9",
"assets/assets/icon/Navigation/vector%252010.png": "6a79c1a7a0abb422442f67bc81802a58",
"assets/assets/image%25205.png": "994ad7024ba9a2ba6deb781162c2933d",
"assets/assets/image%252046.png": "19b4a3b84c60ea8388ddfbd7ba939435",
"assets/assets/image%25204.png": "8b976bee277d2d74c8f6a69a822d6d8b",
"assets/assets/image%252080.png": "46daa2a251145ef8134b3d1c23b35038",
"assets/assets/image%252057.png": "dcef385e47959204d8dc6317ef65cfe5",
"assets/assets/image%25201.png": "8d3be23aa9ebca90233a7b30f9c94ddf",
"assets/assets/image%252040.png": "135d9829237beba43669492c7eecdea0",
"assets/assets/image%252069.png": "a5110300b11dd2296cd0a968827d1ba4",
"assets/assets/image46.png": "041c1a64ebc7abdb521547ad210e8369",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
