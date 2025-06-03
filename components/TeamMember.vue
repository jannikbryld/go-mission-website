<template>
  <div class="group text-center">
    <div class="space-y-8">
      <div class="relative inline-block">
        <img 
          :src="member.image" 
          :alt="member.name"
          class="team-photo-clean"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
          {{ member.name }}
        </h3>
        <div class="inline-block px-5 py-2.5 bg-white rounded-full font-medium text-sm shadow-sm" :class="member.badgeColor">
          {{ member.role }}
        </div>
        <p class="text-gray-600 leading-relaxed max-w-sm mx-auto text-base lg:text-lg">
          {{ member.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props for the team member data
defineProps({
  member: {
    type: Object,
    required: true,
    validator: (member) => {
      return member.name && member.role && member.description && member.image && member.badgeColor
    }
  }
})
</script> 