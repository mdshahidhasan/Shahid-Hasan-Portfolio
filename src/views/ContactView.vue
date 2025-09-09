<template>
  <section id="contact" class="bg-white dark:bg-gray-900 py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Left Column: Contact Info -->
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                <svg
                  class="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a
                  href="mailto:shahidhasanshourav@gmail.com"
                  class="text-md font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  shahidhasanshourav@gmail.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                <svg
                  class="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <span class="text-md font-semibold text-gray-800 dark:text-gray-200"
                  >01521252236</span
                >
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                <svg
                  class="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <span class="text-md font-semibold text-gray-800 dark:text-gray-200"
                  >Niketan, Dhaka, Bangladesh</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  class="block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100"
                />
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >Email Address</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  class="block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <!-- Subject -->
            <div class="mt-6">
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Regarding your portfolio"
                class="block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100"
              />
            </div>

            <!-- Message -->
            <div class="mt-6">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message here..."
                class="block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="mt-8 text-right">
              <button
                type="submit"
                class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  // This is where you would handle the form submission.
  // For example, using an API like EmailJS, Formspree, or a custom backend endpoint.
  // For now, it will just prevent the default browser action.
  console.log('Form submitted!')
  // You can add a notification to the user here.
}
</script>
