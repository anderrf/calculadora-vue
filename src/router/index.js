import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculadora from '../views/Calculadora'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calculadora',
    component: Calculadora
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
