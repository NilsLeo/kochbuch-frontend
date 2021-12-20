<template>
  <h1>Name</h1>
  <div class="mx-auto" style="width: 960px;">
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
    <p class="text-center"> Ingredients</p>
    <div class="input-group">
      <input type="text" class="form-control input-sm" placeholder="Amount" readonly/>
      <span class="input-group-btn" style="width:10px;"></span>
      <select class="form-select" aria-label="Default select example" style="margin-left:-1px" disabled>
        <option selected>Unknown</option>
        <option value="1">Kg</option>
        <option value="2">g</option>
        <option value="3">L</option>
        <option value="4">ml</option>
        <option value="5">Stück</option>
      </select>
      <span class="input-group-btn" style="width:10px;"></span>
      <input type="text" class="form-control input-sm" placeholder="Ingredient" style="margin-left:-2px" readonly/>
    </div>
  </div>
  <div class="p-3 mb-2 bg-light text-dark">
    <div class="container-fluid">
      This is a sample Description
    </div>
  </div>
  <a href="/Recipes/EditRecipe" class="btn btn-primary mr-1" role="button">Edit</a>
  <p class="text-center"></p>
  <a href="/Recipes" class="btn btn-secondary" role="button">↲ Back to My Recipes</a>
  </div>
</template>
<script>
export default {
  name: 'View Recipe',
  data () {
    return {
      recipes: []
    }
  }
}
</script>

<style scoped>

</style>
