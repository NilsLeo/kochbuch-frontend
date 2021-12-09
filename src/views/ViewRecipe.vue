<template>
  <h1>Name</h1>
  <div class="mx-auto" style="width: 960px;">
    Centered element
  <div class="p-3 mb-2 bg-light text-dark">
  <div class="container-fluid">
    This is a sample Recipe Name
  </div>
  </div>
  <div class="p-3 mb-2 bg-light text-dark">
    <div class="container-fluid">
      This is a sample Duration
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
  <a href="/Recipes/EditRecipe" class="btn btn-primary mr-1" role="button">Edit</a>
  <p class="text-center"></p>
  <a href="/Recipes" class="btn btn-secondary" role="button">↲ Back to My Recipes</a>
</template>
<script>
export default {
  name: 'View Recipe'
}
</script>

<style scoped>

</style>
