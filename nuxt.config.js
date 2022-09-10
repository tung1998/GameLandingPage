export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Game-Landing',
    htmlAttrs: {
      lang: 'en'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fecha',
    '~/plugins/vueSlickCarousel',
    '~/plugins/data'
  ],

  router: {
    base: process.env.STATIC_PATH || '/'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n'
  ],

  i18n: {
    vueI18n: {
      fallbackLocale: 'en'
    },
    lazy: true,
    detectBrowserLanguage: false,
    locales: [
      {
        name: 'ENGLISH',
        countryCode: ['EN', 'US'],
        code: 'en',
        iso: 'en',
        file: 'en.js'
      },
      {
        name: 'TIẾNG VIỆT',
        countryCode: ['VN', 'VNM'],
        code: 'vi',
        iso: 'vi',
        file: 'vi.js'
      }
    ],
    loadLanguagesAsync: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: [
    {
      // custom webpack config
      // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#extend
      extend (config) {
        // https://github.com/peaksandpies/universal-analytics/issues/58#issuecomment-279485637
        config.node = {
          console: true,
          fs: 'empty',
          net: 'empty',
          tls: 'empty'
        }
      },
      loaders: {
        vue: {
          compilerOptions: {
            whitespace: 'condense'
          }
        }
      },
      extractCSS: true
    }, {
      src: 'nuxt.config.js',
      use: '@nuxtjs/vercel-builder',
      config: {
        serverFiles: ['package.json'],
        extractCSS: true
      }
    }
  ],

  server: {
    port: 8000 // default: 3000
  }
}
