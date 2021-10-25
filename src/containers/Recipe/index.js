import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state) => ({
  recipe: findRecipe(state.recipes.list, 'crepes-raffinees'),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default container;
