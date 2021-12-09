import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recipes from '../views/Recipes'
import AddRecipe from '../views/AddRecipe'
import EditRecipe from '@/views/EditRecipe'
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
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/recipes/addrecipe',
    name: 'AddRecipe',
    component: AddRecipe
  },
  {
    path: '/recipes/editrecipe',
    name: 'EditRecipe',
    component: EditRecipe
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
