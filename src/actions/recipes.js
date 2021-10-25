export const SAVE_RECIPES = 'SAVE_RECIPES';

export const setRecipes = (recipes) => (
  {
    type: SAVE_RECIPES,
    value: recipes,
  }
);
