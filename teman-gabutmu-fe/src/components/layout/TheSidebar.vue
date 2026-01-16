<template>
    <aside
        class="fixed top-0 left-0 w-[70px] h-screen bg-bg-sidebar flex flex-col items-center py-4 z-50 border-r border-border">
        <nav class="flex flex-col gap-2 mt-12">
            <a href="/"
                class="w-[45px] h-[45px] flex items-center justify-center rounded-[10px] bg-primary text-bg-primary transition-all duration-150"
                title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </a>

            <a href="#"
                class="w-[45px] h-[45px] flex items-center justify-center rounded-[10px] text-text-secondary hover:bg-bg-card hover:text-text-primary transition-all duration-150"
                title="Voucher">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
            </a>

            <a href="#"
                class="w-[45px] h-[45px] flex items-center justify-center rounded-[10px] text-text-secondary hover:bg-bg-card hover:text-text-primary transition-all duration-150"
                title="Promo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
            </a>

            <a href="#"
                class="w-[45px] h-[45px] flex items-center justify-center rounded-[10px] text-text-secondary hover:bg-bg-card hover:text-text-primary transition-all duration-150"
                title="Riwayat">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            </a>
        </nav>
    </aside>
</template>

<script setup lang="ts">
</script>
