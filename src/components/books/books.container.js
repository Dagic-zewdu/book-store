import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/actions/asyncActions';
import Book from './book';

function BooksContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const { books, loading, error } = useSelector((state) => state.booksReducer);

  return (
    // eslint-disable-next-line no-nested-ternary
    loading
      ? (
        <img
          src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif"
          alt=""
          className="spinner"
        />

      )
      : error
        ? <h4 className="text-center danger">{error}</h4>
        : Object.keys(books).map((book) => <Book itemId={book} book={books[book][0]} key={book} />)

  );
}

export default BooksContainer;
