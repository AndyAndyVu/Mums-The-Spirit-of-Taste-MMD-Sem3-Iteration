// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: true,
  css: ['@/assets/css/style.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/scripts'
  ],
    nitro: {
    preset: 'static'
  },
  routeRules: {
    '/**': { static: true }
  }
})

