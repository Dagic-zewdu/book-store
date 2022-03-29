import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink as Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-one">
        <Link to="/bookstore">
          <h1>BookStore CMS</h1>
        </Link>
        <Link to="/book">
          <p>BOOK</p>
        </Link>
        <Link to="/category">
          <p>CATEGORY</p>
        </Link>
      </div>
      <div className="user-icon">

        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </header>
  );
}

export default Navbar;
