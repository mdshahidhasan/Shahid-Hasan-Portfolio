<template>
  <main class="bg-gray-200 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-16 md:mb-20">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          style="font-family: 'Playfair Display', serif"
        >
          Skills & Expertise
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical capabilities, tools, and professional strengths
          that drive my work as a full-stack developer.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Technical Skills Section -->
      <div class="mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
          style="font-family: 'Playfair Display', serif"
        >
          Technical Skills
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Backend Development -->
          <div
            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300"
              >
                <svg
                  class="w-7 h-7 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Backend Development</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in backendSkills"
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:from-gray-900 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Frontend Development -->
          <div
            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300"
              >
                <svg
                  class="w-7 h-7 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Frontend Development</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in frontendSkills"
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:from-gray-900 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Programming Languages -->
          <div
            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300"
              >
                <svg
                  class="w-7 h-7 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Programming Languages</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in programmingLanguages"
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:from-gray-900 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Databases -->
          <div
            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300"
              >
                <svg
                  class="w-7 h-7 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Databases</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in databases"
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:from-gray-900 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Developer Tools -->
          <div
            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group lg:col-span-2"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300"
              >
                <svg
                  class="w-7 h-7 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Developer Tools</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in developerTools"
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:from-gray-900 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div class="mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
          style="font-family: 'Playfair Display', serif"
        >
          Professional Soft Skills
        </h2>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="skill in softSkills"
              :key="skill.name"
              class="bg-white rounded-2xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div
                class="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300"
              >
                <svg
                  class="w-8 h-8 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  v-html="skill.icon"
                ></svg>
              </div>
              <h4 class="text-lg font-bold text-gray-900">{{ skill.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const programmingLanguages = ref([
  'C#',
  'TypeScript',
  'JavaScript',
  'C/C++',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'Assembly',
])

const frontendSkills = ref([
  'Vue.js',
  'Angular',
  'Nuxt',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Element Plus',
])

const backendSkills = ref(['ASP.NET Core', '.NET Framework', 'C#', 'Entity Framework', 'REST APIs'])

const databases = ref(['MySQL', 'Microsoft SQL Server', 'Oracle 10g', 'MongoDB'])

const developerTools = ref([
  'Git',
  'Docker',
  'Postman',
  'Visual Studio',
  'VS Code',
  'Android Studio',
  'NetBeans',
  'Cursor',
  'Dbeaver',
])

interface SoftSkill {
  name: string
  icon: string
}

const softSkills = ref<SoftSkill[]>([
  {
    name: 'Problem Solving',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>',
  },
  {
    name: 'Team Management',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>',
  },
  {
    name: 'Adaptability',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>',
  },
  {
    name: 'Time Management',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
  },
  {
    name: 'Collaboration',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>',
  },
  {
    name: 'Organization',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>',
  },
  {
    name: 'Project Management',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>',
  },
  {
    name: 'Leadership',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>',
  },
])
</script>

<style scoped>
/* Subtle background pattern */
main {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(148, 163, 184, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(148, 163, 184, 0.05) 0%, transparent 50%);
}
</style>
