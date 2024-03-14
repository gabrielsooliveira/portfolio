<template>
    <div :class="{'flex relative pb-12': !isLast, 'flex relative': isLast}">
        <div v-if="!isLast" class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-zinc-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10 dark:bg-teal-700">
            <i :class="[data.final ? 'fa-solid fa-building-circle-check' : 'fa-solid fa-building-user']"></i>
        </div>
        <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-sm text-indigo-700 mb-1 tracking-wider uppercase dark:text-teal-600">{{ data.cargo }}</h2>
            <h6 class="text-sm text-zinc-950 uppercase dark:text-zinc-50">{{ data.instituicao }} | {{ data.inicio }} - {{ data.final ? data.final : 'Atualmente' }}</h6>
            <p class="leading-relaxed text-zinc-950 dark:text-zinc-50">{{ data.descricao }}</p>
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