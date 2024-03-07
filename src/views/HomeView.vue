<template>
  <main>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <h3 class="sm:text-5xl text-4xl mb-4 font-bold">Minhas experiências <span class="text-teal-600 font-bold">.</span></h3>
        <div class="flex flex-wrap w-full">
          <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
            <h4 class="sm:text-2xl text-3xl">Profissionais</h4>
            <div class="h-1 w-20 bg-teal-600 rounded mt-2 mb-5"></div>
            <Step v-for="(experiencia, index) in experienciasProfissionais" :key="experiencia.id" :isLast="index === experienciasProfissionais.length - 1" :data="experiencia"></Step>
          </div>
          <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
            <h4 class="sm:text-2xl text-3xl">Acadêmicas</h4>
            <div class="h-1 w-20 bg-teal-600 rounded mt-2 mb-5"></div>
            <Step v-for="(experiencia, index) in experienciasAcademicas" :key="experiencia.id" :isLast="index === experienciasAcademicas.length - 1" :data="experiencia"></Step>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Step from '@/components/Step.vue';
import Experiencias from '@/assets/js/experiencias.json';

export default {
  name: "HomeView",
  components: {
    Step
  },
  data() {
    return {
      experienciasProfissionais: [],
      experienciasAcademicas: []
    }
  },
  created() {
    this.experienciasProfissionais = Experiencias.experiencias_profissionais;
    this.experienciasAcademicas = Experiencias.experiencias_academicas;
  }
};
</script>
