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
  transition: 0.2s;
}

::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

::-webkit-scrollbar-track {
  background: #115e59;
}

::-webkit-scrollbar-thumb {
  background: #3730a3;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;

}

::-webkit-scrollbar-thumb:hover {
  background: #312e81;
}
</style>