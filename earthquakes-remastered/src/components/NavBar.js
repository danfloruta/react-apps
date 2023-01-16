import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "./Logo";
export default function NavBar() {
  return (
    <div>
      <nav>
        <Logo />
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
}
