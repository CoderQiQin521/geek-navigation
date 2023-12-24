
module.exports = {
  mode: "universal",
  telemetry: false,
  env: {
    baseUrl: process.env.root
  },
  server: {},
  /*`
   ** Headers of the page
   */
  head: {
    title: "瞧享办公导航-仅限内部使用",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "keyword", name: "description", content: "瞧享轻奢美甲美睫" },
      {
        hid: "description",
        name: "description",
        content: "瞧享成为广大时尚女性美甲美睫的必选品牌，所有价格、操作流程、产品材质均以透明的展现方式给每一位客户，因此受到了客户的一致良好口碑。瞧享对品牌品质的坚守，不断提升提高服务与技术，在行业内迅速崛起，成为全国展露头角的新兴品牌，同时拥有自主生产美甲产品的源头工厂。"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_552690_7wjaeayfows.css"
      }
    ],
    script: [
      {
        src: "//v1.cnzz.com/z_stat.php?id=1279139494&web_id=1279139494",
        defer: "defer"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "@/static/styles/style.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", "@/plugins/vue-inject"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],

  axios: {
    proxy: true, // 表示开启代理
    credentials: true // 表示跨域请求时是否需要使用凭证
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3002/api', // 目标接口域名
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/5a1Fazu8AA54nxGko9WTAnF6hhy': {
      target: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy', // 目标接口域名
      changeOrigin: true,
      pathRewrite: {
        '^/5a1Fazu8AA54nxGko9WTAnF6hhy': '/'
      }
    },
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    styleResources: {
      scss: './static/styles/var.scss',
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) { },
    vendor: ["axios"]
  },

  /*
   ** 服务器端中间件--针对首页做缓存
   */
  // serverMiddleware: [
  //   {
  //     path: '/',
  //     handler: '~/plugins/pageCache.js',
  //   },
  // ]
}
