import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import imagesReducer from './images';

const rootReducer = combineReducers({
  session: sessionReducer,
  images: imagesReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  // Just thunk for production, leave logger out of there
  enhancer = applyMiddleware(thunk);
} else {
  // Have both thunk and logger in development (and test) environments
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
