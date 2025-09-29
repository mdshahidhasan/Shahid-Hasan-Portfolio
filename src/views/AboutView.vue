<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">About Me</h1>
        <p class="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
          Passionate software engineer with a love for clean code, creative problem-solving, and a
          good cup of coffee.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <!-- Left Column: My Story -->
        <div class="lg:col-span-3">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">My Story</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm Md. Shahid Hasan, a Software Engineer at Arvyo with a passion for building
              efficient and scalable applications. My academic background in Computer Science &
              Engineering provided me with a strong foundation in programming and problem-solving.
            </p>
            <p>
              Originally from Lalmonirhat, I thrive on turning complex ideas into reality through
              clean and efficient code. I'm always eager to take on new challenges and grow as a
              developer in a professional environment, often fueled by a cup of tea or coffee from
              my favorite shop, Tabaq.
            </p>
          </div>
        </div>

        <!-- Right Column: What I Love / Skills -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Clean Code Card -->
            <div
              class="bg-white p-6 rounded-xl shadow-lg text-center aspect-square flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <h3 class="font-bold text-gray-800">Clean Code</h3>
              <p class="text-sm text-gray-500 mt-1">Passionate about clean, maintainable code.</p>
            </div>

            <!-- Fast Learner Card
            <div
              class="bg-white p-6 rounded-xl shadow-lg text-center aspect-square flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <h3 class="font-bold text-gray-800">Fast Learner</h3>
              <p class="text-sm text-gray-500 mt-1">
                Quick to adapt to new technologies and advanced frameworks.
              </p>
            </div>-->
            <!-- Team Player Card
            <div
              class="bg-white p-6 rounded-xl shadow-lg text-center aspect-square flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M12 14a4 4 0 100-8 4 4 0 000 8z"
                ></path>
              </svg>
              <h3 class="font-bold text-gray-800">Team Player</h3>
              <p class="text-sm text-gray-500 mt-1">
                A collaborative approach to solving complex problems.
              </p>
            </div> -->

            <!-- Problem Solver Card -->
            <div
              class="bg-white p-6 rounded-xl shadow-lg text-center aspect-square flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                ></path>
              </svg>
              <h3 class="font-bold text-gray-800">Problem Solver</h3>
              <p class="text-sm text-gray-500 mt-1">
                Love tackling challenging technical problems.
              </p>
            </div>

            <!-- Chess Player Card -->
            <div
              class="bg-white p-6 rounded-xl shadow-lg text-center aspect-square flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 18l-1 4H6l1-4m5 4l1 4h4l-1-4M6.75 4.75L9 9l-2.25 4.25M17.25 4.75L15 9l2.25 4.25m-6-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                ></path>
              </svg>
              <h3 class="font-bold text-gray-800">Chess Player</h3>
              <p class="text-sm text-gray-500 mt-1">
                Applying strategy and foresight to every challenge.
              </p>
            </div>

            <!-- Coffee & Code Card -->
            <div
              class="bg-white p-6 rounded-xl shadow-lg text-center aspect-square flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 11a3 3 0 100-6 3 3 0 000 6zM2 21h18c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H2c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3h2c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v1h18V6"
                ></path>
              </svg>
              <h3 class="font-bold text-gray-800">Coffee & Code</h3>
              <p class="text-sm text-gray-500 mt-1">
                Tackling complex problems, one cup at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// This page is currently static, but setup is here for future additions.
</script>
