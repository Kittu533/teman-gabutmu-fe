<template>
  <div class="max-w-[1380px] mx-auto px-4 md:px-0 pb-24 md:pb-8">
    <!-- Breadcrumb Skeleton -->
    <div class="hidden md:flex items-center gap-2 mb-6">
      <div class="h-4 w-20 bg-[#2A3441] rounded animate-pulse"></div>
      <div class="h-4 w-4 bg-[#2A3441] rounded animate-pulse"></div>
      <div class="h-4 w-40 bg-[#2A3441] rounded animate-pulse"></div>
    </div>

    <div class="md:hidden flex items-center gap-2 mb-4">
      <div class="h-4 w-16 bg-[#2A3441] rounded animate-pulse"></div>
      <div class="h-4 w-4 bg-[#2A3441] rounded animate-pulse"></div>
      <div class="h-4 w-32 bg-[#2A3441] rounded animate-pulse"></div>
    </div>

    <div class="flex flex-col lg:flex-row gap-4 md:gap-8">
      <!-- Left Sidebar Skeleton -->
      <div class="lg:w-[280px] flex-shrink-0 bg-[#272B35] p-4 md:p-6 rounded-[14px]">
        <div class="flex md:block gap-4">
          <div class="w-24 md:w-full flex-shrink-0 aspect-square bg-[#2A3441] rounded-[14px] animate-pulse"></div>
          <div class="flex-1 space-y-2 md:mt-4">
            <div class="h-5 md:h-6 w-3/4 bg-[#2A3441] rounded animate-pulse"></div>
            <div class="h-3 md:h-4 w-1/2 bg-[#2A3441] rounded animate-pulse"></div>
            <div class="h-3 md:h-4 w-full bg-[#2A3441] rounded animate-pulse"></div>
            <div class="h-3 md:h-4 w-full bg-[#2A3441] rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Right Content Skeleton -->
      <div class="flex-1 space-y-4 md:space-y-6">
        <!-- Step 1 Skeleton -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#2A3441] animate-pulse"></div>
            <div class="h-5 w-40 bg-[#2A3441] rounded animate-pulse"></div>
          </div>
          <div class="flex gap-2 md:gap-3 mb-4">
            <div class="flex-1 h-12 bg-[#2A3441] rounded-[10px] animate-pulse"></div>
            <div class="flex-1 h-12 bg-[#2A3441] rounded-[10px] animate-pulse"></div>
          </div>
          <div class="h-4 w-full bg-[#2A3441] rounded animate-pulse"></div>
        </div>

        <!-- Step 2 Skeleton -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#2A3441] animate-pulse"></div>
            <div class="h-5 w-48 bg-[#2A3441] rounded animate-pulse"></div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            <div v-for="n in 6" :key="n" class="h-20 bg-[#2A3441] rounded-[10px] animate-pulse"></div>
          </div>
        </div>

        <!-- Step 3 Skeleton -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#2A3441] animate-pulse"></div>
            <div class="h-5 w-36 bg-[#2A3441] rounded animate-pulse"></div>
          </div>
          <div class="space-y-2 md:space-y-3">
            <div v-for="n in 4" :key="n" class="h-16 bg-[#2A3441] rounded-[10px] animate-pulse"></div>
          </div>
        </div>
      </div>
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
