<template>
  <main>
    <section class="body-font pt-12 px-8 bg-zinc-50 dark:bg-zinc-900 lg:pt-16 lg:px-64">
      <div class="w-full container px-5 mx-auto flex flex-wrap flex-col rounded-lg mt-8 bg-gradient-to-r from-indigo-800 to-indigo-950 dark:from-teal-800 dark:to-teal-950 lg:ml-auto lg-mt-0 sm:px-0">
        <div class="flex flex-wrap w-full py-4">
          <div class="w-full content-start rounded-lg overflow-hidden p-6 grid justify-items-center lg:w-1/3 lg:mt-0">
            <img src="@/assets/images/perfil.png" class="sm:size-64 rounded-sm border-8 border-indigo-50"/>
          </div>
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-2/3 lg:pr-10">
            <div class="w-full lg:p-4 px-4 mb-6 text-zinc-100">
              <h1 class="title-font font-medium text-xl mb-2">Eu sou Gabriel Souza Oliveira, desenvolvedor fullstack</h1>
              <p class="leading-relaxed">Sou Gabriel Souza Oliveira, desenvolvedor fullstack com experiência em aplicações web e mobile, atuando principalmente com PHP (Laravel) e Vue.js. Tenho uma forte base em desenvolvimento de APIs, modelagem de banco de dados e criação de interfaces eficientes e intuitivas. Minha trajetória combina vivências técnicas com experiências em liderança, comunicação e trabalho em equipe, desenvolvidas tanto em projetos acadêmicos quanto profissionais. Participei ativamente de iniciativas que estimulam a troca de conhecimento, como ligas acadêmicas e empresas juniores, o que fortaleceu minha capacidade de colaborar, aprender rápido e entregar soluções de impacto em diferentes contextos.</p>
              <a :href="pdfUrl" download="Curriculo.pdf" target="_blank" class="mt-4 inline-flex text-white bg-teal-700 border-0 py-1 px-4 focus:outline-none hover:bg-teal-800 rounded dark:bg-indigo-700 dark:hover:bg-indigo-800">Download CV</a>
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
            <div class="h-1 bg-zinc-200 rounded overflow-hidden mt-2 mb-5">
              <div class="w-24 h-full bg-teal-400 dark:bg-indigo-700"></div>
            </div>
            <Step v-for="(experiencia, index) in experienciasProfissionais" :key="experiencia.id" :isLast="index === experienciasProfissionais.length - 1" :data="experiencia"></Step>
          </div>
          <div class="lg:w-1/2 lg:pr-10 lg:py-6">
            <h4 class="lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600">Acadêmicas</h4>
            <div class="h-1 bg-zinc-200 rounded overflow-hidden mt-2 mb-5">
              <div class="w-24 h-full bg-teal-400 dark:bg-indigo-700"></div>
            </div>
            <Step v-for="(experiencia, index) in experienciasAcademicas" :key="experiencia.id" :isLast="index === experienciasAcademicas.length - 1" :data="experiencia"></Step>
          </div>
        </div>
      </div>
    </section>

    <section class="body-font bg-zinc-50 dark:bg-zinc-900">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <h3 class="lg:text-5xl text-4xl font-bold text-indigo-800 dark:text-teal-600 mb-7">Conhecimentos <span class="text-teal-400 font-bold dark:text-indigo-600">.</span></h3>
        <div class="flex flex-wrap w-full">
          <div class="flex flex-wrap lg:w-4/6 lg:pr-10 lg:py-6 gap-y-4">
            <div v-for="conhecimento in conhecimentos" :key="conhecimento.id" :data="conhecimento" class="w-1/6 text-indigo-800 hover:text-teal-600 dark:text-teal-600 dark:hover:text-indigo-500" @mouseover="showDetails(conhecimento)">
              <i :class="[conhecimento.imagem]" class="text-4xl"></i> 
            </div>
          </div>
          <div class="lg:w-2/6 lg:pr-10 lg:py-6 mt-12 lg:mt-0">
            <h1 class="text-3xl font-bold text-teal-600 uppercase">{{ detalhes.nome }}</h1>
            <h4 class="mb-12 text-indigo-600 font-semibold capitalize">{{ detalhes.titulo }}</h4>
            <p class="text-indigo-950 dark:text-zinc-50 font-semibold">{{ detalhes.descricao }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Step from '@/components/Step.vue';
import Experiencias from '@/assets/js/experiencias.json';
import Conhecimentos from '@/assets/js/conhecimentos.json'

export default {
  name: "HomeView",
  components: {
    Step
  },
  data() {
    return {
      experienciasProfissionais: [],
      experienciasAcademicas: [],
      conhecimentos: [],
      pdfUrl: process.env.BASE_URL + 'docs/Curriculo.pdf',
      detalhes: {
        nome: '',
        titulo: '',
        descricao: ''
      }
    }
  },
  created() {
    this.experienciasProfissionais = Experiencias.experiencias_profissionais;
    this.experienciasAcademicas = Experiencias.experiencias_academicas;
    this.conhecimentos = Conhecimentos;
  },
  methods: {
    showDetails(conhecimento) {
      this.detalhes.nome = conhecimento.nome;
      this.detalhes.titulo = conhecimento.titulo;
      this.detalhes.descricao = conhecimento.descricao;
    }
  }
};
</script>
