<template>
  <main class="bg-slate-50 font-sans text-gray-900 flex-grow">
    <div class="container mx-auto max-w-screen-lg px-6 py-12 md:py-20">
      <!-- Page Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">Research & Publications</h1>
        <p class="mt-4 text-lg text-gray-500 mx-auto">
          A look into my academic research and contributions to the field of AI and deep learning.
        </p>
        <div class="mt-6 mx-auto w-24 h-1 bg-gray-900 rounded"></div>
      </div>

      <!-- Research Papers -->
      <div class="space-y-12">
        <div
          v-for="paper in researchPapers"
          :key="paper.title"
          class="bg-white rounded-xl shadow-lg p-8 transition-shadow duration-300 hover:shadow-2xl"
        >
          <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ paper.title }}</h2>
          <p class="text-gray-600 leading-relaxed mb-6">{{ paper.abstract }}</p>

          <div
            v-if="paper.keywords && paper.keywords.length"
            class="flex flex-wrap items-center gap-2"
          >
            <span class="font-semibold text-gray-700">Keywords:</span>
            <span
              v-for="keyword in paper.keywords"
              :key="keyword"
              class="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full"
            >
              {{ keyword }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ResearchPaper {
  title: string
  abstract: string
  keywords?: string[]
}

const researchPapers = ref<ResearchPaper[]>([
  {
    title:
      'Explainable Lung Disease Classification from Chest X-Ray Images Utilizing Deep Learning and XAI',
    abstract: `The early detection and treatment of lung illnesses are crucial. For the detection and
    classification of four types of lung diseases, namely Bacterial Pneumonia, Viral Pneumonia, Tuberculosis,
    and COVID-19 from Chest X-ray (CXR) images, we proposed a Deep Learning and Explainable Artificial
     Intelligence (XAI) system. The proposed system utilizes a deep learning approach that includes
     convolutional neural networks (CNNs) for feature extraction and a fully connected neural network for
      classification. We use a dataset assembled from various sources which contains 10,095 images.
      The performance of the proposed system is evaluated on a large dataset of CXR images, achieving
      90% accuracy in detecting and classifying the four types of lung diseases and normal lungs.`,
    keywords: [
      'Lung disease detection',
      'Digital Images X-ray',
      'Image Classification',
      'Explainable AI',
      'Deep learning',
      'CNN models',
    ],
  },
  {
    title: 'Exploring Deep Neural Networks for Crop Disease Detection and Interpretability',
    abstract: `Crop diseases are a significant threat to Bangladesh’s agricultural productivity and food
    security. Deep neural networks (DNNs) are promising tools for detecting crop diseases, but their
    black-box nature hinders widespread adoption. This project investigates the integration of Explainable
    Artificial Intelligence (XAI) techniques to improve DNN-based crop disease detection systems in
    Bangladesh. XAI techniques, such as GRADCAM and GRADCAM++, enhance transparency, interpretability,
    and trustworthiness by breaking down the DNN models’ decision-making processes. The outcomes aim to
    empower farmers, agronomists, and policymakers with accurate, reliable, and interpretable tools
    for early disease detection and management.`,
    keywords: ['Crop disease detection', 'Image Classification', 'XAI', 'DNN', 'CNN models'],
  },
])
</script>
