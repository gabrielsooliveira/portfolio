<script setup>
import Conhecimentos from '@/assets/jsons/conhecimentos.json';

</script>

<template>
  <section id="knowledge" class="min-vh-100 d-flex align-items-center bg-dark text-white">
    <div class="p-5 mx-2 mt-3">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-1 text-secondary">Conhecimentos</h2>
        <p class="text-light fs-5">Um pouco sobre minhas habilidades técnicas.</p>
      </div>

      <div class="row g-4">
        <div v-for="(items, title) in Conhecimentos" :key="title" class="col-lg-4">
          <div class="card bg-primary text-white shadow border-0">
            <div class="card-body">
              <h5 class="text-secondary fw-bold mb-4">{{ title }}</h5>
              <div class="row g-3">
                <div v-for="(item, i) in items" :key="i" class="col-lg-4">
                  <div class="skill-card d-flex align-items-center p-3 bg-dark rounded-3 h-100 shadow-sm">
                    <i :class="[item.icon ? item.icon : 'fa-solid fa-code', item.color, 'fs-3 me-3']"></i>
                    <span class="fw-semibold">{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.skill-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
}
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.3);
}
.text-purple {
  color: #7952b3 !important;
}
</style>
