import booksActionType from './books.type';

export const addBook = (book) => ({
  type: booksActionType.ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: booksActionType.REMOVE_BOOK,
  payload: book,
});
