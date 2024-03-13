<template>
  <Menu></Menu>
  <router-view/>
  <Footer></Footer>
</template>

<script setup>
import Menu from "@/components/Menu.vue"
import Footer from "@/components/Footer.vue"
</script>

<style>
*{
  transition: 0.45s;
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>