import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import ViewTask from '../pages/ViewTask.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/view', component: ViewTask },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router