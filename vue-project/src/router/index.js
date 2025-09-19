import { createRouter, createWebHistory } from 'vue-router'
import CadastroPage from '../components/whileplay/CadastroPage.vue'
import LoginPage from '../components/whileplay/login.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/cadastro', component: CadastroPage },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router