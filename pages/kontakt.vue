<template>
  <div>
    <!-- Modern Hero Section -->
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
            💬 Lad os snakke sammen
          </span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          <span class="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Kontakt os
          </span>
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Vil du høre mere om rejsen med Go Mission? Vi er klar til en uforpligtende samtale om 
          hvordan vi kan skabe en bedre fremtid sammen.
        </p>
        
        <!-- Quick contact buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="tel:+4544124411" class="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/25">
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div class="relative flex items-center justify-center">
              <Icon name="heroicons:phone" class="h-6 w-6 mr-3 group-hover:animate-bounce" />
              Ring nu: +45 44 12 44 11
            </div>
          </a>
          
          <a href="mailto:info@go-mission.com" class="group bg-white/5 backdrop-blur-sm border-2 border-gray-600/50 hover:border-teal-400/50 text-white hover:text-teal-300 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/10">
            <div class="flex items-center justify-center">
              <Icon name="heroicons:envelope" class="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Send email
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16">
          
          <!-- Contact Information Cards -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Kom i <span class="text-gradient">kontakt</span> med os
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed">
                Vi er altid klar til at hjælpe og besvare dine spørgsmål om Go Mission.
              </p>
            </div>
            
            <!-- Contact Cards -->
            <div class="space-y-6">
              <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="heroicons:phone" class="h-8 w-8 text-white" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-xl mb-2 text-gray-900">Ring til os</h3>
                    <p class="text-gray-600 mb-3">Hverdage 8:00 - 16:00</p>
                    <a href="tel:+4544124411" class="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
                      +45 44 12 44 11
                    </a>
                  </div>
                </div>
              </div>

              <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="heroicons:envelope" class="h-8 w-8 text-white" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-xl mb-2 text-gray-900">Send en email</h3>
                    <p class="text-gray-600 mb-3">Vi svarer inden for 24 timer</p>
                    <a href="mailto:info@go-mission.com" class="text-xl font-semibold text-teal-600 hover:text-teal-700 transition-colors break-all">
                      info@go-mission.com
                    </a>
                  </div>
                </div>
              </div>

              <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="heroicons:map-pin" class="h-8 w-8 text-white" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-xl mb-2 text-gray-900">Besøg os</h3>
                    <p class="text-gray-600 mb-3">Efter aftale</p>
                    <div class="text-lg text-gray-800 font-medium">
                      <p>Holkebjergvej 106</p>
                      <p>5250 Odense SV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Promise Card -->
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-100">
              <div class="text-center">
                <div class="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-4 w-16 h-16 mx-auto mb-6">
                  <Icon name="heroicons:heart" class="h-8 w-8 text-white" />
                </div>
                <h3 class="font-bold text-2xl mb-4 text-gray-900">
                  Vi er med jer - hele vejen
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Go Mission er ikke kun en app, men en helhedsløsning med uovertruffen service. 
                  Vi yder støtte til implementering og forankring, skræddersyet til hver institution.
                </p>
              </div>
            </div>
          </div>

          <!-- Modern Contact Form -->
          <div class="xl:col-span-2">
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <!-- Form Header -->
              <div class="bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-8 text-white">
                <h3 class="text-3xl font-bold mb-2">Send os en besked</h3>
                <p class="text-teal-100 text-lg">Vi glæder os til at høre fra dig</p>
              </div>
              
              <!-- Form Content -->
              <div class="p-8 lg:p-12">
                <!-- Success Message -->
                <div v-if="formStatus === 'success'" class="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                  <div class="flex items-center">
                    <Icon name="heroicons:check-circle" class="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h3 class="text-lg font-semibold text-green-800">Besked sendt!</h3>
                      <p class="text-green-700">Tak for din henvendelse. Vi vender tilbage inden for 24 timer.</p>
                    </div>
                  </div>
                </div>

                <!-- Error Message -->
                <div v-if="formStatus === 'error'" class="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
                  <div class="flex items-center">
                    <Icon name="heroicons:exclamation-circle" class="h-8 w-8 text-red-600 mr-3" />
                    <div>
                      <h3 class="text-lg font-semibold text-red-800">Der opstod en fejl</h3>
                      <p class="text-red-700">{{ errorMessage || 'Prøv igen senere eller ring til os på +45 44 12 44 11' }}</p>
                    </div>
                  </div>
                </div>

                <form @submit.prevent="submitForm" class="space-y-8">
                  <!-- Name Fields -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="group">
                      <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-3">
                        Fornavn *
                      </label>
                      <div class="relative">
                        <input
                          type="text"
                          id="firstName"
                          v-model="form.firstName"
                          class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-lg group-hover:border-gray-300"
                          placeholder="Dit fornavn"
                          required
                          :disabled="isSubmitting"
                        >
                        <div class="absolute inset-y-0 right-0 flex items-center pr-6">
                          <Icon name="heroicons:user" class="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div class="group">
                      <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-3">
                        Efternavn *
                      </label>
                      <div class="relative">
                        <input
                          type="text"
                          id="lastName"
                          v-model="form.lastName"
                          class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-lg group-hover:border-gray-300"
                          placeholder="Dit efternavn"
                          required
                          :disabled="isSubmitting"
                        >
                        <div class="absolute inset-y-0 right-0 flex items-center pr-6">
                          <Icon name="heroicons:user" class="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Email Field -->
                  <div class="group">
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">
                      Email adresse *
                    </label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-lg group-hover:border-gray-300"
                        placeholder="din@email.dk"
                        required
                        :disabled="isSubmitting"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-6">
                        <Icon name="heroicons:envelope" class="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <!-- Organization Field -->
                  <div class="group">
                    <label for="organization" class="block text-sm font-semibold text-gray-700 mb-3">
                      Organisation/Institution
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="organization"
                        v-model="form.organization"
                        class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-lg group-hover:border-gray-300"
                        placeholder="Hvor arbejder du?"
                        :disabled="isSubmitting"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-6">
                        <Icon name="heroicons:building-office" class="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <!-- Message Field -->
                  <div class="group">
                    <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">
                      Din besked *
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="6"
                      class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 text-lg resize-none group-hover:border-gray-300"
                      placeholder="Fortæl os om jeres behov og hvordan vi kan hjælpe jer med at skabe en bedre fremtid sammen..."
                      required
                      :disabled="isSubmitting"
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="group relative w-full overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none shadow-2xl hover:shadow-teal-500/25 text-lg disabled:cursor-not-allowed"
                    >
                      <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div class="relative flex items-center justify-center">
                        <Icon 
                          v-if="!isSubmitting" 
                          name="heroicons:paper-airplane" 
                          class="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" 
                        />
                        <Icon 
                          v-if="isSubmitting" 
                          name="heroicons:arrow-path" 
                          class="h-6 w-6 mr-3 animate-spin" 
                        />
                        {{ isSubmitting ? 'Sender besked...' : 'Send besked' }}
                      </div>
                    </button>
                  </div>
                  
                  <p class="text-sm text-gray-500 text-center">
                    Vi behandler dine data fortroligt og svarer typisk inden for 24 timer
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white border-t border-gray-100">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-6 py-3 bg-teal-50 text-teal-600 rounded-full font-medium text-sm mb-6 shadow-sm">
              Ofte stillede spørgsmål
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Har du <span class="text-gradient">spørgsmål?</span>
            </h2>
            <p class="text-lg text-gray-600">
              Her er nogle af de spørgsmål vi ofte får - find ikke dit svar? Kontakt os endelig.
            </p>
          </div>

          <div class="space-y-6">
            <div class="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Hvor lang tid tager implementering af Go Mission?
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Implementeringsforløbet er typisk 3-6 måneder, afhængigt af institutionens størrelse og behov. 
                Vi tilpasser processen til jeres tempo og sikrer grundig forankring.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Får vi støtte efter implementering?
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Ja, vi tilbyder løbende support og vedligeholdelse. Vores mål er at sikre succesfuld forankring 
                og kontinuerlig værdi for jeres organisation.
              </p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Hvad koster Go Mission?
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Prisen afhænger af jeres specifikke behov og institutionens størrelse. 
                Kontakt os for et skræddersyet tilbud og demonstration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Kontakt Go Mission - Lad os skabe en bedre fremtid sammen',
  meta: [
    { name: 'description', content: 'Kontakt Go Mission for en uforpligtende samtale om vores digitale velfærdsløsning. Ring på +45 44 12 44 11 eller send en email til info@go-mission.com' }
  ]
})

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref('') // 'success', 'error', or ''
const errorMessage = ref('')

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  formStatus.value = ''
  errorMessage.value = ''

  try {
    const { data } = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    // Success
    formStatus.value = 'success'
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      message: ''
    }

  } catch (error) {
    // Error handling
    formStatus.value = 'error'
    
    if (error.statusCode === 400) {
      errorMessage.value = error.data?.message || 'Udfyld venligst alle påkrævede felter korrekt'
    } else {
      errorMessage.value = 'Der opstod en teknisk fejl. Prøv igen eller ring til os på +45 44 12 44 11'
    }
    
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 