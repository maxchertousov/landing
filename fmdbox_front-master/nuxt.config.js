module.exports = {
  head: {
    title: 'FMD: питание, имитирующее голодание. Купить FMD-бокс с продуктами и меню',
    meta: [
      { name: 'description', content: `Закажите коробочку с питанием на 5 дней. Участвуй в 5-дневном марафоне имитированного голодания FMD: комфортная диета ✪ Сбалансированное меню ✪ Вкусные и полезные продукты ✪ Снижение веса и омоложение организма` }, // eslint-disable-line
      { name: 'yandex-verification', content: '4699bae2d40f8bde' },
      { name: 'facebook-domain-verification', content: '628lp8us39pbotldskvq5wok3vzy8s' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, maximum-scale=1.0' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }],
    script: [],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/yandex-metrika',
    'nuxt-facebook-pixel-module',
  ],
  axios: {
    baseURL: process.env.BASE_URL ? process.env.BASE_URL : '',
  },
  yandexMetrika: {
    id: '71778577',
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: 'dataLayer',
  },
  facebook: {
    track: 'PageView',
    pixelId: '1749642051864174',
  },
  css: [
    '@/sass/reset.sass',
    '@/sass/fonts.sass',
    '@/sass/main.sass',
  ],
  styleResources: {
    sass: [
      '@/sass/vars.sass',
    ],
  },
  loading: { color: '#165411' },
  build: {
    vendor: [
      'vue-awesome-swiper',
    ],
    extend(config, ctx) {
      // правило для открытия файлов по ссылке на assets
      const assetsLoader = config.module.rules.find((rule) => rule.test.test('.png'))
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf|doc?x)$/i

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      return config
    },
  },
  plugins: [
    { src: '~/plugins/v-mask.js', ssr: false },
    { src: '~/plugins/swiper-slider.js', mode: 'client' },
  ],
}
