<template>
  <div>
    <!-- Hero -->
    <section id="inital" class="vh-100 d-flex align-items-center bg-secondary text-white">
      <div class="container text-center">
        <h1>Gabriel Souza</h1>
        <p class="lead">Desenvolvedor Web & Mobile</p>
      </div>
    </section>

    <!-- Sobre -->
    <section id="about" class="vh-100 d-flex align-items-center bg-light">
      <div class="container">
        <h2>Sobre Mim</h2>
        <p>Um pouco sobre minha trajetória...</p>
      </div>
    </section>

    <section id="experiences" class="vh-100 d-flex align-items-center bg-light">
      <div class="container">
        <h2>Sobre Mim</h2>
        <p>Um pouco sobre minha trajetória...</p>
      </div>
    </section>

    <!-- Projetos -->
    <section id="projects" class="vh-100 d-flex align-items-center bg-dark text-white">
      <div class="container">
        <h2>Projetos</h2>
        <ul>
          <li v-for="p in projects" :key="p.id">
            <router-link :to="`/project/${p.id}`">{{ p.name }}</router-link>
          </li>
        </ul>
      </div>
    </section>

    <section id="knowledge" class="vh-100 d-flex align-items-center bg-light">
      <div class="container">
        <h2>Sobre Mim</h2>
        <p>Um pouco sobre minha trajetória...</p>
      </div>
    </section>

    <!-- Contato -->
    <section id="contact" class="vh-100 d-flex align-items-center bg-secondary text-white">
      <div class="container">
        <h2>Contato</h2>
        <p>Me envie uma mensagem!</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      projects: [
        { id: 1, name: 'Portfolio' },
        { id: 2, name: 'Sistema Web' }
      ]
    };
  }
};
</script>
