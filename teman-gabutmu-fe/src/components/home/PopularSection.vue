<template>
  <section class="mb-6 md:mb-10">
    <h2
      class="text-xs md:text-base font-semibold text-text-primary mb-3 md:mb-4 uppercase tracking-wide text-center"
    >
      POPULER
    </h2>
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
      <!-- Skeleton Loading -->
      <template v-if="isLoading">
        <GameCardSkeleton v-for="n in 12" :key="n" />
      </template>
      <!-- Actual Content -->
      <template v-else>
        <GameCard
          v-for="game in popularGames"
          :key="game.id"
          :game-id="game.id"
          :title="game.title"
          :image="game.image"
          :badge="game.badge"
          :badge-type="game.badgeType"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GameCard from './GameCard.vue'
import GameCardSkeleton from './GameCardSkeleton.vue'
import mobileLegendImg from '@/assets/images/mobile-legend.png'

interface Game {
  id: number
  title: string
  image?: string
  badge?: string
  badgeType?: 'primary' | 'red'
}

const isLoading = ref(true)
const popularGames = ref<Game[]>([])

const fetchGames = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))
  
  popularGames.value = [
    { id: 1, title: 'Mobile Legends', image: mobileLegendImg, badge: 'Hot' },
    { id: 2, title: 'Free Fire', image: mobileLegendImg, badge: 'Promo' },
    { id: 3, title: 'PUBG Mobile', image: mobileLegendImg, badge: 'New' },
    { id: 4, title: 'Valorant', image: mobileLegendImg },
    { id: 5, title: 'Clash Of Clan', image: mobileLegendImg },
    { id: 6, title: 'Genshin Impact', image: mobileLegendImg },
    { id: 7, title: 'Call Of Duty Mobile', image: mobileLegendImg },
    { id: 8, title: 'Honkai - Star Rail', image: mobileLegendImg },
    { id: 9, title: 'Voucher Google Play', image: mobileLegendImg },
    { id: 10, title: 'Stumble Guys', image: mobileLegendImg },
    { id: 11, title: 'Maple Story', image: mobileLegendImg },
    { id: 12, title: 'Undawn', image: mobileLegendImg }
  ]
  isLoading.value = false
}

onMounted(() => {
  fetchGames()
})
</script>
