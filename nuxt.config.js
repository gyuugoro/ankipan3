import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ankipan3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '単語帳アプリ' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Russo+One&display=swap" },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
      theme_color: "#ffffff",
      start_url: "/",
      orientation: "any",
    },
    meta: {
      ogHost: "https://ankipan3.vercel.app/",
      ogImage: {
        path: "https://ankipan3.vercel.app/icon.png"
      },
      twitterCard: "summary",
      twitterSite: "@sho1216_",
      mobileAppIOS: true
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    fb_api_key: process.env.FB_API_KEY,
    fb_auth_domain: process.env.FB_AUTH_DOMAIN,
    fb_project_id: process.env.FB_PROJECT_ID,
    fb_storage_bucket: process.env.FB_STORAGE_BUCKET,
    fb_messaging_sender_id: process.env.FB_MESSAGING_SENDER_ID,
    fb_app_id: process.env.FB_APP_ID,
    fb_measurement_id: process.env.FB_MEASUREMENT_ID
  }
}
