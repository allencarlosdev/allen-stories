import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoriesView from '../views/StoriesView.vue'
import StoryView from '../views/StoryView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/stories',
    name: 'StoriesView',
    component: StoriesView,
  },
  {
    path: '/story1',
    name: 'StoryView',
    component: StoryView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
