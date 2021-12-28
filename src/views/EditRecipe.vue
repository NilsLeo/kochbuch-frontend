<template>
  <h1>New Recipe</h1>
  <div class="container" style="width: 960px;">
    <div class="row clearfix">
      <div class="col-md-offset-3 column">
        <form role="form">
          <div class="container">
            <div class="row clearfix">
              <div class>
                <div class="form-group">
                  <label for="formGroupNameInput">Name </label>
                  <p class="text-center"></p>
                  <input v-model="recipeName" type="text"  class="form-control" id="formGroupNameInput" placeholder="Name">
                </div>
                <p class="text-center"></p>
                <div class="form-group">
                  <label for="formGroupDurationInput">Duration (min)</label>
                  <p class="text-center"></p>
                  <input v-model="recipeDuration" type="text" class="form-control" id="formGroupDurationInput" placeholder="Duration">
                </div>
                <p class="text-center"> Ingredients</p>
                <div class="input-group" v-for="(ingredient,index) in ingredients" :key="index">
                  <input type="text" v-model="ingredient.name" class="form-control input-sm" placeholder="Ingredient name" />
                  <span class="input-group-btn" style="width:10px;"></span>
                  <input type="text" v-model="ingredient.amount" class="form-control input-sm" placeholder="Amount" style="margin-left:-2px" />
                  <span class="input-group-btn" style="width:10px;"></span>
                  <select v-model="ingredient.unit" class="form-select" aria-label="Unit" style="margin-left:-1px">
                    <option selected>Unknown</option>
                    <option value="KG">Kg</option>
                    <option value="g">g</option>
                    <option value="L">L</option>
                    <option value="ml">ml</option>
                    <option value="Stück">Stück</option>
                  </select>
                  <span class="input-group-btn" style="width:10px;"></span>
                  <button class="btn btn-primary" type="button" @click="addNewIngredients">+</button>
                </div>
                <p class="text-center"></p>
                <div class="form-group">
                  <label>Description</label>
                  <p class="text-center"></p>
                  <textarea  v-model="recipeDescription" class="form-control" id="exampleFormControlDescription" rows="3"></textarea>
                </div>
                <p class="text-center"></p>
                <a class="btn btn-primary" role="button" href="/recipes" @click="saveRecipe">Save</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Edit Recipe',
  props: {},
  data () {
    return {
      recipes: [],
      ingredients: [
        {
          name: '',
          amount: 0,
          unit: ''
        }
      ],
      recipeName: '',
      recipeDuration: '',
      recipeDescription: ''
    }
  },
  methods: {
    addNewIngredients () {
      this.ingredients.push({
        name: '',
        amount: 0,
        unit: ''
      })
      console.log(this.ingredients)
    },
    saveRecipe () {
      this.addNewIngredients()
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/Recipes'
      const data = ({
        recipeName: this.recipeName,
        description: this.recipeDescription,
        duration: this.recipeDuration
      })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => { console.log('Success', data) })
        .catch(error => console.log('error', error))
      this.saveIngredients()
    },
    saveIngredients () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/Ingredients'
      this.ingredients.forEach(ingredient => {
        const data = JSON.stringify({
          ingredientName: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
          recipeId: 42
        })
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data,
          redirect: 'follow'
        }
        fetch(endpoint, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error))
      })
    }
  }
}
</script>

<style scoped>

</style>
