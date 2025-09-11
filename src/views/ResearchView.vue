<template>
  <div class="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-full">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
          Research & Publications
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Exploring the intersection of Deep Learning and Medical Imaging.
        </p>
      </div>

      <!-- Research Paper Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
      >
        <div class="p-8">
          <!-- Paper Title -->
          <h2 class="text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            Explainable Lung Disease Classification from Chest X-Ray Images Utilizing Deep Learning
            and XAI
          </h2>

          <!-- Abstract Section -->
          <div class="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              The early detection and treatment of lung illnesses are crucial. For the detection and
              classification of four types of lung diseases—namely Bacterial Pneumonia, Viral
              Pneumonia, Tuberculosis, and COVID-19—from Chest X-ray (CXR) images, we proposed a
              Deep Learning and Explainable Artificial Intelligence (XAI) system. The proposed
              system utilizes a deep learning approach that includes convolutional neural networks
              (CNNs) for feature extraction and a fully connected neural network for classification.
            </p>
            <p>
              Initially, we assembled a comprehensive dataset from various sources, containing
              10,095 images, which was then split for training, testing, and validation. After
              running several models on the preprocessed data, we achieved significant accuracy. XAI
              has also been implemented to analyze and interpret the predictions of the models,
              adding a layer of trust and transparency.
            </p>
          </div>

          <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Contributions & Results
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">90%</p>
                <p class="mt-1 text-md font-medium text-gray-600 dark:text-gray-300">
                  Overall classification accuracy achieved on a large-scale CXR dataset.
                </p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">4+1</p>
                <p class="mt-1 text-md font-medium text-gray-600 dark:text-gray-300">
                  Classes: COVID-19, Tuberculosis, Viral & Bacterial Pneumonia, and Normal Lungs.
                </p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10k+</p>
                <p class="mt-1 text-md font-medium text-gray-600 dark:text-gray-300">
                  Images compiled from various sources to create a robust dataset.
                </p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">XAI</p>
                <p class="mt-1 text-md font-medium text-gray-600 dark:text-gray-300">
                  Implemented Explainable AI to interpret and validate model predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
