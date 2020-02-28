require('dotenv').config();

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        name: 'msapplication-TileColor',
        content: '#f7541e',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-32x32.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f7541e' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  styleResources: {
    scss: ['@/assets/styles/base/_index.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/fontawesome.js', '@/plugins/global-components.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'vue-balance-text/nuxt/module',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  sitemap: {
    hostname: process.env.BASE_URL || 'https://learnmap.netlify.com',
    gzip: true,
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'ButtonPlugin',
      'LinkPlugin',
      'ImagePlugin',
    ],
  },
  webfontloader: {
    google: {
      families: ['Open Sans:300,400,400i,600,700'], //Loads Lato font with weights 400 and 700
    },
  },
  pwa: {
    meta: false,
    manifest: {
      name: 'Learn Map',
      short_name: 'Learn Map',
      description: 'Short description of Learn Map.',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      lang: 'en',
    },
    icons: {
      iconSrc: 'client/static/placeholders/placeholder-green.png',
    },
  },
};
