import { resolve } from 'path'
import { defineConfig } from 'vite'





export default defineConfig({

  // config options
  root: "./",
  base: "/kaceo/",
  //publicDir: "",
  //resolve   alias
  //
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  build: {
    outDir: 'temp',
    assetsDir: 'vitejs',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  plugins: [
  ],

/*
  @vitejs/plugin-vue (vue3 sfc)
  vite-plugin-pages
  v-route-generate
  vite-plugin-md
  unplug-svg-component


  #plugin
  vite-plugin-pwa
  vite-plugin-windicss
  vite-plugin-simple-gql
  vite-plugin-webfont-dl
  vite-plugin-multi-pages??
  vite-plugin-html-template-mpa??
  tailwindcss-vite-plugin
  unplugin-fonts

  #loaders
  unplugin-icons
  vite-imagetools
  vite-plugin-radar
  vite-plugin-gltf

  #bundling
  vite-plugin-static-copy
  vite-plugin-copy-files
  vite-plugin-progress

  #transformer
  vite-plugin-html (ejs)
  vite-plugin-handlebars
  vite-plugin-pug-transformer
  vite-plugin-head

  #helpers
  vite-aliases
  vitawind
  vite-plugin-redirect
  vite-plugin-api


  #rollup
  @rollup/plugin-yaml
  @rollup/plugin-virtual
  @rollup/


  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },

  plugins: [
    splitVendorChunkPlugin(),
  ],

  // Using Vite only for static assets backend integration
  import vite/modulepreload-prefill
  script type=module src=".../@vite/client"
  script type=module src=".../main.js"
  build
    manifest: true, // manifest for
  server
    origin


*/

})
