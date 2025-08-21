<script setup>
import Projetos from '@/assets/jsons/projetos.json';
</script>

<template>
  <section id="projects" class="min-vh-100 bg-secondary">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold text-primary display-1">Projetos</h2>
        <projeto class="text-muted fw-semibold fs-5">Alguns trabalhos que desenvolvi com paixão e dedicação.</projeto>
      </div>

      <div class="row g-4">
        <div v-for="projeto in Projetos" :key="projeto.id" class="col-md-6 col-lg-4">
          <div class="card h-100 shadow border-0">
            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title fw-bold text-dark mb-0">{{ projeto.name }}</h5>
                <span class="badge bg-primary">{{ projeto.type }}</span>
              </div>
              <projeto class="card-text text-muted flex-grow-1">{{ projeto.description }}</projeto>
              <div class="mt-3">
                <a v-if="projeto.github" :href="projeto.github" target="_blank" class="btn btn-outline-dark btn-sm me-2">
                  <i class="fa-brands fa-github me-1"></i> GitHub
                </a>
                <a v-if="projeto.website" :href="projeto.website" target="_blank" class="btn btn-outline-primary btn-sm">
                  <i class="fa-solid fa-globe me-1"></i> Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
