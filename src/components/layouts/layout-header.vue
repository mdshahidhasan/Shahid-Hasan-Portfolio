<template>
  <header class="bg-slate-50/80 sticky top-0 z-50 backdrop-blur-lg border-b border-slate-200">
    <div class="container mx-auto max-w-screen-lg px-6">
      <nav class="flex justify-between items-center h-20">
        <!-- Logo/Brand Name -->
        <a href="#home" class="text-xl font-bold text-gray-900">Shahid Hasan</a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 pb-1"
            >
              {{ link.name }}
            </a>
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
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
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
          <li v-for="link in navLinks" :key="link.id" class="w-full text-center">
            <a
              :href="`#${link.id}`"
              class="block py-3 font-semibold text-gray-700 hover:bg-slate-200 transition-colors duration-300"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavLink {
  name: string
  id: string
}

// Navigation links
const navLinks = ref<NavLink[]>([
  { name: 'Home', id: 'home' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
])

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Mobile menu slide-fade animation */
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
