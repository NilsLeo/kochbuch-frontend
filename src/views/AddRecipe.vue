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
                    <label for="formGroupNameInput">Name</label>
                    <p class="text-center"></p>
                    <input type="text" class="form-control" id="formGroupNameInput" placeholder="Name">
                  </div>
                <p class="text-center"></p>
                <div class="form-group">
                  <label for="formGroupDurationInput">Duration (min)</label>
                  <p class="text-center"></p>
                  <input type="text" class="form-control" id="formGroupDurationInput" placeholder="Duration">
                </div>
                <p class="text-center"></p>
                  <div class="form-group">
                    <label for="formGroupIngredientsInput">Ingredients</label>
                    <p class="text-center"></p>
                    <input type="text" class="form-control" id="formGroupIngredientsInput" placeholder="Ingredients">
                  </div>
                <p class="text-center"></p>
                  <div class="form-group">
                    <label>Description</label>
                    <p class="text-center"></p>
                    <textarea class="form-control" id="exampleFormControlDescription" rows="3"></textarea>
                  </div>
                <p class="text-center"></p>
                <a href="/Recipes" class="btn btn-primary" role="button">Save</a>
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
  name: 'Add Recipe'
}
</script>

<style scoped>

</style>
