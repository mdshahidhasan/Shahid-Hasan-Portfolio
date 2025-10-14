<template>
  <main class="bg-gray-200 from-slate-300 via-white to-slate-100 flex-grow pt-20">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          class="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          style="font-family: 'Playfair Display', serif"
        >
          About Me
        </h1>
        <div
          class="w-24 h-1.5 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 mx-auto rounded-full"
        ></div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Left Side - Story & Quote -->
        <div class="space-y-8">
          <!-- My Journey Card -->
          <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2
              class="text-3xl font-bold text-gray-900 mb-6"
              style="font-family: 'Playfair Display', serif"
            >
              My Journey
            </h2>

            <div class="space-y-5 text-gray-700 leading-relaxed">
              <p class="text-xl font-semibold text-gray-900">
                From curious student to passionate professional 🚀
              </p>
              <p>
                My journey into software engineering began during my Computer Science & Engineering
                studies, where I discovered my passion for transforming complex problems into
                elegant, working solutions. What started as curiosity about how things work has
                evolved into a career dedicated to building scalable, efficient applications.
              </p>
              <p>
                Currently, I work as a Software Engineer at
                <span class="font-semibold text-gray-900">Arvyo</span>, where I specialize in
                full-stack development using ASP.NET Core for robust backend systems and Vue.js for
                intuitive, responsive user interfaces. I believe that great software is not just
                about making things work—it's about making them work beautifully.
              </p>
              <p>
                Beyond the code, I'm a strategic thinker who loves chess, a problem-solver who
                thrives on challenges, and someone who believes that the best ideas often come over
                a good cup of coffee at my favorite spot, Tabaq. Every line of code I write reflects
                my commitment to clean architecture, maintainability, and user-centric design.
              </p>
            </div>
          </div>

          <!-- Quote Card -->
          <div
            class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-8 md:p-10 text-white"
          >
            <div class="flex items-start gap-4">
              <svg
                class="w-12 h-12 text-gray-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                />
              </svg>
              <div>
                <p class="text-xl italic leading-relaxed mb-4">
                  "The best way to predict the future is to create it."
                </p>
                <p class="text-gray-400 text-sm font-medium">— My development philosophy</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Principles Cards -->
        <div>
          <h2
            class="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left"
            style="font-family: 'Playfair Display', serif"
          >
            What Drives Me
          </h2>

          <div class="grid gap-6">
            <div
              v-for="principle in principles"
              :key="principle.title"
              class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            >
              <div class="flex items-start gap-5">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300"
                >
                  <svg
                    class="w-8 h-8 text-gray-700"
                    :fill="principle.fill"
                    :stroke="principle.stroke"
                    :stroke-width="principle.strokeWidth"
                    viewBox="0 0 24 24"
                  >
                    <path
                      :stroke-linecap="principle.strokeLinecap || undefined"
                      :stroke-linejoin="principle.strokeLinejoin || undefined"
                      :d="principle.iconPath"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ principle.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    {{ principle.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const principles = ref([
  {
    title: 'Clean Code',
    description:
      'Writing maintainable, readable code that stands the test of time and makes other developers smile.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  },
  {
    title: 'Problem Solving',
    description:
      'Tackling complex challenges with creativity and logic, turning obstacles into opportunities.',
    iconPath:
      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  },
  {
    title: 'Strategic Thinking',
    description:
      'Applying chess-like strategy to software design, always thinking several moves ahead.',
    iconPath:
      'M19 22H5v-2h14v2zM12 2c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72V7h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v2h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V15h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-1V5.72c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2z',
    fill: 'currentColor',
    stroke: 'none',
    strokeWidth: 0,
    strokeLinecap: undefined,
    strokeLinejoin: undefined,
  },
  {
    title: 'User-Centric Design',
    description:
      'Building applications that put users first, creating intuitive and delightful experiences.',
    iconPath:
      'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  },
])
</script>

<style scoped></style>
