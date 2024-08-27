import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInUpModal from '@/components/auth/SignInUpModal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/login-temp',
      name: 'login-temp',
      component: SignInUpModal
    },
  ]
})

export default router
