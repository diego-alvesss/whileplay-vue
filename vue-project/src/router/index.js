import { createRouter, createWebHistory } from 'vue-router'
import CadastroPage from '../components/CadastroPage.vue'
import LoginPage from '../components/LoginPage.vue'

const routes = [
  { path: '/', redirect: '/cadastro' },
  { path: '/cadastro', component: CadastroPage },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router