export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vesp/nuxt-fontawesome', 'nuxt-aos', '@pinia/nuxt', 'nuxt-swiper'],
    fontawesome: {
        icons: {
            solid: ['cog', 'close', 'chevron-left', 'chevron-right'],
        }
    },
    runtimeConfig: {
      public: {
          NUXT_PUBLIC_USE_MOCKS: true,
          BASE_URL: 'http://localhost:3000/mock',
      }
    },
    ssr: true,
})