import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/booksReducer';
import categoriesReducer from './categories/categoriesReducer';

const middlewares = [thunk];

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
