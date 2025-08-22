<script setup>
import { ref } from 'vue'
import Toast from '@/components/Toast.vue'

const name = ref('')
const email = ref('')
const message = ref('')

// Variáveis para controlar o toast
const flash = ref({})
const toastMessage = ref('')

const submitForm = async () => {
  const res = await fetch('https://formspree.io/f/mkgzdzgz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  })
  
  if (res.ok) {
    toastMessage.value = 'Mensagem enviada com sucesso!'
    flash.value = { success: true }
    name.value = email.value = message.value = ''
  } else {
    toastMessage.value = 'Erro ao enviar. Tente novamente mais tarde.'
    flash.value = { error: true }
  }
}
</script>

<template>
  <section id="contact" class="min-vh-100 d-flex align-items-center bg-secondary text-white">
    <div class="container">
      <h2 class="mb-4">Contato</h2>
      <form @submit.prevent="submitForm" class="bg-dark p-4 rounded shadow">
        <div class="mb-3">
          <label class="form-label">Nome</label>
          <input v-model="name" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">E-mail</label>
          <input v-model="email" type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Mensagem</label>
          <textarea v-model="message" rows="4" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>

  <Toast :flash="flash" :message="toastMessage" />
</template>
