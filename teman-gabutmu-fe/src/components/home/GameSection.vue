<template>
  <section class="mb-6 md:mb-10">
    <h2
      class="text-xs md:text-base font-semibold text-text-primary mb-3 md:mb-4 uppercase tracking-wide text-center"
    >
      Game
    </h2>
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
      <!-- Skeleton Loading -->
      <template v-if="isLoading">
        <GameCardSkeleton v-for="n in 12" :key="n" />
      </template>
      <!-- Actual Content -->
      <template v-else>
        <GameCard
          v-for="game in games"
          :key="game.id"
          :game-id="game.id"
          :title="game.title"
          :image="game.image"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GameCard from './GameCard.vue'
import GameCardSkeleton from './GameCardSkeleton.vue'
import pubgmImg from '@/assets/images/pubgm.png'

interface Game {
  id: number
  title: string
  image?: string
}

const isLoading = ref(true)
const games = ref<Game[]>([])

const fetchGames = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1800))
  
  games.value = [
    { id: 1, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 2, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 3, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 4, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 5, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 6, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 7, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 8, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 9, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 10, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 11, title: 'Lorem Ipsum', image: pubgmImg },
    { id: 12, title: 'Lorem Ipsum', image: pubgmImg }
  ]
  isLoading.value = false
}

onMounted(() => {
  fetchGames()
})
</script>
