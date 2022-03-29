import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, createBook } from '../../redux/books/booksAction';

function BookForm() {
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    category: '',
  });
  const handleChange = (e) => {
    e.persist();
    setState((s) => ({
      ...s,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(createBook(state.title, state.category)));
  };
  return (
    <div className="book-form">
      <h4>ADD NEW BOOK</h4>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          required
          name="title"
          placeholder="Book title"
          onChange={handleChange}
          value={state.title}
        />
        <select
          name="category"
          required
          id="category"
          placeholder="Category"
          onChange={handleChange}
          value={state.category}
        >
          <option value="">
            {' '}
            {' '}
          </option>
          {
      categories.map((category) => <option key={category} value={category}>{category}</option>)
          }
        </select>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
