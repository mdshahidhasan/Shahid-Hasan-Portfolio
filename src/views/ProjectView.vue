<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Projects</h1>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          A selection of projects that showcase my passion for software development and
          problem-solving.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Professional Projects Section -->
      <section id="professional-projects">
        <h2 class="text-3xl font-bold text-center mb-10">Professional Experience</h2>
        <div class="space-y-12">
          <div
            v-for="(project, index) in professionalProjects"
            :key="project.title"
            class="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
          >
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Personal Projects Section -->
      <section id="personal-projects" class="mt-20">
        <h2 class="text-3xl font-bold text-center mb-10">Personal Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="project in personalProjects"
            :key="project.title"
            class="bg-white rounded-xl shadow-lg p-8 flex flex-col transition-shadow duration-300 hover:shadow-2xl"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed flex-grow">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full"
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
