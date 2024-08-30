import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageEventsView from '@/views/ManageEventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/ManageEvents',
      name: 'manageEvents',
      component: ManageEventsView
    },
    
    
      
  ]
})

export default router
