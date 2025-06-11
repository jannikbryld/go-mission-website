<template>
  <footer class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-teal-900 via-gray-900 to-emerald-900"></div>
    <div class="absolute inset-0 bg-black/20"></div>
    
    <div class="container-custom relative z-10">
      <div class="py-16 lg:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Modern Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <div class="relative">
              <img 
                  src="/images/logo/GoMission_withtext_white.png" 
                alt="Go Mission Logo" 
                  class="h-12 w-auto brightness-0 saturate-100"
                  style="filter: brightness(0) saturate(100%) invert(75%) sepia(27%) saturate(3148%) hue-rotate(140deg) brightness(95%) contrast(85%);"
              />
              </div>
            </div>
            <p class="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Skab en ny og bedre fremtid for mennesker med nedsat kognitiv funktion gennem vores 
              helhedsbaserede digitale velfærdsløsning.
            </p>
            
            <!-- Social Media with modern styling -->
            <div class="flex space-x-4 mb-8">
              <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                <Icon name="heroicons:envelope" class="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                <Icon name="mdi:facebook" class="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                <Icon name="mdi:linkedin" class="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <!-- Trust badge -->
            <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Icon name="heroicons:shield-check" class="h-5 w-5 text-green-400 mr-2" />
              <span class="text-sm text-gray-300">Patent pending PCT/EP2022/063736</span>
            </div>
          </div>

          <!-- Quick Links with modern styling -->
          <div>
            <h3 class="text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul class="space-y-4">
              <li v-for="item in navigation" :key="item.name">
                <NuxtLink 
                  :to="item.href" 
                  class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <Icon name="heroicons:arrow-right" class="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Modern Contact Info -->
          <div>
            <h3 class="text-xl font-bold mb-6 text-white">Kontakt</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="p-2 bg-white/10 rounded-lg">
                  <Icon name="heroicons:map-pin" class="h-5 w-5 text-white" />
                </div>
                <div class="text-gray-300">
                  <p class="font-medium text-white mb-1">Besøg os</p>
                  <p>Holkebjergvej 106</p>
                  <p>5250 Odense SV</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="p-2 bg-white/10 rounded-lg">
                  <Icon name="heroicons:phone" class="h-5 w-5 text-white" />
                </div>
                <div>
                  <p class="font-medium text-white mb-1">Ring til os</p>
                  <a href="tel:+4544124411" class="text-gray-300 hover:text-white transition-colors text-lg font-medium">
                    +45 44 12 44 11
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="p-2 bg-white/10 rounded-lg">
                  <Icon name="heroicons:envelope" class="h-5 w-5 text-white" />
                </div>
                <div>
                  <p class="font-medium text-white mb-1">Email os</p>
                  <a href="mailto:info@go-mission.com" class="text-gray-300 hover:text-white transition-colors">
                    info@go-mission.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Bottom Bar -->
      <div class="border-t border-white/10 py-8">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div class="text-gray-400 text-center lg:text-left">
            <p>© 2025 Go Mission. Alle rettigheder forbeholdt.</p>
            <p class="text-sm mt-1">Skabt med ❤️ for en bedre fremtid</p>
          </div>
          <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <NuxtLink to="/privatlivspolitik" class="text-gray-400 hover:text-white transition-colors">
              Privatlivspolitik
            </NuxtLink>
            <div class="flex items-center space-x-2 text-gray-500">
              <Icon name="heroicons:globe-alt" class="h-4 w-4" />
              <span>Odense, Danmark</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
  </footer>
</template>

<script setup>
const navigation = [
  { name: 'Løsningen', href: '/#loesningen' },
  { name: 'Udbytte', href: '/#udbytte' }, 
  { name: 'Hvem er vi', href: '/#hvem-er-vi' },
  { name: 'Samarbejde', href: '/#samarbejde' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/kontakt' }
]
</script> 