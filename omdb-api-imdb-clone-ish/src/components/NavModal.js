import React from "react";
import { NavLink } from "react-router-dom";
import "./NavModal.css";

const NavModal = () => {
  return (
    <div className="modal-for-nav">
      <div className="nav-links nav-modal">
        <NavLink className="fav-link nav-modal-link" to="/">
          Home
        </NavLink>
        <NavLink className="fav-link nav-modal-link" to="/favorites">
          Favorites
        </NavLink>
        <NavLink className="fav-link nav-modal-link" to="/watchlist">
          WatchList
        </NavLink>
      </div>
    </div>
  );
};

export default NavModal;
