<template>
  <div class="relative" ref="dropdownRef">
    <!-- User Avatar Button -->
    <button
      @click="isOpen = !isOpen"
      class="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-secondary hover:border-secondary/80 transition-all"
    >
      <img :src="badgeImage" alt="User Badge" class="w-full h-full object-cover" />
    </button>

    <!-- Dropdown Menu -->
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute right-0 top-12 w-[280px] bg-[#1E2530] rounded-xl shadow-xl border border-border overflow-hidden z-50"
      >
        <!-- User Info -->
        <div class="p-4 border-b border-border">
          <div class="flex items-center gap-3">
            <div class="relative">
              <img
                :src="badgeImage"
                alt="User Badge"
                class="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-white truncate">{{ user?.name }}</h4>
              <p class="text-sm text-text-muted truncate">{{ user?.email }}</p>
            </div>
          </div>
        </div>

        <!-- Logout Button -->
        <div class="p-3">
          <button
            @click="handleLogout"
            class="w-full text-left px-3 py-2 text-[#FF4D4D] font-medium hover:bg-[#2A3441] rounded-lg transition-colors"
          >
            Keluar
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import badge1 from '@/assets/images/Badge-1.png'
import badge2 from '@/assets/images/Badge-2.png'
import badge3 from '@/assets/images/Badge-3.png'

const authStore = useAuthStore()
const user = computed(() => authStore.user)

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const badgeImages: Record<number, string> = {
  1: badge1,
  2: badge2,
  3: badge3
}

const badgeImage = computed(() => {
  return badgeImages[user.value?.badge || 1]
})

const handleLogout = () => {
  authStore.logout()
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
