import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const ModalForNav = () => {
  return (
    <div className="modal-for-nav">
      <NavLink className="modal-nav" to="/">
        Home
      </NavLink>
      <NavLink className="modal-nav" to="/check">
        Check Tool
      </NavLink>
      <NavLink className="modal-nav" to="/myreports">
        My Reports
      </NavLink>
    </div>
  );
};

export default ModalForNav;
