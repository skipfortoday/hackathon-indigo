export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hackathon',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      {
        rel: 'stylesheet',
        // href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/9329f29326.js',
        body: true,
        crossorigin: 'anonymous',
      },
    ],
  },
  generate: {
    dir: 'dist',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/bootstrap-vue'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-clipboard',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
  moment: {
    defaultLocale: 'id',
    locales: ['id'],
  },
  clipboard: {
    autoSetContainer: true,
  },
}
