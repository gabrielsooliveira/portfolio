<template>
    <div :class="{'flex relative pb-12': !isLast, 'flex relative': isLast}">
        <div v-if="!isLast" class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
        </div>
        <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-sm text-teal-950 mb-1 tracking-wider uppercase">{{ data.cargo }}</h2>
            <h6 class="text-sm text-teal-950 uppercase">{{ data.instituicao }} | {{ data.inicio }} - {{ data.final ? data.final : 'Atualmente' }}</h6>
            <p class="leading-relaxed">{{ data.descricao }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        isLast: {
            type: Boolean,
            default: false
        }
    }
}
</script>