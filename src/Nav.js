import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

function Nav() {
  // const navStyle = {
  //   color: 'white'
  // };

  return (
    <nav className="nav" >
      <Link to="/" className="link"  >
      <h1>Logo</h1>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="link" >
        <li>About</li>
        </Link>
        <Link to="/shop" className="link" >
        <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
