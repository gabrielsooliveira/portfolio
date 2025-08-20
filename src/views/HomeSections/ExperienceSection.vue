<script setup>
const experienciasProfissionais = [
  {
    titulo: "Analista de Sistemas Pleno",
    empresa: "Prefeitura de Salvador",
    periodo: "nov 2022 - Atualmente",
    descricao: "Desenvolvimento fullstack com PHP (Laravel), Vue.js e Oracle, com foco na criação de APIs e sistemas que aprimoram a gestão financeira municipal.",
    icone: "fa-solid fa-building-user"
  },
  {
    titulo: "Analista de Sistemas Júnior",
    empresa: "ACP Group",
    periodo: "nov 2021 - nov 2022",
    descricao: "Atuação em sistemas para órgãos públicos, utilizando Laravel e Vue.js em conjunto com SQL Server. Trabalhei em times ágeis e com infraestrutura baseada em Docker.",
    icone: "fa-solid fa-building-circle-check"
  },
  {
    titulo: "Desenvolvedor Web e Mobile",
    empresa: "GA Software",
    periodo: "fev 2021 - nov 2021",
    descricao: "Atuei no desenvolvimento de interfaces web com foco em Vue.js e Laravel, além da criação de APIs para integração entre sistemas.",
    icone: "fa-solid fa-building-circle-check"
  }
];

const experienciasAcademicas = [
  {
    titulo: "Assessor de Comunicação",
    empresa: "NEJ Salvador",
    periodo: "abr 2019 - jul 2019",
    descricao: "Integrei o primeiro time do Núcleo de Empresas Juniores de Salvador, onde desempenhei um papel na área de comunicação e mídias sociais. Minhas responsabilidades incluíram a gestão de anúncios do núcleo e a criação de conteúdo.",
    icone: "fa-solid fa-building-circle-check"
  },
  {
    titulo: "diretor de marketing e vendas",
    empresa: "Praxis Empresa Jr",
    periodo: "jan 2019 - jul 2019",
    descricao: "Com foco em conhecer novas áreas e testar o senso de adaptação à uma nova realidade, atuei no cargo de diretor de Marketing e vendas, onde consegui desenvolver ainda mais minhas skills de liderança e de trabalho em equipe, além de expandir o networking e soft skills necessárias para o mercado de trabalho.",
    icone: "fa-solid fa-building-circle-check"
  },
  {
    titulo: "projetista do núcleo de T.I",
    empresa: "Praxis Empresa Jr",
    periodo: "jan 2018 - jul 2019",
    descricao: "Atuei em projetos de desenvolvimento web para clientes reais que necessitavam da ajuda de profissional para desenvolver seus sistemas e sites e procuravam na Praxis Empresa Jr. estudantes com esse perfil e com a competência para desenvolver seus projetos.",
    icone: "fa-solid fa-building-circle-check"
  },
  {
    titulo: "membro da liga de programação em C",
    empresa: "Universidade Salvador",
    periodo: "fev 2017 - nov 2017",
    descricao: "Atuei como membro e posteriormente como monitor da liga acadêmica, realizando desafios e promovendo a troca de conhecimento em linguagem C entre os participantes.",
    icone: "fa-solid fa-building-circle-check"
  },
];

const experienciasOutras = [
  {
    titulo: "Top 10 projetos (BIMI)",
    empresa: "Hackathon Bemobi",
    periodo: "nov 2024",
    descricao: "O Bimi é um projeto de atendente virtual com inteligência artificial Com a integração da IA ​​alimentada pela Gemini, o BIMI oferece interações altamente personalizadas e eficientes, aprimorando a experiência do usuário e automatizando processos de atendimento. Este sistema visa otimizar o tempo de resposta e fornecer um suporte melhor qualidade.",
    icone: "fa-solid fa-diagram-project"
  },
  {
    titulo: "Top 6 projetos (IrrigaGo)",
    empresa: "Hackathon CPGoiás4",
    periodo: "nov 2024",
    descricao: "O IrrigaGo é um sitema de gerenciamento de irrigação da plantação de fazendas, com verificação climatica das regiões, analise de qualidade da água",
    icone: "fa-solid fa-diagram-project"
  },
  {
    titulo: "Fundador",
    empresa: "Athos Startup",
    periodo: "mar 2018 - jun 2018",
    descricao: "Iniciei o desenvolvimento da Athos, uma startup que buscava construir uma solução de ERP completamente modular, voltada principalmente para pequenas empresas, que seriam capazes de selecionar as soluções específicas que gostariam. Desenvolvimento de APIs REST em .NET para soluções de e-commerce de pequenas empresas, sistemas de gestão de estoque e desenvolvimento de SPAs em Vue como solução frontend, com foco no desenvolvimento de dashboards para visualização de dados.",
    icone: "fa-solid fa-people-roof"
  },
  {
    titulo: "Voluntário",
    empresa: "Pure Startup",
    periodo: "mar 2018 - jun 2018",
    descricao: "Participei de ações voltadas ao empreendedorismo e inovação tecnológica, contribuindo com suporte em eventos e na organização de atividades colaborativas.",
    icone: "fa-solid fa-building-circle-check"
  }
]
</script>

<template>
  <section id="experiences" class="py-5 mt-3 min-vh-100 bg-light bg-gradient">
    <div class="px-5 mx-4">
      <h2 class="fs-1 fw-bold mb-5 text-secondary">Um pouco sobre minhas experiências...</h2>
      <div class="row">
        <!-- Coluna Profissional -->
        <div class="col-lg-4 mb-5">
          <h4 class="text-primary fw-bold mb-2">Profissionais</h4>
          <div class="divider mb-4"></div>

          <div
            v-for="(exp, index) in experienciasProfissionais"
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
                v-if="index !== experienciasProfissionais.length - 1"
                class="timeline-line"
              ></div>
            </div>
          </div>
        </div>

        <!-- Coluna Acadêmica -->
        <div class="col-lg-4">
          <h4 class="text-primary fw-bold mb-2">Acadêmicas</h4>
          <div class="divider mb-4"></div>

          <div
            v-for="(exp, index) in experienciasAcademicas"
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
                v-if="index !== experienciasAcademicas.length - 1"
                class="timeline-line"
              ></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <h4 class="text-primary fw-bold mb-2">Outras</h4>
          <div class="divider mb-4"></div>

          <div
            v-for="(exp, index) in experienciasOutras"
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
                v-if="index !== experienciasOutras.length - 1"
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
