<template>
  <Sidebar></Sidebar>
  <router-view/>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue"
</script>

<style>
#app{
  display: flex;
}

</style>
