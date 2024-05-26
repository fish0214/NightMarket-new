import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Market from '../views/Market.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:marketName', component: Market }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
