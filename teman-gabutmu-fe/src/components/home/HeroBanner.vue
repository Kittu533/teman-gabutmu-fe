<template>
    <div
        class="rounded-[20px] p-8 relative overflow-hidden min-h-[180px] mb-8 bg-gradient-to-br from-[#e74c3c] via-[#c0392b] to-[#e67e22]">
        <div class="flex justify-between items-center relative z-10">
            <div class="flex flex-col gap-2">
                <span
                    class="bg-white/20 text-white px-3 py-1 rounded-md text-[0.7rem] font-semibold w-fit">VOUCHER</span>
                <h1 class="text-3xl font-bold text-white drop-shadow-lg">VOUCHER TOP UP</h1>
                <p class="text-[0.9rem] text-white/90 mb-2">Lorem ipsum dolor sit amet</p>
                <button
                    class="bg-bg-primary text-white px-6 py-3 rounded-[10px] font-semibold text-[0.9rem] w-fit shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150">
                    Top up Sekarang
                </button>
            </div>
            <div class="relative">
                <!-- Placeholder for mascot/decoration image -->
                <div class="w-[150px] h-[150px] flex items-center justify-center text-white/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Carousel dots -->
        <div class="flex justify-center gap-2 mt-4">
            <span class="w-6 h-2 rounded bg-white cursor-pointer transition-all duration-150"></span>
            <span class="w-2 h-2 rounded-full bg-white/40 cursor-pointer transition-all duration-150"></span>
            <span class="w-2 h-2 rounded-full bg-white/40 cursor-pointer transition-all duration-150"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
