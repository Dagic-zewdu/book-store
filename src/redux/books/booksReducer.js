import booksActionType from './booksType';

const INITIAL_STATE = {
  books: [],
};
const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case booksActionType.ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case booksActionType.REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};
export default booksReducer;
