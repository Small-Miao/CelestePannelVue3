module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'universal',
  target: 'server',
  head: {
    title: 'CelestePannel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/bootstrap/css/bootstrap.min.css',
    '~/assets/css/smoothproducts.css',
    '~/assets/css/styles.min.css',
    '~/assets/fonts/simple-line-icons.min.css',
    '~/assets/fonts/ionicons.min.css',
    '~/assets/css/Profile-Edit-Form.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'mariasql/mariasql',
    'moment/moment',
    'string-random/string-random',
    'js-cookie/js-cookie'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  telemetry: false
}
