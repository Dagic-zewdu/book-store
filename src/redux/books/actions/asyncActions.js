import baseUrl from '../../../baseUrl/baseUrl';
import { addBook, fetchBookError, fetchBookStart } from './baseActions';

export const getBooks = () => (dispatch) => {
  dispatch(fetchBookStart());
  baseUrl.get('/books').then((res) => {
    dispatch(addBook(res.data));
  })
    .catch((err) => {
      dispatch(fetchBookError(err.message));
    });
};

export const addBooksAsync = (book) => (dispatch) => {
  baseUrl.post('/books', book).then(() => {
    dispatch(getBooks());
  }).catch((err) => {
    dispatch(fetchBookError(err.message));
  });
};

export const removeBookAsync = (itemId) => (dispatch) => {
  baseUrl.delete(`/books/${itemId}`, { item_id: itemId })
    .then(() => {
      dispatch(getBooks());
    })
    .catch((err) => {
      dispatch(fetchBookError(err.message));
    });
};
