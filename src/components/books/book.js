import React from 'react';

function Book() {
  return (
    <div className="book-detail">
      <div className="desc">
        <h4>Category</h4>
        <h2>Title</h2>
        <p>Frank Herbert</p>
        <div className="links">
          <p className="comment">Comments</p>
          <p><button type="button" className="btn">Remove</button></p>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="outer-circle">
          <div style={{ width: 68, height: 68 }} className="circle-bar" />
        </div>
        <div>
          <h4>book id</h4>
          <p>Completed</p>
        </div>

      </div>
      <div className="book-chapter">
        <h4>CURRENT CHAPTER</h4>
        <p>
          Chapter 3:A Lesson Learned
        </p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
