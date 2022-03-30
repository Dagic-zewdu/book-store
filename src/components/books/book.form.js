import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooksAsync } from '../../redux/books/actions/asyncActions';
import { createBook } from '../../redux/books/actions/baseActions';

function BookForm() {
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    category: '',
    author: '',
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
    dispatch(addBooksAsync(createBook(state.title, state.category, state.author)));
    setState({ author: '', category: '', title: '' });
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
        <input
          id="author"
          required
          name="author"
          placeholder="Author"
          onChange={handleChange}
          value={state.author}
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
