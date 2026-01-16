<template>
  <section class="mb-10">
    <h2 class="text-base font-semibold text-text-primary mb-4 uppercase tracking-wide">Game</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <GameCard 
        v-for="game in games" 
        :key="game.id"
        :title="game.title"
        :image="game.image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import GameCard from './GameCard.vue'

interface Game {
  id: number
  title: string
  image?: string
}

const games: Game[] = [
  { id: 1, title: 'Lorem Ipsum' },
  { id: 2, title: 'Lorem Ipsum' },
  { id: 3, title: 'Lorem Ipsum' },
  { id: 4, title: 'Lorem Ipsum' },
  { id: 5, title: 'Lorem Ipsum' },
  { id: 6, title: 'Lorem Ipsum' },
  { id: 7, title: 'Lorem Ipsum' },
  { id: 8, title: 'Lorem Ipsum' },
  { id: 9, title: 'Lorem Ipsum' },
  { id: 10, title: 'Lorem Ipsum' },
  { id: 11, title: 'Lorem Ipsum' },
  { id: 12, title: 'Lorem Ipsum' },
  { id: 13, title: 'Lorem Ipsum' },
  { id: 14, title: 'Lorem Ipsum' },
]
</script>
