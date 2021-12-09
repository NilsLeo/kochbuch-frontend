<template>
  <h1>My Recipes</h1>
  <div class="container" style="width: 960px;">
    <div class="row clearfix">
      <div class="col-md-40 col-md-offset-3 column">
  <a href="Recipes/AddRecipe" class="btn btn-primary" role="button">+ Create New Recipe</a>
        <p class="text-center"></p>
        <div class="col d-flex justify-content-center">
  <div class="card" style="width: 25rem;">
    <div class="card-body">
      <h5 class="card-title">Recipe</h5>
      <a href="Recipes/EditRecipe" class="card-link">Edit</a>
      <a href="Recipes/ViewRecipe" class="card-link">View</a>
      <p class="text-center"></p>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipes'
}
</script>

<style scoped>

</style>
