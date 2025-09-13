<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutHeader from './components/layouts/layout-header.vue'
import LayoutFooter from './components/layouts/layout-footer.vue'
</script>

<template>
  <LayoutHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
  <LayoutFooter />
</template>

<style></style>
