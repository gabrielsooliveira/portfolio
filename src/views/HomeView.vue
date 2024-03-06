<template>
  <main>
    <section>
      <div class="relative grid w-full bg-sky-700 h-96 lg:h-[32rem] place-items-center">
        <div class="flex flex-col items-center mx-auto text-center">
          <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div
              class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-8xl text-3xl mb-4 font-medium text-white">
                Olá, eu sou <br class="hidden lg:inline-block" />Gabriel Souza
              </h1>
              <div class="flex justify-center">
                <a :href="pdfUrl" @click.prevent="downloadCV"
                  class="inline-flex text-sky-950 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-sky-950 hover:text-white rounded text-lg transition duration-150">Download
                  do CV</a>
                <a
                  class="ml-4 inline-flex text-sky-950 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-sky-950 hover:text-white rounded text-lg transition duration-150">Vamos
                  conversar</a>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
          </div>
        </div>
      </div>

      <svg class="fill-sky-700" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
      </svg>
    </section>

    <section class="text-gray-600 body-font sm:mt-1 mt-24">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <h3 class="sm:text-5xl text-4xl mb-4 font-bold">Minhas experiências <span class="text-sky-500 font-bold">.</span></h3>
        <div class="flex flex-wrap w-full">
          <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
            <h4 class="sm:text-2xl text-3xl my-5">Profissionais</h4>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">DESENVOLVEDOR WEB E MOBILE JR</h2>
                <h6 class="text-sm text-sky-950">GA SOFTWARE | FEV 2021 - NOV 2021</h6>
                <p class="leading-relaxed">Na GA Software, empresa de desenvolvimento de sistemas, atuei como desenvolvedor web front-end em todos sistemas dos produtos da LS System da empresa e atuei no back-end de alguns desses sistemas utilizando do framework de PHP, Laravel. Já no desenvolvimento mobile fiquei a cargo do front-end nos aplicativos Confia, B.I Metas e Guia Pessoal utilizando as linguagens Quasar e React Native.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">ANALISTA DE SISTEMAS JR</h2>
                <h6 class="text-sm text-sky-950">ACP GROUP | NOV 2021 - NOV 2022</h6>
                <p class="leading-relaxed">Trabalhei na equipe de sustentação para sistema da PRODEB e na equipe de desenvolvimento da Prefeitura de Camaçari. Eu utilizei Kanban, Scrum como metodologias ágeis e Docker para gerenciamento de containers. Utilizo para produção da modelagem do banco de dados Microsoft SQL Server e para o desenvolvimento de telas trabalhei com Vue e serviços utilizando o Laravel.</p>
              </div>
            </div>
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">ANALISTA DE SISTEMAS PL</h2>
                <h6 class="text-sm text-sky-950">PREFEITURA DE SALVADOR | NOV 2022 - ATUALMENTE</h6>
                <p class="leading-relaxed">Na controladoria geral do município, órgão central do sistema de controle interno. Atuo no desenvolvimento fullstack de sistemas com foco em PHP, Laravel, Vue.js e Oracle. Junto com a equipe produzimos Api’s e sistemas para melhorias na gestão financeira do município.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6">
            <h4 class="sm:text-2xl text-3xl my-5">Acadêmicas</h4>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">MEMBRO DA LIGA DE PROGRAMAÇÃO EM C</h2>
                <h6 class="text-sm text-sky-950">UNIVERSIDADE SALVADOR | JAN 2017 - JUL 2017</h6>
                <p class="leading-relaxed">Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">VOLUNTÁRIO</h2>
                <h6 class="text-sm text-sky-950">PURE STARTUP | MAR 2018 - JUN 2018</h6>
                <p class="leading-relaxed">Voluntário na startup criada na universidade Salvador onde trabalhei no desenvolvimento do site institucional da startup, utilizando das ferramentas básicas de desenvolvimento web HTML5, CSS3, Javascript, Bootstrap e Jquery.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">PROJETISTA DO NÚCLEO DE T.I</h2>
                <h6 class="text-sm text-sky-950">PRAXIS EMPRESA JR | JAN 2018 - JUL 2019</h6>
                <p class="leading-relaxed">Atuei em projetos de desenvolvimento web para clientes reais que necessitavam da ajuda de profissional para desenvolver seus sistemas e sites e procuravam na Praxis Empresa Jr. Estudantes com esse perfil e com a competência para desenvolver seus projetos.</p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">DIRETOR DE MARKETING E VENDAS</h2>
                <h6 class="text-sm text-sky-950">PRAXIS EMPRESA JR | JAN 2019 - JUL 2019</h6>
                <p class="leading-relaxed">Com foco em conhecer novas áreas e testar o senso de adaptação à uma nova realidade, atuei no cargo de diretor de Marketing e vendas, onde consegui desenvolver ainda mais minhas skills de liderança e de trabalho em equipe, além de expandir o networking e soft skills necessárias para o mercado de trabalho.</p>
              </div>
            </div>
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-bold title-font text-sm text-sky-950 mb-1 tracking-wider">ASSESSOR DE COMUNICAÇÃO</h2>
                <h6 class="text-sm text-sky-950">NEJ SALVADOR | ABR 2019 - JUL 2019</h6>
                <p class="leading-relaxed">Na controladoria geral do município, órgão central do sistema de controle interno. Atuo no desenvolvimento fullstack de sistemas com foco em PHP, Laravel, Vue.js e Oracle. Junto com a equipe produzimos Api’s e sistemas para melhorias na gestão financeira do município.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      pdfUrl: process.env.BASE_URL + "assets/docs/Curriculo.pdf",
    };
  },
  methods: {
    downloadCV() {
      window.open(this.pdfUrl, "_blank");
    },
  },
};
</script>
