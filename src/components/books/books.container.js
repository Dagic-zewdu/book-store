import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

function BooksContainer() {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    books.map((book) => <Book book={book} key={book.id} />)
  );
}

export default BooksContainer;
