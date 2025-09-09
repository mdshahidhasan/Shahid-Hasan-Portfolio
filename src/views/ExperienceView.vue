<template>
  <section id="experience" class="bg-white dark:bg-gray-800 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <h2
        class="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12"
      >
        Work Experience
      </h2>

      <!-- Experience List -->
      <div class="max-w-4xl mx-auto">
        <div
          v-for="(job, index) in workExperience"
          :key="index"
          class="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Logo -->
          <div class="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
            <img
              :src="job.logo"
              :alt="`${job.company} logo`"
              class="h-20 w-20 object-contain rounded-full bg-white p-2 border border-gray-200 dark:border-gray-700"
            />
          </div>

          <!-- Details -->
          <div class="flex-grow">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row justify-between items-start">
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {{ job.title }}
                </h3>
                <p class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {{ job.company }}
                </p>
              </div>
              <p
                class="flex-shrink-0 mt-2 sm:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {{ job.duration }}
              </p>
            </div>

            <!-- Technologies -->
            <div class="mt-3">
              <p class="font-semibold text-gray-700 dark:text-gray-300">
                <span class="underline">Technologies:</span>
                <span class="ml-2 font-normal text-gray-600 dark:text-gray-400">{{
                  job.technologies.join(', ')
                }}</span>
              </p>
            </div>

            <!-- Responsibilities -->
            <ul class="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li v-for="(item, i) in job.responsibilities" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// --- Image Imports ---
import arvyoLogo from '@/assets/logos/arvyo.png'

const workExperience = ref([
  {
    title: 'Software Engineer',
    company: 'Arvyo',
    duration: 'Apr 2024 – Present',
    logo: arvyoLogo,
    technologies: ['C#', 'ASP.NET Core', 'TypeScript', 'Vue.js', 'Docker', 'MSSQL', 'MySQL'],
    responsibilities: [
      'Develop and optimize key features in ASP.NET Core, including business logic, data processing, and API integration.',
      'Design and implement responsive, interactive user interfaces in Vue.js to improve user experience and performance.',
      'Debug and resolve critical issues, improving application stability and system performance.',
      'Explore and adopt new tools and technologies to enhance productivity and code quality.',
    ],
  },
])
</script>

<style scoped>
/* Scoped styles for this component, if needed */
</style>
