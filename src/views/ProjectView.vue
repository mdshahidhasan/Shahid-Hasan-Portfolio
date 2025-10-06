<template>
  <main class="bg-gray-100 font-sans text-gray-900 flex-grow min-h-screen">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16" style="font-family: 'Playfair Display', serif">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Projects</h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of projects that showcase my passion for software development and
          problem-solving.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Tab Navigation -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex bg-white rounded-lg shadow-md p-1">
          <button
            @click="activeTab = 'professional'"
            :class="[
              'px-6 py-3 rounded-md font-semibold transition-all duration-200',
              activeTab === 'professional'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Professional Experience
          </button>
          <button
            @click="activeTab = 'personal'"
            :class="[
              'px-6 py-3 rounded-md font-semibold transition-all duration-200',
              activeTab === 'personal'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Personal Projects
          </button>
        </div>
      </div>

      <!-- Professional Projects Section -->
      <section v-if="activeTab === 'professional'" id="professional-projects">
        <div class="space-y-12">
          <div
            v-for="(project, index) in professionalProjects"
            :key="project.title"
            class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-yellow-50 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-yellow-200"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Personal Projects Section -->
      <section v-if="activeTab === 'personal'" id="personal-projects">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="project in personalProjects"
            :key="project.title"
            class="bg-white rounded-xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed flex-grow">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-yellow-50 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-yellow-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  title: string
  description: string
  technologies: string[]
}

const activeTab = ref<'professional' | 'personal'>('professional')

const professionalProjects = ref<Project[]>([
  {
    title: 'GarirNilam',
    description:
      'An innovative online platform designed for car auctions. Built with Vue.js for a responsive front-end and ASP.NET Core for a secure back-end, it enables seamless interactions among all stakeholders in the auction process.',
    technologies: ['ASP.NET Core', 'Vue.js', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Horologica',
    description:
      'A watch repair shop management system with admin, technician, and customer portals. Features include repair tracking, inventory management, and automated invoicing to streamline operations.',
    technologies: ['ASP.NET Core', 'Vue.js', 'MSSQL'],
  },
])

const personalProjects = ref<Project[]>([
  {
    title: 'HexaShop',
    description:
      'A full-stack e-commerce platform developed with Angular and ASP.NET Core. Includes JWT authentication, filtering, pagination, and Swagger API documentation, showcasing advanced web development skills.',
    technologies: ['ASP.NET Core', 'Angular', 'TypeScript', 'C#', 'MSSQL'],
  },
  {
    title: 'CholoGhuri',
    description:
      'An Android app for discovering tourist attractions and interesting places to visit, using Firebase for real-time data synchronization.',
    technologies: ['Java', 'Firebase', 'Android'],
  },
  {
    title: 'Shop Management',
    description:
      'A distributed database project for managing products across multiple sites, supporting operations like insertion, deletion, and searching using PL/SQL.',
    technologies: ['PL/SQL', 'Oracle 10g'],
  },
  {
    title: 'Event Management System',
    description:
      'A desktop application for event planning and management, featuring a Java/JavaFX UI and Microsoft SQL backend to streamline scheduling and organization.',
    technologies: ['Java', 'JavaFX', 'MSSQL'],
  },
])
</script>

<style>
/* Custom font stack similar to Apple's design but cross-platform compatible */
.font-sans {
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue',
    'Segoe UI', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
