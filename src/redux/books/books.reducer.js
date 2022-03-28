import booksActionType from './books.type';

const INITIAL_STATE = {
  loading: true,
  books: [],
  error: false,
};
const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case booksActionType.FETCH_BOOKS_START:
      return {
        ...state,
        loading: true,
      };
    case booksActionType.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: false,
      };
    case booksActionType.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default booksReducer;
