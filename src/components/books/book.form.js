import React from 'react';

function BookForm() {
  return (
    <div className="book-form">
      <h4>ADD NEW BOOK</h4>
      <form>
        <input id="book" name="title" placeholder="Book title" value="" />
        <select name="category" id="book-category" value="" placeholder="Category">
          <option key={1} hidden className="place">Romance</option>
          <option key={2}>Horror</option>

        </select>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
