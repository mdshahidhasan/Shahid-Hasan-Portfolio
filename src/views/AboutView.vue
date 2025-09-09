<template>
  <section id="about" class="bg-white dark:bg-gray-800 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <h2
        class="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12"
      >
        About Me
      </h2>

      <!-- About Me Content -->
      <div
        class="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg"
      >
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <img
            :src="profileImage"
            alt="Md. Shahid Hasan"
            class="h-48 w-48 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400 shadow-lg mx-auto"
          />
        </div>

        <!-- Bio Text -->
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Md. Shahid Hasan</h3>
          <p class="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
            Software Engineer | Full-Stack Developer
          </p>
          <p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I'm a passionate and results-driven Software Engineer based in Dhaka, Bangladesh,
            with a strong focus on building efficient, scalable, and user-friendly web applications.
            With experience in technologies like .NET Core, Vue.js, and Docker, I enjoy tackling
            complex problems and turning ideas into reality.
          </p>
          <p class="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a firm believer in continuous learning and am always exploring new tools and
            frameworks to enhance my skills. My goal is to contribute to meaningful projects and
            collaborate with talented teams to create innovative solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// --- Image Imports ---
// Make sure the path is correct based on your project structure.
import profileImage from '@/assets/logos/shahid.png'
</script>

<style scoped>
/* Scoped styles for this component, if needed */
</style>
