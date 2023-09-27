'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "52d29cb4cf7bd46197a1eb9059ea0616",
"index.html": "a1a9601fb3b416eb9cd52de7f5f009fa",
"/": "a1a9601fb3b416eb9cd52de7f5f009fa",
"main.dart.js": "18e38bfbad90eaa49c8fd7a7ec47195c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12bd4abef29ecdf071bd0e75cc9ff9e2",
"assets/AssetManifest.json": "42466c97907c2551174875be5fb661eb",
"assets/NOTICES": "19fdf55f0af6884e8e3fedc1c58a732f",
"assets/FontManifest.json": "c20d6174c0e5d983187ec9ac56d71727",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5a119ab9b788621709c84ec49251ba6a",
"assets/fonts/DungGeunMo.otf": "b51ef1c3690faeeca738f7dc0350cdd7",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/icon_chevron_left.png": "d0d5468e4e6f03521af1c66c3b14f4b4",
"assets/assets/images/icon_chevron_left_white.png": "231e382157d4b6ba4f83dc018b784c71",
"assets/assets/images/pink_down.png": "15bcc2d4437b4ccdc772d390141d2c6b",
"assets/assets/images/title.png": "23c14e5fe4932c92f39db37f5b245d74",
"assets/assets/images/modal_brand_app.png": "3a92bcc0cafb2e6c5e607541b8f30c76",
"assets/assets/images/pink_up.png": "971c3421b23ab7f7e957d1d03bdab2d8",
"assets/assets/images/modal_four.png": "993d826ee80d55bfa81f0bdcf16cd4f3",
"assets/assets/images/home.png": "d285f9c11f35b808f9b26bbcafad57a6",
"assets/assets/images/modal_tele_app.png": "389e0c45560ab7cb261272dfdcd53000",
"assets/assets/images/icon_chevron_right.png": "358f872e2ebd9057129e1fa0d07cc906",
"assets/assets/images/modal_person.png": "49cbc2e0d5a1d1dcc7c5fda8710550f1",
"assets/assets/images/modal_brand.png": "2b0785a9de9490d4fe31d68518f3ec50",
"assets/assets/images/modal_four_app.png": "f9c26ae6f0b3925ba1703d03f6dbd015",
"assets/assets/images/cloud.png": "f1c7d84e34d1cd6cd527f74eed5b53b3",
"assets/assets/images/gameover.png": "b5457c43c7163835a30e1ee13125dd0f",
"assets/assets/images/modal_person_app.png": "216ad85b5909e1d98b12a2ef3e08aedc",
"assets/assets/images/modal_choi_app.png": "2ae3c6b33bae528473e5e57fde0450cb",
"assets/assets/images/Exit.png": "6affaa2f45edd2fbec6c9639c35d02d1",
"assets/assets/images/modal_choi.png": "a83460f70216d3fceb8b3d33288442be",
"assets/assets/images/modal_tele.png": "4caedc3d257069b1c587ce91f0c851a6",
"assets/assets/images/home.gif": "3b0a8e8f949f258b93340ec58abb018d",
"assets/assets/person/%25EC%25A0%2584%25EC%2597%25AC%25EB%25B9%2588.WEBP": "9f60cb61609f536d2fbb22c5ec03f023",
"assets/assets/person/%25EC%25A1%25B0%25EC%259C%25A0%25EB%25A6%25AC.WEBP": "8134d95f462e89eb305ca1e162c6e777",
"assets/assets/person/%25EB%2582%2598%25EC%2598%2581%25EC%2584%259D.WEBP": "6714c2c0dcdc81ecf2d239ab138db420",
"assets/assets/person/%25EA%25B3%25A0%25EC%259C%25A4%25EC%25A0%2595.WEBP": "8e98139d91ae13a7e5c7a725609aeeb6",
"assets/assets/person/%25EC%2595%2588%25EC%259E%25AC%25ED%2599%258D.WEBP": "e35ffca7fa5311c5350a42fbc9241300",
"assets/assets/person/%25EB%25AF%25B8%25EB%258B%25AC%25EC%259D%25B4.WEBP": "227b08a0b1e7a13f508356757a192a6b",
"assets/assets/person/%25EC%259C%25A0%25ED%2595%25B4%25EC%25A7%2584.WEBP": "a65f40d7ff2dbbfed9f705dfb69aeb95",
"assets/assets/person/%25EA%25B1%25B0%25EB%25AF%25B8.WEBP": "a69efb5779dd00d996e94f7c2691a037",
"assets/assets/person/%25EB%25A7%2588%25EB%258F%2599%25EC%2584%259D.JPG": "acf39b9b9500f3ef67fe11fce5e39b53",
"assets/assets/person/%25EC%25A7%2580%25EC%2584%25B1.WEBP": "5e93ffc9be68a8c81f73bec09ae65c03",
"assets/assets/person/%25EA%25B0%2595%25EB%25B0%25B1%25ED%2598%25B8.JPG": "bab6a446c44d3af2bcd145fe6a078ee8",
"assets/assets/person/%25EC%259C%25A0%25ED%2595%25B4%2520%25EC%25A7%2584.jpeg": "81a219ae75ea8955d81f0f4425a26940",
"assets/assets/person/%25EA%25B0%2595%25ED%2595%2598%25EB%258A%2598.WEBP": "49c438761cfa3841200c318a8d285abc",
"assets/assets/person/%25EC%2596%25B4%25ED%2594%25BC%25EC%25B9%2598.WEBP": "91151bd7573fc7a001837cebe28c0fb0",
"assets/assets/person/%25EC%25A0%2595%2520%25EB%258F%2599%25EC%259B%2590.jpeg": "3cbccc794820bcea55080b790e10c4ce",
"assets/assets/person/%25EB%25AF%25B8%25EB%2582%2598.WEBP": "f130910eda2d46d7d69d323afa4acfef",
"assets/assets/person/%25EB%25A7%2588%2520%25EB%258F%2599%25EC%2584%259D.jpeg": "e4a8ab8f0eff8d2cf60c076368b24b56",
"assets/assets/person/%25EC%25A0%2595%25EB%258F%2599%25EC%259B%2590.JPG": "574d4e2b21c4e545fbe32382613e8531",
"assets/assets/person/%25EC%259D%25B4%25EA%25B2%25BD%25EC%2598%2581.WEBP": "e5dfda579c347256e3b318d4427fe3f6",
"assets/assets/person/%25EA%25B9%2580%25EB%258F%2599%25ED%2598%2584.WEBP": "9a33668f99e61da988ec3db143ae2630",
"assets/assets/person/Justin%2520Bieber.png": "1a831a3aa1d3cc013174eb08ca001d35",
"assets/assets/person/%25ED%2581%25AC%25EB%259F%25AC%25EC%2589%25AC.JPG": "8f09a790e2edc8ccb091f906d2337837",
"assets/assets/person/%25EC%259D%25B4%25EC%258A%25B9%25EC%259A%25B0.JPG": "e2726a01ab0cd7571843045bb2f70f54",
"assets/assets/person/%25EC%2588%2598%25EC%25A7%2580.JPG": "eb079135b1fa01fc7e700fd7427b2fc7",
"assets/assets/person/%25EB%25AC%25B4%25EB%25AF%25BC.JPG": "f22787cda7440ba5e4602bb93408ccf8",
"assets/assets/person/%25EC%2586%25A1%25ED%2598%259C%25EA%25B5%2590.WEBP": "6f8e79c02eb57c03a62828135ee00c93",
"assets/assets/person/%25EC%259C%2588%25ED%2584%25B0.WEBP": "cf695aa845a7005c38ae0fd60a347f05",
"assets/assets/person/%25EC%25B5%259C%25EC%259A%25B0%25EC%258B%259D.JPG": "b993da700c5ce4c744364adb19423f72",
"assets/assets/person/%25EB%25B4%2589%25EC%25A4%2580%25ED%2598%25B8.WEBP": "526e70055c944d2a1df42a15d738f35c",
"assets/assets/person/%25ED%2598%2584%25EC%25A3%25BC%25EC%2597%25BD.WEBP": "81c3c866a448d37b393a7edd736c7074",
"assets/assets/person/%25EA%25B9%2580%25EC%2597%25B0%25EA%25B2%25BD.jpeg": "69f92bda76b3f071b3bb94ef55a2e93d",
"assets/assets/person/%25EB%25A7%2581%25EC%25BB%25A8.WEBP": "20806ab472f449940e7fd268ba2cb2ea",
"assets/assets/person/%25EA%25B9%2580%25EC%2586%258C%25EC%2597%25B0.WEBP": "d242661c2b1c4b57762163f933c32f0c",
"assets/assets/person/%25EC%2595%2588%25EB%2582%2598.JPG": "ad909088fe5d3b647bd62944565a4b17",
"assets/assets/person/%25EB%25B0%2595%25EB%25AA%2585%25EC%2588%2598.WEBP": "c348174e1576598157d3123b0ca2be50",
"assets/assets/person/%25EC%259C%25A0%25EA%25B4%2580%25EC%2588%259C.WEBP": "fb1a312a8e6a15154097d0236765ae03",
"assets/assets/person/%25EB%2582%25A8%25EB%258F%2584%25EC%259D%25BC.WEBP": "ea2aa0ea87aa29e301b879a4dcc7ec59",
"assets/assets/person/%25EC%2595%2588%25EC%259C%25A0%25EC%25A7%2584.JPG": "2e6fe859fadc2fc9cae855dbf95efb46",
"assets/assets/person/winter.jpeg": "45a2ee8eadfdf4d1524a03b36a02337f",
"assets/assets/person/%25EC%2598%25AC%25EB%259D%25BC%25ED%2594%2584.JPG": "72ddd5cf3a250d89dcef0f61e83576ad",
"assets/assets/person/%25EC%259D%25B4%25EB%25AC%25B8%25EC%2584%25B8.WEBP": "48df81335c9d7ab56201fadfc2cbc71b",
"assets/assets/person/%25EB%25B0%2595%25EC%259E%25AC%25EB%25B2%2594.WEBP": "ec2d5c6cd4d414783fd3230e232b000c",
"assets/assets/person/%25EC%2583%2598%25EC%258A%25A4%25EB%25AF%25B8%25EC%258A%25A4.WEBP": "b4242bb3b398beb145e216e55eda475d",
"assets/assets/person/%25EA%25B3%25A0%25EC%2595%2584%25EC%2584%25B1.WEBP": "57c7e6a9bbb01bfa4cd215bc83856714",
"assets/assets/person/%25EC%25A1%25B0%25EC%25A0%2595%25EC%2584%259D.WEBP": "1a8a75c4f830dd19ee8b27e1d3cb4f81",
"assets/assets/person/%25ED%2583%2580%25EB%2585%25B8%25EC%258A%25A4.WEBP": "b4b16e2ab8c11c1b123f07b191e11439",
"assets/assets/person/%25EC%258A%25A4%25EC%25B9%25BC%25EB%25A0%259B%25EC%259A%2594%25ED%2595%259C%25EC%258A%25A8.JPG": "92caf1237b09e98181f932e076bcdecd",
"assets/assets/person/%25EB%25A1%259C%25EB%25B2%2584%25ED%258A%25B8.WEBP": "36916750ddf03235d0ad93e05049656b",
"assets/assets/person/%25EB%25AF%25BC%25EA%25B2%25BD%25ED%259B%2588.jpeg": "edff22e3b52647ceaea75a1827cfed3b",
"assets/assets/person/%25EB%25B3%25B4%25EB%2585%25B8%25EB%25B3%25B4%25EB%2585%25B8.WEBP": "2fa5839b2b20e61f42898a3a74267c97",
"assets/assets/person/%25EC%259D%25BC%25EB%25A1%25A0%25EB%25A8%25B8%25EC%258A%25A4%25ED%2581%25AC.WEBP": "2440a745f6582286a3c83b9999001595",
"assets/assets/person/%25ED%258F%25AC%25EB%258F%258C%25EC%259D%25B4.WEBP": "604cb4c7db5c1c20b3d4d2c9a9bb9395",
"assets/assets/person/%25EA%25B9%2580%25EC%2597%25B0%25EA%25B2%25BD.JPG": "a573fc41dd0e945beb8d6613d06d644b",
"assets/assets/person/%25EA%25B3%25B5%25EC%259C%25A0.WEBP": "4cdadce73ec8280fa6bf5c01f9f2ec12",
"assets/assets/person/%25EB%2585%25B8%25EC%25A7%2584%25EA%25B5%25AC.JPG": "269f680135637962c8b7a0ea4d343b6c",
"assets/assets/person/%25ED%2594%25BC%25EC%2598%25A4%25EB%2582%2598.WEBP": "20b5d183d20fef38026f91136f7ced60",
"assets/assets/person/%25EA%25B9%2580%25ED%2583%259C%25ED%259D%25AC.WEBP": "d1ef9fc66a62c246f919c6add4afa3b3",
"assets/assets/person/%25EA%25B0%2595%25EB%258F%2599%25EC%259B%2590.WEBP": "fc4b1e93fc0c260bb913fad7a4dc2751",
"assets/assets/person/%25ED%2595%25B4%25EB%25A6%25B0.JPG": "dc0a59a7035e79ebd31ea977e921ac96",
"assets/assets/person/%25EB%25AC%25B8%25EC%2583%2581%25ED%259B%2588.WEBP": "75c9b27fb7293417c3e81b363b5cf688",
"assets/assets/person/%25EC%2586%2590%25ED%259D%25A5%25EB%25AF%25BC.JPG": "68981252a47ffc852ddc8a0f0ade02a2",
"assets/assets/person/%25EB%25A5%2598%25EC%258A%25B9%25EB%25B2%2594.WEBP": "6aa4a40d918e2b4c922ddeed9fdc2f92",
"assets/assets/person/%25EB%25BF%25A1%25EB%25BF%25A1%25EC%259D%25B4.WEBP": "5c8bdce8abad5b38cced8278a014d64b",
"assets/assets/person/Deadpool.JPG": "b5016df9577c80d388943ea338ec77e1",
"assets/assets/person/%25EC%25A1%25B0%25EC%258A%25B9%25EC%259A%25B0.JPG": "ef72942f4db6f4ba593f594adb1484ee",
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
