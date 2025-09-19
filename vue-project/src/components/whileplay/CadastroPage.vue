<template>
  <div class="cadastro-page">
    <Cadastroform />
  </div>
</template>

<script setup>
import Cadastroform from './Cadastroform.vue'
</script>

<style scoped>
.cadastro-page {
  background: url('/MEDIA/imagens/While Play.png') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>