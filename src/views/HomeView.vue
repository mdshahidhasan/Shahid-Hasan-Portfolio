<template>
  <div
    class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in flex items-center justify-center min-h-full"
  >
    <div class="text-center">
      <!-- Name -->
      <h1
        class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
      >
        Md. Shahid Hasan
      </h1>

      <!-- Current Role -->
      <p class="mt-4 text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400">
        Software Engineer @ Arvyo
      </p>

      <!-- Tech Stack -->
      <p class="mt-2 max-w-2xl mx-auto text-base text-gray-500 dark:text-gray-400 leading-relaxed">
        Full-Stack Developer | ASP.NET Core | Vue.js | Angular | TypeScript | SQL
      </p>

      <!-- Short Bio -->
      <p class="mt-6 max-w-3xl mx-auto text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        I build scalable, user-friendly web applications with a strong focus on clean code and
        problem-solving. Passionate about continuous learning, I enjoy working with modern
        frameworks and contributing to meaningful projects.
      </p>

      <!-- CV Button -->
      <div class="my-12">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          <svg
            class="w-5 h-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Download My Resume
        </a>
      </div>

      <!-- Social Links -->
      <div class="mt-8 flex justify-center items-center space-x-6">
        <a
          href="https://www.linkedin.com/in/shou/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span class="sr-only">LinkedIn</span>
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/shahid130"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span class="sr-only">GitHub</span>
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://gitlab.com/shahid130"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span class="sr-only">GitLab</span>
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M23.955 13.587l-1.34-4.124H1.385l-1.34 4.124h23.91zm-1.385-5.124l-3.34-10.28-2.668 8.208h8.676zM1.43 8.463l8.675.002-2.667-8.207-3.34 10.278-2.668-2.073zm3.932 6.124l-1.88 5.78h7.72l-5.84-5.78zm15.205 0l-5.842 5.78h7.72l-1.878-5.78zm-7.62-1h-4.02l2.01 2.062 2.01-2.062z"
            />
          </svg>
        </a>

        <!-- Codeforces -->
        <a
          href="https://codeforces.com/profile/sh0u"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span class="sr-only">Codeforces</span>
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h4v16H4V4zm6 3h4v13h-4V7zm6-2h4v15h-4V5z" />
          </svg>
        </a>

        <!-- LeetCode -->
        <a
          href="https://leetcode.com/u/shahidhasanshourav/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span class="sr-only">LeetCode</span>
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M17.5 3.5a1 1 0 00-1.4 0l-9 9a1 1 0 000 1.4l9 9a1 1 0 001.4-1.4L9.42 12l8.08-8.08a1 1 0 000-1.42z"
            />
            <path d="M21 12a1 1 0 01-1 1h-9.5a1 1 0 010-2H20a1 1 0 011 1z" />
          </svg>
        </a>

        <!-- Chess.com -->
        <a
          href="https://www.chess.com/member/shahid_hasan"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span class="sr-only">Chess.com</span>
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2a2 2 0 012 2v2h1a1 1 0 011 1v2.5a4.5 4.5 0 11-9 0V7a1 1 0 011-1h1V4a2 2 0 012-2zm0 12a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this static page
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
