<template>
  <section class="mb-10">
    <h2 class="text-base font-semibold text-text-primary mb-4 uppercase tracking-wide">POPULER</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <GameCard 
        v-for="game in popularGames" 
        :key="game.id"
        :title="game.title"
        :image="game.image"
        :badge="game.badge"
        :badge-type="game.badgeType"
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
  badge?: string
  badgeType?: 'primary' | 'red'
}

const popularGames: Game[] = [
  { id: 1, title: 'Mobile Legends', badge: 'Hot' },
  { id: 2, title: 'Free Fire', badge: 'Promo' },
  { id: 3, title: 'PUBG Mobile', badge: 'New' },
  { id: 4, title: 'Valorant' },
  { id: 5, title: 'Clash Of Clan' },
  { id: 6, title: 'Genshin Impact' },
  { id: 7, title: 'Call Of Duty Mobile' },
  { id: 8, title: 'Honkai - Star Rail' },
  { id: 9, title: 'Voucher Google Play' },
  { id: 10, title: 'Stumble Guys' },
  { id: 11, title: 'Maple Story' },
  { id: 12, title: 'Undawn' },
]
</script>
