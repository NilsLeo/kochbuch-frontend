<template>
  <h1>New Recipe</h1>
  <form id="recipeForm" class="needs-validation" novalidate>
  <div class="container" style="width: 960px;">
    <div class="row clearfix">
      <div class="col-md-offset-3 column">
          <div class="container">
            <div class="row clearfix">
              <div class>
                <div class="form-group">
                    <label class="form-label" for="formGroupNameInput">Name </label>
                    <p class="text-center"></p>
                    <input placeholder="Name" class="form-control" v-model="recipeName" type="text" id="formGroupNameInput" required>
                  <div class="invalid-feedback">
                    Please provide a name
                  </div>
                </div>
                <p class="text-center"></p>
                <div class="form-group">
                  <label class="form-label" for="formGroupDurationInput">Duration (min)</label>
                  <p class="text-center"></p>
                  <input v-model="recipeDuration" type="number" class="form-control" id="formGroupDurationInput" placeholder="Duration" required>
                  <div class="invalid-feedback">
                    Please set a duration
                  </div>
                </div>
                <p class="text-center"> Ingredients</p>
                <div class="input-group" v-for="(ingredient,index) in ingredients" :key="index">
                  <input type="text" v-model="ingredient.name" class="form-control input-sm" placeholder="Ingredient name" required/>
                  <div class="invalid-feedback">
                    Please provide a name
                  </div>
                  <span class="input-group-btn" style="width:10px;"></span>
                  <input type="text" v-model="ingredient.amount" class="form-control input-sm" placeholder="Amount" style="margin-left:-2px" required/>
                  <div class="invalid-feedback">
                    Please set an amount
                  </div>
                  <span class="input-group-btn" style="width:10px;"></span>
                  <select v-model="ingredient.unit" class="form-select" aria-label="Unit" style="margin-left:-1px" required>
                    <option selected>Unknown</option>
                    <option value="Kg">Kg</option>
                    <option value="g">g</option>
                    <option value="L">L</option>
                    <option value="ml">ml</option>
                    <option value="Stück">Stück</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a unit
                  </div>
                  <span class="input-group-btn" style="width:10px;"></span>
                  <button class="btn btn-primary" type="button" @click="addNewIngredients">+</button>
                  <button class="btn btn-danger" type="button" @click="removeIngredients">-</button>
                </div>
                <p class="text-center"></p>
                  <div class="form-group">
                    <label>Description</label>
                    <p class="text-center"></p>
                    <textarea  v-model="recipeDescription" class="form-control" id="exampleFormControlDescription" rows="3" required></textarea>
                    <div class="invalid-feedback">Please give you recipe a description</div>
                  </div>
                <div v-if="this.serverValidationMessages">
                  <ul>
                    <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                      {{ message }}
                    </li>
                  </ul>
                </div>
                <p class="text-center"></p>
                <button class="btn btn-primary" type="submit"  @click.prevent="saveRecipe">Save</button>
          </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Add Recipe',
  data () {
    return {
      ingredients: [
        {
          name: '',
          amount: 0,
          unit: ''
        }
      ],
      recipeName: '',
      recipeDuration: '',
      recipeDescription: '',
      serverValidationMessages: []
    }
  },
  methods: {
    addNewIngredients () {
      this.ingredients.push({
        name: '',
        amount: 0,
        unit: ''
      })
    },
    removeIngredients () {
      if (this.ingredients.length > 1) {
        this.ingredients.length = this.ingredients.length - 1
      }
    },
    validate () {
      const form = document.getElementById('recipeForm')
      form.classList.add('was-validated')
      return form.checkValidity()
    },
    async saveRecipe () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/Recipes'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const data = ({
          recipeName: this.recipeName,
          description: this.recipeDescription,
          duration: this.recipeDuration
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
        const test = response.headers.get('location').split('/api/v1/Recipes/')
        this.saveIngredients(Number(test[1]))
      }
    },
    saveIngredients (recipelocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/Ingredients'
      this.ingredients.forEach(ingredient => {
        const data = JSON.stringify({
          ingredientName: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
          recipeId: recipelocation
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
    },
    async handleResponse (response) {
      if (response.ok) {
        window.location.href = '/Home'
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    }
  }
}
</script>
<style scoped>
</style>
