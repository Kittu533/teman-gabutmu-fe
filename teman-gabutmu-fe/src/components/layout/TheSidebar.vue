<template>
  <!-- Desktop Sidebar -->
  <aside
    class="hidden md:flex fixed top-0 left-0 w-[70px] h-screen bg-[#272B35] flex-col items-center py-4 z-50 border-r border-border"
  >
    <nav class="flex flex-col gap-1 mt-12">
      <router-link
        to="/"
        class="relative flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 w-[70px] group"
        title="Home"
      >
        <div class="flex items-center justify-center mb-1 transition-all duration-200">
          <Home :size="22" :stroke-width="2" :class="isActive('/') ? 'text-primary' : 'text-gray'" />
        </div>
        <span
          :class="[
            'text-[0.65rem] font-medium transition-all duration-200',
            isActive('/') ? 'text-primary' : 'text-gray group-hover:text-white'
          ]"
          >Home</span
        >
        <div
          :class="[
            'absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300',
            isActive('/') ? 'active-indicator' : 'hover-indicator'
          ]"
        ></div>
      </router-link>

      <router-link
        to="/transactions"
        class="relative flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 w-[70px] group"
        title="Transaksi"
      >
        <div class="flex items-center justify-center mb-1 transition-all duration-200">
          <Ticket
            :size="22"
            :stroke-width="2"
            :class="isActive('/transactions') ? 'text-primary' : 'text-gray'"
          />
        </div>
        <span
          :class="[
            'text-[0.65rem] font-medium transition-all duration-200',
            isActive('/transactions') ? 'text-primary' : 'text-gray group-hover:text-white'
          ]"
          >Transaksi</span
        >
        <div
          :class="[
            'absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300',
            isActive('/transactions') ? 'active-indicator' : 'hover-indicator'
          ]"
        ></div>
      </router-link>

      <router-link
        to="/promo"
        class="relative flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 w-[70px] group"
        title="Promo"
      >
        <div class="flex items-center justify-center mb-1 transition-all duration-200">
          <Tag :size="22" :stroke-width="2" :class="isActive('/promo') ? 'text-primary' : 'text-gray'" />
        </div>
        <span
          :class="[
            'text-[0.65rem] font-medium transition-all duration-200',
            isActive('/promo') ? 'text-primary' : 'text-gray group-hover:text-white'
          ]"
          >Promo</span
        >
        <div
          :class="[
            'absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300',
            isActive('/promo') ? 'active-indicator' : 'hover-indicator'
          ]"
        ></div>
      </router-link>

      <router-link
        to="/hadiahku"
        class="relative flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 w-[70px] group"
        title="Hadiahku"
      >
        <div class="flex items-center justify-center mb-1 transition-all duration-200">
          <Gift
            :size="22"
            :stroke-width="2"
            :class="isActive('/hadiahku') ? 'text-primary' : 'text-gray'"
          />
        </div>
        <span
          :class="[
            'text-[0.65rem] font-medium transition-all duration-200',
            isActive('/hadiahku') ? 'text-primary' : 'text-gray group-hover:text-white'
          ]"
          >Hadiahku</span
        >
        <div
          :class="[
            'absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300',
            isActive('/hadiahku') ? 'active-indicator' : 'hover-indicator'
          ]"
        ></div>
      </router-link>
    </nav>
  </aside>

  <!-- Mobile Bottom Navigation -->
  <nav
    class="md:hidden fixed bottom-0 left-0 right-0 h-[70px] bg-[#272B35] flex items-center justify-around z-50 border-t border-border safe-area-bottom"
  >
    <router-link
      to="/"
      class="flex flex-col items-center justify-center py-2 px-4 transition-all duration-200"
    >
      <Home
        :size="24"
        :stroke-width="2"
        :class="isActive('/') ? 'text-primary' : 'text-gray-400'"
      />
      <span
        :class="[
          'text-[0.65rem] font-medium mt-1',
          isActive('/') ? 'text-primary' : 'text-gray-400'
        ]"
        >Home</span
      >
      <div
        v-if="isActive('/')"
        class="w-1.5 h-1.5 rounded-full bg-primary mt-1"
      ></div>
    </router-link>

    <router-link
      to="/transactions"
      class="flex flex-col items-center justify-center py-2 px-4 transition-all duration-200"
    >
      <Ticket
        :size="24"
        :stroke-width="2"
        :class="isActive('/transactions') ? 'text-primary' : 'text-gray-400'"
      />
      <span
        :class="[
          'text-[0.65rem] font-medium mt-1',
          isActive('/transactions') ? 'text-primary' : 'text-gray-400'
        ]"
        >Transaksi</span
      >
      <div
        v-if="isActive('/transactions')"
        class="w-1.5 h-1.5 rounded-full bg-primary mt-1"
      ></div>
    </router-link>

    <router-link
      to="/promo"
      class="flex flex-col items-center justify-center py-2 px-4 transition-all duration-200"
    >
      <Tag
        :size="24"
        :stroke-width="2"
        :class="isActive('/promo') ? 'text-primary' : 'text-gray-400'"
      />
      <span
        :class="[
          'text-[0.65rem] font-medium mt-1',
          isActive('/promo') ? 'text-primary' : 'text-gray-400'
        ]"
        >Promo</span
      >
      <div
        v-if="isActive('/promo')"
        class="w-1.5 h-1.5 rounded-full bg-primary mt-1"
      ></div>
    </router-link>

    <router-link
      to="/hadiahku"
      class="flex flex-col items-center justify-center py-2 px-4 transition-all duration-200"
    >
      <Gift
        :size="24"
        :stroke-width="2"
        :class="isActive('/hadiahku') ? 'text-primary' : 'text-gray-400'"
      />
      <span
        :class="[
          'text-[0.65rem] font-medium mt-1',
          isActive('/hadiahku') ? 'text-primary' : 'text-gray-400'
        ]"
        >Hadiahku</span
      >
      <div
        v-if="isActive('/hadiahku')"
        class="w-1.5 h-1.5 rounded-full bg-primary mt-1"
      ></div>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Home, Ticket, Tag, Gift } from 'lucide-vue-next'

const route = useRoute()

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
.active-indicator {
  background: linear-gradient(to top, #ff8130, transparent);
  box-shadow:
    0 -8px 20px rgba(255, 129, 48, 0.6),
    0 -4px 10px rgba(255, 129, 48, 0.4);
}

.group:hover .hover-indicator:not(.active-indicator) {
  background: linear-gradient(to top, rgba(148, 163, 184, 0.3), transparent);
}

.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
