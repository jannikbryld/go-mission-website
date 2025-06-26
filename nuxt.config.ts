// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-umami'
  ],

  // Umami Analytics Configuration
  umami: {
    host: process.env.UMAMI_URL || 'https://analytics.go-mission.com',
    id: process.env.UMAMI_WEBSITE_ID || '294afaa4-a1b2-4a15-9b65-3bc403d6c173',
    autoTrack: true,
    ignoreLocalhost: false, // Set to true in production
    excludeQueryParams: false,
    domains: ['go-mission.com', 'localhost', 'go-mission.dk'] // Add your domains
  },

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
  },

  // Runtime configuration
  runtimeConfig: {
    // Private keys (only available on server-side)AddDocumentAsync
    emailPassword: process.env.EMAIL_PASSWORD || 'CWV4fza*afa3pyh0vpw',
    emailFrom: process.env.EMAIL_FROM || 'kontakt-formular@go-mission.com',
    emailTo: process.env.EMAIL_TO || 'info@go-mission.com',
    smtpHost: process.env.SMTP_HOST || 'smtp.simply.com',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || 'kontakt-formular@go-mission.com',

    // Public keys (exposed to client-side)
    public: {
      directusUrl: process.env.DIRECTUS_URL || 'https://cms.bryld.dev'
    }
  }
})