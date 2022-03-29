import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books.reducer';
import categoriesReducer from './categories/categories.reducer';

const middlewares = [thunk];

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
