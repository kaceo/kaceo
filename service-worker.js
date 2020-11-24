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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5495ff99f948ae5c3be296f49fa4be7"
  },
  {
    "url": "about/index.html",
    "revision": "e8d6f0ca480695a3d484a903db76d00b"
  },
  {
    "url": "assets/tv/caph-jquery.min.js",
    "revision": "7a44d38422f6b6109ed2ff6b6b87c2d1"
  },
  {
    "url": "assets/tv/caph-stripe.min.css",
    "revision": "fae3f82f5f396bb97d00e1f9b270d67d"
  },
  {
    "url": "assets/tv/caph.min.css",
    "revision": "0743e672b92046203c7cf10ef9d24f19"
  },
  {
    "url": "assets/tv/dash.all.min.js",
    "revision": "f67b11b1e8d90633531d054bc807163b"
  },
  {
    "url": "assets/tv/init.js",
    "revision": "7cbbcde999f8395c298b55be7c16728b"
  },
  {
    "url": "assets/tv/JosefinSans-Light.ttf",
    "revision": "fecb0a5bec41697fb1e24d5ed87a4bba"
  },
  {
    "url": "assets/tv/keyhandler.js",
    "revision": "c6dbca57f16a835b7a5568f88d84a696"
  },
  {
    "url": "assets/tv/logger.js",
    "revision": "4f01f02b2bbf5d9f69a615d6ed3e3bdd"
  },
  {
    "url": "assets/tv/main.js",
    "revision": "c81f4061eeb21069dd60e8faabf9294c"
  },
  {
    "url": "assets/tv/navigation.js",
    "revision": "1b4869cd20981e96b8158cb40de49f0c"
  },
  {
    "url": "assets/tv/tv.css",
    "revision": "1c2f630153ab06d40cf010b54efee24b"
  },
  {
    "url": "assets/tv/tvde.css",
    "revision": "fcd0722bcd3d21cb4b5670fc36f46d6f"
  },
  {
    "url": "assets/tv/tvde.js",
    "revision": "77a091c0a4266727658c242131d6761a"
  },
  {
    "url": "assets/tv/tvdevendor.js",
    "revision": "1968755d99e96671e1aa61b33e3c6373"
  },
  {
    "url": "assets/tv/util.js",
    "revision": "d242cf982812215ee9790532c9990e3e"
  },
  {
    "url": "assets/tv/videoplayer.js",
    "revision": "a6ddf9207578cd0a38664ff34298d5d4"
  },
  {
    "url": "blog/index.html",
    "revision": "26adf223c27fda22579add81e84fe90d"
  },
  {
    "url": "catalog/index.html",
    "revision": "16c39a9327de8f54175fc13edbdedbaa"
  },
  {
    "url": "cloud/domains/index.html",
    "revision": "fafb9c93228cd265703bcfde736d25ac"
  },
  {
    "url": "cloud/hosts/index.html",
    "revision": "0c2a8d225070cdd60d81abe2142e13c1"
  },
  {
    "url": "cloud/repos/index.html",
    "revision": "5f800d639da1a22b046d5069faf62304"
  },
  {
    "url": "cloud/socialnet/index.html",
    "revision": "09acb159270c3e5949f03d4de13e7310"
  },
  {
    "url": "cloud/stores/index.html",
    "revision": "7fc7a2a86d24ade7c38fe3d2d6bf178b"
  },
  {
    "url": "entry/test-markdown/index.html",
    "revision": "a5558d81fb7011cf232135092d0dbbc6"
  },
  {
    "url": "index.html",
    "revision": "dfc38afcf5021ace643ee02b2d2daf5b"
  },
  {
    "url": "links/index.html",
    "revision": "dc546cf3e999ec88a1df5fd0f6f79fed"
  },
  {
    "url": "skills/artshub/index.html",
    "revision": "16c39a9327de8f54175fc13edbdedbaa"
  },
  {
    "url": "tvde/index.html",
    "revision": "8a01d7e12556ed4433829b79e44b6ad2"
  },
  {
    "url": "tvhome/index.html",
    "revision": "16451d34499ea17b391e65150400ded4"
  },
  {
    "url": "work/index.html",
    "revision": "b6a2f5d6af53eec0b9974e4d8fcd9c89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
