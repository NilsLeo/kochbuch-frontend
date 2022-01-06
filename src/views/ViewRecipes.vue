<template>
  <h1>My Recipes</h1>
  <div class="container">
    <recipes @delete2="deleteRecipe" :recipes="this.recipes"></recipes>
  </div>
</template>

<script>
import Recipes from '@/components/Recipes'
export default {
  name: 'ViewRecipes',
  components: {
    Recipes
  },
  data () {
    return {
      recipes: []
    }
  },
  methods: {
    deleteRecipe (id) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/Recipes/' + id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'

      }
      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
      const removeIndex = this.recipes.findIndex(recipe => recipe.id === id)
      this.recipes.splice(removeIndex, 1)
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/Recipes'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(recipe => {
        this.recipes.push(recipe)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
