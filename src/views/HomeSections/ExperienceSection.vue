<script setup>
import Trajetorias from '@/assets/jsons/trajetorias.json';
</script>

<template>
  <section id="experiences" class="min-vh-100 bg-light bg-gradient">
    <div class="container py-5">
      <h2 class="fs-1 fw-bold mb-5 text-secondary">Um pouco sobre minhas experiências...</h2>
      <div class="row">
        <!-- Coluna Profissional -->
        <div class="col-lg-4 mb-5">
          <h4 class="text-primary fw-bold mb-2">Profissionais</h4>
          <div class="divider mb-4"></div>

          <div
            v-for="(exp, index) in Trajetorias.experienciasProfissionais"
            :key="index"
            class="timeline-item d-flex"
          >
            <!-- Linha vertical + ícone -->
            <div class="timeline-icon text-bg-primary rounded-circle d-flex align-items-center justify-content-center">
              <i :class="exp.icone"></i>
            </div>

            <!-- Conteúdo -->
            <div class="flex-grow-1 ms-4">
              <div class="card border-0 shadow-sm mb-4">
                <div class="card-body">
                  <h6 class="fw-bold text-primary text-uppercase mb-1">{{ exp.titulo }}</h6>
                  <small class="text-muted d-block mb-2">{{ exp.empresa }} | {{ exp.periodo }}</small>
                  <p class="mb-0">{{ exp.descricao }}</p>
                </div>
              </div>
              <div
                v-if="index !== Trajetorias.experienciasProfissionais.length - 1"
                class="timeline-line"
              ></div>
            </div>
          </div>
        </div>

        <!-- Coluna Acadêmica -->
        <div class="col-lg-4 mb-5">
          <h4 class="text-primary fw-bold mb-2">Acadêmicas</h4>
          <div class="divider mb-4"></div>

          <div
            v-for="(exp, index) in Trajetorias.experienciasAcademicas"
            :key="index"
            class="timeline-item d-flex"
          >
            <div class="timeline-icon text-bg-primary rounded-circle d-flex align-items-center justify-content-center">
              <i :class="exp.icone"></i>
            </div>

            <div class="flex-grow-1 ms-4">
              <div class="card border-0 shadow-sm mb-4">
                <div class="card-body">
                  <h6 class="fw-bold text-primary text-uppercase mb-1">{{ exp.titulo }}</h6>
                  <small class="text-muted d-block mb-2">{{ exp.empresa }} | {{ exp.periodo }}</small>
                  <p class="mb-0">{{ exp.descricao }}</p>
                </div>
              </div>
              <div
                v-if="index !== Trajetorias.experienciasAcademicas.length - 1"
                class="timeline-line"
              ></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-5">
          <h4 class="text-primary fw-bold mb-2">Outras</h4>
          <div class="divider mb-4"></div>

          <div
            v-for="(exp, index) in Trajetorias.experienciasOutras"
            :key="index"
            class="timeline-item d-flex"
          >
            <div class="timeline-icon text-bg-primary rounded-circle d-flex align-items-center justify-content-center">
              <i :class="exp.icone"></i>
            </div>

            <div class="flex-grow-1 ms-4">
              <div class="card border-0 shadow-sm mb-4">
                <div class="card-body">
                  <h6 class="fw-bold text-primary text-uppercase mb-1">{{ exp.titulo }}</h6>
                  <small class="text-muted d-block mb-2">{{ exp.empresa }} | {{ exp.periodo }}</small>
                  <p class="mb-0">{{ exp.descricao }}</p>
                </div>
              </div>
              <div
                v-if="index !== Trajetorias.experienciasOutras.length - 1"
                class="timeline-line"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Divisor padrão */
.divider {
  height: 4px;
  width: 100px;
  background-color: var(--bs-secondary);
  border-radius: 1rem;
}

.timeline-item {
  position: relative;
}

.timeline-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  font-size: 1rem;
}

.timeline-line {
  position: absolute;
  top: 40px;
  left: 20px;
  width: 2px;
  height: calc(100% - 40px);
  background-color: var(--bs-secondary);
  z-index: 0;
}
</style>
