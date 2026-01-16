<template>
  <div class="max-w-[1380px] mx-auto">
    <HeroBanner />
    <PopularSection />
    <GameSection />
    <TopUpSection />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/home/HeroBanner.vue'
import PopularSection from '@/components/home/PopularSection.vue'
import GameSection from '@/components/home/GameSection.vue'
import TopUpSection from '@/components/home/TopUpSection.vue'
</script>
