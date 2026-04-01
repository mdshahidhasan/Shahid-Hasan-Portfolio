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
            v-for="project in professionalProjects"
            :key="project.title"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <div class="p-8">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <h3 class="text-2xl font-bold text-gray-900">{{ project.title }}</h3>
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  🔗 Live
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
                >
                  💻 Code
                </a>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-sky-50 text-sky-800 text-sm font-medium px-3 py-1 rounded-full border border-sky-200"
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
            class="bg-white rounded-xl shadow-md p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <h3 class="text-2xl font-bold text-gray-900">{{ project.title }}</h3>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                🔗 Live
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                💻 Code
              </a>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed flex-grow">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-sky-50 text-sky-800 text-sm font-medium px-3 py-1 rounded-full border border-sky-200"
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
  liveUrl?: string
  githubUrl?: string
}

const activeTab = ref<'professional' | 'personal'>('professional')

const professionalProjects = ref<Project[]>([
  {
    title: 'GarirNilam',
    description:
      'An innovative online platform designed for car auctions. Built with Vue.js for a responsive front-end and ASP.NET Core for a secure back-end, it enables seamless interactions among all stakeholders in the auction process.',
    technologies: ['ASP.NET Core', 'Vue.js', 'MySQL', 'Bootstrap'],
    liveUrl: 'https://www.garirnilam.com',
  },
  {
    title: 'Horologica',
    description:
      'A watch repair shop management system with admin, technician, and customer portals. Features include repair tracking, inventory management, and automated invoicing to streamline operations.',
    technologies: ['ASP.NET Core', 'Vue.js', 'MSSQL'],
    liveUrl: 'https://horologica.co',
  },
  {
    title: 'New Life Hospital',
    description:
      'A modern healthcare web application developed on a contractual basis, providing an intuitive interface for patients and administrators. The system streamlines hospital services, improves accessibility, and enhances overall user experience through a responsive frontend design.',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://www.newlifehospital.bd',
  },
])

const personalProjects = ref<Project[]>([
  {
    title: 'Ad Media Communication BD',
    description:
      'A business-oriented website built for a media and communication service provider, showcasing services and brand identity through a modern and responsive user interface. Emphasizes usability, performance, and structured content presentation.',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://www.admediacommunicationbd.com',
  },
  {
    title: 'HexaShop',
    description:
      'A full-stack e-commerce platform developed with Angular and ASP.NET Core. Includes JWT authentication, filtering, pagination, and Swagger API documentation, showcasing advanced web development skills.',
    technologies: ['ASP.NET Core', 'Angular', 'TypeScript', 'C#', 'MSSQL'],
    githubUrl: 'https://github.com/shahid130/HexaShop_Angular_ASP.NET_Core',
  },
  {
    title: 'Monsur for Feni 2',
    description:
      'A custom frontend web application developed for a regional initiative, focusing on clean design and user-friendly interaction. The project highlights responsive layout techniques and efficient UI structuring for real-world usability.',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://www.monsurforfeni2.com',
  },
  {
    title: 'CholoGhuri',
    description:
      'An Android app for discovering tourist attractions and interesting places to visit, using Firebase for real-time data synchronization.',
    technologies: ['Java', 'Firebase', 'Android'],
    githubUrl: 'https://github.com/shahid130',
  },
  {
    title: 'Shop Management',
    description:
      'A distributed database project for managing products across multiple sites, supporting operations like insertion, deletion, and searching using PL/SQL.',
    technologies: ['PL/SQL', 'Oracle 10g'],
    githubUrl: 'https://github.com/shahid130',
  },
  {
    title: 'Event Management System',
    description:
      'A desktop application for event planning and management, featuring a Java/JavaFX UI and Microsoft SQL backend to streamline scheduling and organization.',
    technologies: ['Java', 'JavaFX', 'MSSQL'],
    githubUrl: 'https://github.com/shahid130',
  },
])
</script>

<style>
.font-sans {
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue',
    'Segoe UI', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.project-link {
  font-size: 0.875rem;
  color: #6b7280;
  text-decoration: none;
  line-height: 1;
}

.project-link:hover {
  color: #4b5563;
  text-decoration: underline;
}
</style>
