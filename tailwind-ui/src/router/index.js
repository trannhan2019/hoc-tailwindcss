import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: 'DashboardLayout',
    path: '/',
    component: () => import('../layouts/DashboardLayout.vue'),
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
      },
    ],
  },
  {
    name: 'trung-quan',
    path: '/tq',
    component: () => import('@/views/TrungQuan.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
