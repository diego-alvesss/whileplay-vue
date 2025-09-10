<template>
  <div class="login-container">
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
</template>

<script setup>
import CadastroForm from './Cadastroform.vue'
</script>

<style scoped>
.login-container {
  background: #707070;
  padding: 2rem;
  border-radius: 50px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(251, 251, 251, 0.2);
  cursor: auto;
  margin: 0 auto;
  margin-top: 5vh;
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