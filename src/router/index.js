import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ViewRecipes from '../views/ViewRecipes'
import AddRecipe from '../views/AddRecipe'
import ViewRecipe from '@/views/ViewRecipe'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ViewRecipes',
    name: 'ViewRecipes',
    component: ViewRecipes
  },
  {
    path: '/recipes/addrecipe',
    name: 'AddRecipe',
    component: AddRecipe
  },
  {
    path: '/recipes/viewrecipe',
    name: 'ViewRecipe',
    component: ViewRecipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
