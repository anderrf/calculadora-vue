import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculadora from '../views/Calculadora'
import Cronometro from '../views/Cronometro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: Calculadora
  },
  {
    path: '/cronometro',
    name: 'Cronometro',
    component: Cronometro
  },
  {
    path: '/',
    redirect: '/calculadora'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
