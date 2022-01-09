import { mount } from '@vue/test-utils'
import Recipe from '@/components/Recipe'

describe('Testing Recipe.vue', () => {
  it('should render recipe Name', () => {
    // when
    const testRecipe = {
      id: 22,
      recipeName: 'Apple Slices',
      description: 'Cut an Apple into 8 slices and enjoy.',
      duration: 2,
      ingredients: [
        {
          id: 43,
          ingredientName: 'Apple',
          amount: 1,
          unit: 'Stück',
          recipeId: 22
        }
      ]
    }
    const wrapper = mount(Recipe, {
      propsData: {
        recipe: testRecipe
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Apple Slices')
  })

  it('should render duration', () => {
    // when
    const testRecipe = {
      id: 23,
      recipeName: 'Apple Slices',
      description: 'Cut an Apple into 8 slices and enjoy.',
      duration: 2,
      ingredients: [
        {
          id: 41,
          ingredientName: 'Apple',
          amount: 1,
          unit: 'Stück',
          recipeId: 23
        }
      ]
    }
    const wrapper = mount(Recipe, {
      propsData: {
        recipe: testRecipe
      }
    })

    // then
    const cardSubtitle = wrapper.find('.card-subtitle')
    expect(cardSubtitle.text()).toBe('2 min.')
  })

  it('should render ingredients', () => {
    // when
    const testRecipe = {
      id: 23,
      recipeName: 'Apple Slices',
      description: 'Cut an Apple into 8 slices and enjoy.',
      duration: 2,
      ingredients: [
        {
          id: 41,
          ingredientName: 'Apple',
          amount: 1,
          unit: 'Stück',
          recipeId: 23
        }
      ]
    }
    const wrapper = mount(Recipe, {
      propsData: {
        recipe: testRecipe
      }
    })

    // then
    const cardSubtitle = wrapper.find('.card-text')
    expect(cardSubtitle.text()).toBe('1 Stück Apple')
  })
  it('should render description', () => {
    // when
    const testRecipe = {
      id: 23,
      recipeName: 'Apple Slices',
      description: 'Cut an Apple into 8 slices and enjoy.',
      duration: 2,
      ingredients: [
        {
          id: 41,
          ingredientName: 'Apple',
          amount: 1,
          unit: 'Stück',
          recipeId: 23
        }
      ]
    }
    const wrapper = mount(Recipe, {
      propsData: {
        recipe: testRecipe
      }
    })

    // then
    const cardSubtitle = wrapper.find('.card-text2')
    expect(cardSubtitle.text()).toBe('Cut an Apple into 8 slices and enjoy.')
  })

  it('tests delete button', () => {
    // when
    const testRecipe = {
      id: 23,
      recipeName: 'Apple Slices',
      description: 'Cut an Apple into 8 slices and enjoy.',
      duration: 2,
      ingredients: [
        {
          id: 41,
          ingredientName: 'Apple',
          amount: 1,
          unit: 'Stück',
          recipeId: 23
        }
      ]
    }
    const wrapper = mount(Recipe, {
      propsData: {
        recipe: testRecipe
      }
    })
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Apple Slices')
    const button = wrapper.find('.btn-danger')
    button.trigger('click')
    expect(cardTitle).toEqual(expect.not.stringContaining('Apple Slices'))
  })
})
