<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="Recipes" class="btn btn-primary" role="button">My Recipes</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
