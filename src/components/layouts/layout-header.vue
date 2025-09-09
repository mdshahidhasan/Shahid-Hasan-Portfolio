<template>
  <header class="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Brand/Logo on the left -->
      <div class="text-2xl font-bold text-white">
        <a href="#home">Md. Shahid Hasan</a>
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex items-center space-x-6">
        <li v-for="link in navigationLinks" :key="link.name">
          <a
            :href="link.href"
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener noreferrer' : ''"
            class="hover:text-indigo-400 transition-colors duration-300"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Contact Me Button -->
      <a
        href="mailto:shahidhasanshourav@gmail.com"
        class="hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Contact Me
      </a>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu (Dropdown) -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-800 border-t border-gray-700">
      <ul class="flex flex-col items-center p-4 space-y-4">
        <li v-for="link in navigationLinks" :key="link.name" class="w-full text-center">
          <a
            :href="link.href"
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener noreferrer' : ''"
            @click="closeMobileMenu"
            class="block py-2 hover:text-indigo-400 transition-colors duration-300"
          >
            {{ link.name }}
          </a>
        </li>
        <li class="w-full">
          <a
            href="mailto:shahidhasanshourav@gmail.com"
            @click="closeMobileMenu"
            class="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// State for mobile menu visibility
const isMobileMenuOpen = ref(false)

// Navigation links data
const navigationLinks = ref([
  { name: 'Home', href: '#home', external: false },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shou/', external: true },
  { name: 'GitHub', href: 'https://github.com/shahid130', external: true },
  { name: 'GitLab', href: 'https://gitlab.com/shahid130', external: true },
  { name: 'CodeForces', href: 'https://codeforces.com/profile/sh0u', external: true },
])

// Function to toggle the mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Function to close the mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* You can add any component-specific styles here if needed. */
</style>
