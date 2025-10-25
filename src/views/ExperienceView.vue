<template>
  <main class="bg-slate-200 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-10 md:mb-13" style="font-family: 'Playfair Display', serif">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Work Experience</h1>
        <p class="mt-4 text-lg text-gray-500">My professional journey and key contributions.</p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Experience Timeline/List -->
      <div class="space-y-12">
        <div
          v-for="(job, index) in workExperience"
          :key="index"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
        >
          <!-- Left Side: Company Info & Logo -->
          <div
            class="md:w-1/3 bg-slate-100 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-200"
          >
            <img
              :src="job.logo"
              :alt="`${job.company} Logo`"
              class="w-24 h-24 object-contain rounded-full shadow-md mb-4 bg-white p-2"
            />
            <h3 class="text-2xl font-bold text-gray-900">{{ job.company }}</h3>
            <p class="text-gray-500 font-medium">{{ job.duration }}</p>
          </div>

          <!-- Right Side: Job Details -->
          <div class="md:w-2/3 p-6 md:p-8" style="font-family: 'Playfair Display', serif">
            <h2 class="text-2xl font-bold text-gray-800 mb-3">{{ job.title }}</h2>

            <!-- Responsibilities List -->
            <ul class="space-y-3 list-disc list-inside text-gray-600 mb-6">
              <li v-for="(task, i) in job.responsibilities" :key="i">{{ task }}</li>
            </ul>

            <!-- Technologies Tags -->
            <div>
              <h4 class="font-semibold text-gray-700 mb-3">Technologies Used:</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in job.technologies"
                  :key="tech"
                  class="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// --- Image Import ---
// Ensure this path is correct in your project structure.
import arvyoLogo from '@/assets/logos/arvyo.png'

// --- TypeScript Interface ---
interface WorkExperience {
  title: string
  company: string
  duration: string
  logo: string // The type is string because it holds the imported image path.
  technologies: string[]
  responsibilities: string[]
}

// --- Component Data ---
const workExperience = ref<WorkExperience[]>([
  {
    title: 'Software Engineer',
    company: 'Arvyo',
    duration: 'Apr 2024 – Present',
    logo: arvyoLogo,
    technologies: ['C#', '.NET Core', 'TypeScript', 'Vue.js', 'Docker', 'MSSQL', 'MySQL'],
    responsibilities: [
      'Built and optimized backend services with ASP.NET Core and robust REST APIs.',
      'Created dynamic, responsive UIs with Vue.js and TypeScript.',
      'Integrated Cloudflare R2, Azure Blob and Mailgun for storage and notifications.',
      'Resolved full-stack performance issues and bugs, improving stability.',
      'Deployed apps with Docker for consistent environments.',
      'Adopted new tools and patterns to boost development efficiency.',
    ],
  },
  // You can add more job experiences here in the future
])
</script>

<style scoped>
/* You can add any additional scoped styles here if needed. */
</style>
