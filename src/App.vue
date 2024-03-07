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
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: #f7f9fb;
}

::-webkit-scrollbar-thumb {
  background: #064e3b;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb:hover {
  background: #022c22;
}
</style>