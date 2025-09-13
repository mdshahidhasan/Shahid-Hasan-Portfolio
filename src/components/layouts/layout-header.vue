<template>
  <header class="bg-slate-50/80 sticky top-0 z-50 backdrop-blur-lg border-b border-slate-200">
    <div class="container mx-auto max-w-screen-xl px-6">
      <nav class="flex justify-between items-center h-20">
        <!-- Logo/Brand Name -->
        <router-link :to="{ name: 'home' }" class="text-xl font-bold text-gray-900">
          Shahid Hasan
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="link in navLinks" :key="link.name">
            <!-- Use RouterLink for internal navigation -->
            <router-link
              :to="link.path"
              class="font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 pb-1"
              active-class="text-gray-900 border-b-2 border-gray-900"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-800 focus:outline-none">
            <svg
              v-if="!isMobileMenuOpen"
              class="w-7 h-7"
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
            <svg
              v-else
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Navigation Menu (Dropdown) -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-slate-50 absolute w-full border-b border-slate-200 shadow-lg"
      >
        <ul class="flex flex-col items-center py-4">
          <li v-for="link in navLinks" :key="link.name" class="w-full text-center">
            <router-link
              :to="link.path"
              class="block py-3 font-semibold text-gray-700 hover:bg-slate-200 transition-colors duration-300"
              active-class="text-gray-900 bg-slate-200"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// It's good practice to import RouterLink, though not strictly required in templates
import { RouterLink } from 'vue-router'

// Define a type for our navigation links for better type safety
interface NavLink {
  name: string
  path: string
}

// State for mobile menu visibility
const isMobileMenuOpen = ref(false)

// Navigation links derived from your router configuration
const navLinks = ref<NavLink[]>([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
  // You can add other links like Education or Research if desired
  // { name: 'Education', path: '/education' },
  // { name: 'Research', path: '/research' },
])

// Function to toggle the mobile menu's state
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Function to close the mobile menu, useful after a link is clicked
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Scoped styles for the mobile menu transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
