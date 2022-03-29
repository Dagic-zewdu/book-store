import { generate } from 'randomized-string';
import booksActionType from './booksType';

export const addBook = (book) => ({
  type: booksActionType.ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: booksActionType.REMOVE_BOOK,
  payload: book,
});

export const createBook = (title, category) => ({
  id: generate({ length: 5, charset: 'number' }),
  title,
  category,
  completed: false,
});
