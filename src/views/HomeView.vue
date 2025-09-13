<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-xl px-6 py-12 md:py-24">
      <section class="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        <!-- Left Column: Text Content -->
        <div class="md:w-3/5 text-center md:text-left">
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Hi, I'm <br />
            Md. Shahid Hasan
          </h1>
          <h2 class="mt-4 text-2xl text-gray-600">Software Engineer</h2>
          <p class="mt-6 max-w-xl mx-auto md:mx-0 text-gray-500 leading-relaxed">
            I'm a passionate and results-driven Software Engineer with a strong focus on building
            efficient, scalable, and user-friendly web applications. With experience in technologies
            like .NET Core, Vue.js, and Docker, I enjoy tackling complex problems and turning ideas
            into reality.
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
            <router-link
              to="/contact"
              class="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-transform duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </router-link>
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
              class="text-gray-700 hover:text-gray-500 transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
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
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Chatbot Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <button
        @click="toggleChat"
        class="bg-gray-900 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
      >
        <svg
          v-if="!isChatOpen"
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
        <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Chatbot Window -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isChatOpen"
        class="fixed bottom-24 right-6 w-full max-w-sm h-full max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50"
      >
        <!-- Chat Header -->
        <div class="bg-gray-900 text-white p-4 rounded-t-xl flex items-center">
          <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
          <h3 class="font-bold text-lg">AI Assistant</h3>
        </div>

        <!-- Messages -->
        <div ref="messageContainer" class="flex-grow p-4 overflow-y-auto">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="message.role === 'user' ? 'text-right' : 'text-left'"
          >
            <div
              class="inline-block px-4 py-2 my-1 rounded-lg"
              :class="
                message.role === 'user' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'
              "
            >
              {{ message.text }}
            </div>
          </div>
          <div v-if="isLoading" class="text-left">
            <div class="inline-block px-4 py-2 my-1 rounded-lg bg-gray-200 text-gray-800">
              <span class="animate-pulse">...</span>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="p-4 border-t border-gray-200">
          <form @submit.prevent="sendMessage" class="flex items-center">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask about my skills..."
              class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <button
              type="submit"
              class="ml-3 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
              :disabled="!userInput.trim() || isLoading"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import profileImage from '@/assets/photos/shahid.png'

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
      '<path d="M15.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path d="M18.8 3.7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path d="M18.8 20.3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path d="M8.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path d="M12.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path d="M5.2 20.3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path d="m15.8 5.5-3.6 2.8"></path><path d="m15.8 18.5-12.2 15"></path><path d="m5.5 9.3-1.6 4.4"></path>',
  },
  {
    name: 'Chess.com',
    href: 'https://www.chess.com/member/shahid_hasan',
    iconPath:
      '<path d="M18 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4h2v4h-2v2h4v-6h-2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2V8h-4zM8 20v-4h2a4 4 0 0 0 0-8h-2V4H4v16h4z"></path>',
  },
])

// --- Chatbot Logic ---
const isChatOpen = ref(false)
const userInput = ref('')
const isLoading = ref(false)
const messageContainer = ref<HTMLElement | null>(null)

interface Message {
  role: 'user' | 'model'
  text: string
}

const messages = ref<Message[]>([
  {
    role: 'model',
    text: "Hello! I'm Shahid's AI assistant. Ask me anything about his skills or projects.",
  },
])

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight
    }
  })
}

const sendMessage = async () => {
  const userMessage = userInput.value.trim()
  if (!userMessage || isLoading.value) return

  messages.value.push({ role: 'user', text: userMessage })
  userInput.value = ''
  isLoading.value = true
  scrollToBottom()

  const systemPrompt = `You are a helpful and friendly AI assistant for Md. Shahid Hasan's personal portfolio website. Your goal is to answer questions about him based on the following information. Keep your answers concise and professional, but with a friendly tone.

  **About Shahid:**
  - Name: Md. Shahid Hasan
  - Current Role: Software Engineer at Arvyo.
  - From: Lalmonirhat, Bangladesh.
  - Education: B.Sc. in Computer Science & Engineering from Ahsanullah University of Science & Technology.
  - Key Skills: C#, ASP.NET Core, Vue.js, TypeScript, Docker, SQL (MSSQL, MySQL), Angular, Java, Firebase.
  - Professional Projects:
    1. GarirNilam: An online car auction platform using ASP.NET Core and Vue.js.
    2. Horologica: A watch repair shop management system using ASP.NET Core and Vue.js.
  - Personal Projects:
    1. HexaShop: E-commerce site with Angular and ASP.NET Core.
    2. CholoGhuri: Android app for tourists using Java and Firebase.
  - Hobbies: Playing chess, traveling, and enjoying coffee (favorite shop is Tabaq).
  - Strengths: Fast learner, team player, problem solver, writes clean code.

  **Instructions:**
  - If a user asks a question you can't answer from the info above, politely say "I don't have that information, but you can reach out to Shahid directly via the contact page."
  - Do not invent information.
  - Encourage users to check out his project or contact pages for more details.`

  const apiKey = '' // Canvas will provide the key
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`

  const payload = {
    contents: [{ parts: [{ text: userMessage }] }],
    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    const result = await response.json()
    const candidate = result.candidates?.[0]

    if (candidate && candidate.content?.parts?.[0]?.text) {
      const modelResponse = candidate.content.parts[0].text
      messages.value.push({ role: 'model', text: modelResponse })
    } else {
      messages.value.push({
        role: 'model',
        text: "Sorry, I couldn't get a response. Please try again.",
      })
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error)
    messages.value.push({
      role: 'model',
      text: 'Sorry, something went wrong. Please try again later.',
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
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

/* Override stroke style for icons that are designed with fills */
a[aria-label='LeetCode'] svg,
a[aria-label='GitLab'] svg,
a[aria-label='Chess.com'] svg {
  fill: currentColor;
  stroke: none;
}
</style>
