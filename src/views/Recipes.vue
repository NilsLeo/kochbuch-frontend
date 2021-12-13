<template>
  <h1>My Recipes</h1>
  <div class="container" style="width: 960px;">
    <div class="row clearfix">
      <div class="col-md-40 col-md-offset-3 column">
        <a href="Recipes/AddRecipe" class="btn btn-primary" role="button">+ Create New Recipe</a>
      <div class="col" v-for="recipe in recipes" :key= "recipe.id">
        <p class="text-center"></p>
        <div class="col d-flex justify-content-center">
  <div class="card" style="width: 25rem;">
    <div class="card-body">
      <h5 class="card-title">{{recipe.recipeName}}</h5>
      <p class="card-text">
        </p>
      <a href="Recipes/EditRecipe" class="card-link">Edit</a>
      <a href="Recipes/ViewRecipe" class="card-link">View</a>
      <p class="text-center"></p>
      <button type="button" href="/Recipes"  action="/Recipes" method="DELETE" class="btn btn-danger">Delete</button>
    </div>
  </div>
  </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipes',
  data () {
    return {
      recipes: []
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
