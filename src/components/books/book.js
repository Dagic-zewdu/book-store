import React from 'react';
import { useDispatch } from 'react-redux';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { removeBookAsync } from '../../redux/books/actions/asyncActions';
import checkStatus from '../../redux/categories/categoriesAction';

/* eslint-disable react/prop-types */
function Book({ book, itemId }) {
  const dispatch = useDispatch();
  return (
    <div className="book-detail">
      <div className="desc">
        <h4>{book.category}</h4>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="links">
          <p className="comment">Comments</p>
          <p>
            <button type="button" className="btn" onClick={() => dispatch(removeBookAsync(itemId))}>
              Remove
            </button>
          </p>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="outer-circle">
          <div style={{ width: 68, height: 68 }} className="circle-bar">
            <CircularProgressbar
              value={90}
              styles={buildStyles({
                pathColor: '#0290ff',
                rotation: 90,
              })}
            />
          </div>
        </div>
        <div>
          <h4>{itemId}</h4>
          <p>Remaining few chapter</p>
        </div>

      </div>
      <div className="book-chapter">
        <h4>CURRENT CHAPTER</h4>
        <p>
          Chapter 3:A Lesson Learned
        </p>
        <button type="button" onClick={() => dispatch(checkStatus(book.category))}>CHECK STATUS</button>
      </div>
    </div>
  );
}

export default Book;
