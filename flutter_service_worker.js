'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f6ce3f2a96941a69a46f7f83006d8cc3",
"version.json": "04a62b3a034431c3818b76c6ac6d6afa",
"index.html": "9899ab9ae447332a81554a9c3abf222f",
"/": "9899ab9ae447332a81554a9c3abf222f",
"main.dart.js": "408817fa9fc9aafe0708b13f697568e9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "fda6f175e7556f722bff64cc176aac85",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "00f4a05210e6688916b43a6764a00fc6",
"assets/AssetManifest.json": "7583d32ed01d8dc137f9c4f4742b0a1b",
"assets/NOTICES": "a2088708c7c385c892abc1bac0f10382",
"assets/FontManifest.json": "d3d243261f8dc12656489fb4dfcf5f6d",
"assets/AssetManifest.bin.json": "108cd9e6c95d2c27d1b4152e6a120bda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "eab937f4a9e3c135245ebbf4bf566c61",
"assets/fonts/MaterialIcons-Regular.otf": "7b5c92e83d46285443b1cc8783a9ba08",
"assets/assets/combo5.webp": "b33057ce8370b20ddf24da3980e8ba1f",
"assets/assets/combo.png": "90fde7cce8ba74344eb91b0fe53ebda1",
"assets/assets/fries.webp": "ac299d4df966467a2f7208f9695d96e4",
"assets/assets/veg1.webp": "40933ac21aec95c7e09611c14ba55698",
"assets/assets/chicken2.webp": "d3adb33ebeb2612e13b5108a7a42e54b",
"assets/assets/combo4.webp": "25c7cd050308f1f7f741be51b231a3d2",
"assets/assets/chicken.png": "aa3836c28763d17be96afac82b4c008b",
"assets/assets/combo2.webp": "306549776dcc3d2cb5fc920eebf8abc8",
"assets/assets/juicy.webp": "d10d16d2cb1e109ddcc8cd4be52ced96",
"assets/assets/fries.png": "ab12dafe971740123f8afacf596034fa",
"assets/assets/cheese.webp": "8f083b0770eadfcfba990f1f6ca1ac20",
"assets/assets/header.png": "3d438aee454d1f11838b641e096c98be",
"assets/assets/combo1.webp": "3c41e5aecbbd8160f14c67819bdb814d",
"assets/assets/icons/chili.png": "8d39622679382c0700b22f319f6186ba",
"assets/assets/icons/pickle.png": "7d5b79ebe77fbd3298144527ba1c318f",
"assets/assets/icons/home.svg": "e98e91b5b9e485394c4dc184b9c6e5d6",
"assets/assets/icons/navigation_icon.svg": "c396a7a543511b7e31a1ee7085a6806a",
"assets/assets/icons/cart.svg": "43acf2c8d727876be4852ceaa6877ad7",
"assets/assets/icons/offer.svg": "2fcc63ff44328a1c46af4255030ba411",
"assets/assets/icons/tomato.png": "c3c41676c711dceaf2e7b17d0a3289b6",
"assets/assets/icons/patty.png": "9d1249fd042f8e5d4a70d56d7425afea",
"assets/assets/icons/burger.svg": "38951cfd563c7459f08841af976f32c9",
"assets/assets/icons/heart_icon.svg": "e3bb68b3da990a0054e7151f0d56c91b",
"assets/assets/icons/cheese.png": "50247870c71341e0b3678b136190bd46",
"assets/assets/icons/back_icon.svg": "18fcae4c99928b7313ce15e928e5e13a",
"assets/assets/icons/sauces.png": "757ddb5d3673520ac1d3dcb5c844d8e1",
"assets/assets/icons/profile.svg": "8322a1559f1af5e35de7e388dc81ddcf",
"assets/assets/icons/lettuce.png": "77fafc4c5b0cd4b6bfabf99d72fe22d0",
"assets/assets/chicken1.webp": "6bfe8b0dd909c47f5e066b1e948d0102",
"assets/assets/fonts/Archivo-Regular.ttf": "ee3dc5e9c7970e30aad97c909f1a3948",
"assets/assets/fonts/Archivo_Condensed-ExtraLight.ttf": "cc2f426cb3d18a55aeba826a33a6032c",
"assets/assets/fonts/Archivo-SemiBold.ttf": "ef5277bf4d7514c4403c1b2b72dad0df",
"assets/assets/fonts/Archivo_Condensed-Light.ttf": "fb3d23111a91fa0683204676852d58e9",
"assets/assets/fonts/Archivo-VariableFont_wdth,wght.ttf": "8d7287c8be313080a9f935b3f30da14f",
"assets/assets/fonts/Archivo_Condensed-Regular.ttf": "f4461794df25e30961eba7e058f0b69d",
"assets/assets/fonts/Archivo_Condensed-Bold.ttf": "2cbc16208db19f02f059c026cc296be5",
"assets/assets/fonts/Archivo-Bold.ttf": "1eab2d39d7ab68303d0f814aea7d1269",
"assets/assets/burger.png": "b2d6eec342312692299d969acb0b8fcb",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
