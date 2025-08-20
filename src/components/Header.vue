<template>
  <div class="bg-light d-flex justify-content-end align-items-center fixed-top p-2 d-block d-lg-none">
    <button class="btn btn-sm btn-primary d-md-none text-white" @click="$emit('toggleSidebar')">
      <i class="fa-solid fa-bars" />
    </button>
  </div>
</template>
