import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          MovieSearch
        </Link>

        <div className="navbar__right">
          <Link to="/search" className="navbar__link">
            Movies
          </Link>
          <button className="navbar__contact--btn">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
