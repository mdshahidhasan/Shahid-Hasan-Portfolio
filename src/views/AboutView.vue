<template>
  <main class="bg-zinc-200 text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900"
          style="font-family: 'Playfair Display', serif"
        >
          About Me
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Passionate software engineer with a love for clean code, creative problem-solving, and a
          good cup of coffee.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-800 rounded"></div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <!-- Left Column: My Story -->
        <div class="lg:col-span-3">
          <h2
            class="text-3xl font-bold text-gray-800 mb-6"
            style="font-family: 'Playfair Display', serif"
          >
            My Story
          </h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
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
          <div class="grid grid-cols-2 gap-6">
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
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 001-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
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
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 mx-auto mb-3 text-gray-600"
                fill="currentColor"
                viewBox="0 0 50 64"
              >
                <title>Chess Knight Icon</title>
                <path
                  d="M45.5 12.5c-1.5-2.7-4.5-4.5-7.5-4.5H12c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h3.5v12h-2c-2.2 0-4 1.8-4 4v4h33c2.2 0 4-1.8 4-4v-4h-2c-2.2 0-4-1.8-4-4V38h3.5c2.2 0 4-1.8 4-4v-2.5c0-1.5-1-3-2.5-3.5 1-2.5 1.5-5 1.5-7.5 0-4.5-3-8-7-9.5zM20 18c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-6zm15 16h-17v-4h17v4zm-17 12h17v4h-17v-4z"
                />
                <path
                  d="M34 14.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5S28.6 11 30.5 11s3.5 1.6 3.5 3.5z"
                />
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

<script setup lang="ts"></script>
