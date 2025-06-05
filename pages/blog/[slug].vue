<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Henter artikel...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error || !post" class="min-h-screen flex items-center justify-center">
      <div class="text-center max-w-md mx-auto px-4">
        <Icon name="heroicons:exclamation-triangle" class="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Artikel ikke fundet</h1>
        <p class="text-gray-600 mb-6">Denne artikel eksisterer ikke eller er blevet fjernet.</p>
        <NuxtLink to="/blog" class="btn-primary">
          Tilbage til blog
        </NuxtLink>
      </div>
    </div>

    <!-- Blog Post -->
    <article v-else>
      <!-- Hero Section -->
      <header class="relative overflow-hidden">
        <!-- Featured Image -->
        <div class="relative h-96 lg:h-[500px]">
          <img 
            v-if="post.featured_image"
            :src="post.featured_image" 
            :alt="post.title"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500"></div>
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/50"></div>
        </div>

        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-end">
          <div class="container-custom w-full">
            <div class="max-w-4xl mx-auto text-white pb-16">
              <!-- Breadcrumb -->
              <nav class="mb-6">
                <ol class="flex items-center space-x-2 text-sm">
                  <li>
                    <NuxtLink to="/" class="hover:text-teal-300 transition-colors">Hjem</NuxtLink>
                  </li>
                  <Icon name="heroicons:chevron-right" class="h-4 w-4" />
                  <li>
                    <NuxtLink to="/blog" class="hover:text-teal-300 transition-colors">Blog</NuxtLink>
                  </li>
                  <Icon name="heroicons:chevron-right" class="h-4 w-4" />
                  <li class="text-gray-300">{{ post.title }}</li>
                </ol>
              </nav>

              <!-- Category -->
              <div v-if="post.category" class="mb-4">
                <span class="inline-block px-3 py-1 bg-teal-500 text-white text-sm font-semibold rounded-full">
                  {{ post.category }}
                </span>
              </div>

              <!-- Title -->
              <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {{ post.title }}
              </h1>

              <!-- Meta Info -->
              <div class="flex flex-wrap items-center gap-6 text-gray-300">
                <div class="flex items-center">
                  <Icon name="heroicons:calendar" class="h-5 w-5 mr-2" />
                  <time :datetime="post.published_date || post.date_created">{{ formatDate(post.published_date || post.date_created) }}</time>
                </div>
                <div class="flex items-center">
                  <Icon name="heroicons:clock" class="h-5 w-5 mr-2" />
                  <span>{{ readingTime(post.content) }} min læsning</span>
                </div>
                <div v-if="post.author" class="flex items-center">
                  <Icon name="heroicons:user" class="h-5 w-5 mr-2" />
                  <span>{{ post.author }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <section class="section-padding bg-white relative">
        <!-- Subtle background decoration -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 pointer-events-none"></div>
        
        <div class="container-custom relative">
          <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-8 lg:p-12">
            
            <!-- Excerpt -->
            <div v-if="post.short_description" class="mb-12">
              <div class="bg-gray-50 rounded-2xl p-8 border-l-4 border-teal-500">
                <p class="text-xl text-gray-700 leading-relaxed italic">
                  {{ post.short_description }}
                </p>
              </div>
            </div>

            <!-- Content -->
            <div class="blog-content">
              <div v-html="formatContent(post.content)"></div>
            </div>

            <!-- Tags -->
            <div v-if="post.tags?.length" class="mt-16 pt-8 border-t border-gray-200">
              <div class="bg-gradient-to-r from-gray-50 to-teal-50/30 rounded-2xl p-8">
                <div class="flex items-center mb-6">
                  <Icon name="heroicons:tag" class="h-5 w-5 text-teal-600 mr-2" />
                  <h3 class="text-xl font-bold text-gray-900">Emner</h3>
                </div>
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag"
                    class="inline-flex items-center px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Icon name="heroicons:hashtag" class="h-3 w-3 mr-1" />
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Back to Blog -->
      <section class="py-12 bg-gray-50">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto text-center">
            <NuxtLink 
              to="/blog" 
              class="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
            >
              <Icon name="heroicons:arrow-left" class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Tilbage til blog
            </NuxtLink>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
// Get the slug from the route
const route = useRoute()
const slug = route.params.slug

// Fetch the blog post from Directus
const { data: post, pending, error } = await useFetch(`/api/blog/posts/${slug}`)

// SEO
useHead(() => {
  const post = unref(post)
  if (!post) return { title: 'Blog - Go Mission' }
  
  const title = `${post.title} - Go Mission Blog`
  const description = post.short_description || post.content?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Læs mere på Go Mission blog'
  const url = `https://go-mission.dk/blog/${post.slug}`
  const publishDate = post.published_date || post.date_created
  const modifiedDate = post.date_updated || publishDate
  
  return {
    title,
    meta: [
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'author', content: post.author || 'Go Mission' },
      { name: 'keywords', content: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || 'go mission, velfærd, teknologi, blog') },
      
      // OpenGraph meta tags (Facebook, LinkedIn)
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Go Mission' },
      { property: 'og:locale', content: 'da_DK' },
      ...(post.featured_image ? [{ property: 'og:image', content: post.featured_image }] : []),
      ...(post.featured_image ? [{ property: 'og:image:alt', content: post.title }] : []),
      
      // Twitter Card meta tags
      { name: 'twitter:card', content: post.featured_image ? 'summary_large_image' : 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(post.featured_image ? [{ name: 'twitter:image', content: post.featured_image }] : []),
      
      // Article meta tags
      { property: 'article:published_time', content: publishDate },
      { property: 'article:modified_time', content: modifiedDate },
      { property: 'article:author', content: post.author || 'Go Mission' },
      { property: 'article:section', content: post.category || 'Blog' },
      ...(Array.isArray(post.tags) ? post.tags.map(tag => ({ property: 'article:tag', content: tag })) : []),
      
      // SEO optimization
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' }
    ],
    link: [
      { rel: 'canonical', href: url }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: description,
          image: post.featured_image ? [post.featured_image] : undefined,
          author: {
            '@type': 'Organization',
            name: post.author || 'Go Mission',
            url: 'https://go-mission.dk'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Go Mission',
            url: 'https://go-mission.dk',
            logo: {
              '@type': 'ImageObject',
              url: 'https://go-mission.dk/logo.png'
            }
          },
          datePublished: publishDate,
          dateModified: modifiedDate,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
          },
          keywords: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || 'go mission, velfærd, teknologi'),
          articleSection: post.category || 'Blog'
        })
      }
    ]
  }
})

