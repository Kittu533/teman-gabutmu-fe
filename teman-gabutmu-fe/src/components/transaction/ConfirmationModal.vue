<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="$emit('close')"></div>

                <!-- Modal Content -->
                <div
                    class="relative bg-[#1E2530] rounded-[16px] overflow-hidden shadow-2xl w-full max-w-[420px] border border-border/50 transform transition-all duration-300">

                    <!-- Header -->
                    <div class="flex items-center justify-between px-6 py-4 bg-[#252D3A] border-b border-border/30">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                                <ShoppingCart :size="20" class="text-secondary" />
                            </div>
                            <h2 class="text-lg font-bold text-white">Konfirmasi Pembelian</h2>
                        </div>
                        <button @click="$emit('close')"
                            class="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:bg-white/10 hover:text-white transition-all duration-200">
                            <X :size="18" />
                        </button>
                    </div>

                    <!-- Body -->
                    <div class="p-6">
                        <!-- Alert Banner -->
                        <div
                            class="flex items-center gap-3 p-3 bg-secondary/10 rounded-[10px] mb-5 border border-secondary/20">
                            <AlertCircle :size="18" class="text-secondary flex-shrink-0" />
                            <p class="text-xs text-white/80">Mohon konfirmasi detail pembelian Anda</p>
                        </div>

                        <!-- User Info Section -->
                        <div class="space-y-3 mb-4">
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-2">
                                    <User :size="14" class="text-text-muted" />
                                    <span class="text-sm text-text-muted">Username</span>
                                </div>
                                <span class="text-sm text-white font-medium">{{ maskUsername(orderData.username)
                                    }}</span>
                            </div>
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-2">
                                    <Hash :size="14" class="text-text-muted" />
                                    <span class="text-sm text-text-muted">User ID</span>
                                </div>
                                <span class="text-sm text-white font-medium">{{ maskUserId(orderData.userId) }}</span>
                            </div>
                            <div v-if="orderData.email" class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-2">
                                    <Mail :size="14" class="text-text-muted" />
                                    <span class="text-sm text-text-muted">Email</span>
                                </div>
                                <span class="text-sm text-white font-medium">{{ orderData.email }}</span>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div class="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4"></div>

                        <!-- Order Details Section -->
                        <div class="space-y-3 mb-4">
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-2">
                                    <Diamond :size="14" class="text-primary" />
                                    <span class="text-sm text-text-muted">Nominal</span>
                                </div>
                                <span class="text-sm text-white font-medium">{{ orderData.diamonds }} Diamonds</span>
                            </div>
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-2">
                                    <Package :size="14" class="text-text-muted" />
                                    <span class="text-sm text-text-muted">Jumlah</span>
                                </div>
                                <span class="text-sm text-white font-medium">1</span>
                            </div>
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-2">
                                    <Tag :size="14" class="text-text-muted" />
                                    <span class="text-sm text-text-muted">Harga</span>
                                </div>
                                <span class="text-sm text-white font-medium">Rp. {{ formatPrice(orderData.price)
                                    }}</span>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div class="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4"></div>

                        <!-- Total & Payment Section -->
                        <div class="bg-[#252D3A] rounded-[12px] p-4 space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-text-muted">Total Pembayaran</span>
                                <span class="text-2xl font-bold text-secondary">Rp. {{ formatPrice(orderData.price)
                                    }}</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-border/30">
                                <span class="text-sm text-text-muted">Metode Pembayaran</span>
                                <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm">
                                    <Wallet :size="14" :style="{ color: orderData.paymentColor }" />
                                    <span class="text-sm font-bold" :style="{ color: orderData.paymentColor }">
                                        {{ orderData.paymentMethod }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="flex gap-3 px-6 pb-6">
                        <button @click="$emit('close')"
                            class="flex-1 bg-white/5 text-white py-3.5 px-4 rounded-[12px] font-semibold hover:bg-white/10 active:scale-[0.98] transition-all duration-200 border border-white/10">
                            Batalkan
                        </button>
                        <button @click="handleConfirm" :disabled="isLoading"
                            class="flex-1 bg-secondary text-white py-3.5 px-4 rounded-[12px] font-semibold hover:bg-secondary-hover hover:shadow-lg hover:shadow-secondary/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            <Loader2 v-if="isLoading" :size="18" class="animate-spin" />
                            <span>{{ isLoading ? 'Memproses...' : 'Bayar Sekarang' }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { X, ShoppingCart, AlertCircle, User, Hash, Mail, Diamond, Package, Tag, Wallet, Loader2 } from 'lucide-vue-next'

interface OrderData {
    username: string
    userId: string
    email: string
    diamonds: number
    bonus: number
    price: number
    paymentMethod: string
    paymentColor: string
}

interface Props {
    isOpen: boolean
    orderData: OrderData
}

defineProps<Props>()

const emit = defineEmits<{
    close: []
    confirm: []
}>()

const isLoading = ref(false)

const formatPrice = (price: number) => {
    return price.toLocaleString('id-ID')
}

const maskUsername = (username: string) => {
    if (!username || username.length <= 4) return username
    return username.slice(0, 2) + 'xxxx' + username.slice(-1)
}

const maskUserId = (userId: string) => {
    if (!userId || userId.length <= 4) return userId
    return userId.slice(0, 4) + 'xxx (Asia)'
}

const handleConfirm = async () => {
    isLoading.value = true
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    isLoading.value = false
    emit('confirm')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from>div:last-child,
.modal-leave-to>div:last-child {
    transform: scale(0.9) translateY(20px);
    opacity: 0;
}

.modal-enter-to>div:last-child {
    transform: scale(1) translateY(0);
    opacity: 1;
}
</style>
