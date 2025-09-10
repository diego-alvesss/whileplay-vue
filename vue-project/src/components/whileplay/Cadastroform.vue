<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="nome" :placeholder="nomePlaceholder" required />
    <input type="email" v-model="email" :placeholder="emailPlaceholder" required />
    <input type="password" v-model="password" :placeholder="senhaPlaceholder" required />
    <input type="password" v-model="password_confirm" :placeholder="confirmaSenhaPlaceholder" required />
    <button type="submit">{{ buttonText }}</button>
    <slot name="footer"></slot>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  nomePlaceholder: { type: String, default: 'Nome completo' },
  emailPlaceholder: { type: String, default: 'Email' },
  senhaPlaceholder: { type: String, default: 'Senha' },
  confirmaSenhaPlaceholder: { type: String, default: 'Confirme a senha' },
  buttonText: { type: String, default: 'Cadastrar' }
})

const nome = ref('')
const email = ref('')
const password = ref('')
const password_confirm = ref('')

function handleSubmit() {
  if (password.value !== password_confirm.value) {
    alert('As senhas não coincidem!')
    return
  }
  if (nome.value.length < 3) {
    alert('Digite um nome válido (mínimo 3 letras).')
    return
  }
  if (password.value.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.')
    return
  }
  alert('Cadastro realizado com sucesso!')
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background: #ffffff;
  color: #000000;
  font-size: 1rem;
}
input::placeholder {
  color: #666666;
}
button {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(45deg, #060662, #062b50);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s;
}
button:hover {
  transform: translateY(-2px);
}
</style>