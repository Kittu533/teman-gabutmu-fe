import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/game/:id',
      name: 'game-detail',
      component: () => import('../views/GameDetailView.vue'),
    },
    {
      path: '/payment/:id',
      name: 'payment-waiting',
      component: () => import('../views/PaymentWaitingView.vue'),
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TransactionView.vue'),
    },
    {
      path: '/promo',
      name: 'promo',
      component: () => import('../views/PromoView.vue'),
    },
    {
      path: '/hadiahku',
      name: 'hadiahku',
      component: () => import('../views/HadiahkuView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
