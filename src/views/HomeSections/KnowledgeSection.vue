<script setup>
import { ref } from "vue";

const knowledge = ref([
  {
    title: "Linguagens e Frameworks",
    items: [
      { name: "HTML5", icon: "fa-brands fa-html5", color: "text-danger" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-light" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "text-warning" },
      { name: "PHP", icon: "fa-brands fa-php", color: "text-info" },
      { name: "Python", icon: "fa-brands fa-python", color: "text-success" },
      { name: "Java", icon: "fa-brands fa-java", color: "text-danger" },
      { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "text-success" },
      { name: "Spring Boot", icon: "fa-solid fa-leaf", color: "text-success" },
      { name: "Angular", icon: "fa-brands fa-angular", color: "text-danger" },
      { name: "jQuery", color: "text-light" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "text-purple" },
      { name: "Quasar", icon: "fa-solid fa-gem", color: "text-info" },
      { name: "Ionic", color: "text-light" }
    ]
  },
  {
    title: "Metodologias e Ferramentas",
    items: [
      { name: "Scrum", icon: "fa-solid fa-people-group", color: "text-success" },
      { name: "Kanban", icon: "fa-solid fa-table-columns", color: "text-info" },
      { name: "Git", icon: "fa-brands fa-git-alt", color: "text-danger" },
      { name: "Docker", icon: "fa-brands fa-docker", color: "text-light" },
      { name: "Grafana", icon: "fa-solid fa-chart-line", color: "text-warning" },
      { name: "API RESTful", icon: "fa-solid fa-network-wired", color: "text-success" },
      { name: "JWT", color: "text-light" },
      { name: "Design Patterns", icon: "fa-solid fa-diagram-project", color: "text-info" },
      { name: "DDD", icon: "fa-solid fa-cubes", color: "text-light" },
      { name: "Maven", icon: "fa-solid fa-gears", color: "text-danger" },
      { name: "Firebase", icon: "fa-solid fa-fire", color: "text-warning" }
    ]
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "MySQL", icon: "fa-solid fa-database", color: "text-warning" },
      { name: "SQL Server", icon: "fa-solid fa-server", color: "text-info" },
      { name: "PostgreSQL", icon: "fa-solid fa-database", color: "text-light" }
    ]
  }
]);
</script>

<template>
  <section id="knowledge" class="min-vh-100 d-flex align-items-center bg-dark text-white">
    <div class="p-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-1 text-secondary">Conhecimentos</h2>
        <p class="text-light fs-5">Um pouco sobre minhas habilidades técnicas.</p>
      </div>

      <div class="row g-4">
        <div v-for="(category, index) in knowledge" :key="index" class="col-4">
          <div class="card bg-primary text-white shadow border-0">
            <div class="card-body">
              <h5 class="text-secondary fw-bold mb-4">{{ category.title }}</h5>
              <div class="row g-3">
                <div v-for="(item, i) in category.items" :key="i" class="col-6 col-md-4">
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
