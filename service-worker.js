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
    "revision": "2dffbcc32359973fcf53dce76621be93"
  },
  {
    "url": "blog/index.html",
    "revision": "2440088aae610965bd6555b66bde0ad8"
  },
  {
    "url": "entry/test-markdown/index.html",
    "revision": "a7568f4d8d00be42504fdf95a04e0b75"
  },
  {
    "url": "index.html",
    "revision": "3ec2d0da0219d4e4876b92426468c30f"
  },
  {
    "url": "links/index.html",
    "revision": "3bc43fd7b12ac2042f20f778f7748010"
  },
  {
    "url": "work/index.html",
    "revision": "4910292b498e88fdf21a5b6cd7422754"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
