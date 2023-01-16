import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Favorites.css";
import { Link } from "react-router-dom";
import { FormClose } from "grommet-icons";
import { movieActions } from "../store/movie-slice";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Favorites = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#141414" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  const removeFromFavHandler = (movie) => {
    dispatch(movieActions.removeFromFavorites(movie));
  };
  console.log(favorites);

  return (
    <div style={themeStyles} className="favPage">
      <div className="container container-fav">
        <h2>Favorites:</h2>
        <div className="movie-fav-container">
          {favorites?.map((fav, i) => (
            <div key={i}>
              <div className="poster-container-fav">
                <FormClose
                  onClick={() => removeFromFavHandler(fav)}
                  className="form-close"
                  color="red"
                />
                <Link
                  to="/details"
                  state={{
                    imdbID: fav.imdbID,
                  }}
                >
                  <img
                    src={fav.Poster}
                    alt="favorite"
                    className="img-movies-fav"
                  />
                </Link>
                <div className="movie-title-fav">
                  <h4>{fav.Title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
