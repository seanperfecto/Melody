import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // Added this for production
// if (process.env.NODE_ENV !== 'production') {
//   // must use 'require' (import only allowed at top of file)
//   const createLogger = require('redux-logger');
//   thunk.push(createLogger());
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  )
);

export default configureStore;
