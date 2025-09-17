<template>
	<div class="login-bg" @click="handleBackgroundClick">
		<div class="login-container" @click.stop>
			<h1>Login</h1>
			<p>Bem vindo de volta criativo!</p>
			<form @submit.prevent="handleSubmit">
				<input type="email" v-model="email" placeholder="Email" required />
				<input type="password" v-model="password" placeholder="Password" required />
				<button type="submit">Logar</button>
			</form>
			<a href="recuperar_senha.html">Esqueceu sua senha?</a>
			<div class="footer">
				<a href="cadastro.html">Não tem login? Faça cadastro</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			email: "",
			password: ""
		};
	},
	mounted() {
		const params = new URLSearchParams(window.location.search);
		if (params.get('erro')) {
			alert('Email ou senha inválidos!');
		}
		if (params.get('cadastro') === 'ok') {
			alert('Cadastro realizado com sucesso! Faça login.');
		}
	},
	methods: {
		handleSubmit() {
			// Adicione validação ou requisição AJAX se necessário
			// Se for apenas front-end, redireciona direto:
			window.location.href = 'homepage1.html';
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
.login-bg {
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
	font-size: 3rem;
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
	font-size: 0.9rem;
}
.footer a {
	color: #000000;
	text-decoration: none;
}
.footer a:hover {
	text-decoration: underline;
}
</style>
