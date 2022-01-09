<template>
  <a href="Recipes/AddRecipe" class="btn btn-primary" role="button">+ Create New Recipe</a>
  <br><br/>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="recipe in recipes" :key="recipe.id">
      <recipe @delete="$emit('delete2',recipe.id)" :recipe="recipe"></recipe>
    </div>
  </div>
</template>
<script>
import Recipe from '@/components/Recipe'
export default {
  name: 'Recipes',
  emits: ['delete2'],
  components: {
    Recipe
  },
  props: {
    recipes: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
