/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aaf264e2e7675ad64605f336aa7778df"
  },
  {
    "url": "assets/css/0.styles.f0d21de3.css",
    "revision": "80f60e0b29b62dcc1788ba125653ff35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0b524fc6.js",
    "revision": "da777aaeea628431216c38e49d99a61a"
  },
  {
    "url": "assets/js/10.a9253a1c.js",
    "revision": "e85cd86278bcb9cbd31c2ba1fd126d75"
  },
  {
    "url": "assets/js/11.ad7399c1.js",
    "revision": "e1f9d630f6d634c1617925ae0930e3c7"
  },
  {
    "url": "assets/js/12.aebfc34a.js",
    "revision": "7dc92278257359c45dab7ab719354bbc"
  },
  {
    "url": "assets/js/13.94b53f99.js",
    "revision": "1e08a77cbe3ab6dc2fdf21275fcd0c31"
  },
  {
    "url": "assets/js/14.4767bac9.js",
    "revision": "ea615551ddb7d9b90ed0bfebcf9c7217"
  },
  {
    "url": "assets/js/15.a949a64c.js",
    "revision": "2afc31e5d746fc10818add28a1e2d46f"
  },
  {
    "url": "assets/js/16.9f5ca74f.js",
    "revision": "0d1647b1e70dc1798d13c3f71e014f3a"
  },
  {
    "url": "assets/js/17.d5de61e5.js",
    "revision": "a6faed2f6c107505c975f04e3399dc28"
  },
  {
    "url": "assets/js/18.a27697cb.js",
    "revision": "079cf6ddcae6aaa7727c2ee6b64efa5c"
  },
  {
    "url": "assets/js/19.67add9f3.js",
    "revision": "a11292efa9a6e98e406067d85ad97a7c"
  },
  {
    "url": "assets/js/2.d9a5fb64.js",
    "revision": "53bae9ba55d121ca8943740013b5681c"
  },
  {
    "url": "assets/js/20.965dae7f.js",
    "revision": "efe6bfe69df0cbbaa0d2869735490846"
  },
  {
    "url": "assets/js/21.9ca72c17.js",
    "revision": "bbc1b0e2134348b68ec91d6fe931048d"
  },
  {
    "url": "assets/js/22.e7d043ac.js",
    "revision": "48482ba9194e66795004b5bf05127f93"
  },
  {
    "url": "assets/js/23.f1c9d106.js",
    "revision": "20ea43769d10177dd101343f7dba62cb"
  },
  {
    "url": "assets/js/24.19f799de.js",
    "revision": "44bcd97c02b5f65a8c64c48fbbabe95b"
  },
  {
    "url": "assets/js/25.6d5e15c2.js",
    "revision": "b6da0bdebffdebbced7444af8e914182"
  },
  {
    "url": "assets/js/26.c8099b3a.js",
    "revision": "bc9d590cc5b181ae53241858b71ad15e"
  },
  {
    "url": "assets/js/27.d1ca9e53.js",
    "revision": "5a17ac146a689d072b01c51b5cff816c"
  },
  {
    "url": "assets/js/28.d55fad10.js",
    "revision": "c84ec171957e027f3a03aa0f8fc80016"
  },
  {
    "url": "assets/js/29.eeada69d.js",
    "revision": "09ad6a9d9f4d9fd233b63ce627634a0a"
  },
  {
    "url": "assets/js/3.6c839e80.js",
    "revision": "84aafb1b8f416eabf89dd9519d36ad9c"
  },
  {
    "url": "assets/js/30.64768599.js",
    "revision": "05679827a4d65f11567542240b5f6fd5"
  },
  {
    "url": "assets/js/4.4756d411.js",
    "revision": "5c95b31cd1c0bcc5b17d3785c22e0d19"
  },
  {
    "url": "assets/js/5.ab9fe06c.js",
    "revision": "17f3b84fe3470b592562be72d99b8d09"
  },
  {
    "url": "assets/js/6.9bcdb341.js",
    "revision": "7e61f368f63228b08eab5f555b4875c1"
  },
  {
    "url": "assets/js/7.8446c93d.js",
    "revision": "3d69d7047a111ef22e55b5ec73129ea7"
  },
  {
    "url": "assets/js/app.f4e8a9a3.js",
    "revision": "f1d5bc7cc336ea10e7ed88438edd4a06"
  },
  {
    "url": "assets/js/vendors~docsearch.4ad8f938.js",
    "revision": "10fc9a7c7b96692c18757b3caab9f1fb"
  },
  {
    "url": "guide/equipment.html",
    "revision": "606e9352a34779ec995e70bf22421965"
  },
  {
    "url": "guide/quickstart.html",
    "revision": "e2973c107c251dc98527a209bac83cbc"
  },
  {
    "url": "guide/VuePress创建文档网站.html",
    "revision": "f0f56aae3bc33fa7a95ec66f7c41c017"
  },
  {
    "url": "images/book.jpg",
    "revision": "31a8c253a9dce15d1d4b2850d86c4f41"
  },
  {
    "url": "index.html",
    "revision": "4d570459fa9f1b17a21bc4d5c45d4089"
  },
  {
    "url": "link/contact.html",
    "revision": "4b546da2d36fbce7c66f5c056cbb128e"
  },
  {
    "url": "record/20241006.html",
    "revision": "134ed996a926d74c761920789ae128ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
