'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a4c53dfcd90ace19eccca59b811ac7d",
"index.html": "638f1f2455eaed76db3939d12dd6c5ba",
"/": "638f1f2455eaed76db3939d12dd6c5ba",
"main.dart.js": "6a7e1a766359cea9356079fcf6be45de",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9142f7aea0bf6514fc9036bcbdb486e6",
"assets/AssetManifest.json": "6b492866aa8916637db6d06e79071731",
"assets/NOTICES": "a6528c476c56d182c6a0845567a99fcb",
"assets/FontManifest.json": "ddb46f4f6375f354b268f2b4e78866f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "75bcda31518653e4c5ff91981f6110ce",
"assets/fonts/Pretendard-Medium.ttf": "6d045f83b15a4ce0108df8e96e53851e",
"assets/fonts/Pretendard-Black.ttf": "15c7d1db3ba3f775e8c48e40f2744c2b",
"assets/fonts/Pretendard-Regular.ttf": "f9574625d71019a3d7d8417e9ac35e7e",
"assets/fonts/Pretendard-Thin.ttf": "1d54880fd193ab9ef9364c48ff968d63",
"assets/fonts/Pretendard-ExtraLight.ttf": "27cb5c5e9993269e199efb199e24b244",
"assets/fonts/Pretendard-SemiBold.ttf": "52e17b18a3a47c23bcdd626a3d8f163c",
"assets/fonts/Pretendard-ExtraBold.ttf": "2101fb53456d23d685a5172792599214",
"assets/fonts/Pretendard-Bold.ttf": "0e31c423b3971eecd79d2866b8ad65ac",
"assets/fonts/MaterialIcons-Regular.otf": "4ede6cf4f6f6154728da9dfcb0b5aadf",
"assets/fonts/Pretendard-Light.ttf": "1a9b52d0674840d80e8a60dd1270114f",
"assets/assets/onboarding1.png": "6bb318a9e58aaf43d3ae0623f7184f9a",
"assets/assets/onboarding3.png": "fae1c37ae1121e699da687174a5a8dcc",
"assets/assets/onboarding2.png": "b633b26df841e44593a4432765ade34d",
"assets/assets/onboarding4.png": "c6d14f5e3afb7be530420891e64db7f7",
"assets/assets/images/ei_check.jpg": "adba41f8561cd516b971f35540100833",
"assets/assets/images/plus.png": "250a11006c6b82436088c1e373ff6f71",
"assets/assets/images/login.png": "aa649dd1e9ccf1ada0bba5b820014baa",
"assets/assets/images/key.png": "fbfad8ed16c8d2be07db0cc3b6206076",
"assets/assets/images/home_icon.png": "4502e248bde1bb5c096b8f53ba2bab40",
"assets/assets/images/home.png": "4521310dbf1283ea5568040ad99edfaf",
"assets/assets/images/JOINUS.jpg": "52e8281ff4cb2ed4135d03616e08f811",
"assets/assets/images/search.png": "83487d02b71ad75a819b482debabd2c2",
"assets/assets/images/man.png": "2818a67786c2346365795ae143ecca7b",
"assets/assets/images/iconamoon_profile.jpeg": "05bc1c59b6c3f1dcf9a2c8642ae16520",
"assets/assets/images/Profile.jpg": "d0d9848b53eafaeff6fb9346470d23f8",
"assets/assets/images/check.jpeg": "a11f76b401254e1b2153d9c1d8aff036",
"assets/assets/images/Shine.jpg": "03ea8c43fc7bb9bf34e505c5a04e4495",
"assets/assets/images/home_completed.png": "b7ac2af907090ece2cf71eec883a7f78",
"assets/assets/images/welcome.png": "fdff6002ccae9e1bcb0ded98d8f56869",
"assets/assets/images/kebap.png": "f3a04e00bbcd9643d079ef07f58e3003",
"assets/assets/splash.mp4": "9dd3eb0d8bfd70c66c38f25a808fca24",
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
