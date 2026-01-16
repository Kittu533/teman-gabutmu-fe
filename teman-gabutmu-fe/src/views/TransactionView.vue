<template>
    <div class="max-w-[1380px] mx-auto">
        <!-- Header with Filters -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 class="text-xl font-bold text-text-primary">Daftar Transaksi</h1>

            <div class="flex gap-3">
                <!-- Status Filter -->
                <div class="relative">
                    <select v-model="selectedStatus"
                        class="appearance-none bg-bg-card text-white px-4 py-2 pr-10 rounded-[10px] text-sm font-medium border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 cursor-pointer">
                        <option value="all">Semua Status</option>
                        <option value="pending">Belum Diproses</option>
                        <option value="processing">Sedang Diproses</option>
                        <option value="success">Berhasil</option>
                        <option value="expired">Kadaluarsa</option>
                    </select>
                    <ChevronDown :size="16"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>

                <!-- Date Filter -->
                <div class="relative">
                    <select v-model="selectedDays"
                        class="appearance-none bg-bg-card text-white px-4 py-2 pr-10 rounded-[10px] text-sm font-medium border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 cursor-pointer">
                        <option value="7">7 Hari Terakhir</option>
                        <option value="30">30 Hari Terakhir</option>
                        <option value="90">90 Hari Terakhir</option>
                        <option value="365">1 Tahun Terakhir</option>
                    </select>
                    <ChevronDown :size="16"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>
            </div>
        </div>

        <!-- Transaction List -->
        <div class="space-y-4">
            <div v-for="transaction in filteredTransactions" :key="transaction.id" @click="goToDetail(transaction.id)"
                class="bg-bg-card rounded-[14px] p-5 cursor-pointer hover:bg-bg-card-hover transition-all duration-200 border border-transparent hover:border-border">
                <!-- Date & Status Row -->
                <div class="flex items-center justify-between mb-4">
                    <span class="text-sm text-text-muted">{{ transaction.date }}</span>
                    <span :class="getStatusClass(transaction.status)">
                        {{ getStatusText(transaction.status) }}
                    </span>
                </div>

                <!-- Product Info Row -->
                <div class="flex items-center gap-4">
                    <div class="w-20 h-20 rounded-[10px] overflow-hidden bg-bg-secondary flex-shrink-0">
                        <img :src="transaction.image" :alt="transaction.gameName" class="w-full h-full object-cover" />
                    </div>
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-white mb-1">{{ transaction.gameName }}</h3>
                        <p class="text-secondary font-bold">{{ transaction.diamonds }} Diamonds</p>
                    </div>
                </div>

                <!-- ID & Price Row -->
                <div class="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                    <span class="text-sm text-text-muted">#{{ transaction.transactionId }}</span>
                    <span class="text-lg font-bold text-white">Rp. {{ formatPrice(transaction.price) }}</span>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredTransactions.length === 0" class="bg-bg-card rounded-[14px] p-12 text-center">
            <div class="w-16 h-16 rounded-full bg-bg-secondary flex items-center justify-center mx-auto mb-4">
                <FileX :size="32" class="text-text-muted" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Tidak Ada Transaksi</h3>
            <p class="text-text-muted text-sm">Belum ada transaksi yang sesuai dengan filter yang dipilih.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronDown, FileX } from 'lucide-vue-next'
import mobileLegendImg from '@/assets/images/mobile-legend.png'

const router = useRouter()

type TransactionStatus = 'pending' | 'processing' | 'success' | 'expired'

interface Transaction {
    id: number
    transactionId: string
    gameName: string
    diamonds: number
    price: number
    date: string
    status: TransactionStatus
    image: string
}

const selectedStatus = ref('all')
const selectedDays = ref('90')

const transactions = ref<Transaction[]>([
    {
        id: 1,
        transactionId: '12345',
        gameName: 'Mobile Legends',
        diamonds: 367,
        price: 115995,
        date: '12 Desember 2025 | 09:00',
        status: 'pending',
        image: mobileLegendImg
    },
    {
        id: 2,
        transactionId: '12346',
        gameName: 'Mobile Legends',
        diamonds: 367,
        price: 115995,
        date: '12 Desember 2025 | 09:00',
        status: 'processing',
        image: mobileLegendImg
    },
    {
        id: 3,
        transactionId: '12347',
        gameName: 'Mobile Legends',
        diamonds: 367,
        price: 115995,
        date: '12 Desember 2025 | 09:00',
        status: 'success',
        image: mobileLegendImg
    },
    {
        id: 4,
        transactionId: '12348',
        gameName: 'Mobile Legends',
        diamonds: 367,
        price: 115995,
        date: '12 Desember 2025 | 09:00',
        status: 'expired',
        image: mobileLegendImg
    },
])

const filteredTransactions = computed(() => {
    if (selectedStatus.value === 'all') {
        return transactions.value
    }
    return transactions.value.filter(t => t.status === selectedStatus.value)
})

const formatPrice = (price: number) => {
    return price.toLocaleString('id-ID')
}

const getStatusText = (status: TransactionStatus) => {
    switch (status) {
        case 'pending': return 'Belum Diproses'
        case 'processing': return 'Sedang Diproses'
        case 'success': return 'Berhasil'
        case 'expired': return 'Kadaluarsa'
    }
}

const getStatusClass = (status: TransactionStatus) => {
    const baseClass = 'px-3 py-1 rounded-full text-xs font-medium border'
    switch (status) {
        case 'pending':
            return `${baseClass} bg-primary/20 text-primary border-primary/30`
        case 'processing':
            return `${baseClass} bg-secondary/20 text-secondary border-secondary/30`
        case 'success':
            return `${baseClass} bg-success/20 text-success border-success/30`
        case 'expired':
            return `${baseClass} bg-danger/20 text-danger border-danger/30`
    }
}

const goToDetail = (id: number) => {
    const transaction = transactions.value.find(t => t.id === id)
    if (transaction) {
        router.push({ name: 'payment-waiting', params: { id: transaction.transactionId } })
    }
}
</script>
