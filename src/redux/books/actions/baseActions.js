import { generate } from 'randomized-string';
import booksActionType from '../booksType';

export const fetchBookStart = () => ({
  type: booksActionType.FETCH_BOOKS_START,
});
export const addBook = (books) => ({
  type: booksActionType.ADD_BOOK,
  payload: books,
});

export const removeBook = (book) => ({
  type: booksActionType.REMOVE_BOOK,
  payload: book,
});

export const createBook = (title, category, author) => ({
  item_id: generate({ length: 5, charset: 'number' }),
  title,
  category,
  completed: false,
  author,
});

export const fetchBookError = (payload) => ({
  type: booksActionType.FETCH_BOOKS_ERROR,
  payload,
});
