import colors from 'vuetify/es5/util/colors'

export default {
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: '#'
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },

    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/plugins/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
      // { rel: 'stylesheet', href: '/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' },
      { rel: 'stylesheet', href: '/plugins/icheck-bootstrap/icheck-bootstrap.min.css' },
      // { rel: 'stylesheet', href: '/plugins/jqvmap/jqvmap.min.css' },
      { rel: 'stylesheet', href: '/dist/css/adminlte.min.css' },
      { rel: 'stylesheet', href: '/plugins/overlayScrollbars/css/OverlayScrollbars.min.css' },
      // { rel: 'stylesheet', href: '/plugins/daterangepicker/daterangepicker.css' },
      // { rel: 'stylesheet', href: '/plugins/summernote/summernote-bs4.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' }

  ],
  script: [
    { src: '/plugins/jquery/jquery.min.js', body: true },
    // { src: '/plugins/jquery-ui/jquery-ui.min.js', body: true },
    { src: '/plugins/bootstrap/js/bootstrap.bundle.min.js', body: true },
    { src: '/plugins/chart.js/Chart.min.js', body: true },
    // { src: '/plugins/sparklines/sparkline.js', body: true },
    // { src: '/plugins/jqvmap/jquery.vmap.min.js', body: true },
    // { src: '/plugins/jqvmap/maps/jquery.vmap.usa.js', body: true },
    // { src: '/plugins/jquery-knob/jquery.knob.min.js', body: true },
    // { src: '/plugins/moment/moment.min.js', body: true },
    // { src: '/plugins/daterangepicker/daterangepicker.js', body: true },
    // { src: '/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js', body: true },
    // { src: '/plugins/summernote/summernote-bs4.min.js', body: true },
    { src: '/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js', body: true },
    { src: '/dist/js/adminlte.js', body: true },
    // { src: '/dist/js/adminlte.min.js', body: true },
    { src: '/dist/js/demo.js', body: true } ,
    { src: '/plugins/jquery-mousewheel/jquery.mousewheel.js', body: true } ,
    { src: '/plugins/raphael/raphael.min.js', body: true } ,
    { src: '/plugins/jquery-mapael/jquery.mapael.min.js', body: true } ,
    { src: '/plugins/jquery-mapael/maps/usa_states.min.js', body: true } ,
    { src: '/plugins/chart.js/Chart.min.js', body: true } ,
    { src: '/dist/js/pages/dashboard2.js', body: true }
  ],
  bodyAttrs: {
    class: 'hold-transition sidebar-mini layout-fixed'
  }

  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/google-map",
    "@/plugins/firebase",
    {
      src: "@/plugins/VGaugePlugin",
      mode: 'client'
    },
    {
      src: "@/plugins/chart",
      ssr: false
    }


  ],

  /*
   ** Router Settings
   */
  router: {
    middleware: ['authenticated']
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': {
      target: 'https://us-central1-saj-water-quality-monitor.cloudfunctions.net/api',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      vendor: ["vue2-google-maps"]
    }
  }
}
