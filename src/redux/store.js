import { createStore, applyMiddleware } from 'redux';
//Middleware Action ile Root Reducer Arasındadır
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;