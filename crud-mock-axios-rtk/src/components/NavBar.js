import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavLink className="btn btn-info" to="/">
          Read
        </NavLink>
        <NavLink className="btn btn-info" to="/create">
          Create
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
