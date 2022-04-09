export default {
  server:{
    port: 4000,//default 3000
    host: '0.0.0.0',//default localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sekolah Tinggi Teknik Cipasung',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", 
        rel:"stylesheet", 
        integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous"
      }
    ],
    script: [
      {src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin:"anonymous",
      body: true
}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios","@nuxtjs/pwa"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  //PWA configuration: https://go.nuxtjs.dev/config-pwa
  pwa:{
    meta: {
      title: "Sekolah Tinggi Teknik Cipasung",
      author: "Sekolah Tinggi Teknik Cipasung"
    },
    manifest:{
      name: "Sekolah Tinggi Teknik Cipasung",
      short_name: "Sekolah Tinggi Teknik Cipasung",
      lang: "en"
    },
    icon: {
      source: "~/static/icon.png",
      filename: "icon.png"
    }
  },
  
}
