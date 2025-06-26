<template>
  <header class="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex justify-between items-center h-20 lg:h-24">
        <!-- Modern Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center group">
            <img 
              src="/images/logo/logo.png" 
              alt="Go Mission Logo" 
              class="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-10">
          <template v-for="item in navigation">
            <a 
              v-if="item.href.startsWith('#')"
              :key="`desktop-anchor-${item.name}`"
              :href="item.href" 
              class="relative text-gray-700 hover:text-teal-600 font-semibold transition-all duration-300 group py-2"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <NuxtLink 
              v-else
              :key="`desktop-link-${item.name}`"
              :to="item.href" 
              class="relative text-gray-700 hover:text-teal-600 font-semibold transition-all duration-300 group py-2"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NuxtLink>
          </template>
        </div>

        <!-- Modern CTA Button -->
        <div class="hidden lg:flex items-center space-x-4">
          <a 
            href="https://app.go-mission.dk" 
            target="_blank"
            rel="noopener noreferrer"
            class="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 flex items-center"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <Icon name="heroicons:arrow-right-on-rectangle" class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            <span class="relative z-10">Login</span>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-3 rounded-xl text-gray-600 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
          >
            <Icon v-if="!mobileMenuOpen" name="heroicons:bars-3" class="h-6 w-6" />
            <Icon v-else name="heroicons:x-mark" class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Modern Mobile Navigation -->
      <Transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 rounded-b-2xl shadow-xl">
          <div class="px-4 pt-4 pb-6 space-y-3">
            <template v-for="item in navigation">
              <a 
                v-if="item.href.startsWith('#')"
                :key="`anchor-${item.name}`"
                :href="item.href"
                class="block px-4 py-3 text-lg font-semibold text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-200"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </a>
              <NuxtLink 
                v-else
                :key="`link-${item.name}`"
                :to="item.href"
                class="block px-4 py-3 text-lg font-semibold text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-200"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
            <div class="pt-4 mt-4 border-t border-gray-100">
              <a 
                href="https://app.go-mission.dk" 
                target="_blank"
                rel="noopener noreferrer"
                class="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center flex items-center justify-center"
                @click="mobileMenuOpen = false"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Icon name="heroicons:arrow-right-on-rectangle" class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span class="relative z-10">Login</span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Løsningen', href: '/#loesningen' },
  { name: 'Udbytte', href: '/#udbytte' }, 
  { name: 'Hvem er vi', href: '/#hvem-er-vi' },
  { name: 'Samarbejde', href: '/#samarbejde' },
  { name: 'Blog', href: '/blog' },
]

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 