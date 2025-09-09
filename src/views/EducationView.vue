<template>
  <section id="education" class="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <h2
        class="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12"
      >
        Education
      </h2>

      <!-- Education History List -->
      <div class="max-w-3xl mx-auto space-y-8">
        <div
          v-for="(edu, index) in educationHistory"
          :key="index"
          class="flex items-start space-x-4 sm:space-x-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img
              :src="edu.logo"
              :alt="`${edu.institution} logo`"
              class="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full bg-white p-1 border border-gray-200 dark:border-gray-700"
            />
          </div>

          <!-- Details -->
          <div class="flex-grow">
            <div class="flex flex-col sm:flex-row justify-between items-start">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {{ edu.institution }}
              </h3>
              <p
                class="flex-shrink-0 mt-1 sm:mt-0 text-sm font-medium text-indigo-600 dark:text-indigo-400"
              >
                {{ edu.duration }}
              </p>
            </div>
            <p class="mt-1 text-md text-gray-600 dark:text-gray-300">
              {{ edu.degree }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// --- Image Imports ---
// In a Vite or Vue CLI project, this is the standard way to handle static assets.
// The build tool will automatically process these paths.
import austLogo from '@/assets/logos/aust.png'
import dccLogo from '@/assets/logos/dcc.png'
import ssLogo from '@/assets/logos/ss.png'

const educationHistory = ref([
  {
    institution: 'Ahsanullah University of Science & Technology',
    degree: 'B.Sc in Computer Science & Engineering',
    duration: '2019 – 2023',
    logo: austLogo,
  },
  {
    institution: 'Dhaka City College',
    degree: 'Higher Secondary School Certificate (Science)',
    duration: '2015 – 2017',
    logo: dccLogo,
  },
  {
    institution: 'Hatibandha S.S. High School',
    degree: 'Secondary School Certificate (Science)',
    duration: '2010 - 2015',
    logo: ssLogo,
  },
])
</script>

<style scoped>
/* Scoped styles for this component, if needed */
</style>
