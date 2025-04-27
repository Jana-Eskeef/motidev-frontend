import Vue from 'vue';
import VueRouter from 'vue-router';

// استدعاء الصفحات
import AuthPage from '@/pages/AuthPage.vue';
import Dashboard from '@/pages/Dashboard.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';
import ChallengesPage from '@/pages/ChallengesPage.vue';
import ContentPage from '@/pages/ContentPage.vue';
import FriendsPage from '@/pages/FriendsPage.vue';
import NotificationsPage from '@/pages/NotificationsPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AuthPage },
  { path: '/dashboard', component: Dashboard },
  { path: '/projects', component: ProjectsPage },
  { path: '/challenges', component: ChallengesPage },
  { path: '/content', component: ContentPage },
  { path: '/friends', component: FriendsPage },
  { path: '/notifications', component: NotificationsPage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
