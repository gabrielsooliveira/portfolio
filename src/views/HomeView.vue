<template>
  <main>
    <section class="body-font pt-12 lg:py-24 bg-zinc-50 dark:bg-zinc-900">
      <div class="w-full container px-5 mx-auto flex flex-wrap flex-col bg-gradient-to-r from-indigo-800 to-indigo-950 dark:from-teal-800 dark:to-teal-950 lg:ml-auto lg:rounded-lg">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-1/3 w-full content-start rounded-lg overflow-hidden mt-6 lg:mt-0 p-16 grid justify-items-center">
            <img src="@/assets/images/perfil.png" class="sm:size-64 rounded-full border-8 border-indigo-50"/>
          </div>
          <div class="lg:w-2/3 lg:pr-10 flex flex-wrap -mx-4 mt-auto mb-auto">
            <div class="w-full lg:p-4 px-4 mb-6 text-zinc-100">
              <h1 class="title-font font-medium text-xl mb-2">Eu sou Gabriel Souza Oliveira, um desenvolvedor fullstack</h1>
              <div class="leading-relaxed">Atuando na área há quase 7 anos, comecei a programar desde 2017. Desenvolvi vários projetos para empresas em que estive presente. Hoje estou terminando minha formação em ciências da computação e trabalhando como desenvolvedor fullstack com stacks principais sendo  Vue.js e PHP/Laravel.</div>
              <a :href="pdfUrl" download="Curriculo.pdf" class="mt-4 inline-flex text-white bg-teal-700 border-0 py-1 px-4 focus:outline-none hover:bg-teal-800 rounded dark:bg-indigo-700 dark:hover:bg-indigo-800">Download CV</a>
            </div>
            <div class="p-4 w-1/3 text-center">
              <h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">+3</h2>
              <p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Experiências profissional</p>
            </div>
            <div class="p-4 w-1/3 text-center">
              <h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">+10</h2>
              <p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Projetos realizados</p>
            </div>
            <div class="p-4 w-1/3 text-center">
              <h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">3</h2>
              <p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Empresas trabalhadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="body-font bg-zinc-50 dark:bg-zinc-900">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <h3 class="lg:text-5xl text-4xl font-bold text-indigo-800 dark:text-teal-600">Minhas experiências <span class="text-teal-400 font-bold dark:text-indigo-600">.</span></h3>
        <div class="flex flex-wrap w-full">
          <div class="lg:w-1/2 lg:pr-10 lg:py-6">
            <h4 class="lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600">Profissionais</h4>
            <div class="h-1 w-20 bg-teal-400 rounded mt-2 mb-5 dark:bg-indigo-700"></div>
            <Step v-for="(experiencia, index) in experienciasProfissionais" :key="experiencia.id" :isLast="index === experienciasProfissionais.length - 1" :data="experiencia"></Step>
          </div>
          <div class="lg:w-1/2 lg:pr-10 lg:py-6">
            <h4 class="lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600">Acadêmicas</h4>
            <div class="h-1 w-20 bg-teal-400 rounded mt-2 mb-5 dark:bg-indigo-700"></div>
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
      experienciasAcademicas: [],
      pdfUrl: process.env.BASE_URL + 'docs/Curriculo.pdf'
    }
  },
  created() {
    this.experienciasProfissionais = Experiencias.experiencias_profissionais;
    this.experienciasAcademicas = Experiencias.experiencias_academicas;
  }
};
</script>
