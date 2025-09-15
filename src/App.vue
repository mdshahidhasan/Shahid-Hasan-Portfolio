<script setup lang="ts">
import LayoutHeader from './components/layouts/layout-header.vue'
import LayoutFooter from './components/layouts/layout-footer.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ExperienceView from './views/ExperienceView.vue'
import EducationView from './views/EducationView.vue'
import ResearchView from './views/ResearchView.vue'
import ProjectView from './views/ProjectView.vue'
import SkillView from './views/SkillView.vue'
import ContactView from './views/ContactView.vue'
</script>

<template>
  <LayoutHeader />
  <main>
    <div id="home"><HomeView /></div>
    <div id="about"><AboutView /></div>
    <div id="experience"><ExperienceView /></div>
    <div id="projects"><ProjectView /></div>
    <div id="skills"><SkillView /></div>
    <div id="education"><EducationView /></div>
    <ResearchView />
    <div id="contact"><ContactView /></div>
  </main>
  <LayoutFooter />
</template>

<style></style>
