<template>
  <footer class="bg-slate-50 border-t border-slate-200">
    <div class="container mx-auto max-w-screen-xl px-6 py-5">
      <p class="text-center text-sm text-gray-500">
        &copy; {{ currentYear }} Md. Shahid Hasan. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// This computed property will always display the current year automatically.
const currentYear = new Date().getFullYear()
</script>
