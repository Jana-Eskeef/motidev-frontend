import Vue from 'vue';
import Router from 'vue-router';

import AuthPage from '@/Pages/LoginPage.vue';
import SignUpPage from '@/Pages/SignPage.vue';
import Dashboard from '@/Pages/Dashboard.vue'; // صفحة افتراضية بعد تسجيل الدخول

Vue.use(Router);

export default new Router({
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
});
