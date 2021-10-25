import axios from 'axios';
import { SAVE_RECIPES, setRecipes } from '../actions/recipes';

const getRecipes = (store) => (next) => (action) => {


  switch (action.type) {
    case 'GET_RECIPES':
      axios ({
        url: '/recipes',
        method: 'GET',
        baseURL: 'http://localhost:3001',
      })
      .then((response) => {
        store.dispatch(setRecipes(response.data));
      })
      .catch((error) => {
        console.error('error :', error);
      })
      .finally(() => {
      });
      next(action);
      break;
    
    default: 
       next(action);
  }
}

export default getRecipes;
