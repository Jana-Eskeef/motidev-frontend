import Vue from 'vue'
import VueRouter from 'vue-router'  // Correct import name

import AuthPage from '@/Pages/LoginPage.vue'
import SignUpPage from '@/Pages/SignPage.vue'
import Dashboard from '@/Pages/Dashboard.vue'

// Install the router plugin
Vue.use(VueRouter)  // Must use VueRouter (the imported name)

// Create router instance
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: AuthPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    }
  ]
})

export default router