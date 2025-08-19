<script setup>

</script>

<template>
    <section id="projects" class="min-vh-100 d-flex align-items-center bg-light text-white">
      <div class="container">
        <h2>Projetos</h2>
        <ul>
          <li v-for="p in projects" :key="p.id">
            <router-link :to="`/project/${p.id}`">{{ p.name }}</router-link>
          </li>
        </ul>
      </div>
    </section>
</template>
