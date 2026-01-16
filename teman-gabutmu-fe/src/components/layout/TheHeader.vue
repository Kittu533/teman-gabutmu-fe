<template>
  <header
    class="fixed top-0 left-0 md:left-[70px] right-0 h-[60px] bg-[#272B35] flex justify-between items-center px-4 md:px-6 gap-3 md:gap-4 z-40 border-b border-border"
  >
    <!-- Logo -->
    <div class="flex-shrink-0">
      <img src="@/assets/images/logo.png" alt="Logo" class="w-10 md:w-12" />
    </div>

    <!-- Search & Auth -->
    <div class="flex items-center gap-2 md:gap-2.5">
      <!-- Search - Hidden on mobile, shown on tablet+ -->
      <div
        class="hidden sm:flex items-center gap-2.5 bg-bg-secondary rounded-[10px] px-4 py-2 w-[200px] md:w-[280px]"
      >
        <Search class="text-text-muted flex-shrink-0" :size="18" />
        <input
          type="text"
          class="flex-1 bg-transparent text-text-primary text-sm placeholder:text-text-muted focus:outline-none"
          placeholder="Cari Game"
        />
      </div>

      <!-- Search Icon - Mobile only -->
      <button
        class="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-bg-secondary text-text-muted"
      >
        <Search :size="20" />
      </button>

      <!-- User Dropdown (when logged in) -->
      <UserDropdown v-if="isAuthenticated" />

      <!-- Login Button (when not logged in) -->
      <button
        v-else
        @click="isLoginModalOpen = true"
        class="bg-secondary text-white px-4 md:px-6 py-2 rounded-[10px] font-semibold text-sm hover:bg-secondary-hover hover:-translate-y-0.5 transition-all duration-150"
      >
        Masuk
      </button>
    </div>
  </header>

  <!-- Login Modal -->
  <LoginModal :is-open="isLoginModalOpen" @close="isLoginModalOpen = false" @login-success="handleLoginSuccess" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Search } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'
import LoginModal from '@/components/auth/LoginModal.vue'
import UserDropdown from '@/components/auth/UserDropdown.vue'

const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)

const isLoginModalOpen = ref(false)

const handleLoginSuccess = () => {
  isLoginModalOpen.value = false
}

onMounted(() => {
  authStore.checkAuth()
})
</script>
