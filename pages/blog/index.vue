<template>
  <div>
    <!-- Blog Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <!-- Animated background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="container-custom relative z-10 section-padding text-center">
        <div class="mb-6">
          <span class="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full font-semibold text-sm border border-teal-400/30 text-teal-300">
            📚 Viden & indsigt
          </span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          <span class="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Seneste nyheder, indsigter og historier fra Go Mission rejsen
        </p>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        
        <!-- Loading State -->
        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="n in 6" :key="n" class="animate-pulse">
            <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div class="h-48 bg-gray-300"></div>
              <div class="p-6">
                <div class="h-4 bg-gray-300 rounded mb-4"></div>
                <div class="h-6 bg-gray-300 rounded mb-4"></div>
                <div class="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <Icon name="heroicons:exclamation-triangle" class="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-2">Kunne ikke hente blog posts</h3>
            <p class="text-gray-600 mb-6">{{ error.message || 'Der opstod en fejl' }}</p>
            <button @click="refresh()" class="btn-primary">
              Prøv igen
            </button>
          </div>
        </div>

        <!-- Blog Posts Grid -->
        <div v-else-if="posts?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="post in posts" 
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group block cursor-pointer"
          >
            <!-- Modern Card Design -->
            <article class="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 overflow-hidden h-full flex flex-col">
              
              <!-- Featured Image -->
              <div class="relative aspect-[16/10] overflow-hidden">
                <img 
                  v-if="post.featured_image"
                  :src="post.featured_image" 
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div v-else class="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <Icon name="heroicons:document-text" class="h-16 w-16 text-white" />
                </div>
                
                <!-- Category Badge -->
                <div v-if="post.category" class="absolute top-4 left-4">
                  <span class="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-semibold rounded-full border border-teal-200">
                    {{ post.category }}
                  </span>
                </div>

                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content Area -->
              <div class="p-6 flex-1 flex flex-col">
                
                <!-- Meta Info -->
                <div class="flex items-center text-xs text-gray-500 mb-4">
                  <Icon name="heroicons:calendar" class="h-3 w-3 mr-1.5" />
                  <time :datetime="post.published_date || post.date_created">{{ formatDate(post.published_date || post.date_created) }}</time>
                  <span class="mx-2 text-gray-300">•</span>
                  <Icon name="heroicons:clock" class="h-3 w-3 mr-1.5" />
                  <span>{{ readingTime(post.content) }} min</span>
                </div>

                <!-- Title with smart truncation -->
                <h2 class="font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                  <span class="line-clamp-2">{{ post.title }}</span>
                </h2>

                <!-- Excerpt -->
                <p v-if="post.short_description" class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  <span class="line-clamp-3">{{ post.short_description }}</span>
                </p>

                <!-- Read More with enhanced styling -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="inline-flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700 transition-colors">
                    Læs artikel
                    <Icon name="heroicons:arrow-right" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <!-- Reading time visual -->
                  <div class="flex items-center text-xs text-gray-400">
                    <div class="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" :style="`width: ${Math.min(readingTime(post.content) * 10, 100)}%`"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <Icon name="heroicons:document-text" class="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-900 mb-2">Ingen blog posts endnu</h3>
          <p class="text-gray-600">Check tilbage snart for nye artikler!</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Blog - Go Mission',
  meta: [
    { name: 'description', content: 'Seneste nyheder, indsigter og historier fra Go Mission rejsen med digital velfærdsteknologi.' }
  ]
})

// Fetch blog posts from Directus
const { data: posts, pending, error, refresh } = await useFetch('/api/blog/posts')

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


</script> 