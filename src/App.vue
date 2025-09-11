<script setup lang="ts">
import SidebarNav from './components/layouts/SidebarNav.vue'
import LayoutFooter from './components/layouts/layout-footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans">
    <SidebarNav />

    <!-- Main Content Wrapper -->
    <!-- On large (lg) screens, a left margin of 64 units (ml-64) is added. -->
    <!-- This matches the sidebar's width (w-64) and pushes the content to the right. -->
    <div class="flex flex-col min-h-screen lg:ml-64">
      <!-- The main content area grows to fill available space, pushing the footer down. -->
      <main class="flex-grow p-4 sm:p-6 lg:p-8">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>

      <!-- Footer stays at the bottom
      <LayoutFooter />-->
    </div>
  </div>
</template>

<style>
/* Basic styles for transitions and layout */
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Page transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
