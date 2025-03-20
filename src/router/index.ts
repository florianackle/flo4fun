import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokemonView from '@/views/PokemonView.vue'
import ChuckView from '@/views/ChuckView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/pokemon',
    name: 'PokemonView',
    component: PokemonView,
  },
  {
    path: '/chuck',
    name: 'ChuckView',
    component: ChuckView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
