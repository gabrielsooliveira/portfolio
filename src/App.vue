<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import useResponsiveSidebar from '@/composables/useResponsiveSidebar'

const { isSidebarOpen, toggleSidebar, isMobile, sidebarRef } = useResponsiveSidebar()

const sidebar = sidebarRef
</script>

<template>
  <div class="d-flex min-vh-100 overflow-x-hidden">
    <Sidebar :ref="sidebar" :isOpen="isSidebarOpen" @toggle="toggleSidebar" />
    
    <div v-if="isMobile && isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
    
    <div class="flex-grow-1 w-100" :class="{'ms-md-320': !isMobile}">
      <Header @toggleSidebar="toggleSidebar" />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.ms-md-320 {
  margin-left: 320px;
}
</style>
