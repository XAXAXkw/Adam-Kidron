import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contactcomp',
    name: 'contactcomp',

    component: () => import('../components/ContactComp.vue')
  },
  {
    path: '/projectscat',
    name: 'projectscat',

    component: () => import('../components/ProjectsCat.vue')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
   {
    path: '/betazone',
    name: 'betazone',

    component: () => import('../components/BetaZone.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
