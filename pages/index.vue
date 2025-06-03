<template>
  <div>
    <!-- Minimalistic Hero Section -->
    <section class="relative overflow-hidden bg-white min-h-screen flex items-center">
      <!-- Clean Hero Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/hero/bannerfoto2.jpg" 
          alt="Go Mission - Digital velfærdsløsning i praksis" 
          class="w-full h-full object-cover opacity-80 blur-sm"
        />
        <div class="absolute inset-0 bg-white/80"></div>
      </div>

      <div class="container-custom relative z-10 section-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <!-- Simple Badge -->
            <div class="mb-8">
              <span class="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full font-medium text-sm">
                Digital Velfærdsløsning
              </span>
            </div>
            
            <!-- Clean Headline -->
            <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Vær med til at skabe en<br>
              <span class="text-teal-600">
                ny og bedre fremtid
              </span>
            </h1>
            
            <!-- Simple Description -->
            <p class="text-xl text-gray-600 mb-12 leading-relaxed max-w-xl">
              Go Mission er en helhedsbaseret digital velfærdsløsning der styrker samspillet og 
              skaber øget selvhjulpenhed for mennesker med kognitiv funktionsnedsættelse.
            </p>
            
            <!-- Clean CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/kontakt" class="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Kom med på rejsen
              </NuxtLink>
              
              <NuxtLink to="/kontakt" class="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Ring: +45 44 12 44 11
              </NuxtLink>
            </div>
            
            <!-- Minimal Social Proof -->
            <div class="mt-16 pt-8 border-t border-gray-400">
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-500 text-sm">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Pålidelig siden 2013</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Social bæredygtighed i fokus</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Simplified Visual Element -->
          <div class="lg:justify-self-end">
            <div class="relative max-w-xs mx-auto">
              <!-- iPhone Mockup -->
              <div class="relative">
                <!-- iPhone Frame -->
                <div class="relative bg-black rounded-[2.5rem] p-2 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-700">
                  <!-- Screen -->
                  <div class="bg-white rounded-[2rem] overflow-hidden relative">
                    <!-- Notch -->
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                    
                    <!-- App Interface Image -->
                    <div class="relative h-[450px] w-[225px]">
                      <img 
                        src="/images/hero/super-godt-app.webp" 
                        alt="Go Mission - Super godt interface" 
                        class="w-full h-full object-cover"
                      />
                      
                      <!-- Overlay for better branding -->
                      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4">
                        <div class="text-center">
                          <h3 class="text-white font-bold text-base mb-1">Go Mission</h3>
                          <p class="text-white/90 text-xs">Digital velfærdsløsning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- iPhone Shine Effect -->
                  <div class="absolute inset-2 rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <!-- Floating Elements Around iPhone -->
                <div class="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full animate-float opacity-80" style="animation-delay: 0.5s;"></div>
                <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full animate-pulse opacity-20" style="animation-duration: 3s;"></div>
                <div class="absolute top-1/3 -right-6 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse opacity-70"></div>
                
                <!-- Success Badge -->
                <div class="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  ✓ Succes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Revolutionary Implementation Section -->
    <section class="section-padding bg-white relative overflow-hidden">
      <div class="container-custom">
        <!-- Large centered typography -->
        <div class="text-center mb-24">
          <h2 class="text-6xl lg:text-8xl font-black text-gray-900 leading-none mb-6">
            Vi er med jer<br>
            <span class="text-6xl lg:text-8xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              hele vejen
            </span>
          </h2>
        </div>

        <!-- Bento-style grid layout -->
        <div class="grid grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[800px]">
          
          <!-- Large hero image card -->
          <div class="col-span-12 lg:col-span-7 row-span-2 relative group">
            <div class="h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden bg-gradient-to-br from-teal-400 to-blue-600 relative">
              <img 
                src="/images/etc/IMG_6741.jpg" 
                alt="Go Mission implementation" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <!-- Floating content overlay -->
              <div class="absolute bottom-8 left-8 right-8">
                <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 class="text-2xl font-bold text-white mb-2">Helhedsbaseret løsning</h3>
                  <p class="text-white/90 text-lg leading-relaxed">
                    Ikke bare en app – en komplet rejse med personlig støtte hele vejen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats/Process cards -->
          <div class="col-span-12 lg:col-span-5 space-y-6 lg:space-y-8">
            
            <!-- Process step 1 -->
            <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 lg:p-8 border border-orange-100 hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-3 group-hover:rotate-6 transition-transform duration-300">
                  <Icon name="heroicons:rocket-launch" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-orange-600 mb-1">STEP 01</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2">Planlægning</h4>
                  <p class="text-gray-600">Vi starter sammen og skræddersyr løsningen til jeres behov</p>
                </div>
              </div>
            </div>

            <!-- Process step 2 with image -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300 group">
              <div class="grid grid-cols-2 h-full">
                <div class="p-6 lg:p-8 flex flex-col justify-center">
                  <div class="text-sm font-semibold text-blue-600 mb-1">STEP 02</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2">Implementering</h4>
                  <p class="text-gray-600 text-sm">Længere forløb hvor vi kaster os ud i det sammen</p>
                </div>
                <div class="relative overflow-hidden">
                  <img 
                    src="/images/etc/IMG_6823.jpg" 
                    alt="Implementation process" 
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <!-- Process step 3 -->
            <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 lg:p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-3 group-hover:rotate-6 transition-transform duration-300">
                  <Icon name="heroicons:check-circle" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <div class="text-sm font-semibold text-emerald-600 mb-1">STEP 03</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2">Forankring</h4>
                  <p class="text-gray-600">Naturlig del af hverdagen for alle</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Bottom section with floating elements -->
        <div class="mt-20 relative">
          <!-- Large quote/testimonial style -->
          <div class="max-w-4xl mx-auto text-center">
            <div class="relative">
              <div class="text-8xl lg:text-9xl text-teal-100 font-black absolute -top-8 left-1/2 transform -translate-x-1/2 select-none">"</div>
              <blockquote class="text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed relative z-10 italic">
                Vi dumper ikke bare en app og går igen.<br>
                <span class="text-teal-600 font-bold">Vi sikrer succesfuld forankring sammen.</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Background decorative elements -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div class="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full blur-3xl opacity-20"></div>
    </section>

    <!-- Smooth Modern Transition -->
    <div class="relative h-40 lg:h-56 overflow-hidden">
      <!-- Smooth gradient background -->
      <div class="absolute inset-0 bg-gradient-to-b from-white via-gray-25 to-white"></div>
      
      <!-- Floating geometric shapes with better spacing -->
      <div class="absolute inset-0">
        <!-- Large floating circle -->
        <div class="absolute top-16 left-1/4 w-20 h-20 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full opacity-60 animate-float"></div>
        
        <!-- Medium floating diamond -->
        <div class="absolute top-20 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-300 transform rotate-45 opacity-50 animate-float blur-sm" style="animation-delay: 1s;"></div>
        
        <!-- Small floating circles -->
        <div class="absolute bottom-20 left-1/2 w-8 h-8 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-full opacity-55 animate-float" style="animation-delay: 2s;"></div>
        
        <!-- Additional small elements -->
        <div class="absolute top-24 left-2/3 w-6 h-6 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-45 animate-float blur-sm" style="animation-delay: 3s;"></div>
        
        <!-- Extra floating element for richness -->
        <div class="absolute bottom-24 right-1/4 w-10 h-10 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-full opacity-40 animate-float" style="animation-delay: 1.5s;"></div>
        
        <!-- Flowing line with better integration -->
        <svg class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full opacity-25" viewBox="0 0 1200 200">
          <path d="M0,100 Q200,80 400,100 T800,100 Q1000,120 1200,100" fill="none" stroke="url(#flowGradient)" stroke-width="2"/>
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#059669;stop-opacity:0.5" />
              <stop offset="30%" style="stop-color:#0ea5e9;stop-opacity:0.7" />
              <stop offset="70%" style="stop-color:#8b5cf6;stop-opacity:0.6" />
              <stop offset="100%" style="stop-color:#059669;stop-opacity:0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <!-- Top fade overlay -->
      <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
      
      <!-- Bottom fade overlay -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      <!-- Center soft transition -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>
    </div>

    <!-- Modern Benefits Section -->
    <section id="udbytte" class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span class="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-sm mb-6">
              Fordele & Resultater
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              <span class="text-gradient">Udbytte</span> af Go Mission
            </h2>
            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="icon-modern icon-benefit w-16 h-16 flex-shrink-0">
                  <Icon name="heroicons:arrow-trending-up" class="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-3 text-gray-900">Øget selvhjulpenhed</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Gennem trin for trin guides tages der udgangspunkt i brugerens eksisterende 
                    ressourcer til at udføre betydningsfulde aktiviteter så selvstændigt som muligt.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="icon-modern icon-feature w-16 h-16 flex-shrink-0">
                  <Icon name="heroicons:user-group" class="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-3 text-gray-900">Bedre støtte</h3>
                  <p class="text-gray-600 leading-relaxed">
                    For nyansatte og vikarer kan de hurtigt få et overblik over dagens opgaver 
                    og via guides blive guidet i hvordan en opgave ønskes udført.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="icon-modern w-16 h-16 flex-shrink-0">
                  <Icon name="heroicons:heart" class="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-3 text-gray-900">Ro og sammenhæng</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Gennem kontinuerlig ensartet udførelse af dagens opgaver fra forskellige 
                    støttepersoner, skabes der ro og sammenhæng for brugeren.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:justify-self-end">
            <div class="card-modern bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-100">
              <div class="text-center">
                <div class="icon-modern w-20 h-20 mx-auto mb-8">
                  <Icon name="heroicons:heart" class="h-10 w-10 text-white" />
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">
                  Social bæredygtighed
                </h3>
                <p class="text-gray-600 mb-8 leading-relaxed">
                  Vi går op i social bæredygtighed. Det er vores centrale grundværdi. 
                  Vi vil fremme ligheden og ligestillingen for alle mennesker med kognitiv funktionsnedsættelse.
                </p>
                <div class="bg-white rounded-2xl p-6 border border-teal-100">
                  <p class="text-teal-700 font-semibold text-lg italic">
                    "Ingen skal være berørt af social eksklusion, utryghed eller stigmatisering."
                  </p>
                </div>
                <div class="mt-8">
                  <div class="rounded-2xl overflow-hidden h-40">
                    <img 
                      src="/images/etc/IMG_6407.jpg" 
                      alt="Social bæredygtighed - Go Mission" 
                      class="w-full h-full object-cover object-[50%_15%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Features Section -->
    <section id="loesningen" class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-20">
          <span class="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full font-semibold text-sm mb-4">
            App Funktioner
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hvordan ser <span class="text-gradient">app'en</span> ud?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            App'en er designet til at være så enkel og overskuelig som muligt, 
            både for bruger og deres støttepersoner.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card-modern text-center group">
            <div class="icon-modern icon-feature mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="heroicons:calendar-days" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Min dag</h3>
            <p class="text-gray-600 leading-relaxed">
              Brugerens daglige kalender. Her kan den enkelte holde styr på sine daglige gøremål. 
              Kalenderen skaber en tydelig struktur over hverdagens opgaver.
            </p>
            <div class="mt-6 pt-6 border-t border-gray-100">
              <div class="app-mockup h-32 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <Icon name="heroicons:calendar-days" class="h-12 w-12 text-white mb-2" />
                    <div class="text-white text-sm font-medium">Dagens Plan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-modern text-center group">
            <div class="icon-modern mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="heroicons:trophy" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
            <p class="text-gray-600 leading-relaxed">
              En ny måde at planlægge målsættende udvikling for den enkelte borger. 
              Gør brugerens udviklingsmål tydelige og integrerer aktiviteter i kalenderen.
            </p>
            <div class="mt-6 pt-6 border-t border-gray-100">
              <div class="app-mockup h-32 relative overflow-hidden bg-gradient-to-br from-orange-400 to-red-500">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <Icon name="heroicons:trophy" class="h-12 w-12 text-white mb-2" />
                    <div class="text-white text-sm font-medium">Udvikling</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-modern text-center group">
            <div class="icon-modern icon-benefit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="heroicons:book-open" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Guides</h3>
            <p class="text-gray-600 leading-relaxed">
              Trin for trin og liste guides der kan tilføjes til alle begivenheder. 
              Kan guide brugeren gennem aktiviteter understøttet af billeder og video.
              <br>
              <br>
            </p>
            <div class="mt-6 pt-6 border-t border-gray-100">
              <div class="app-mockup h-32 relative overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-500">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <Icon name="heroicons:book-open" class="h-12 w-12 text-white mb-2" />
                    <div class="text-white text-sm font-medium">Trin-for-Trin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- App Download Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Section Header -->
          <div class="mb-16">
            <span class="inline-block px-6 py-3 bg-teal-50 text-teal-600 rounded-full font-medium text-sm mb-6 shadow-sm">
              📱 Download appen
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Få <span class="text-teal-600">Go Mission</span> på din enhed
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Download Go Mission gratis og begynd din rejse mod øget selvhjulpenhed og bedre livskvalitet
            </p>
          </div>

          <!-- App Preview and Download Buttons -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- App Info Card -->
            <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div class="text-center">
                <!-- App Icon -->
                <div class="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="heroicons:device-phone-mobile" class="h-12 w-12 text-white" />
                </div>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Go Mission</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  En helhedsbaseret app, der giver struktur og udvikling til borgere med særlige behov gennem guidning, strukturering og motiverende udviklingsmål.
                </p>
                
                <!-- App Features -->
                <div class="grid grid-cols-3 gap-4 mb-8">
                  <div class="text-center">
                    <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon name="heroicons:calendar-days" class="h-6 w-6 text-orange-600" />
                    </div>
                    <p class="text-gray-700 text-sm font-medium">Min dag</p>
                  </div>
                  <div class="text-center">
                    <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon name="heroicons:trophy" class="h-6 w-6 text-emerald-600" />
                    </div>
                    <p class="text-gray-700 text-sm font-medium">Missioner</p>
                  </div>
                  <div class="text-center">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon name="heroicons:book-open" class="h-6 w-6 text-blue-600" />
                    </div>
                    <p class="text-gray-700 text-sm font-medium">Guides</p>
                  </div>
                </div>

                <!-- App Details -->
                <div class="text-center text-sm text-gray-500 space-y-1">
                  <p>✓ Gratis download</p>
                  <p>✓ Brugervenligt design</p>
                  <p>✓ Visuelt drevet med billeder og video</p>
                </div>
              </div>
            </div>

            <!-- Download Buttons -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                Download nu
              </h3>
              
              <!-- Google Play Store -->
              <a 
                href="https://play.google.com/store/apps/details?id=dk.telecall.go_mission&hl=da"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center bg-black hover:bg-gray-800 text-white rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <div class="flex-shrink-0 mr-4">
                  <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div class="flex-1 text-left">
                  <div class="text-xs text-gray-300 uppercase tracking-wide">Få det på</div>
                  <div class="text-xl font-bold">Google Play</div>
                </div>
                <Icon name="heroicons:arrow-top-right-on-square" class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <!-- Apple App Store -->
              <a 
                href="https://apps.apple.com/dk/app/go-mission/id1570501673"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center bg-black hover:bg-gray-800 text-white rounded-2xl p-4 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <div class="flex-shrink-0 mr-4">
                  <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                </div>
                <div class="flex-1 text-left">
                  <div class="text-xs text-gray-300 uppercase tracking-wide">Download på</div>
                  <div class="text-xl font-bold">App Store</div>
                </div>
                <Icon name="heroicons:arrow-top-right-on-square" class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <!-- Additional Info -->
              <div class="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100">
                <div class="flex items-center justify-center mb-3">
                  <Icon name="heroicons:information-circle" class="h-6 w-6 text-teal-600 mr-2" />
                  <span class="font-semibold text-teal-800">Vigtigt at vide</span>
                </div>
                <p class="text-teal-700 text-sm leading-relaxed text-center">
                  For at bruge Go Mission skal du have en konto. Kontakt os for at få oprettet adgang til appen.
                </p>
              </div>
            </div>
          </div>

          <!-- App Stats -->
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-teal-600 mb-2">100+</div>
              <div class="text-gray-600">Downloads</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-600 mb-2">Gratis</div>
              <div class="text-gray-600">At downloade</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div class="text-gray-600">Aldersklassificering</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern CTA Section -->
    <section class="section-padding text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <!-- Animated background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 animate-pulse"></div>
      </div>
      
      <div class="container-custom text-center relative z-10">
        <div class="mb-6">
          <span class="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full font-semibold text-sm mb-4 border border-teal-400/30 text-teal-300">
            ✨ Klar til start?
          </span>
        </div>
        
        <h2 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          Klar til at skabe en 
          <span class="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            bedre fremtid?
          </span>
        </h2>
        
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Lad os tage på en rejse med Go Mission, mod en ny og bedre fremtid sammen! 
          Kontakt os for en uforpligtende samtale.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <NuxtLink to="/kontakt" class="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/25">
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div class="relative flex items-center justify-center">
              <Icon name="heroicons:phone" class="h-6 w-6 mr-3 group-hover:animate-bounce" />
              Ring til os: +45 44 12 44 11
            </div>
          </NuxtLink>
          
          <NuxtLink to="/kontakt" class="group bg-white/5 backdrop-blur-sm border-2 border-gray-600/50 hover:border-teal-400/50 text-white hover:text-teal-300 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/10">
            <div class="flex items-center justify-center">
              <Icon name="heroicons:envelope" class="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Send en besked
            </div>
          </NuxtLink>
        </div>
        
        <!-- Modern stats/social proof -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 border-t border-gray-700/50">
          <div class="flex items-center space-x-2 text-gray-400">
            <Icon name="heroicons:check-circle" class="h-5 w-5 text-teal-400" />
            <span class="text-sm">Pålidelig siden 2013</span>
          </div>
          <div class="hidden md:block w-px h-4 bg-gray-700"></div>
          <div class="flex items-center space-x-2 text-gray-400">
            <Icon name="heroicons:heart" class="h-5 w-5 text-pink-400" />
            <span class="text-sm">Social bæredygtighed</span>
          </div>
          <div class="hidden md:block w-px h-4 bg-gray-700"></div>
          <div class="flex items-center space-x-2 text-gray-400">
            <Icon name="heroicons:users" class="h-5 w-5 text-cyan-400" />
            <span class="text-sm">Helhedsbaseret løsning</span>
          </div>
        </div>
      </div>
      
      <!-- Modern background decorations -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <!-- Gradient orbs -->
        <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
        <div class="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float opacity-40" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-300/25 to-teal-400/25 rounded-full blur-2xl animate-float" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/3 left-3/4 w-28 h-28 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl animate-float" style="animation-delay: 3s;"></div>
        
        <!-- Geometric shapes -->
        <div class="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-transparent border border-teal-400/30 rounded-2xl rotate-45 animate-float opacity-60" style="animation-delay: 1.5s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full animate-float opacity-50" style="animation-delay: 2.5s;"></div>
      </div>
      
      <!-- Subtle grid pattern overlay -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, rgba(56, 178, 172, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
    </section>

    <!-- Modern Team Section -->
    <section id="hvem-er-vi" class="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div class="container-custom">
        <div class="text-center mb-16 lg:mb-20">
          <span class="inline-block px-6 py-3 bg-teal-50 text-teal-600 rounded-full font-medium text-sm mb-6 shadow-sm">
            Mød vores hold
          </span>
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hvem er <span class="text-gradient">vi?</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eksperter i velfærdsteknologi med passion for inklusion og innovation
          </p>
        </div>

        <!-- Single Row Team Layout -->
        <div class="w-full mb-16 lg:mb-24">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <TeamMember 
              v-for="member in teamMembers" 
              :key="member.id"
              :member="member" 
            />
          </div>
        </div>

        <!-- Clean stats section -->
        <div class="pt-12 lg:pt-16 border-t border-gray-200">
          <div class="text-center space-y-12">
            <h3 class="text-2xl lg:text-3xl font-semibold text-gray-900">Vores rejse i tal</h3>
            <div class="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-16">
              <div class="text-center group">
                <div class="text-5xl lg:text-6xl font-bold text-teal-500 mb-3 group-hover:scale-110 transition-transform duration-300">2013</div>
                <div class="text-gray-600 font-medium text-lg">Grundlagt</div>
              </div>
              <div class="hidden md:block w-px h-16 bg-gray-200"></div>
              <div class="text-center group">
                <div class="text-5xl lg:text-6xl font-bold text-pink-500 mb-3 group-hover:scale-110 transition-transform duration-300">12+</div>
                <div class="text-gray-600 font-medium text-lg">År med erfaring</div>
              </div>
              <div class="hidden md:block w-px h-16 bg-gray-200"></div>
              <div class="text-center group">
                <div class="text-5xl lg:text-6xl font-bold text-emerald-500 mb-3 group-hover:scale-110 transition-transform duration-300">∞</div>
                <div class="text-gray-600 font-medium text-lg">Dedikation til inklusion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners & References Section -->
    <section id="samarbejde" class="section-padding bg-white border-t border-gray-100">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="inline-block px-6 py-3 bg-emerald-50 text-emerald-600 rounded-full font-medium text-sm mb-6 shadow-sm">
            Samarbejdspartnere
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            En <span class="text-gradient">fælles</span> fremtid
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rejsen med Go Mission er udviklet med hjælp, støtte og sparring fra følgende samarbejdspartnere
          </p>
        </div>

        <!-- Partner Logos Grid -->
        <div class="grid grid-cols-3 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          <div class="flex justify-center">
            <img 
              src="/images/references/sponsor1.jpg" 
              alt="Samarbejdspartner 1" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/sponsor3.jpg" 
              alt="Samarbejdspartner 2" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/sponsor4.jpg" 
              alt="Samarbejdspartner 3" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/sponsor5.jpg" 
              alt="Samarbejdspartner 4" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/sponsor7.jpg" 
              alt="Samarbejdspartner 5" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/sponsor8.jpg" 
              alt="Samarbejdspartner 6" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/image.png" 
              alt="Samarbejdspartner 7" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/image-1.png" 
              alt="Samarbejdspartner 8" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/images/references/image-2.png" 
              alt="Samarbejdspartner 9" 
              class="h-20 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
        </div>

        <!-- Additional Partner Support Statement -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div class="flex items-center justify-center mb-6">
              <div class="icon-modern w-16 h-16">
                <Icon name="heroicons:user-group" class="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Sammen skaber vi forandring
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              Hos Go Mission ved vi, at samfundsmæssige komplekse udfordringer ikke løser sig uden et tæt og 
              gensidigt samarbejde med de rigtige eksperter – nemlig jer ude i virkeligheden, som hver dag gør en enorm forskel.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Go Mission - Skab en ny og bedre fremtid',
  meta: [
    { name: 'description', content: 'Go Mission er en helhedsbaseret digital velfærdsløsning der styrker samspillet og skaber øget selvhjulpenhed for mennesker med kognitiv funktionsnedsættelse.' }
  ]
})

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Henrik Bryld',
    role: 'Indehaver & Stifter',
    description: 'Stifter af Tele Call med vision om at give lige muligheder for kommunikation til alle',
    image: '/images/team/Henrik-tele-call-portraet-980x654.jpg',
    badgeColor: 'text-teal-600'
  },
  {
    id: 2,
    name: 'Dorrit Bryld',
    role: 'Medindehaver & Visionær',
    description: 'Passioneret omkring inklusion og skaber af bæredygtige velfærdsløsninger',
    image: '/images/team/Dorrit-tele-call-portraet2-980x654.jpg',
    badgeColor: 'text-pink-600'
  },
  {
    id: 3,
    name: 'Mette Kielsgaard Petersen',
    role: 'Cand.ergo & Konsulent',
    description: 'Specialist i velfærdsteknologi og digitale hjælpemidler med fokus på faglighed',
    image: '/images/team/Mette-tele-call-portraet-980x654.jpg',
    badgeColor: 'text-emerald-600'
  }
]
</script> 