import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import placesReducer from "./reducers/places";
// import authReducer from "./reducers/auth";
import uiReducer from './reducers/ui';
import inventoryListReducer from './reducers/inventoryList';

const rootReducer = combineReducers({
  // places: placesReducer,
  // auth: authReducer,
  ui: uiReducer,
  inventoryList: inventoryListReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default configureStore;
