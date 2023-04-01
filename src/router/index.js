import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Storiesview from '../views/StoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/stories',
    name: 'StoriesView',
    component: Storiesview,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
