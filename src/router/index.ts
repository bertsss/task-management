import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
    },
    {
        path: '/view',
        name: 'view',
        component: () => import('../pages/ViewTask.vue'),
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('../pages/Create.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
