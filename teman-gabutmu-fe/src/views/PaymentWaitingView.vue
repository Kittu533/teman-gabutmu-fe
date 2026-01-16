<template>
    <div class="max-w-[1380px] mx-auto">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6">
            <router-link to="/" class="text-[#FF8130] hover:underline flex items-center gap-1">
                <ChevronLeft :size="18" />
                <span>Kembali</span>
            </router-link>
            <span class="text-text-muted">/</span>
            <span class="text-text-primary">Pesanan#{{ orderData.transactionId }}</span>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Left Content -->
            <div class="flex-1 space-y-6">
                <!-- Progress & Timer Card -->
                <div class="bg-bg-card rounded-[14px] p-6">
                    <!-- Progress Stepper -->
                    <div class="flex items-center justify-between mb-6">
                        <!-- Step 1: Bayar -->
                        <div class="flex flex-col items-center">
                            <div :class="[
                                'w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300',
                                currentStep === 1 ? 'bg-[#FF4444]' : 'bg-secondary'
                            ]">
                                <Video :size="20" class="text-white" />
                            </div>
                            <span class="text-xs text-text-primary font-medium">Bayar</span>
                        </div>

                        <!-- Progress Line 1 -->
                        <div class="flex-1 h-1 bg-border mx-4 relative overflow-hidden rounded-full">
                            <div class="absolute inset-y-0 left-0 bg-secondary transition-all duration-500 rounded-full"
                                :style="{ width: currentStep >= 2 ? '100%' : '0%' }"></div>
                        </div>

                        <!-- Step 2: Diproses -->
                        <div class="flex flex-col items-center">
                            <div :class="[
                                'w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300',
                                currentStep >= 2 ? 'bg-secondary' : 'bg-bg-secondary'
                            ]">
                                <Video :size="20" :class="currentStep >= 2 ? 'text-white' : 'text-text-muted'" />
                            </div>
                            <span
                                :class="['text-xs font-medium', currentStep >= 2 ? 'text-text-primary' : 'text-text-muted']">Diproses</span>
                        </div>

                        <!-- Progress Line 2 -->
                        <div class="flex-1 h-1 bg-border mx-4 relative overflow-hidden rounded-full">
                            <div class="absolute inset-y-0 left-0 bg-secondary transition-all duration-500 rounded-full"
                                :style="{ width: currentStep >= 3 ? '100%' : '0%' }"></div>
                        </div>

                        <!-- Step 3: Selesai -->
                        <div class="flex flex-col items-center">
                            <div :class="[
                                'w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300',
                                currentStep >= 3 ? 'bg-secondary' : 'bg-bg-secondary'
                            ]">
                                <Check :size="20" :class="currentStep >= 3 ? 'text-white' : 'text-text-muted'" />
                            </div>
                            <span
                                :class="['text-xs font-medium', currentStep >= 3 ? 'text-text-primary' : 'text-text-muted']">Selesai</span>
                        </div>
                    </div>

                    <!-- Status Banner - Dynamic based on currentStep -->
                    <!-- Step 1: Batas Waktu Bayar -->
                    <div v-if="currentStep === 1"
                        class="bg-[#2A3441] rounded-[10px] p-4 flex items-center justify-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-full bg-[#FF4444] flex items-center justify-center">
                            <Video :size="18" class="text-white" />
                        </div>
                        <span class="text-white font-medium">Batas Waktu Bayar</span>
                        <span class="text-[#FF4444] font-bold text-lg">{{ formattedTime }}</span>
                    </div>

                    <!-- Step 2: Transaksi Sedang Diproses -->
                    <div v-else-if="currentStep === 2"
                        class="bg-[#2A3441] rounded-[10px] p-4 flex items-center justify-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            <Video :size="18" class="text-white" />
                        </div>
                        <span class="text-white font-medium">Transaksi Sedang Diproses</span>
                    </div>

                    <!-- Step 3: Transaksi Berhasil -->
                    <div v-else
                        class="bg-gradient-to-r from-secondary/80 to-secondary rounded-[10px] p-4 flex items-center justify-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <Video :size="18" class="text-white" />
                        </div>
                        <span class="text-white font-semibold">Transaksi Berhasil</span>
                    </div>

                    <!-- Product Info -->
                    <div class="flex items-center gap-4 p-4 bg-bg-secondary rounded-[10px]">
                        <div class="w-16 h-16 rounded-[10px] overflow-hidden bg-bg-card flex-shrink-0">
                            <img :src="gameImage" alt="Game" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <span class="text-xs text-secondary font-medium">Top up</span>
                            <h3 class="text-white font-semibold">{{ orderData.gameName }}</h3>
                            <p class="text-sm text-text-muted">{{ orderData.diamonds }} Diamonds</p>
                        </div>
                        <div class="text-right">
                            <span class="text-xs text-text-muted">Total</span>
                            <p class="text-xl font-bold text-secondary">Rp. {{ formatPrice(orderData.price) }}</p>
                        </div>
                    </div>
                </div>

                <!-- QR Code Card (only show on step 1) -->
                <div v-if="currentStep === 1" class="bg-bg-card rounded-[14px] p-6">
                    <p class="text-sm text-text-muted mb-4">
                        Scan kode QR / download QR / screenshoot QR dibawah ini dengan aplikasi digital wallet untuk
                        membayar
                    </p>
                    <div class="flex justify-center mb-4">
                        <div class="bg-white p-4 rounded-[10px]">
                            <QrCode :size="180" class="text-black" />
                        </div>
                    </div>
                    <div class="flex justify-center gap-3">
                        <button
                            class="flex items-center gap-2 bg-bg-secondary text-white px-4 py-2 rounded-[10px] text-sm hover:bg-bg-card-hover transition-all">
                            <Download :size="16" />
                            Download QR
                        </button>
                        <button
                            class="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-[10px] text-sm hover:bg-secondary-hover transition-all">
                            <Copy :size="16" />
                            Salin Kode
                        </button>
                    </div>
                </div>

                <!-- Demo Buttons (for testing state changes) -->
                <div class="bg-bg-card rounded-[14px] p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">Demo: Ubah Status Transaksi</h3>
                    <div class="flex gap-3 flex-wrap">
                        <button @click="currentStep = 1"
                            :class="['px-4 py-2 rounded-[10px] text-sm font-medium transition-all', currentStep === 1 ? 'bg-[#FF4444] text-white' : 'bg-bg-secondary text-text-muted hover:bg-bg-card-hover']">
                            Menunggu Bayar
                        </button>
                        <button @click="currentStep = 2"
                            :class="['px-4 py-2 rounded-[10px] text-sm font-medium transition-all', currentStep === 2 ? 'bg-secondary text-white' : 'bg-bg-secondary text-text-muted hover:bg-bg-card-hover']">
                            Sedang Diproses
                        </button>
                        <button @click="currentStep = 3"
                            :class="['px-4 py-2 rounded-[10px] text-sm font-medium transition-all', currentStep === 3 ? 'bg-secondary text-white' : 'bg-bg-secondary text-text-muted hover:bg-bg-card-hover']">
                            Berhasil
                        </button>
                    </div>
                </div>

                <!-- Transaction Detail Card -->
                <div class="bg-bg-card rounded-[14px] p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">Detail Produk</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Status</span>
                            <span :class="[
                                'px-3 py-1 rounded-full text-xs font-medium border',
                                currentStep === 1 ? 'bg-[#FF4444]/20 text-[#FF4444] border-[#FF4444]/30' :
                                    currentStep === 2 ? 'bg-primary/20 text-primary border-primary/30' :
                                        'bg-secondary/20 text-secondary border-secondary/30'
                            ]">
                                {{ statusText }}
                            </span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">No transaksi</span>
                            <span class="text-sm text-white font-medium">: #{{ orderData.transactionId }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Waktu Transaksi</span>
                            <span class="text-sm text-white font-medium">: {{ orderData.transactionDate }}</span>
                        </div>
                    </div>
                </div>

                <!-- User Detail Card -->
                <div class="bg-bg-card rounded-[14px] p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">Detail Produk</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Username</span>
                            <span class="text-sm text-white font-medium">: {{ orderData.username }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">User ID</span>
                            <span class="text-sm text-white font-medium">: {{ orderData.userId }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">email</span>
                            <span class="text-sm text-white font-medium">: {{ orderData.email }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Nominal</span>
                            <span class="text-sm text-white font-medium">: {{ orderData.diamonds }} Diamonds</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Jumlah</span>
                            <span class="text-sm text-white font-medium">: 1</span>
                        </div>
                        <div class="h-px bg-border my-2"></div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Harga</span>
                            <span class="text-sm text-secondary font-medium">: Rp. {{ formatPrice(orderData.price)
                            }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Total</span>
                            <span class="text-xl font-bold text-secondary">Rp. {{ formatPrice(orderData.price) }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-text-muted">Bayar dengan</span>
                            <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg">
                                <span class="text-sm font-bold" :style="{ color: orderData.paymentColor }">
                                    {{ orderData.paymentMethod }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Sidebar - Catatan -->
            <div class="lg:w-[350px] flex-shrink-0">
                <div class="bg-bg-card rounded-[14px] p-6 sticky top-[100px]">
                    <h3 class="text-lg font-semibold text-secondary mb-4">Catatan</h3>
                    <ol class="space-y-3 text-sm text-text-muted list-decimal list-inside">
                        <li>Salin nomor transaksi jika kamu melakukan transaksi tanpa login.</li>
                        <li>Halaman tidak perlu di refresh, status transaksi akan terupdate otomatis.</li>
                        <li>Jika membutuhkan bantuan, hubungi Customer Care Teman Gabutmu Topup melalui WhatsApp <a
                                href="#" class="text-secondary hover:underline">0878-xxxx-xxxx</a>.</li>
                        <li>Segera selesaikan <span class="text-secondary">pembayaran</span> sebelum batas waktu yang
                            ditentukan.</li>
                        <li>Pastikan kamu membayar sesuai nominal yang tertera, termasuk kode unik jika ada.</li>
                        <li>Konfirmasi pembayaran diproses otomatis dalam waktu 1-5 menit setelah pembayaran berhasil.
                        </li>
                        <li>Jika membeli voucher, silakan cek email secara berkala untuk menerima kode voucher di <a
                                href="#" class="text-secondary hover:underline">user@dummyemail.com</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, Video, Check, QrCode, Download, Copy } from 'lucide-vue-next'
import mobileLegendImg from '@/assets/images/mobile-legend.png'

const gameImage = mobileLegendImg

// Dummy order data - in real app, this would come from route params or API
const orderData = ref({
    transactionId: '12345',
    gameName: 'Mobile Legends',
    diamonds: 367,
    price: 115995,
    username: 'Usxxxxe',
    userId: '8937xxx (Asia)',
    email: 'email@gmail.com',
    transactionDate: '12 Desember 2025 | 09:00',
    paymentMethod: 'Gopay',
    paymentColor: '#00AED6'
})

const currentStep = ref(1)
const timeLeft = ref(30 * 60) // 30 minutes in seconds

const statusText = computed(() => {
    switch (currentStep.value) {
        case 1: return 'Menunggu Pembayaran'
        case 2: return 'Sedang Diproses'
        case 3: return 'Berhasil'
        default: return 'Unknown'
    }
})

const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const formatPrice = (price: number) => {
    return price.toLocaleString('id-ID')
}

let timerInterval: ReturnType<typeof setInterval>

onMounted(() => {
    timerInterval = setInterval(() => {
        if (timeLeft.value > 0 && currentStep.value === 1) {
            timeLeft.value--
        } else if (timeLeft.value <= 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
})

onUnmounted(() => {
    if (timerInterval) {
        clearInterval(timerInterval)
    }
})
</script>
