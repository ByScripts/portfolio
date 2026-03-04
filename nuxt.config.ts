// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint'],
  imports: { dirs: ['~/types', '~/data'] },
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.png' }],
    },
  },
  css: ['~/assets/styles/global.css'],
  compatibilityDate: '2025-07-15',
  typescript: { typeCheck: true },
  eslint: { config: { stylistic: true } },
})
