import en from './lang/en-US'
import ru from './lang/ru-RU'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '5 Second Gift | Spend Minter coins with ease',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 30480,
    host: 'localhost'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/static/assets/css/reset.css',
    '~/static/assets/css/style.css',
    '~/static/assets/css/style_alt.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
        },
        {
          name: 'Русский',
          code: 'ru',
          iso: 'ru-RU',
        },
      ],
      strategy: 'no_prefix',
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: { en, ru }
      }
    }]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
