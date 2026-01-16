<template>
  <div class="flex min-h-screen bg-[#191D24]">
    <TheSidebar />
    <div class="flex-1 md:ml-[70px] flex flex-col min-h-screen">
      <TheHeader />
      <main class="flex-1 px-3 py-4 md:p-6 pt-[70px] md:pt-[84px] pb-[90px] md:pb-6">
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
