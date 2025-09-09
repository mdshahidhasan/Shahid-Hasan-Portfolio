<template>
  <footer class="bg-gray-800 text-white py-6 mt-auto">
    <div class="container mx-auto text-center">
      <p>&copy; {{ currentYear }} MyPortfolio. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// A computed property to ensure the year is always current.
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* You can add component-specific styles here if needed. */
</style>
