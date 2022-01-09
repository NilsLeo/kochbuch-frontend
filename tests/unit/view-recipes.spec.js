import { mount } from '@vue/test-utils'
import ViewRecipes from '@/views/ViewRecipes.vue'
import Recipes from '@/components/Recipes'

describe('Testing ViewRecipes.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(ViewRecipes)

    // then
    expect(wrapper.text()).toMatch('Recipes')
  })

  it('should have recipes component', () => {
    // when
    const wrapper = mount(ViewRecipes)

    // then
    const recipes = wrapper.findComponent(Recipes)
    expect(recipes.exists()).toBeTruthy()
  })
})
