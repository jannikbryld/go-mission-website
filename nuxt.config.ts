// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint'
  ],

  // SEO and meta configuration
  app: {
    head: {
      title: 'Go Mission - Digital Velfærdsløsning',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Go Mission er en helhedsbaseret digital velfærdsløsning der styrker samspillet og skaber øget selvhjulpenhed for mennesker med kognitiv funktionsnedsættelse.' },
        { name: 'keywords', content: 'velfærdsteknologi, kognitiv funktionsnedsættelse, digital løsning, støtteperson, app' },
        { property: 'og:title', content: 'Go Mission - Digital Velfærdsløsning' },
        { property: 'og:description', content: 'Skab en ny og bedre fremtid med Go Mission - en app der understøtter mennesker med kognitiv funktionsnedsættelse.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://go-mission.com' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Font configuration
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' }
    ]
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp']
  }
})