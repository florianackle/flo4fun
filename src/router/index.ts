import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokemonView from '@/views/PokemonView.vue'
import ChuckView from '@/views/ChuckView.vue'
import WishlistView from '@/views/WishlistView.vue'

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
  {
    path: '/games',
    name: 'WishlistView',
    component: WishlistView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
