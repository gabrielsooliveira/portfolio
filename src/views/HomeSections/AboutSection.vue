<script setup>
import mainImage from '@/assets/images/perfil.png';
</script>

<template>
    <section id="about" class="py-5 bg-dark min-vh-100 d-flex justify-items-center align-items-center">
        <div class="px-5 mx-4 mt-3 text-light">
            <div class="row align-items-center">
                <div class="col-lg-4 mb-4 mb-lg-0 anim-slide-up">
                    <img :src="mainImage" class="d-block w-100 rounded border border-light border-3" alt="Perfil">
                </div>

                <div class="col-lg-7 offset-lg-1 anim-slide-up anim-delay-1">
                    <h2 class="fw-bold mb-3 text-secondary">Sobre Mim</h2>
                    <p class="text-light lead">
                    Desenvolvedor fullstack apaixonado por criar soluções web e mobile modernas.
                    </p>
                    <p>
                    Eu sou <strong>Gabriel Souza Oliveira</strong>, desenvolvedor fullstack com experiência em PHP (Laravel) e Vue.js. Tenho forte base em APIs, modelagem de banco de dados e interfaces intuitivas. Minha trajetória combina técnica, liderança e comunicação, construídas em projetos acadêmicos e profissionais.
                    </p>
                    <p>
                    Participei ativamente de ligas acadêmicas e empresas juniores, o que reforçou minha capacidade de aprender rápido e colaborar em equipe.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
