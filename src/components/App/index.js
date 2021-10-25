import { React, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/containers/Home';
import findRecipe from 'src/selectors/recipes'
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  const dispatch = useDispatch();
  const fixedScroll = useRef(null);

  useEffect(
    () => {
      dispatch({type: 'GET_RECIPES'});
      fixedScroll.current.scrollTo({
        top: fixedScroll.current.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });

    },
    []);
  
    const recipes = useSelector((state) => state.recipes.list);
    console.log('Liste des recettes :', recipes);

  if (props.loading) {
    return <Loading />;
  }
  return (
    <div ref={fixedScroll} className="app">
      <Menu recipes={recipes} />
      <Switch>
        <Route path="/" exact>
          <Home recipes={recipes} />
        </Route>

        {recipes.map(
          (recipe) => (
        <Route key={recipe.id} path={`/recipe/${recipe.slug}`} exact>
          <Recipe recipe={findRecipe(recipes, recipe.slug)} />
        </Route>
        ))};

        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
