<template>
  <main class="bg-white font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg py-12 md:py-20 px-4">
      <!-- Section 1: My Story -->
      <section class="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <!-- Left Column - Slides from left -->
        <div
          ref="leftColumn"
          class="lg:w-3/5 bg-indigo-50 rounded-2xl p-10 shadow-sm opacity-0"
          style="transform: translateX(-100px)"
        >
          <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            My Story
          </h1>
          <h2 class="mb-6 text-2xl font-semibold text-indigo-600">From Curiosity to Code 🚀</h2>
          <div class="space-y-5 text-lg text-slate-700 leading-relaxed">
            <p>
              My journey into tech started during my Computer Science studies, driven by a simple
              question: <em>"How does this really work?"</em> That curiosity quickly evolved into a
              passion for transforming complex problems into elegant, scalable solutions.
            </p>
            <p>
              Today, I'm a Software Engineer at
              <strong class="font-semibold text-slate-900">Arvyo</strong>, where I build full-stack
              applications. I craft robust backend systems with
              <strong class="font-semibold text-indigo-600">ASP.NET Core</strong> and create
              intuitive, responsive user experiences with
              <strong class="font-semibold text-emerald-600">Vue.js</strong>. My philosophy is
              simple: great software isn't just functional—it's <em>beautifully</em> functional.
            </p>
            <p>
              I approach development like a game of chess (a personal passion): always thinking
              several moves ahead, prioritizing clean architecture, and designing for the long term.
              I'm a firm believer in user-centric design, and I find my best solutions often surface
              over a good cup of coffee (usually at Tabaq).
            </p>
          </div>
        </div>

        <!-- Right Column: What Drives Me - Slides from right -->
        <div
          ref="rightColumn"
          class="lg:w-2/5 bg-slate-50 rounded-2xl p-8 shadow-sm opacity-0"
          style="transform: translateX(100px)"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                :class="['flex items-center justify-center w-12 h-12 mb-3 rounded-full', card.bg]"
              >
                <component :is="card.icon" class="w-7 h-7" :class="card.color" />
              </div>
              <h3 class="mb-1 text-lg font-semibold text-slate-900">
                {{ card.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ card.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Core Philosophy - Slides from bottom -->
      <section
        ref="quoteSection"
        class="mt-16 text-center bg-indigo-50 rounded-2xl py-12 px-6 opacity-0"
        style="transform: translateY(100px)"
      >
        <span class="text-6xl font-bold text-indigo-200">"</span>
        <blockquote class="max-w-3xl mx-auto -mt-4">
          <p class="text-2xl italic font-medium text-slate-900 sm:text-3xl leading-relaxed">
            The best way to predict the future is to create it.
          </p>
        </blockquote>
        <cite class="inline-block mt-6 not-italic">
          <span class="block text-lg font-semibold text-indigo-700">
            My Development Philosophy
          </span>
          <span class="block text-slate-600">
            I believe in actively building the robust, user-friendly solutions I want to see in the
            world.
          </span>
        </cite>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from '@motionone/dom'
import { Code2, Puzzle, Castle, HeartHandshake } from 'lucide-vue-next'

const leftColumn = ref<HTMLElement | null>(null)
const rightColumn = ref<HTMLElement | null>(null)
const quoteSection = ref<HTMLElement | null>(null)

const cards = [
  {
    title: 'Clean Code',
    desc: 'Writing maintainable, readable code that stands the test of time.',
    icon: Code2,
    bg: 'bg-indigo-100',
    color: 'text-indigo-600',
  },
  {
    title: 'Problem Solving',
    desc: 'Tackling complex challenges with creativity and logic.',
    icon: Puzzle,
    bg: 'bg-emerald-100',
    color: 'text-emerald-600',
  },
  {
    title: 'Strategic Thinking',
    desc: 'Applying chess-like strategy to software design, always thinking ahead.',
    icon: Castle,
    bg: 'bg-sky-100',
    color: 'text-sky-600',
  },
  {
    title: 'User-Centric',
    desc: 'Building applications that put users first for an intuitive experience.',
    icon: HeartHandshake,
    bg: 'bg-rose-100',
    color: 'text-rose-600',
  },
]

let observers: IntersectionObserver[] = []

const animateIn = (element: HTMLElement, fromX: number = 0, fromY: number = 0) => {
  animate(
    element,
    {
      opacity: [0, 1],
      transform:
        fromX !== 0
          ? [`translateX(${fromX}px)`, 'translateX(0)']
          : [`translateY(${fromY}px)`, 'translateY(0)'],
    },
    { duration: 0.8, easing: 'ease-out' },
  )
}

const animateOut = (element: HTMLElement, toX: number = 0, toY: number = 0) => {
  animate(
    element,
    {
      opacity: [1, 0],
      transform:
        toX !== 0
          ? ['translateX(0)', `translateX(${toX}px)`]
          : ['translateY(0)', `translateY(${toY}px)`],
    },
    { duration: 0.5, easing: 'ease-in' },
  )
}

onMounted(() => {
  const options = {
    threshold: 0.2,
    rootMargin: '0px',
  }

  // Observer for left column
  if (leftColumn.value) {
    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateIn(entry.target as HTMLElement, -100)
        } else if (entry.boundingClientRect.top > 0) {
          animateOut(entry.target as HTMLElement, -100)
        }
      })
    }, options)
    leftObserver.observe(leftColumn.value)
    observers.push(leftObserver)
  }

  // Observer for right column
  if (rightColumn.value) {
    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateIn(entry.target as HTMLElement, 100)
        } else if (entry.boundingClientRect.top > 0) {
          animateOut(entry.target as HTMLElement, 100)
        }
      })
    }, options)
    rightObserver.observe(rightColumn.value)
    observers.push(rightObserver)
  }

  // Observer for quote section
  if (quoteSection.value) {
    const quoteObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateIn(entry.target as HTMLElement, 0, 100)
        } else if (entry.boundingClientRect.top > 0) {
          animateOut(entry.target as HTMLElement, 0, 100)
        }
      })
    }, options)
    quoteObserver.observe(quoteSection.value)
    observers.push(quoteObserver)
  }
})

onUnmounted(() => {
  observers.forEach((observer) => observer.disconnect())
})
</script>

<style scoped>
blockquote {
  position: relative;
}
blockquote::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  width: 4rem;
  height: 2px;
  background: #6366f1;
  transform: translateX(-50%);
  border-radius: 1px;
}
</style>