// Helper functions

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('da-DK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const readingTime = (content) => {
  if (!content) return 1
  const wordsPerMinute = 200
  const wordCount = content.split(' ').length
  return Math.ceil(wordCount / wordsPerMinute)
}

const formatContent = (content) => {
  if (!content) return ''
  
  // Convert line breaks to paragraphs if content is plain text
  if (!content.includes('<')) {
    return content
      .split('\n\n')
      .filter(paragraph => paragraph.trim())
      .map(paragraph => {
        // Handle single line breaks within paragraphs
        const formattedParagraph = paragraph.replace(/\n/g, '<br>')
        return `<p class="text-lg leading-relaxed mb-6 text-gray-700">${formattedParagraph}</p>`
      })
      .join('')
  }
  
  // If content already has HTML, enhance it with beautiful styling
  let formattedContent = content
  
  // Style H1 headings with gradient and decorative elements
  formattedContent = formattedContent.replace(
    /<h1([^>]*)>/g, 
    '<h1$1 class="text-5xl lg:text-6xl font-bold mt-20 mb-12 leading-tight bg-gradient-to-r from-gray-900 via-teal-800 to-cyan-700 bg-clip-text text-transparent relative pb-6 border-b border-gray-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-20 after:bg-gradient-to-r after:from-teal-500 after:to-cyan-500 after:rounded-full after:content-[\'\']">'
  )
  
  // Style H2 headings with hash symbol and gradient
  formattedContent = formattedContent.replace(
    /<h2([^>]*)>/g, 
    '<h2$1 class="text-4xl font-bold mt-16 mb-8 leading-tight bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent relative pb-4 before:absolute before:-left-8 before:text-teal-400/60 before:font-normal before:text-3xl before:top-0 before:content-[\'#\'] after:absolute after:bottom-0 after:left-0 after:h-px after:w-16 after:bg-gradient-to-r after:from-teal-400 after:to-transparent after:content-[\'\']">'
  )
  
  // Style H3 headings with arrow indicator
  formattedContent = formattedContent.replace(
    /<h3([^>]*)>/g, 
    '<h3$1 class="text-3xl font-bold mt-14 mb-6 leading-tight text-teal-800 relative before:absolute before:-left-6 before:text-teal-500 before:font-bold before:text-2xl before:top-0.5 before:content-[\'▸\']">'
  )
  
  // Style H4 headings with circular dot
  formattedContent = formattedContent.replace(
    /<h4([^>]*)>/g, 
    '<h4$1 class="text-2xl font-bold mt-12 mb-5 text-gray-800 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-teal-500 before:rounded-full before:shadow-lg before:shadow-teal-500/30 before:content-[\'\']">'
  )
  
  // Style H5 headings with border
  formattedContent = formattedContent.replace(
    /<h5([^>]*)>/g, 
    '<h5$1 class="text-xl font-semibold mt-10 mb-4 text-gray-700 tracking-wide uppercase text-sm border-b border-gray-200 pb-2">'
  )
  
  // Style H6 headings
  formattedContent = formattedContent.replace(
    /<h6([^>]*)>/g, 
    '<h6$1 class="text-lg font-medium mt-8 mb-3 text-teal-600 italic">'
  )
  
  // Style paragraphs
  formattedContent = formattedContent.replace(
    /<p([^>]*)>/g, 
    '<p$1 class="text-lg leading-relaxed mb-6 text-gray-700">'
  )
  
  // Style links
  formattedContent = formattedContent.replace(
    /<a([^>]*)>/g, 
    '<a$1 class="text-teal-600 font-medium hover:text-teal-700 hover:underline transition-colors">'
  )
  
  // Style strong text
  formattedContent = formattedContent.replace(
    /<strong([^>]*)>/g, 
    '<strong$1 class="text-gray-900 font-semibold">'
  )
  
  // Style em text
  formattedContent = formattedContent.replace(
    /<em([^>]*)>/g, 
    '<em$1 class="text-gray-600 italic">'
  )
  
  // Style lists
  formattedContent = formattedContent.replace(
    /<ul([^>]*)>/g, 
    '<ul$1 class="my-8 space-y-3">'
  )
  
  formattedContent = formattedContent.replace(
    /<ol([^>]*)>/g, 
    '<ol$1 class="my-8 space-y-3">'
  )
  
  formattedContent = formattedContent.replace(
    /<li([^>]*)>/g, 
    '<li$1 class="text-lg leading-relaxed text-gray-700">'
  )
  
  // Style blockquotes
  formattedContent = formattedContent.replace(
    /<blockquote([^>]*)>/g, 
    '<blockquote$1 class="border-l-4 border-teal-400 bg-teal-50/50 px-6 py-4 rounded-r-lg my-8 text-gray-700 italic">'
  )
  
  // Style code
  formattedContent = formattedContent.replace(
    /<code([^>]*)>/g, 
    '<code$1 class="text-teal-700 bg-gray-100 px-2 py-1 rounded text-sm font-medium">'
  )
  
  // Style pre code blocks
  formattedContent = formattedContent.replace(
    /<pre([^>]*)>/g, 
    '<pre$1 class="bg-gray-900 text-gray-100 rounded-xl p-6 my-8 overflow-x-auto">'
  )
  
  // Style images (respect original dimensions from Directus)
  formattedContent = formattedContent.replace(
    /<img([^>]*)>/g, 
    '<img$1 class="rounded-xl shadow-lg my-8 mx-auto block">'
  )
  
  // Style horizontal rules
  formattedContent = formattedContent.replace(
    /<hr([^>]*)>/g, 
    '<hr$1 class="border-gray-200 my-12">'
  )
  
  return formattedContent
}

// Handle 404 if post doesn't exist
if (!pending.value && !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}
</script> 