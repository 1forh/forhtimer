require('dotenv').config();

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Get Shit Done Timer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A no bullshit Pomodoro timer that helps you stay focused and get shit done.',
      },
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
  css: ['@/assets/styles/main.scss'],
  styleResources: {
    scss: ['@/assets/styles/base/_index.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/style-resources', '@nuxtjs/sitemap', '@nuxtjs/pwa'],
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
    hostname: process.env.BASE_URL || 'https://forhtimer.netlify.com',
    gzip: true,
  },
  webfontloader: {
    google: {
      families: ['Open Sans:300,400,700'],
    },
  },
  pwa: {
    meta: false,
    manifest: {
      name: 'Get Shit Done Timer',
      short_name: 'forhtimer',
      description: 'A no bullshit Pomodoro timer that helps you stay focused and get shit done.',
      theme_color: '#e27d60',
      background_color: '#e27d60',
      lang: 'en',
    },
  },
};
