import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./NavBar.css";

import { movieActions } from "../store/movie-slice";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { Menu, Switch } from "grommet-icons";

const NavBar = ({ toggleTheme }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(movieActions.updateSearchItem(search));
    navigate("/");
  };

  const menuHandler = () => {
    dispatch(movieActions.openModal());
  };

  // make navbar sticky:
  const [navSticky, setNavSticky] = useState(false);

  const stickyNavbar = () => {
    if (window.scrollY >= 80) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  };

  window.addEventListener("scroll", stickyNavbar);

  return (
    <nav className={navSticky ? "navigation activeNav" : "navigation"}>
      <div className="title-n-switch">
        <Link to="/">
          <h1>PopcornTime</h1>
        </Link>
        <Switch
          color="white"
          className="switch-theme"
          onClick={toggleTheme}
        ></Switch>
      </div>

      <div className="search-fav">
        <form onSubmit={handleSubmit}>
          <div className="nav-links">
            <NavLink className="fav-link" to="/">
              Home
            </NavLink>
            <NavLink className="fav-link" to="/favorites">
              Favorites
            </NavLink>
            <NavLink className="fav-link" to="/watchlist">
              WatchList
            </NavLink>
          </div>
          <div className="search-n-btn">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-warning" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="menu-nav">
        <Menu
          color="white"
          onClick={menuHandler}
          className="menu-nav-hamburger"
        ></Menu>
      </div>
    </nav>
  );
};

export default NavBar;
