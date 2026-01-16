<template>
    <div class="bg-bg-card rounded-[14px] overflow-hidden cursor-pointer transition-all duration-250 border border-transparent hover:-translate-y-1 hover:border-accent hover:shadow-xl"
        @click="$emit('click')">
        <div class="relative aspect-square overflow-hidden bg-bg-secondary">
            <img v-if="image" :src="image" :alt="title"
                class="w-full h-full object-cover transition-transform duration-250 hover:scale-105" />
            <div v-else class="w-full h-full flex items-center justify-center text-text-muted bg-bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                </svg>
            </div>
            <span v-if="badge"
                class="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[0.6rem] font-semibold uppercase"
                :class="badgeType === 'red' ? 'bg-danger text-white' : 'bg-accent text-bg-primary'">
                {{ badge }}
            </span>
        </div>
        <div class="p-3 text-center">
            <h3
                class="text-[0.8rem] font-medium text-text-primary mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {{ title }}</h3>
            <span class="text-[0.65rem] text-accent font-medium">{{ actionText }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    image?: string
    badge?: string
    badgeType?: 'primary' | 'red'
    actionText?: string
}

withDefaults(defineProps<Props>(), {
    actionText: 'Beli Sekarang',
    badgeType: 'primary'
})

defineEmits<{
    click: []
}>()
</script>
