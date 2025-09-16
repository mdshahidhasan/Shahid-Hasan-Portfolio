<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm"
  >
    <div class="container mx-auto max-w-screen-lg px-6">
      <nav class="flex justify-between items-center h-20">
        <!-- Logo/Brand Name -->
        <a
          href="#home"
          @click="(event) => scrollToSection(event, 'home')"
          class="text-xl font-bold text-gray-900 focus:outline-none"
        >
          Shahid Hasan
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              @click="(event) => scrollToSection(event, link.id)"
              class="font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 pb-1 focus:outline-none"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click.stop="toggleMobileMenu"
            class="text-gray-800 focus:outline-none p-2 relative z-10"
            :class="{ 'text-gray-900': isMobileMenuOpen }"
            type="button"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
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
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        class="md:hidden fixed inset-x-0 top-20 bg-white/90 backdrop-blur-lg border-b border-slate-200/30 shadow-lg z-50"
        @click.stop
      >
        <ul class="flex flex-col items-center">
          <li v-for="link in navLinks" :key="link.id" class="w-full text-center">
            <a
              :href="`#${link.id}`"
              @click.stop="(event) => scrollToSection(event, link.id)"
              class="block py-4 px-6 font-semibold text-gray-700 hover:bg-white/20 transition-colors duration-200 focus:outline-none"
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

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

// Smooth scroll to section with offset for fixed header
const scrollToSection = (event: Event, sectionId: string) => {
  event.preventDefault()
  closeMobileMenu()

  nextTick(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Height of the fixed header
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  })
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  const header = target.closest('header')

  if (isMobileMenuOpen.value && !header) {
    closeMobileMenu()
  }
}

// Close mobile menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Close mobile menu on window resize (when switching from mobile to desktop)
const handleResize = () => {
  if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  // Use timeout to avoid immediate closing
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    window.addEventListener('resize', handleResize)
  }, 100)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Ensure content doesn't go under the fixed header on mobile only */
@media (max-width: 767px) {
  body {
    padding-top: 80px; /* Match header height */
  }

  /* Alternative: Add this class to your main content wrapper on mobile */
  .main-content {
    padding-top: 80px; /* Match header height */
  }
}

/* Mobile menu slide-fade animation */
.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
