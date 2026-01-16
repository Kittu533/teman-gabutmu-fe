<template>
  <!-- Skeleton Loading -->
  <GameDetailSkeleton v-if="isLoading" />

  <!-- Actual Content -->
  <div v-else class="max-w-[1380px] mx-auto px-4 md:px-0 pb-24 md:pb-8">
    <!-- Breadcrumb - Desktop only -->
    <div class="hidden md:flex items-center gap-2 mb-6">
      <router-link to="/" class="text-[#FF8130] hover:underline flex items-center gap-1">
        <ChevronLeft :size="18" />
        <span>Kembali</span>
      </router-link>
      <span class="text-text-muted">/</span>
      <span class="text-text-primary">{{ game.title }} Diamonds</span>
    </div>

    <!-- Mobile Breadcrumb -->
    <div class="md:hidden flex items-center gap-2 mb-4">
      <router-link to="/" class="text-[#FF8130] hover:underline flex items-center gap-1">
        <ChevronLeft :size="16" />
        <span class="text-sm">Kembali</span>
      </router-link>
      <span class="text-text-muted text-sm">/</span>
      <span class="text-text-primary text-sm">{{ game.title }} Diamonds</span>
    </div>

    <div class="flex flex-col lg:flex-row gap-4 md:gap-8">
      <!-- Left Sidebar - Game Info -->
      <div class="lg:w-[280px] flex-shrink-0 bg-[#272B35] p-4 md:p-6 rounded-[14px]">
        <div class="lg:sticky lg:top-[100px]">
          <div class="flex md:block gap-4">
            <div class="w-24 md:w-full flex-shrink-0 bg-bg-card rounded-[14px] overflow-hidden mb-0 md:mb-4">
              <img :src="game.image" :alt="game.title" class="w-full aspect-square object-cover" />
            </div>
            <div class="flex-1">
              <h1 class="text-lg md:text-xl font-bold text-text-primary mb-1">{{ game.title }}</h1>
              <p class="text-secondary text-xs md:text-sm mb-2 md:mb-4">{{ game.developer }}</p>
              <p class="text-xs md:text-sm text-text-primary leading-relaxed line-clamp-3 md:line-clamp-none">{{ game.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="flex-1 space-y-4 md:space-y-6">
        <!-- Step 1 -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs md:text-sm">1</div>
            <h2 class="text-base md:text-lg font-semibold text-secondary">Masukkan User ID</h2>
          </div>
          <div class="flex gap-2 md:gap-3 mb-4">
            <div class="flex-1">
              <input v-model="formData.userId" type="text" placeholder="ID Pengguna" class="w-full bg-bg-secondary text-white px-4 py-3 rounded-[10px] text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border" />
            </div>
            <div class="flex items-center text-text-muted text-sm">(</div>
            <div class="flex-1">
              <input v-model="formData.zoneId" type="text" placeholder="ID Zona" class="w-full bg-bg-secondary text-white px-4 py-3 rounded-[10px] text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border" />
            </div>
            <div class="flex items-center text-text-muted text-sm">)</div>
          </div>
          <p class="text-[10px] md:text-xs text-text-muted leading-relaxed">Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).</p>
        </div>

        <!-- Step 2 -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs md:text-sm">2</div>
            <h2 class="text-base md:text-lg font-semibold text-secondary">Pilih Nominal Top Up</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            <div v-for="nominal in nominals" :key="nominal.id" @click="selectNominal(nominal)" :class="['p-3 md:p-4 rounded-[10px] cursor-pointer transition-all border-2', selectedNominal?.id === nominal.id ? 'bg-secondary/10 border-secondary' : 'bg-bg-secondary border-transparent hover:border-border']">
              <p class="text-xs md:text-sm font-medium text-text-muted mb-1">{{ nominal.diamonds }} Diamonds + {{ nominal.bonus }} Bonus</p>
              <p :class="['text-xs md:text-sm font-semibold', selectedNominal?.id === nominal.id ? 'text-muted' : 'text-secondary']">Rp. {{ formatPrice(nominal.price) }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs md:text-sm">3</div>
            <h2 class="text-base md:text-lg font-semibold text-text-primary">Pilih pembayaran</h2>
          </div>
          <div class="space-y-2 md:space-y-3">
            <div v-for="payment in paymentMethods" :key="payment.id" @click="selectPayment(payment)" :class="['flex items-center justify-between p-3 md:p-4 rounded-[10px] cursor-pointer transition-all border-2', selectedPayment?.id === payment.id ? 'bg-secondary/10 border-secondary' : 'bg-bg-secondary border-transparent hover:border-border']">
              <div class="flex items-center gap-3">
                <div class="w-10 md:w-12 h-7 md:h-8 bg-white rounded-md flex items-center justify-center px-2">
                  <span class="text-[10px] md:text-xs font-bold" :style="{ color: payment.color }">{{ payment.name }}</span>
                </div>
              </div>
              <div class="text-right">
                <p class="text-[10px] md:text-xs text-text-muted">Harga</p>
                <p :class="['text-xs md:text-sm font-semibold', selectedPayment?.id === payment.id ? 'text-muted' : 'text-secondary']">Rp. {{ formatPrice(selectedNominal?.price || 0) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs md:text-sm">4</div>
            <h2 class="text-base md:text-lg font-semibold text-text-secondary">Masukkan Nomor Whatsapp Atau Email</h2>
          </div>
          <p class="text-[10px] md:text-xs text-text-muted mb-3">Optional: Jika anda ingin mendapatkan bukti pembelian.</p>
          <input v-model="formData.contact" type="text" placeholder="No whatsapp ..." class="w-full bg-bg-secondary text-white px-4 py-3 rounded-[10px] text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 mb-4" />
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 md:p-4 bg-bg-secondary rounded-[10px]">
            <div>
              <p class="text-xs md:text-sm text-text-secondary">{{ selectedNominal?.diamonds || 0 }} Diamonds + {{ selectedNominal?.bonus || 0 }} Bonus</p>
              <p class="text-[10px] md:text-xs text-text-muted mt-1">Total</p>
              <p class="text-lg md:text-xl font-bold text-secondary">Rp. {{ formatPrice(selectedNominal?.price || 0) }}</p>
            </div>
            <button @click="handlePurchase" class="w-full sm:w-auto bg-secondary text-white px-6 py-3 rounded-[30px] font-semibold text-sm hover:bg-secondary-hover transition-all">Beli Sekarang</button>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="bg-bg-card rounded-[14px] p-4 md:p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs md:text-sm">5</div>
            <h2 class="text-base md:text-lg font-semibold text-text-secondary">Punya kode promo? (opsional)</h2>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <div class="flex-1 relative">
              <input v-model="formData.promoCode" type="text" placeholder="Kode_10" class="w-full bg-bg-secondary text-white px-4 py-3 rounded-[10px] text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 pr-10" />
              <button v-if="formData.promoCode" @click="formData.promoCode = ''" class="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"><X :size="18" /></button>
            </div>
            <button class="w-full sm:w-auto bg-secondary text-white px-6 py-3 rounded-[30px] font-semibold text-sm hover:bg-secondary-hover transition-all">Gunakan Promo</button>
          </div>
          <div class="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-bg-secondary rounded-[10px]">
            <div class="w-16 md:w-20 h-12 md:h-16 bg-primary rounded-md flex items-center justify-center text-bg-primary font-bold text-[10px] md:text-xs">VOUCHER</div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-text-primary text-sm md:text-base">Potongan 30%</p>
              <p class="text-[10px] md:text-xs text-text-muted">PROMO30</p>
              <p class="text-[10px] md:text-xs text-text-secondary">Syarat & Ketentuan</p>
            </div>
            <button class="text-secondary text-xs md:text-sm font-medium hover:underline">Gunakan</button>
          </div>
        </div>
      </div>
    </div>

    <ConfirmationModal :is-open="isConfirmModalOpen" :order-data="orderData" @close="isConfirmModalOpen = false" @confirm="handleConfirmPayment" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ChevronLeft, X } from 'lucide-vue-next'
import mobileLegendImg from '@/assets/images/mobile-legend.png'
import ConfirmationModal from '@/components/transaction/ConfirmationModal.vue'
import GameDetailSkeleton from '@/components/game/GameDetailSkeleton.vue'

const route = useRoute()
const router = useRouter()

interface Nominal { id: number; diamonds: number; bonus: number; price: number }
interface PaymentMethod { id: number; name: string; color: string }

const isLoading = ref(true)

const game = reactive({
  title: 'Mobile Legends',
  developer: 'Moonton',
  description: 'Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum.',
  image: mobileLegendImg
})

const selectedNominal = ref<Nominal | null>(null)
const selectedPayment = ref<PaymentMethod | null>(null)
const isConfirmModalOpen = ref(false)

const formData = reactive({ userId: '', zoneId: '', contact: '', promoCode: '' })

const nominals = ref<Nominal[]>([])
const paymentMethods = ref<PaymentMethod[]>([])

const formatPrice = (price: number) => price.toLocaleString('id-ID')
const selectNominal = (nominal: Nominal) => { selectedNominal.value = nominal }
const selectPayment = (payment: PaymentMethod) => { selectedPayment.value = payment }

const orderData = computed(() => ({
  username: 'Username',
  userId: formData.userId,
  email: formData.contact.includes('@') ? formData.contact : '',
  diamonds: selectedNominal.value?.diamonds || 0,
  bonus: selectedNominal.value?.bonus || 0,
  price: selectedNominal.value?.price || 0,
  paymentMethod: selectedPayment.value?.name || '',
  paymentColor: selectedPayment.value?.color || '#000'
}))

const handlePurchase = () => {
  if (!formData.userId) { alert('Silakan masukkan User ID'); return }
  if (!selectedNominal.value) { alert('Silakan pilih nominal top up'); return }
  if (!selectedPayment.value) { alert('Silakan pilih metode pembayaran'); return }
  isConfirmModalOpen.value = true
}

const handleConfirmPayment = () => {
  isConfirmModalOpen.value = false
  const transactionId = Math.floor(10000 + Math.random() * 90000).toString()
  router.push({ name: 'payment-waiting', params: { id: transactionId } })
}

const fetchGameData = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))
  
  nominals.value = [
    { id: 1, diamonds: 78, bonus: 8, price: 24500 },
    { id: 2, diamonds: 154, bonus: 16, price: 48500 },
    { id: 3, diamonds: 217, bonus: 23, price: 68500 },
    { id: 4, diamonds: 256, bonus: 40, price: 84500 },
    { id: 5, diamonds: 267, bonus: 41, price: 113995 },
    { id: 6, diamonds: 503, bonus: 65, price: 158175 }
  ]
  
  paymentMethods.value = [
    { id: 1, name: 'DANA', color: '#118EEA' },
    { id: 2, name: 'Gopay', color: '#00AED6' },
    { id: 3, name: 'OVO', color: '#4C3494' },
    { id: 4, name: 'QRIS', color: '#E31E52' }
  ]
  
  isLoading.value = false
}

onMounted(() => {
  console.log('Game ID:', route.params.id)
  fetchGameData()
})
</script>
