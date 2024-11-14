'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3cfba3af910fd06d920293e4dc6a7b8d",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/splash.js": "1dd1271a371b9967a3cf78797cc1431e",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"index.html": "be9627d7c96905c0ecef39c1be3ab8e0",
"/": "be9627d7c96905c0ecef39c1be3ab8e0",
"main.dart.js": "c93f60867f576df2d8e512d43399b6ce",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "410c476dabff033dd81e284a04f84918",
".git/config": "d261dea916c7e5d8cf083aa963a4b4ef",
".git/objects/0d/bb88c0e868e57429c7516fa5df198026ccb581": "adbcdf2f47ad0a72303e86e059066b78",
".git/objects/59/a887382693ec604940260d7a414ff4f0cd92c4": "0bae5432859997330371e87a3e971bcd",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/f8b024b78ed31a22847b8a28b379266752164e": "3e235652afdfa7506bf77870d6995d22",
".git/objects/35/d8e20500028b55c918b517ce732ebc321eced6": "1521326b19f7698f2213be519977213f",
".git/objects/51/81fecc0dfe790571863d9c1ccaff73d442fe94": "584ce90bc14c262de767d58056cf6987",
".git/objects/0e/aaeea2a756330893b2f67fa01cc1060b3edab4": "15ddf8f692bb35c79126bf4887c3ccad",
".git/objects/a3/6cf58a8d7b45fc7705768eb1732422c5bd7624": "3b1618afde2fca86f2f02af5de941000",
".git/objects/ac/1df581cf17a511045e708ad190fe293d80de2f": "3f888696f8fa0e3c142da570786cb0a9",
".git/objects/d7/94b1365f04cbbcdc1e51b1f3dea10fdb35a827": "fdab9fa80df73efb5e3990d0db8a26a3",
".git/objects/df/05b9b88c03d433da79e86d83da0d6285be9f59": "af2a03a4cb4793a121980f5f3a05ea7b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/6c729e4407d6b164a3afa953c0ce59f7ce30c2": "046d646ebe2b986e297a9770b3deb7e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/535bcbefbc10e7370614b88ce6bb8f02936b1e": "a476046af8a4193a2921e84905a64b2d",
".git/objects/fb/70ecc7f6a3f5f3bd90016e64437560cd3e521b": "a4ae6e117c1fdb52e004c55c3970bad7",
".git/objects/27/4506ee20823b2ab2cdec42dab3a8a92fc24927": "10403c159a8d8a32fd57e7f5a1e5121d",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/6a78532b44aedfa8357786aab63b5351d8fd71": "cb8b1387df5c0ce2ef8fe9f51e5624f0",
".git/objects/16/2701a43f1b770777bc1c3d838ea7ed322bc523": "5393927d97eb63311977e3eb941af715",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/2fe7e692beefb3fa366c2dc782be647f80b429": "ab51f3f7c976cca6259776d01d2e410f",
".git/objects/8a/bdbb86d4aa679708ad9ba2333fb97729b9c876": "22f3843de1de3e2888ef9cbb07536351",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/b933e2d80db51774cfc1679f14a4940aba01df": "e5f870082937796a60286d1794d4b735",
".git/objects/5c/3a585a04414c77b64bcf2b78a8af04ab30bb82": "0a75b63f679689aacd149a89cb18ae34",
".git/objects/5d/a1afd57c07f7daedcba0a126bbde5c3059b1cc": "63ca780e7b1238cf29cc16a1056a693a",
".git/objects/53/c3fe1dc34dc17ab090d0d97ac15c99114b104c": "7dd96672328b32362492658ef76a7251",
".git/objects/5e/9bb4d86d02dbd067dbababc799f3497d16df8d": "28fa9467ae6b27357f62ee224c66b922",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/99/1542857788fac9e7f874d8f678b7610f2a782d": "dd5fd7a97477c6fcd771726f34832690",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/dd/cdc7b2d599d37c33c5d447fe0be2c0e7be513f": "6d9932f20fc276348db68d2e26644228",
".git/objects/dd/a7295c7d07d482884721f5e34ac5937456d093": "390efbbd09425e3bb1fed8c1afa7a514",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/05ff80f69200b389ad5af193ceb82efc7250a3": "9b3fbd30953aa7c95a979d30992dd7dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/642477d31e0d36e4000cf351286e37edf17acf": "f1e71da44a8e54dcae5cff68a4d6c00a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/4457ec99e117c8bd208e7abcd0193b7bbd2293": "f6889bb958c751cdfc97907b811cd12f",
".git/objects/47/d95126b670a29e107c4f718fa9c00fc71573ad": "f8c9b074fd30c9cd320242d7edf789b5",
".git/objects/8b/9f8e9f54191b9298ffe7487be843110ab5a0ac": "84ce3022656b1bc4bf7fb2b38a870dfb",
".git/objects/14/9b6eebc60e8c3cf1e9011f3bf83d7e6410b637": "82415fa30d99818bb3341953ba791c71",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b03a4ef85cccb801f96d92e9ac6d9e4d",
".git/logs/refs/heads/main": "acc30ff6488fd4a3b09422971c5d1030",
".git/logs/refs/remotes/origin/main": "7bda870c4ce0458b82c5749c6459aef5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/refs/heads/main": "eba01482c3a6c2532198f1c23369635b",
".git/refs/remotes/origin/main": "eba01482c3a6c2532198f1c23369635b",
".git/index": "a9443374d4928d24f4100e72acda381a",
"assets/AssetManifest.json": "039850be295da67b64fb4b120ad75db1",
"assets/NOTICES": "eb42e654dac6dc91d0f566ddb4296d4c",
"assets/FontManifest.json": "b417c8197e08be3f18101f9b01bf0e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_hot_toast/assets/error.json": "8408f53a15063941a473be224e1d2365",
"assets/packages/flutter_hot_toast/assets/success.json": "4457082d652b9b870ebf526b79fa14c7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
