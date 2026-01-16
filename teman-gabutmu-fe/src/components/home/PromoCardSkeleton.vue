<template>
  <div class="bg-[#1E293B] rounded-xl overflow-hidden">
    <!-- Image skeleton -->
    <div class="w-full h-[120px] md:h-[150px] bg-[#2A3441] animate-pulse"></div>
    <!-- Content skeleton -->
    <div class="p-3 md:p-4 space-y-2">
      <div class="h-3 w-1/3 bg-[#2A3441] rounded animate-pulse"></div>
      <div class="h-4 w-full bg-[#2A3441] rounded animate-pulse"></div>
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
