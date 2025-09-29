<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Skills & Expertise</h1>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          A summary of my technical capabilities and professional strengths.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Skills Grid -->
      <div class="space-y-10">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="bg-white rounded-xl shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl"
        >
          <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ category.title }}</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="bg-slate-100 text-slate-700 text-sm sm:text-base font-medium px-4 py-2 rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories = ref<SkillCategory[]>([
  {
    title: 'Programming Languages',
    skills: [
      'C#',
      'TypeScript',
      'C/C++',
      'Java',
      'JavaScript',
      'Python',
      'HTML',
      'CSS',
      'Assembly',
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      'Vue.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
      'Element Plus',
    ],
  },
  {
    title: 'Backend Development',
    skills: ['ASP.NET Core', '.NET Framework', 'C#'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Microsoft SQL Server', 'Oracle 10g', 'MongoDB'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'Docker', 'Postman', 'Visual Studio', 'VS Code', 'Android Studio', 'NetBeans'],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Problem-solving',
      'Adaptability',
      'Team Management',
      'Time Management',
      'Collaboration',
      'Organization',
      'Project Management',
      'Leadership',
    ],
  },
])
</script>
