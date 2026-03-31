<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow pt-20">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <section class="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        <!-- Left Column: Text Content -->
        <div class="md:w-3/5 text-center md:text-left">
          <h1
            class="text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            style="font-family: 'Playfair Display', serif"
          >
            Hi, I'm <br />
            Md. Shahid Hasan
          </h1>
          <h2 class="mt-4 text-2xl text-gray-600" style="font-family: 'Playfair Display', serif">
            Software Engineer
          </h2>
          <p class="mt-6 max-w-xl mx-auto md:mx-0 text-gray-500 leading-relaxed">
            A Full Stack Software Engineer specializing in ASP.NET Core and Vue.js. I build scalable
            web applications with clean architecture and seamless user experiences. Passionate about
            learning, solving complex problems, and delivering impactful solutions.
          </p>

          <!-- Action Buttons -->
          <div class="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/shahid-hasan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-transform duration-300 hover:-translate-y-1"
            >
              Download My Resume
            </a>
            <a
              href="#contact"
              class="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-transform duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>

          <!-- Social Media Links -->
          <div class="mt-12 flex justify-center md:justify-start items-center gap-6">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <svg
                class="w-6 h-6"
                :class="{
                  'fill-current': ['LeetCode', 'GitLab', 'Chess.com'].includes(social.name),
                }"
                viewBox="0 0 24 24"
                v-html="social.iconPath"
              ></svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="md:w-2/5 relative flex justify-center">
          <div class="w-72 h-72 lg:w-96 lg:h-96 relative">
            <div
              class="absolute inset-0 bg-white rounded-full p-3 shadow-inner ring-2 ring-gray-200"
            >
              <img
                :src="profileImage"
                alt="A photo of Md. Shahid Hasan"
                class="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Chatbot Component -->
    <Chatbot />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import profileImage from '@/assets/photos/shahid.webp'
import Chatbot from '@/components/chatbot.vue'

// --- Social Links Data ---
interface SocialLink {
  name: string
  href: string
  iconPath: string
}

const socials = ref<SocialLink[]>([
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shou/',
    iconPath:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/shahid130',
    iconPath:
      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
  },
  {
    name: 'GitLab',
    href: 'https://gitlab.com/shahid130',
    iconPath:
      '<path d="m22.65 14.36-1.51-4.63a.51.51 0 0 0-.94 0l-1.51 4.63-4.13-2.69a.5.5 0 0 0-.6 0l-4.13 2.69-1.51-4.63a.51.51 0 0 0-.94 0L4.35 14.36a.5.5 0 0 0 .19.64l7.46 4.87a.5.5 0 0 0 .6 0l7.46-4.87a.5.5 0 0 0 .19-.64Z"></path>',
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/sh0u',
    iconPath:
      '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/shahidhasanshourav/',
    iconPath:
      '<path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>',
  },
  {
    name: 'Chess.com',
    href: 'https://www.chess.com/member/shahid_hasan',
    iconPath:
      '<path d="M11 3v2.07c-.522.07-1.027.19-1.51.358L8.49 4.43l-1.414 1.414 1 1c-.16.49-.27.998-.33 1.523H5.001v2h2.745c.06.525.17 1.033.33 1.523l-1 1 1.414 1.414 1-1c.483.168.988.288 1.51.358V15.5h2v-2.251c.522-.07 1.027-.19 1.51-.358l1 1 1.414-1.414-1-1c.16-.49.27-.998.33-1.523h2.745v-2h-2.745c-.06-.525-.17-1.033-.33-1.523l1-1-1.414-1.414-1 1c-.483-.168-.988-.288-1.51-.358V3h-2zm0 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-8 8v2h18v-2H3z"></path>',
  },
])
</script>

<style scoped>
/* Scoped styles for SVG icons */
svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Override for filled icons */
svg.fill-current {
  fill: currentColor;
  stroke: none;
  stroke-width: 0;
}
</style>
