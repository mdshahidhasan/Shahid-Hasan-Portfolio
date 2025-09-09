<template>
  <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in">
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Welcome to My Portfolio
      </h1>

      <p class="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        I am a passionate Software Engineer with expertise in building robust web applications. My
        experience spans across C#, .NET Core, Vue.js, and modern database technologies. I thrive on
        solving complex problems and continuously learning to enhance my skills.
      </p>

      <div class="mt-10">
        <a
          href="/shahid-hasan-resume.pdf"
          target="_blank"
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
          Download My CV
        </a>
      </div>
    </div>
  </div>
</template>

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
