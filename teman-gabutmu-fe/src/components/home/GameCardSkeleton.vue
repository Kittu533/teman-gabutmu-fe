<template>
  <div class="bg-bg-card rounded-[8px] md:rounded-[14px] overflow-hidden">
    <!-- Image skeleton -->
    <div class="aspect-square bg-[#2A3441] animate-pulse"></div>
    <!-- Content skeleton -->
    <div class="p-1.5 md:p-3 flex flex-col items-center gap-1">
      <div class="h-3 md:h-4 w-3/4 bg-[#2A3441] rounded animate-pulse"></div>
      <div class="h-2 md:h-3 w-1/2 bg-[#2A3441] rounded animate-pulse"></div>
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
