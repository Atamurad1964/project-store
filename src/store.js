import { applyMiddleware, combineReducers, createStore } from 'redux';

import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};
export const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
