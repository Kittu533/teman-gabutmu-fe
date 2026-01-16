<template>
  <div class="flex min-h-screen">
    <TheSidebar />
    <div class="flex-1 ml-[70px] flex flex-col min-h-screen">
      <TheHeader />
      <main class="flex-1 p-6 pt-[84px]">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/components/layout/TheSidebar.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>
