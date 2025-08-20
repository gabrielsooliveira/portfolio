<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    name: "Gestor de Despesas",
    description: "Aplicação web para controle financeiro pessoal com gráficos dinâmicos.",
    github: "https://github.com/exemplo/gestor-despesas",
    website: "https://gestor-despesas.com",
    type: "Web App"
  },
  {
    id: 2,
    name: "App de Receitas",
    description: "Aplicativo mobile para organizar receitas e listas de compras.",
    github: "https://github.com/exemplo/app-receitas",
    website: "",
    type: "Mobile App"
  },
  {
    id: 3,
    name: "API de Clima",
    description: "API REST para consulta de dados meteorológicos em tempo real.",
    github: "https://github.com/exemplo/api-clima",
    website: "",
    type: "API"
  }
]);
</script>

<template>
  <section id="projects" class="min-vh-100 bg-secondary">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold text-primary display-1">Projetos</h2>
        <p class="text-muted fw-semibold fs-5">Alguns trabalhos que desenvolvi com paixão e dedicação.</p>
      </div>

      <div class="row g-4">
        <div v-for="p in projects" :key="p.id" class="col-md-6 col-lg-4">
          <div class="card h-100 shadow border-0">
            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title fw-bold text-dark mb-0">{{ p.name }}</h5>
                <span class="badge bg-primary">{{ p.type }}</span>
              </div>
              <p class="card-text text-muted flex-grow-1">{{ p.description }}</p>
              <div class="mt-3">
                <a v-if="p.github" :href="p.github" target="_blank" class="btn btn-outline-dark btn-sm me-2">
                  <i class="fa-brands fa-github me-1"></i> GitHub
                </a>
                <a v-if="p.website" :href="p.website" target="_blank" class="btn btn-outline-primary btn-sm">
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
