<template>
  <div class="card text-left">
    <div class="card-body">
      <h5 class="card-title">{{ recipe.recipeName }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ recipe.duration }} min.</h6>
      <p class="card-text0">Ingredients:</p>
      <div v-for="ingredient in recipe.ingredients" :key="ingredient.id">
        <p class="card-text">{{ingredient.amount}} {{ingredient.unit}} {{ingredient.ingredientName}}</p>
      </div>
      <p>Description:</p>
      <p class="card-text2">{{recipe.description}}</p>
      <button type="button" @click="$emit('delete')" class="btn btn-danger" href="Recipes">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  emits: ['delete'],
  props: {
    recipe: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
