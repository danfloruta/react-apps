import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./WatchList.css";
import { Link } from "react-router-dom";
import { FormClose } from "grommet-icons";
import { movieActions } from "../store/movie-slice";
import { ThemeContext } from "../App";
import { useContext } from "react";

const WatchList = () => {
  const watchlist = useSelector((state) => state.movies.watchlist);
  const dispatch = useDispatch();

  const removeFromWatchHandler = (movie) => {
    dispatch(movieActions.removeFromWatchlist(movie));
    console.log(watchlist);
  };

  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#141414" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  return (
    <div style={themeStyles} className="favPage">
      <div className="container container-fav">
        <h2>WatchList:</h2>
        <div className="movie-fav-container">
          {watchlist?.map((watch, i) => (
            <div key={i}>
              <div className="poster-container-fav">
                <FormClose
                  onClick={() => removeFromWatchHandler(watch)}
                  className="form-close"
                  color="red"
                />

                <Link
                  to="/details"
                  state={{
                    imdbID: watch.imdbID,
                  }}
                >
                  <img
                    src={watch.Poster}
                    alt="favorite"
                    className="img-movies-fav"
                  />
                </Link>
                <div className="movie-title-fav">
                  <h4>{watch.Title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
