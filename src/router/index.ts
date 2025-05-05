import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/view',
        name: 'View',
        component: () => import('../pages/ViewTask.vue')
    },
    { 
        path: '/create',
        name: 'Create',
        component: () => import('../pages/Create.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router