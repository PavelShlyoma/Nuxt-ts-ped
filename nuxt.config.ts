export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vesp/nuxt-fontawesome'],
    fontawesome: {
        icons: {
            solid: ['cog', 'close'],
        }
    },
    ssr: true
})