import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';

import debug from 'src/middlewares/debug';
import axios from 'src/middlewares/axios';

const middlewares = applyMiddleware(debug, axios);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
