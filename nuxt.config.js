const base = process.env.DEPLOY_ENV === 'gh-pages' ? '/ironleaves-photography/' : '/';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ironleaves Photography',
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
      { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }
    ],
    script: [
      { hid: 'curator', src: 'https://cdn.curator.io/published/5142edb4-f9c1-4286-8e46-9682b7e80431.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/click-outside.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/postcss8',
    '@braid/vue-formulate/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    postcss: {
      plugins: {
        'postcss-calc': {},
        'postcss-custom-properties': {},
        'tailwindcss/nesting': {},
        'tailwindcss': {},
        'autoprefixer': {},
      }
    },
    transpile: ['gsap'],
  },

  content: {
    liveEdit: false
  }
}
