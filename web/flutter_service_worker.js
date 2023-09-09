'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "52d29cb4cf7bd46197a1eb9059ea0616",
"index.html": "07e0ce4ca7b4d055c6d5d43798be7502",
"/": "07e0ce4ca7b4d055c6d5d43798be7502",
"main.dart.js": "64666f30cab2879b52ee41a6c3b93303",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12bd4abef29ecdf071bd0e75cc9ff9e2",
"assets/AssetManifest.json": "bf7e026bf58cd228712d6946539f9f90",
"assets/NOTICES": "30f93a73a945213b86016a8473c3e72b",
"assets/FontManifest.json": "c20d6174c0e5d983187ec9ac56d71727",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "fcb4f3d988bfabbcdd3da5fafcfaf342",
"assets/fonts/DungGeunMo.otf": "b51ef1c3690faeeca738f7dc0350cdd7",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/icon_chevron_left.png": "d0d5468e4e6f03521af1c66c3b14f4b4",
"assets/assets/images/icon_chevron_left_white.png": "231e382157d4b6ba4f83dc018b784c71",
"assets/assets/images/pink_down.png": "15bcc2d4437b4ccdc772d390141d2c6b",
"assets/assets/images/pink_up.png": "971c3421b23ab7f7e957d1d03bdab2d8",
"assets/assets/images/modal_four.png": "085280847cf449b38324dc20ad9700fc",
"assets/assets/images/home.png": "d285f9c11f35b808f9b26bbcafad57a6",
"assets/assets/images/icon_chevron_right.png": "358f872e2ebd9057129e1fa0d07cc906",
"assets/assets/images/gameover.png": "b5457c43c7163835a30e1ee13125dd0f",
"assets/assets/images/Exit.png": "6affaa2f45edd2fbec6c9639c35d02d1",
"assets/assets/images/modal_choi.png": "a83460f70216d3fceb8b3d33288442be",
"assets/assets/images/home.gif": "3b0a8e8f949f258b93340ec58abb018d",
"assets/assets/person/%25EC%25A0%2595%25EB%258F%2599%25EC%259B%2590.jpeg": "6938a3694e7480338e77dafc917e8a83",
"assets/assets/person/%25EB%25A1%259C%25EB%25B2%2584%25ED%258A%25B8.jpeg": "611f20ed53cde8d4b87e8ae2114d6c0f",
"assets/assets/person/%25EC%259D%25BC%25EB%25A1%25A0%25EB%25A8%25B8%25EC%258A%25A4%25ED%2581%25AC.jpeg": "2440a745f6582286a3c83b9999001595",
"assets/assets/person/%25EB%25B3%25B4%25EB%2585%25B8%25EB%25B3%25B4%25EB%2585%25B8.jpeg": "48182661fb28864596e80f52a3e962a3",
"assets/assets/person/%25EC%259D%25B4%25EC%258A%25B9%25EC%259A%25B0.jpeg": "d3cbccd869f34a3b9019b4d0e305c851",
"assets/assets/person/%25ED%258F%25AC%25EB%258F%258C%25EC%259D%25B4.jpeg": "80b1821b9e700971d7ecd31a6713e319",
"assets/assets/person/%25ED%2594%25BC%25EC%2598%25A4%25EB%2582%2598.jpeg": "071b3dda93acbf5f0a85108de703d06d",
"assets/assets/person/%25EA%25B3%25B5%25EC%259C%25A0.jpeg": "c1397162c227e9292200160971037fdb",
"assets/assets/person/%25EC%2583%2598%25EC%258A%25A4%25EB%25AF%25B8%25EC%258A%25A4.jpeg": "6b41ed1e775fc3771a85b10cefbe18ec",
"assets/assets/person/%25EB%25B0%2595%25EC%259E%25AC%25EB%25B2%2594.jpeg": "c9e51c24a69475948da14e589bee98a4",
"assets/assets/person/%25EC%259D%25B4%25EB%25AC%25B8%25EC%2584%25B8.jpeg": "e136785a78172ef9159518dda6e118fe",
"assets/assets/person/%25EC%25A1%25B0%25EC%25A0%2595%25EC%2584%259D.jpeg": "531eef24c9b9b8cc4edb50d87ebc6500",
"assets/assets/person/%25EC%2595%2588%25EB%2582%2598.jpeg": "5b6afe1167daad6a24e4bdb44b434a1f",
"assets/assets/person/%25EA%25B3%25A0%25EC%2595%2584%25EC%2584%25B1.jpeg": "5b9bb4bacd8a5c68e76fb7e589b9de58",
"assets/assets/person/%25EB%25A7%2588%25EB%258F%2599%25EC%2584%259D.jpeg": "19bfd1c57d3fece35e01ea645a3207a7",
"assets/assets/person/%25ED%2583%2580%25EB%2585%25B8%25EC%258A%25A4.jpeg": "d4992ff9588f8a6f3fcf272a343108ab",
"assets/assets/person/%25EB%25BF%25A1%25EB%25BF%25A1%25EC%259D%25B4.jpeg": "c5b636180a4cac69a26e5c35e7e78eda",
"assets/assets/person/%25EA%25B9%2580%25EC%2597%25B0%25EA%25B2%25BD.jpeg": "6f7afcf6fff5793dde15e5b350a72ea4",
"assets/assets/person/%25EC%25B0%25A8%25EB%2591%2590%25EB%25A6%25AC.jpeg": "451bd380f0f5a1af8572db4e5182866c",
"assets/assets/person/%25EC%2588%2598%25EC%25A7%2580.jpeg": "ca0dcb5b5d93965f12d6de53b10ca1c6",
"assets/assets/person/%25EA%25B9%2580%25ED%2583%259C%25ED%259D%25AC.jpeg": "4fcbd555c2b47bfcba4ae989f7ac884d",
"assets/assets/person/%25EC%2595%2588%25EC%259C%25A0%25EC%25A7%2584.jpeg": "4d85e931b48a5edb4742bc4a7894b135",
"assets/assets/person/%25EC%25B5%259C%25EC%259A%25B0%25EC%258B%259D.jpeg": "4cc483707d7cbfcd0c6cd46ccf126934",
"assets/assets/person/%25EA%25B0%2595%25EB%258F%2599%25EC%259B%2590.jpeg": "21b43eb1788b9c26f8803738cad7fd9f",
"assets/assets/person/%25EB%25AC%25B8%25EC%2583%2581%25ED%259B%2588.jpeg": "11beef41d4e628d33cfe8aee320d5e8d",
"assets/assets/person/%25EA%25B1%25B0%25EB%25AF%25B8.jpeg": "bbe9d1ae8e2d660fb6795ce6075039a8",
"assets/assets/person/%25EC%259C%25A0%25ED%2595%25B4%25EC%25A7%2584.jpeg": "7e2aacf23cf0556a6d184200f76e0dcd",
"assets/assets/person/%25EA%25B0%2595%25ED%2595%2598%25EB%258A%2598.jpeg": "19501ce13c6b7a69982f086da3e32775",
"assets/assets/person/%25EC%25A7%2580%25EC%2584%25B1.jpeg": "c7063023f01b1b3c35ddc2f9cd841c24",
"assets/assets/person/%25EB%25AF%25B8%25EB%2582%2598.jpeg": "1bb49c0d126fbd2fc2fce9066499fc74",
"assets/assets/person/%25EA%25B9%2580%25EC%2597%25B0%25EC%259E%2590.jpeg": "9c034727696da7c217eb74e220a0004b",
"assets/assets/person/%25EC%2596%25B4%25ED%2594%25BC%25EC%25B9%2598.jpeg": "d72f6e697ae2e93aff5e5c72535f2e90",
"assets/assets/person/%25ED%2581%25AC%25EB%259F%25AC%25EC%2589%25AC.jpeg": "e6a433a43e0d33a911ab220e4a1a3f5b",
"assets/assets/person/%25EC%25A1%25B0%25EC%258A%25B9%25EC%259A%25B0.jpeg": "b3745de47fd4b2058a0106cdf62a5108",
"assets/assets/person/%25EA%25B9%2580%25EB%258F%2599%25ED%2598%2584.jpeg": "8a53cc8c06497685864ff2f66bfbd8e1",
"assets/assets/person/%25EC%259D%25B4%25EA%25B2%25BD%25EC%2598%2581.jpeg": "18df4fbac5401216d41158151748f1fd",
"assets/assets/person/%25EC%2586%2590%25ED%259D%25A5%25EB%25AF%25BC.jpeg": "7b15d25426e3bbd52e74e8323d4eb0ec",
"assets/assets/person/%25EB%2585%25B8%25EC%25A7%2584%25EA%25B5%25AC.jpeg": "825c4e9c54f62d8ea442f8b9a0aedcfa",
"assets/assets/person/%25EB%25AF%25BC%25EA%25B2%25BD%25ED%259B%2588.jpeg": "891593a3b682f2e1493404b6960ed2d9",
"assets/assets/person/%25ED%2598%259C%25EB%25A6%25B0.jpeg": "4242be98bd02f786f9a6f49b9f01049f",
"assets/assets/person/%25EB%2582%2598%25EC%2598%2581%25EC%2584%259D.jpeg": "8e8797deac2d79f1840207cd69ad70ea",
"assets/assets/person/%25EC%25A1%25B0%25EC%259C%25A0%25EB%25A6%25AC.jpeg": "c00bf0ca4cb9b81a40028dff5b208a91",
"assets/assets/person/%25EB%25AF%25B8%25EB%258B%25AC%25EC%259D%25B4.jpeg": "8213d23af61b6b07b4ad6bfc5c32b40b",
"assets/assets/person/%25EC%25A0%2580%25EC%258A%25A4%25ED%258B%25B4%25EB%25B9%2584%25EB%25B2%2584.jpeg": "580b9d7203b1f32893368ec6fe490db2",
"assets/assets/person/%25EC%258A%25A4%25EC%25B9%25BC%25EB%25A0%259B%25EC%259A%2594%25ED%2595%259C%25EC%258A%25A8.jpeg": "d49355baf5e171761223e2b5c9275246",
"assets/assets/person/%25EB%25AC%25B4%25EB%25AF%25BC.jpeg": "7dc7f0eb79e344dca96a462ef6127144",
"assets/assets/person/%25EC%2598%25AC%25EB%259D%25BC%25ED%2594%2584.jpeg": "157b7176b9e73b42743f870c39293c61",
"assets/assets/person/%25EC%259E%25A5%25EC%259C%25A4%25EC%25A3%25BC.jpeg": "809c5c58ae3f246b7da4165c2fe21af0",
"assets/assets/person/%25EB%2582%25A8%25EB%258F%2584%25EC%259D%25BC.jpeg": "d5e808f8b16d2dbdd7271162b0fde557",
"assets/assets/person/%25EC%259C%25A0%25EA%25B4%2580%25EC%2588%259C.jpeg": "127a969aed6ee214d3985073a979bf78",
"assets/assets/person/%25EB%258D%25B0%25EB%2593%259C%25ED%2592%2580.jpeg": "213a2efcdcc2945c09b0cc9c1910f72b",
"assets/assets/person/%25EB%25B0%2595%25EB%25AA%2585%25EC%2588%2598.jpeg": "b117d2fb4f4bf72d17e26a012c28b64f",
"assets/assets/person/%25EC%2586%25A1%25ED%2598%259C%25EA%25B5%2590.jpeg": "c92498552c157add90d298e3b457be4e",
"assets/assets/person/%25EC%25A1%25B0%25EC%2597%25AC%25EC%25A0%2595.jpeg": "a6ae1fffb33e6f32075ecd7f074ae3e2",
"assets/assets/person/%25EB%25B4%2589%25EC%25A4%2580%25ED%2598%25B8.jpeg": "0750f0036e72c1594fa82c9816e479d0",
"assets/assets/person/%25EC%259E%2584%25EC%2598%2581%25EC%259B%2585.jpeg": "1d3efbca2380bbe6d8e5941c90a8db77",
"assets/assets/person/%25EC%259C%2588%25ED%2584%25B0.jpeg": "302a4922afbbdb7e2eafa4fea946b868",
"assets/assets/person/%25EA%25B0%2595%25EB%25B0%25B1%25ED%2598%25B8.jpeg": "df406847ed720f0a0b2404f55676da4e",
"assets/assets/person/%25EB%25A7%2581%25EC%25BB%25A8.jpeg": "88e07d395d637fc8defafcc9547cbac6",
"assets/assets/person/%25ED%2598%2584%25EC%25A3%25BC%25EC%2597%25BD.jpeg": "2ba52c6ae68daf0aab0371f0eebab791",
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
