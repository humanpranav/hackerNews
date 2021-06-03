import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search News</li>
        </Link>

        <Link to="/history">
          <li>History</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
