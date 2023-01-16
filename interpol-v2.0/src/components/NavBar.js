import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reportsActions } from "../store/reports-slice";
import { Menu } from "grommet-icons";
import { checkActions } from "../store/check-slice";
import ModalForNav from "./ModalForNav";

const NavBar = () => {
  const dispatch = useDispatch();
  const openModalHandler = () => {
    dispatch(reportsActions.changeReportsModal());
  };
  const openNavModalHandler = () => {
    dispatch(checkActions.openNav());
  };
  return (
    <nav className="navbar">
      <div className="logo-home-check">
        <NavLink to="/">
          <h4>MostWANTED</h4>
        </NavLink>
        <NavLink className="nav-hide-small" to="/">
          Home
        </NavLink>
        <NavLink className="nav-hide-small" to="/check">
          Check Tool
        </NavLink>
      </div>
      <div className="reports-submit">
        <NavLink className="nav-hide-small" to="/myreports">
          My Reports
        </NavLink>
        <button
          onClick={openModalHandler}
          className="nav-hide-small btn btn-danger"
        >
          Submit Report
        </button>
        <Menu
          onClick={openNavModalHandler}
          className="menu-hamburger nav-hide-big"
        />
      </div>
    </nav>
  );
};

export default NavBar;
