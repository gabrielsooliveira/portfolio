<script setup>
import { defineProps, defineEmits, ref, defineExpose } from 'vue'
import mainImage from '@/assets/images/perfil.png'
const sidebar = ref(null)

defineExpose({ sidebar })

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['toggle'])

const menuItems = [
  { icon: 'fa-solid fa-home', label: 'Inicio', to: 'inital' },
  { icon: 'fa-solid fa-user', label: 'Sobre mim', to: 'about' },
  { icon: 'fa-solid fa-file', label: 'Trajetória', to: 'experiences' },
  { icon: 'fa-solid fa-code', label: 'Projetos', to: 'projects' },
  { icon: 'fa-solid fa-brain', label: 'Conhecimentos', to: 'knowledge' },
  { icon: 'fa-solid fa-phone', label: 'Contato', to: 'contact' },
]

const socialMedias = [
    { icon: 'fa-brands fa-facebook', label: 'facebook' },
    { icon: 'fa-brands fa-instagram', label: 'facebook' },
    { icon: 'fa-brands fa-github', label: 'facebook' },
    { icon: 'fa-brands fa-x-twitter', label: 'facebook' },
    { icon: 'fa-brands fa-linkedin', label: 'facebook' }
]
</script>

<template>
  <aside
    ref="sidebar"
    class="bg-primary d-md-block position-fixed vh-100 d-xl-flex flex-column p-2 shadow-lg sidebar"
    :class="{ open: isOpen }"
  >
    <div class="mx-5 mt-3 px-2">
      <img src="https://dummyimage.com/600x600/39393b/fff&text=Perfil" alt="main-photo" class="img-fluid rounded-circle border border-white border-5" />
    </div>

    <router-link to="/" class="d-flex align-items-center justify-content-center text-white text-decoration-none">
      <h1 class="fs-3 mt-2">Gabriel Souza</h1>
    </router-link>

    <div class="px-2 my-3 text-center">
        <ul class="nav justify-content-center gap-2">
            <li v-for="socialMedia in socialMedias" :key="socialMedia.to" class="nav-item rounded bg-dark">
                <a href="#" class="nav-link link-light"><i :class="socialMedia.icon" /></a>
            </li>
        </ul>
    </div>

    <ul class="nav nav-pills flex-column mb-auto fw-bold mt-2">
      <li v-for="item in menuItems" :key="item.to" class="nav-item mt-2">
        <a
          :href="'#' + item.to"
          class="nav-link link-light d-flex align-items-center px-3 py-2 rounded mb-1"
          @click="$emit('toggle')"
        >
          <i :class="item.icon" class="me-3" />
          {{ item.label }}
        </a>
      </li>
    </ul>

    <hr class="mt-auto text-light" />
  </aside>
</template>

<style scoped>
.sidebar {
  width: 320px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
}

.sidebar.open {
  transform: translateX(0);
}

@media (min-width: 768px) {
  .sidebar {
    transform: translateX(0);
  }
}
</style>
