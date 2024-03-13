<template>
  <main>
    <section class="body-font pt-12 md:pt-24">
      <div class="container px-5 mx-auto flex flex-wrap bg-gray-100 rounded-lg flex-col md:ml-auto w-full">
        <div class="flex flex-wrap w-full">
          <div class="sm:w-1/3 w-full content-start rounded-lg overflow-hidden mt-6 sm:mt-0 p-20">
            <img src="@/assets/images/perfil.png" class="size-full rounded-full border-8 border-teal-900"/>
          </div>
          <div class="sm:w-2/3 sm:pr-10 flex flex-wrap -mx-4 mt-auto mb-auto">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-teal-900">Eu sou Gabriel Souza Oliveira, um desenvolvedor fullstack</h1>
              <div class="leading-relaxed">Atuando na área há quase 7 anos, comecei a programar desde 2017. Desenvolvi vários projetos para empresas em que estive presente. Hoje estou terminando minha formação em ciências da computação e trabalhando como desenvolvedor fullstack com stacks principais sendo  Vue.js e PHP/Laravel.</div>
            </div>
            <div class="p-4 w-1/3 text-center">
              <h2 class="title-font font-medium text-3xl text-teal-900">+3</h2>
              <p class="leading-relaxed">Experiências profissional</p>
            </div>
            <div class="p-4 w-1/3 text-center">
              <h2 class="title-font font-medium text-3xl text-teal-900">+10</h2>
              <p class="leading-relaxed">Projetos realizados</p>
            </div>
            <div class="p-4 w-1/3 text-center">
              <h2 class="title-font font-medium text-3xl text-teal-900">3</h2>
              <p class="leading-relaxed">Empresas trabalhadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="body-font" id="experiencias">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <h3 class="sm:text-5xl text-4xl font-bold">Minhas experiências <span class="text-teal-600 font-bold">.</span></h3>
        <div class="flex flex-wrap w-full">
          <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
            <h4 class="sm:text-2xl text-3xl mt-8">Profissionais</h4>
            <div class="h-1 w-20 bg-teal-600 rounded mt-2 mb-5"></div>
            <Step v-for="(experiencia, index) in experienciasProfissionais" :key="experiencia.id" :isLast="index === experienciasProfissionais.length - 1" :data="experiencia"></Step>
          </div>
          <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
            <h4 class="sm:text-2xl text-3xl mt-8">Acadêmicas</h4>
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
