<template>
  <div class="max-w-[1380px] mx-auto pb-24 md:pb-8">
    <!-- Header -->
    <h1 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Hadiahku</h1>

    <!-- Hadiah Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <!-- Skeleton Loading -->
      <template v-if="isLoading">
        <PromoCardSkeleton v-for="n in 6" :key="n" />
      </template>

      <!-- Actual Content -->
      <template v-else>
        <div
          v-for="hadiah in hadiahList"
          :key="hadiah.id"
          class="bg-[#1E293B] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#2DD4BF]/10 transition-all duration-300 cursor-pointer"
        >
          <!-- Hadiah Image -->
          <div class="relative">
            <img :src="hadiahImg" :alt="hadiah.title" class="w-full h-auto object-cover" />
          </div>

          <!-- Content -->
          <div class="p-3 md:p-4">
            <div class="flex items-center gap-2 mb-1 md:mb-2">
              <span class="text-[10px] md:text-xs text-gray-400">{{ hadiah.date }}</span>
            </div>
            <p class="text-xs md:text-sm text-gray-300">{{ hadiah.description }}</p>
          </div>
        </div>
      </template>
    </div>

    <!-- Empty State -->
    <div v-if="!isLoading && hadiahList.length === 0" class="py-12 text-center">
      <div
        class="w-16 h-16 md:w-20 md:h-20 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <Gift :size="28" class="text-gray-500" />
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-white mb-2">Belum Ada Hadiah</h3>
      <p class="text-sm md:text-base text-gray-400">
        Kumpulkan poin dan dapatkan hadiah menarik!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Gift } from 'lucide-vue-next'
import PromoCardSkeleton from '@/components/home/PromoCardSkeleton.vue'
import hadiahImg from '@/assets/images/hadiahku.png'

interface Hadiah {
  id: number
  title: string
  description: string
  date: string
}

const isLoading = ref(true)
const hadiahList = ref<Hadiah[]>([])

const fetchHadiah = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  hadiahList.value = [
    {
      id: 1,
      title: 'Hadiahku',
      description: 'Hadiahku',
      date: '1 januari 2026'
    },
    {
      id: 2,
      title: 'Hadiahku',
      description: 'Hadiahku',
      date: '1 januari 2026'
    },
    {
      id: 3,
      title: 'Hadiahku',
      description: 'Hadiahku',
      date: '1 januari 2026'
    },
    {
      id: 4,
      title: 'Hadiahku',
      description: 'Hadiahku',
      date: '1 januari 2026'
    },
    {
      id: 5,
      title: 'Hadiahku',
      description: 'Hadiahku',
      date: '1 januari 2026'
    },
    {
      id: 6,
      title: 'Hadiahku',
      description: 'Hadiahku',
      date: '1 januari 2026'
    }
  ]
  isLoading.value = false
}

onMounted(() => {
  fetchHadiah()
})
</script>
