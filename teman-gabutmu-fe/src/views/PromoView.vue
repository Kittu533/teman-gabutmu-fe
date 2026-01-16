<template>
  <div class="max-w-[1380px] mx-auto pb-24 md:pb-8">
    <!-- Header -->
    <h1 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Daftar Promo</h1>

    <!-- Filter Tabs -->
    <div
      class="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0',
          activeTab === tab.id
            ? 'bg-[#2DD4BF] text-white'
            : 'bg-[#1E293B] text-gray-300 hover:bg-[#334155]'
        ]"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- Promo Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <!-- Skeleton Loading -->
      <template v-if="isLoading">
        <PromoCardSkeleton v-for="n in 6" :key="n" />
      </template>

      <!-- Actual Content -->
      <template v-else>
        <div
          v-for="promo in filteredPromos"
          :key="promo.id"
          class="bg-[#1E293B] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#2DD4BF]/10 transition-all duration-300 cursor-pointer"
        >
          <!-- Promo Image -->
          <div class="relative">
            <img :src="voucherImg" :alt="promo.title" class="w-full h-auto object-cover" />
          </div>

          <!-- Content -->
          <div class="p-3 md:p-4">
            <div class="flex items-center gap-2 mb-1 md:mb-2">
              <span class="text-[10px] md:text-xs text-gray-400">{{ promo.date }}</span>
            </div>
            <p class="text-xs md:text-sm text-gray-300">{{ promo.description }}</p>
          </div>
        </div>
      </template>
    </div>

    <!-- Empty State -->
    <div v-if="!isLoading && filteredPromos.length === 0" class="py-12 text-center">
      <div
        class="w-16 h-16 md:w-20 md:h-20 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <Tag :size="28" class="text-gray-500" />
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-white mb-2">Belum Ada Promo</h3>
      <p class="text-sm md:text-base text-gray-400">Nantikan promo menarik lainnya segera!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Tag } from 'lucide-vue-next'
import PromoCardSkeleton from '@/components/home/PromoCardSkeleton.vue'
import voucherImg from '@/assets/images/voucher-promo.png'

interface Tab {
  id: string
  name: string
}

interface Promo {
  id: number
  title: string
  description: string
  date: string
  category: string
}

const tabs = ref<Tab[]>([
  { id: 'all', name: 'Semua' },
  { id: 'ml', name: 'Mobile Legends' },
  { id: 'gi', name: 'Genshin Impact' },
  { id: 'pubg', name: 'PUBG' }
])

const activeTab = ref('all')
const isLoading = ref(true)
const promos = ref<Promo[]>([])

const fetchPromos = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  promos.value = [
    {
      id: 1,
      title: 'Voucher Top Up',
      description: 'Diskon 80% s.d 8rb pakai QRIS Superbank!',
      date: '1 januari 2026',
      category: 'all'
    },
    {
      id: 2,
      title: 'Voucher Top Up',
      description: 'Diskon 80% s.d 8rb pakai QRIS Superbank!',
      date: '1 januari 2026',
      category: 'ml'
    },
    {
      id: 3,
      title: 'Voucher Top Up',
      description: 'Diskon 80% s.d 8rb pakai QRIS Superbank!',
      date: '1 januari 2026',
      category: 'gi'
    },
    {
      id: 4,
      title: 'Voucher Top Up',
      description: 'Diskon 80% s.d 8rb pakai QRIS Superbank!',
      date: '1 januari 2026',
      category: 'pubg'
    },
    {
      id: 5,
      title: 'Voucher Top Up',
      description: 'Diskon 80% s.d 8rb pakai QRIS Superbank!',
      date: '1 januari 2026',
      category: 'ml'
    },
    {
      id: 6,
      title: 'Voucher Top Up',
      description: 'Diskon 80% s.d 8rb pakai QRIS Superbank!',
      date: '1 januari 2026',
      category: 'gi'
    }
  ]
  isLoading.value = false
}

const filteredPromos = computed(() => {
  if (activeTab.value === 'all') {
    return promos.value
  }
  return promos.value.filter((promo) => promo.category === activeTab.value)
})

onMounted(() => {
  fetchPromos()
})
</script>
