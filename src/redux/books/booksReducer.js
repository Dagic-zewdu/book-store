import booksActionType from './booksType';

const INITIAL_STATE = {
  loading: true,
  books: [],
  error: false,
};
const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case booksActionType.FETCH_BOOKS_START:
      return { ...state, loading: true };
    case booksActionType.ADD_BOOK:
      return {
        loading: false,
        books: action.payload,
        error: false,
      };
    case booksActionType.REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.item_id !== action.payload),
      };
    case booksActionType.FETCH_BOOKS_ERROR:
      return {
        ...state, loading: false, error: action.payload,
      };
    default:
      return state;
  }
};
export default booksReducer;
