<template>
  <div class="relative rounded-[10px] md:rounded-[20px] mb-4 md:mb-[37px]">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div class="w-full h-[130px] sm:h-[180px] md:h-[280px] lg:h-[367px] bg-[#2A3441] rounded-[10px] md:rounded-[20px] animate-pulse"></div>
      <div class="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-[9px] md:gap-2">
        <div class="w-3 md:w-6 h-1 md:h-2 bg-white/20 rounded-full"></div>
        <div class="w-1 md:w-2 h-1 md:h-2 bg-white/20 rounded-full"></div>
        <div class="w-1 md:w-2 h-1 md:h-2 bg-white/20 rounded-full"></div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <div class="relative overflow-hidden rounded-[10px] md:rounded-[20px]">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(slideImg, index) in slides"
            :key="index"
            class="w-full flex-shrink-0 min-w-full"
          >
            <img
              :src="slideImg"
              :alt="`Banner ${index + 1}`"
              class="w-full h-[130px] sm:h-[180px] md:h-[280px] lg:h-[367px] object-cover object-center"
            />
          </div>
        </div>
      </div>

      <!-- Carousel Dots -->
      <div class="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-[9px] md:gap-2 z-10">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'h-1 md:h-2 rounded-full transition-all duration-300 cursor-pointer',
            currentSlide === index
              ? 'w-3 md:w-6 bg-white'
              : 'w-1 md:w-2 bg-white/40 hover:bg-white/60'
          ]"
        ></button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import bannerImg from '@/assets/images/banner-section.png'

const isLoading = ref(true)
const slides = ref<string[]>([])
const currentSlide = ref(0)
let intervalId: number | null = null

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const fetchBanners = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  slides.value = [bannerImg, bannerImg, bannerImg]
  isLoading.value = false
}

onMounted(() => {
  fetchBanners().then(() => {
    intervalId = window.setInterval(nextSlide, 4000)
  })
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
