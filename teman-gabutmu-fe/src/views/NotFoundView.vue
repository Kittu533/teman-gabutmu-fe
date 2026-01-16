<template>
    <div class="max-w-[1380px] mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <!-- Breadcrumb -->
        <!-- 404 Illustration -->
        <div class="relative mb-8">
            <!-- Large 404 Text -->
            <img src="@/assets/images/404.png" alt="" class="w-full max-w-[400px]">
        </div>

        <!-- Text Content -->
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-3">
            404 | Not Found 
        </h1>
        <p class="text-text-muted text-center mb-8">
            Halaman yang Anda cari tidak dapat ditemukan.
        </p>

        <!-- Back Button -->
        <router-link to="/"
            class="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-hover transition-all duration-200 hover:shadow-lg hover:shadow-secondary/25">
            Kembali
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
</script>
