'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e7e82f5303aecbe0eea1bd581af77153",
"assets/AssetManifest.bin.json": "aa487159af0a74d77e6edd2cc167bbb6",
"assets/assets/background_img-1.jpg": "7a54c5a7c77241ea0e3ecdce49ad90c4",
"assets/assets/background_img.jpg": "7a54c5a7c77241ea0e3ecdce49ad90c4",
"assets/assets/background_img10.jpg": "b1391a67174aac5a41b45ffd921410eb",
"assets/assets/header-bg.jpg": "596d1fc9b2a450edab83175b8ddb50a5",
"assets/assets/header-bg1.jpg": "2e476c3a0a9aa79fd63d8299f15c83c9",
"assets/assets/idea.png": "789ea6f674e1a4e081faedd95dae1eb4",
"assets/assets/image%25200.jpg": "34648eed8ae10e0f14b4932bc89635f1",
"assets/assets/image%252000.jpg": "e08eb3ba2196fb99f85ab67efda5dafe",
"assets/assets/image%252001.jpg": "e9c17665f000273fc2d9d0b4990e1442",
"assets/assets/image%252002.jpg": "b36c457c33bc453ac2e2293e0c06b430",
"assets/assets/image%252003.jpg": "ea785dc2d5c843c22ed6cf25958e93a7",
"assets/assets/image%252004.jpg": "ddaa2de9e3062818aa7c5836b7d35f6d",
"assets/assets/image%252005.jpg": "58688ee819f4b9bd2f99105710625aa6",
"assets/assets/image%252006.jpg": "0701edd307cfc0d1ad26615c82708beb",
"assets/assets/image%252007.jpg": "c70f6045348ccbcce1839fe0d7d99dd9",
"assets/assets/image%252008.jpg": "80fe3465d7630da60646882abaf22ada",
"assets/assets/image%252009.jpg": "8e06532141e6a11526534e21617620a8",
"assets/assets/image%25201.jpg": "473cf5f740a260c9397a626ebb3c22c5",
"assets/assets/image%252010.jpg": "ed977cfedf7eb6510b7a254dd0b1cb1c",
"assets/assets/image%2520100.jpg": "a4ef1f8ce046888bda29413e3a2327e9",
"assets/assets/image%252011.jpg": "f541b8e9ca9a39cd51e146a608b27ae9",
"assets/assets/image%252012.jpg": "f5400032b72b7286094964e42bb7d2d5",
"assets/assets/image%252013.jpg": "ef41febe9ba38911d7ff0cae31d2514f",
"assets/assets/image%252014.jpg": "29b537463b8d463128ef98615eaedd2e",
"assets/assets/image%252015.jpg": "4ba37b2b6067fc7c247636a3587d5c82",
"assets/assets/image%252016.jpg": "a252c7317d41da1e5c3f57b6aa1fee67",
"assets/assets/image%252017.jpg": "a21de26f667f23c5d0aaadc22b8489a3",
"assets/assets/image%252018.jpg": "6e5bd78fe67def02734a4fd01eb7f606",
"assets/assets/image%252019.jpg": "a4631f2a9b4e0e930561b408bad9935d",
"assets/assets/image%25202.jpg": "3508cc4a122d490ebd626d9178cfdcb3",
"assets/assets/image%252020.jpg": "ebd9cbe0782b312b12865ef6e3965719",
"assets/assets/image%252021.jpg": "9725ea527478e75912eaef21a870d9f3",
"assets/assets/image%252022.jpg": "e64f150a53a49ad9455c97f15f425cdf",
"assets/assets/image%252023.jpg": "e8c4fb47d149a20d947e8072e1fdec70",
"assets/assets/image%252024.jpg": "f0399af2c6322a58d6fb2ce887b8ccf9",
"assets/assets/image%252025.jpg": "fbf267b837da52a241f106e2394ee649",
"assets/assets/image%252026.jpg": "19c3d52ea68743983548e30b73054d0b",
"assets/assets/image%252027.jpg": "74676349f4200690ae213d538686c487",
"assets/assets/image%252028.jpg": "d580d0b6dcae6c917e9abc876194a303",
"assets/assets/image%252029.jpg": "c7ec345400d2aee88ea972904aefc9cc",
"assets/assets/image%25203.jpg": "84a48f01b8b2633b67b4ec1f45720786",
"assets/assets/image%252030.jpg": "bb07599ef170a5759b85e03b5bcf5686",
"assets/assets/image%252031.jpg": "0ab9812efa07cfe021c05ffc19f78f01",
"assets/assets/image%252032.jpg": "1a62a05a134c2c13d195391c52f256d3",
"assets/assets/image%252033.jpg": "e8c1af2fd05143cbb8c7d367d1fcada4",
"assets/assets/image%252034.jpg": "841dadf4ba513ed9621efc75fe37945b",
"assets/assets/image%252035.jpg": "6ce1e2d95807aacd808704ba386753d3",
"assets/assets/image%252036.jpg": "548297304368e68373e32c1e62b6655e",
"assets/assets/image%252037.jpg": "fce164da3880f2e882ecfc13181883df",
"assets/assets/image%252038.jpg": "bfd7b5c766204a8339d9cf4dda76aab8",
"assets/assets/image%252039.jpg": "f43b4f2df79bb093e3a39ede7a34b067",
"assets/assets/image%25204.jpg": "46cbf8d8c0efa9f4af3b33f29af394bb",
"assets/assets/image%252040.jpg": "ea091b29ba3e547b0d9807d2a5ff1aba",
"assets/assets/image%252041.jpg": "f7b9b4adf95f711c7af2cf7a1745186e",
"assets/assets/image%252042.jpg": "a2151eceb9469d6f4720b2e00e507044",
"assets/assets/image%252043.jpg": "a08d23f0ce0bb5c0d8d24c87da79013f",
"assets/assets/image%252044.jpg": "ff0d0924bc6032c47d6492e86642bd8b",
"assets/assets/image%252045.jpg": "7c6e9dc845500dd731ad6016034f194d",
"assets/assets/image%252046.jpg": "c337bf097743306d30a90c7b2e4c8dda",
"assets/assets/image%252047.jpg": "2e1aec599e8b6520aaae0c89b9446ab3",
"assets/assets/image%252048.jpg": "c38558a1709a4a2745333ad8d3e18226",
"assets/assets/image%252049.jpg": "e8be2c3ec7e9eec4a0db579ba00ab241",
"assets/assets/image%25205.jpg": "9e8f662688f8861c61e826e8fda98a7b",
"assets/assets/image%252050.jpg": "0899bc5136554578d95cf3300be72631",
"assets/assets/image%252051.jpg": "da419cb97d274ea6fbd57666b1ab4486",
"assets/assets/image%252052.jpg": "c3eab21e2cc14314c5ff1ba08ddd829a",
"assets/assets/image%252053.jpg": "fd654902eaf7301ae73b7dc6f2105758",
"assets/assets/image%252054.jpg": "4634f8ed75e41c8062d1c05e6c6d3daf",
"assets/assets/image%252055.jpg": "07af13d12fbc874c7253f61e423b410f",
"assets/assets/image%252056.jpg": "317154d3966f1172393fb95d05ccba64",
"assets/assets/image%252057.jpg": "e8e48e21a9d5838c8c52fcd499dd2d30",
"assets/assets/image%252058.jpg": "451c4c87b13931478943af066b7e8439",
"assets/assets/image%252059.jpg": "bf4af47f3722499f710b0a81a3abad3a",
"assets/assets/image%25206.jpg": "8c012785c094dd9d089404358c5e1779",
"assets/assets/image%252060.jpg": "830938fdb358849fbd71be8f523b88ee",
"assets/assets/image%252061.jpg": "17cb0f459be32de757da203853c87456",
"assets/assets/image%252062.jpg": "e4d4b8b9b095a7cb710a1738dfa5bd58",
"assets/assets/image%252063.jpg": "9159fbad5c16f56317fd8a644ab8d5c0",
"assets/assets/image%252064.jpg": "5a988bf7d34e7b3bd89296fac5e2af0e",
"assets/assets/image%252065.jpg": "3ad95c421e1b60bf1beb7395efe27dfd",
"assets/assets/image%252066.jpg": "340f50d1929abdd7d50f62f11dcfbfa6",
"assets/assets/image%252067.jpg": "db1e175b03847d2b664ade3d05561584",
"assets/assets/image%252068.jpg": "878b38844f16f7c29b4f7607f0db5ef1",
"assets/assets/image%252069.jpg": "9a5f41e1c0c0c247860ec48705d2fcb5",
"assets/assets/image%25207.jpg": "47627319987d6111f071bfa51c458a0d",
"assets/assets/image%252070.jpg": "92c3d3ac6d3edefc89feb10eade3473f",
"assets/assets/image%252071.jpg": "a93ea5feabd8ef3a64e0fae9971d9071",
"assets/assets/image%252072.jpg": "bf787e336e18a6a7c528ca373a9a7423",
"assets/assets/image%252073.jpg": "48ed88055a1acf19b24dc3ea3a4d75d7",
"assets/assets/image%252074.jpg": "f77a2d50f3aa6d3eafaf5d449444f22d",
"assets/assets/image%252075.jpg": "b69506ba67d0a1d822a3119143b99e8e",
"assets/assets/image%252076.jpg": "1f06fea858304e4b2355a16f4c5c619d",
"assets/assets/image%252077.jpg": "b55a55b406ba3a43ab47cfbc3eb4d8a8",
"assets/assets/image%252078.jpg": "39320864459e4546b2990e105c18e034",
"assets/assets/image%252079.jpg": "6c763d825c7eb5553003909fa7c2c9f0",
"assets/assets/image%25208.jpg": "37810515721046696cdb4ca402471364",
"assets/assets/image%252080.jpg": "eedfe98ecbe24330f3bb16b90de5f9c2",
"assets/assets/image%252081.jpg": "8fd045f5a75b70867847b023b90165e5",
"assets/assets/image%252082.jpg": "f541583264944e16fe10c1657854598a",
"assets/assets/image%252083.jpg": "53f73392ba039dc8f950b39b9ca32559",
"assets/assets/image%252084.jpg": "1e0f1cedf5428bb4dcff08478e20ce72",
"assets/assets/image%252085.jpg": "1b23ecdfa32c46aa10180c087edcf1eb",
"assets/assets/image%252086.jpg": "3c7bb04f46e7ab06a955f0a742e5083d",
"assets/assets/image%252087.jpg": "55c97c27f704012c626f6109f3150ce5",
"assets/assets/image%252088.jpg": "6e823a90b35c83737b1f213b440c543b",
"assets/assets/image%252089.jpg": "3713f2286291a28135ef2373907acf6a",
"assets/assets/image%25209.jpg": "60c3b8fae74c340e3ae390532f710f3d",
"assets/assets/image%252090.jpg": "49aa9c3f3d031d3888f93599bd44b83d",
"assets/assets/image%252091.jpg": "3bd4ba28b6a6e6f00e4ab52b0579585c",
"assets/assets/image%252092.jpg": "fa692af83c0d42adf767f7d701ce3fb7",
"assets/assets/image%252093.jpg": "8b5a26ae2948b1ccf1d574605c525746",
"assets/assets/image%252094.jpg": "d72a57de93d22454fb36d14b942c723d",
"assets/assets/image%252095.jpg": "a684647ca95e60c441ce989b4bdfdd6b",
"assets/assets/image%252096.jpg": "c2ddebc176a78095723ceec6a4369d25",
"assets/assets/image%252097.jpg": "5df7e22b66a299d5eb10f10db7bb7864",
"assets/assets/image%252098.jpg": "650d61472560786afdda064274319222",
"assets/assets/image%252099.jpg": "9dd8d0987c7cde9c6e6df215557d3a21",
"assets/assets/logo.png": "11f76da4164984c78cd6e941ff4475ed",
"assets/assets/more_details.jpg": "b6c4800bf6beb39137c0e23aaa9e8fc3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3f891d1734fb281f8157ab9ee2081c0b",
"assets/NOTICES": "021c97858a00f30b1a74767a043bb870",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "11f76da4164984c78cd6e941ff4475ed",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "078f2fe593d66e430811803c99247973",
"icons/Icon-192.png": "11f76da4164984c78cd6e941ff4475ed",
"icons/Icon-512.png": "11f76da4164984c78cd6e941ff4475ed",
"icons/Icon-maskable-192.png": "11f76da4164984c78cd6e941ff4475ed",
"icons/Icon-maskable-512.png": "11f76da4164984c78cd6e941ff4475ed",
"index.html": "521c167222e9e91c4e97c019533b00a3",
"/": "521c167222e9e91c4e97c019533b00a3",
"main.dart.js": "0531768694579fad2620b269205edef8",
"manifest.json": "d6971b4523cf8ecee39ac91742fa8c41",
"version.json": "24a9ee1e8c1270a253734fcb2dbda328"};
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
