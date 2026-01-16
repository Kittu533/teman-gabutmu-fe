<template>
  <div class="relative rounded-[10px] md:rounded-[20px] mb-4 md:mb-[37px]">
    <div class="w-full h-[130px] sm:h-[180px] md:h-[280px] lg:h-[367px] bg-[#2A3441] rounded-[10px] md:rounded-[20px] animate-pulse"></div>
    <!-- Dots skeleton -->
    <div class="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-[9px] md:gap-2">
      <div class="w-3 md:w-6 h-1 md:h-2 bg-white/20 rounded-full"></div>
      <div class="w-1 md:w-2 h-1 md:h-2 bg-white/20 rounded-full"></div>
      <div class="w-1 md:w-2 h-1 md:h-2 bg-white/20 rounded-full"></div>
    </div>
  </div>
</template>

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
