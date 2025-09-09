<template>
  <div>
    <!-- Mobile Header and Menu Button -->
    <header
      class="lg:hidden sticky top-0 bg-white dark:bg-gray-800 shadow-md z-20 flex justify-between items-center p-4"
    >
      <div class="text-xl font-bold text-gray-800 dark:text-white">Md. Shahid Hasan</div>
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="text-gray-600 dark:text-gray-300 focus:outline-none"
      >
        <svg
          class="h-6 w-6"
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
    </header>

    <!-- Sidebar for Desktop -->
    <aside
      class="hidden lg:flex flex-col w-64 h-screen bg-white dark:bg-gray-800 shadow-xl fixed top-0 left-0 z-10 p-6"
    >
      <div class="text-center mb-10">
        <h1 class="text-2xl font-extrabold text-gray-900 dark:text-white">Md. Shahid Hasan</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
      </div>
      <nav class="flex flex-col space-y-2">
        <!-- Replaced <a> tag with <RouterLink> -->
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          active-class="bg-indigo-600 text-white shadow-lg"
          class="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </aside>

    <!-- Collapsible Menu for Mobile -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
      @click="isMobileMenuOpen = false"
    ></div>
    <div
      :class="[
        'lg:hidden fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-xl z-40 transform transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="p-6">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-8">Navigation</h2>
        <nav class="flex flex-col space-y-3">
          <!-- Replaced <a> tag with <RouterLink> -->
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            active-class="bg-indigo-600 text-white"
            class="px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {{ item.name }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

// Use an array of objects for easier binding with RouterLink
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Research', path: '/research' },
  { name: 'Contact', path: '/contact' },
]

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
