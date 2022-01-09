import { mount } from '@vue/test-utils'
import Recipes from '@/components/Recipes'
import Recipe from '@/components/Recipe'

describe('Testing Recipes.vue', () => {
  it('should render a recipe card for each recipe', () => {
    // when
    const wrapper = mount(Recipes, {
      propsData: {
        recipes: [
          {
            id: 7,
            recipeName: 'Sandwich',
            description: 'Toast a piece of Bread and spread Nutella on to it.',
            duration: 5,
            ingredients: [
              {
                id: 46,
                ingredientName: 'Toast',
                amount: 1,
                unit: 'Stück',
                recipeId: 7
              },
              {
                id: 45,
                ingredientName: 'Nutella',
                amount: 20,
                unit: 'g',
                recipeId: 7
              }
            ]
          },
          {
            id: 8,
            recipeName: 'Fried egg',
            description: 'Heat up some butter in a pan. Crack an egg and fry it.',
            duration: 3,
            ingredients: [
              {
                id: 47,
                ingredientName: 'Egg',
                amount: 1,
                unit: 'Stück',
                recipeId: 8
              },
              {
                id: 48,
                ingredientName: 'Butter',
                amount: 20,
                unit: 'g',
                recipeId: 8
              }
            ]
          }
        ]
      }
    })

    // then
    const recipeCards = wrapper.findAllComponents(Recipe)
    expect(recipeCards.length).toBe(2)
  })
})
