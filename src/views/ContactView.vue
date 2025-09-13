<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h1>
        <p class="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Left Column: Contact Information -->
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 bg-slate-100 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                <a
                  href="mailto:shahidhasanshourav@gmail.com"
                  class="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  shahidhasanshourav@gmail.com
                </a>
              </div>
            </div>
            <!-- Phone -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 bg-slate-100 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Phone</h3>
                <p class="text-gray-500">01521252236</p>
              </div>
            </div>
            <!-- Location -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 bg-slate-100 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Location</h3>
                <p class="text-gray-500">Niketan, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h2 class="text-2xl font-bold mb-6">Send me a message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="fullName"
                  class="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
                  >Email Address</label
                >
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                class="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition duration-200"
                placeholder="Regarding your portfolio"
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1"
                >Message</label
              >
              <textarea
                id="message"
                rows="5"
                class="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition duration-200"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const handleSubmit = () => {
  // This is a placeholder for form submission logic.
  // In a real application, you would send the form data to a server or email service.
  alert('Form submitted! (This is a demo)')
}
</script>
