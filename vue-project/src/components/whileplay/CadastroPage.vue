<template>
  <div class="cadastro-bg" @click="handleBackgroundClick">
    <div class="login-container" @click.stop>
      <h1>Cadastro</h1>
      <p>Crie sua conta e comece agora!</p>
      <CadastroForm>
        <template #footer>
          <div class="footer">
            <RouterLink to="/login">Já tem conta?</RouterLink>
          </div>
        </template>
      </CadastroForm>
    </div>
  </div>
</template>

<script setup>
import CadastroForm from './Cadastroform.vue'

function handleBackgroundClick(event) {
  const container = document.querySelector('.login-container');
  if (!container.contains(event.target)) {
    if (confirm('Deseja voltar para a homepage?')) {
      window.location.href = 'homepage1.html';
    }
  }
}
</script>

<style scoped>
.cadastro-bg {
  background: url('../../assets/imagens/While Play.png') no-repeat left center fixed;
  background-size: cover;
  color: #ffffff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30%;
  cursor: pointer;
}
.login-container {
  background: #707070;
  padding: 2rem;
  border-radius: 50px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(251, 251, 251, 0.2);
  cursor: auto;
}
.login-container h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000000;
}
.login-container p {
  color: #000000;
  margin-bottom: 2rem;
}
.footer {
  margin-top: 2rem;
  color: #cccccc;
  font-size: 1rem;
}
.footer a {
  color: #000000;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>