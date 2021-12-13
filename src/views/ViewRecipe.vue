<template>
  <div class="col" v-for="recipe in recipes" :key= "recipe.id">
  <h1>recipe.recipeName</h1>
  <div class="mx-auto" style="width: 960px;">
    Centered element
  <div class="p-3 mb-2 bg-light text-dark">
  <div class="container-fluid">
    {{recipe.description}}
  </div>
  </div>
  <div class="p-3 mb-2 bg-light text-dark">
    <div class="container-fluid">
      {{recipe.duration}}
    </div>
  </div>
  <div class="p-3 mb-2 bg-light text-dark">
    <div class="container-fluid">
      This is a sample Ingredient List
    </div>
  </div>
  <div class="p-3 mb-2 bg-light text-dark">
    <div class="container-fluid">
      This is a sample Description
    </div>
  </div>
  </div>
  </div>
  <a href="/Recipes/EditRecipe" class="btn btn-primary mr-1" role="button">Edit</a>
  <p class="text-center"></p>
  <a href="/Recipes" class="btn btn-secondary" role="button">↲ Back to My Recipes</a>
</template>
<script>
export default {
  name: 'View Recipe',
  data () {
    return {
      recipes: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/viewrecipe'
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
