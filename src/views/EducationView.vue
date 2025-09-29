<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Education</h1>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          My academic background and qualifications in the field of computer science.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Simplified Education List -->
      <div class="max-w-2xl mx-auto">
        <div class="space-y-8">
          <div
            v-for="edu in educationHistory"
            :key="edu.institution"
            class="bg-white rounded-xl shadow-lg p-6 w-full transition-shadow duration-300 hover:shadow-xl"
          >
            <div class="flex items-center gap-4">
              <img
                :src="edu.logo"
                :alt="`${edu.institution} logo`"
                class="w-12 h-12 flex-shrink-0"
              />
              <div>
                <h3 class="text-xl font-bold">{{ edu.institution }}</h3>
                <p class="text-gray-500 text-sm font-medium">{{ edu.duration }}</p>
              </div>
            </div>
            <p class="mt-4 text-gray-700 pl-[64px]">{{ edu.degree }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// --- Import Logos ---
// Make sure these paths are correct relative to your project structure.
import austLogo from '@/assets/logos/aust.png'
import dccLogo from '@/assets/logos/dcc.png'
import ssLogo from '@/assets/logos/ss.png'
import nsuLogo from '@/assets/logos/nsu.png'

interface Education {
  institution: string
  duration: string
  degree: string
  logo: string
}

const educationHistory = ref<Education[]>([
  {
    institution: 'North South University',
    duration: '2025 – Present',
    degree: 'Master of Business Administration (MBA)',
    logo: nsuLogo,
  },
  {
    institution: 'Ahsanullah University of Science & Technology',
    duration: '2019 – 2023',
    degree: 'B.Sc in Computer Science & Engineering',
    logo: austLogo,
  },
  {
    institution: 'Dhaka City College',
    duration: '2015 – 2017',
    degree: 'Higher Secondary School Certificate (Science)',
    logo: dccLogo,
  },
  {
    institution: 'Hatibandha S.S. High School',
    duration: '2010 - 2015',
    degree: 'Secondary School Certificate (Science)',
    logo: ssLogo,
  },
])
</script>

<style scoped>
/* Scoped styles can be added here if needed for more complex effects */
</style>
