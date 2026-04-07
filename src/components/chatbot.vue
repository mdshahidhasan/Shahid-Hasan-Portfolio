<template>
  <div>
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
      enter-active-class="transition-all ease-out duration-500"
      enter-from-class="chat-enter-from"
      enter-to-class="chat-enter-to"
      leave-active-class="transition-all ease-in duration-400"
      leave-from-class="chat-leave-from"
      leave-to-class="chat-leave-to"
    >
      <div
        v-if="isChatOpen"
        class="fixed top-6 bottom-6 right-6 left-12 md:left-auto md:top-auto md:bottom-24 md:right-6 md:w-full md:max-w-sm md:h-full md:max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50"
      >
        <!-- Chat Header -->
        <div class="bg-gray-900 text-white p-4 rounded-t-xl flex items-center justify-between">
          <div class="flex items-center">
            <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <h3 class="font-bold text-lg">AI Assistant</h3>
          </div>
          <button @click="toggleChat" class="md:hidden text-white hover:text-gray-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messageContainer" class="flex-grow p-4 overflow-y-auto">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="message.role === 'user' ? 'text-right' : 'text-left'"
          >
            <div
              class="inline-block px-4 py-2 my-1 rounded-lg max-w-[85%] break-words"
              :class="
                message.role === 'user' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'
              "
            >
              {{ message.text }}
            </div>
          </div>

          <!-- Example Questions (only show when no user messages yet) -->
          <div v-if="messages.length === 1" class="mt-4 space-y-2">
            <p class="text-xs text-gray-500 mb-2">Try asking:</p>
            <button
              v-for="(question, index) in exampleQuestions"
              :key="index"
              @click="askExampleQuestion(question)"
              class="block w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors"
            >
              {{ question }}
            </button>
          </div>

          <div v-if="isLoading" class="text-left">
            <div class="inline-block px-4 py-2 my-1 rounded-lg bg-gray-200 text-gray-800">
              <span class="animate-pulse">...</span>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="p-4 border-t border-gray-200">
          <form @submit.prevent="sendMessage" class="flex items-center gap-2">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask about my skills..."
              class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
            />
            <button
              type="submit"
              class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 text-sm whitespace-nowrap"
              :disabled="!userInput.trim() || isLoading"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { shahidSystemPrompt } from '@/data/shahidContext'

interface Message {
  role: 'user' | 'model'
  text: string
}

interface GeminiContent {
  role: 'user' | 'model'
  parts: Array<{ text: string }>
}

const isChatOpen = ref(false)
const userInput = ref('')
const isLoading = ref(false)
const messageContainer = ref<HTMLElement | null>(null)
const MAX_HISTORY_MESSAGES = 10

const exampleQuestions = ref([
  'What are your technical skills?',
  'Tell me about your tech stack',
  'What projects have you worked on?',
  'What is your experience with Vue.js?',
])

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

const askExampleQuestion = (question: string) => {
  userInput.value = question
  sendMessage()
}

const sendMessage = async () => {
  const userMessage = userInput.value.trim()
  if (!userMessage || isLoading.value) return

  messages.value.push({ role: 'user', text: userMessage })
  userInput.value = ''
  isLoading.value = true
  scrollToBottom()

  const contents: GeminiContent[] = [
    {
      role: 'user',
      parts: [
        {
          text: `${shahidSystemPrompt}\n\nConversation:\n`,
        },
      ],
    },
    ...messages.value.slice(-MAX_HISTORY_MESSAGES).map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    })),
  ]

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contents }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      const errorMessage =
        errorData?.error || 'Sorry, something went wrong. Please try again later.'

      messages.value.push({
        role: 'model',
        text: errorMessage,
      })
      return
    }

    const result = await response.json()
    const candidate = result.candidates?.[0]

    if (candidate && candidate.content?.parts?.[0]?.text) {
      messages.value.push({ role: 'model', text: candidate.content.parts[0].text })
    } else {
      messages.value.push({
        role: 'model',
        text: "Sorry, I couldn't get a response. Please try again.",
      })
    }
  } catch (error) {
    console.error('Error calling chat API:', error)
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
svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Chat animation - starts from bottom right button position */
.chat-enter-from {
  opacity: 0;
  transform: translate(0, 0) scale(0);
  transform-origin: bottom right;
}

.chat-enter-to {
  opacity: 1;
  transform: translate(0, 0) scale(1);
  transform-origin: bottom right;
}

.chat-leave-from {
  opacity: 1;
  transform: translate(0, 0) scale(1);
  transform-origin: bottom right;
}

.chat-leave-to {
  opacity: 0;
  transform: translate(0, 0) scale(0);
  transform-origin: bottom right;
}

/* Mobile specific animation */
@media (max-width: 768px) {
  .chat-enter-from {
    transform: translate(calc(100vw - 120px), calc(100vh - 120px)) scale(0);
  }

  .chat-enter-to {
    transform: translate(0, 0) scale(1);
  }

  .chat-leave-to {
    transform: translate(calc(100vw - 120px), calc(100vh - 120px)) scale(0);
  }
}
</style>
