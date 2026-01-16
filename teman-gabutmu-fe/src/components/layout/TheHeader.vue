<template>
    <header
        class="fixed top-0 left-[70px] right-0 h-[60px] bg-bg-primary flex justify-between items-center px-6 gap-4 z-40 border-b border-border">
        <div>
            <img src="@/assets/images/logo.png" alt="Logo" class="w-12">
        </div>

        <div class="flex items-center gap-2.5">
            <div class="flex items-center gap-2.5 bg-bg-secondary rounded-[10px] px-4 py-2 w-[280px]">
                <svg class="text-text-muted flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" class="flex-1 bg-transparent text-text-primary text-sm placeholder:text-text-muted"
                    placeholder="Cari Game" />
            </div>
            <button
                class="bg-primary text-bg-primary px-6 py-2 rounded-[10px] font-semibold text-sm hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-150">
                Masuk
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
</script>
