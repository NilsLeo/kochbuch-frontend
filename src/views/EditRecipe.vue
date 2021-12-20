<template>
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
                <p class="text-center"> Ingredients</p>
                <div class="input-group">
                  <input type="text" class="form-control input-sm" placeholder="Amount" />
                  <span class="input-group-btn" style="width:10px;"></span>
                  <select class="form-select" aria-label="Default select example" style="margin-left:-1px">
                    <option selected>Unknown</option>
                    <option value="1">Kg</option>
                    <option value="2">g</option>
                    <option value="3">L</option>
                    <option value="4">ml</option>
                    <option value="5">Stück</option>
                  </select>
                  <span class="input-group-btn" style="width:10px;"></span>
                  <input type="text" class="form-control input-sm" placeholder="Ingredient" style="margin-left:-2px" />
                  <span class="input-group-btn" style="width:10px;"></span>
                  <a class="btn btn-light" role="button">+</a>
                </div>
                <p class="text-center"></p>
                <div class="form-group">
                  <label>Description</label>
                  <p class="text-center"></p>
                  <textarea class="form-control" id="exampleFormControlDescription" rows="3"></textarea>
                </div>
                <p class="text-center"></p>
                <a href="/Recipes" class="btn btn-primary" role="button">Save Changes</a>
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
  name: 'Edit Recipe'
}
</script>

<style scoped>

</style>
