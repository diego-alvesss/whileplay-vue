<template>
  <div class="cadastro-bg" @click="handleBackgroundClick">
    <div class="login-container" @click.stop>
      <h1>Cadastro</h1>
      <p>Crie sua conta e comece agora!</p>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="nome" placeholder="Nome completo" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Senha" required />
        <input type="password" v-model="password_confirm" placeholder="Confirme a senha" required />
        <button type="submit">Cadastrar</button>
      </form>
      <div class="footer">
        <a href="login.html">Já tem conta?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastroform",
  data() {
    return {
      nome: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('erro') === 'senhas') {
      alert('As senhas não coincidem!');
    }
    if (params.get('erro') === 'email') {
      alert('Email já cadastrado!');
    }
    if (params.get('erro') === 'bd') {
      alert('Erro ao cadastrar usuário. Tente novamente.');
    }
    if (params.get('erro') === 'nome') {
      alert('Digite um nome válido (mínimo 3 letras).');
    }
    if (params.get('erro') === 'emailinvalido') {
      alert('Digite um email válido.');
    }
    if (params.get('erro') === 'senhapequena') {
      alert('A senha deve ter pelo menos 6 caracteres.');
    }
  },
  methods: {
    handleSubmit() {
      // Adicione validação ou requisição AJAX se necessário
      window.location.href = 'login.html';
    },
    handleBackgroundClick(event) {
      const container = this.$el.querySelector('.login-container');
      if (!container.contains(event.target)) {
        if (confirm("Deseja voltar para a homepage?")) {
          window.location.href = "homepage1.html";
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
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
.login-container input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background: #ffffff;
  color: #000000;
  font-size: 1rem;
}
.login-container input::placeholder {
  color: #666666;
}
.login-container button {
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
.login-container button:hover {
  transform: translateY(-2px);
}
.login-container a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  margin-top: 1rem;
}
.login-container a:hover {
  text-decoration: underline;
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