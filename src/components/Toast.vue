<script setup>
import { ref, watch } from 'vue';

const visible = ref(false);
const type = ref('primary');

const props = defineProps({
    flash: Object,
    message: String
});

const showToast = () => {
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 4000);
};

watch(
    () => props.flash,
    (flash) => {
        if (flash?.success) {
            type.value = 'bg-dark';
            showToast();
        } else if (flash?.error) {
            type.value = 'bg-danger';
            showToast();
        } else if (flash?.warning) {
            type.value = 'bg-warning';
            showToast();
        } else if (flash?.info) {
            type.value = 'bg-info';
            showToast();
        }
    },
    { immediate: true, deep: true }
);
</script>

<template>
    <div v-if="visible" class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast show align-items-center text-white border-0" :class="type" role="alert">
            <div class="d-flex">
                <div class="toast-body fw-bold">{{ message }}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" @click="visible = false"></button>
            </div>
        </div>
    </div>
</template>
