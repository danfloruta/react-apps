import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Details.css";
import { Favorite, Bookmark } from "grommet-icons";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movie-slice";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Details = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const imdbID = location.state.imdbID;
  const [favorite, setFavorite] = useState(false);
  const [watch, setWatch] = useState(false);
  const [movieDetail, setMovieDetail] = useState();

  // 6.use useContext with theme context in each component
  const darkTheme = useContext(ThemeContext);

  // 7.set theme styles:
  const themeStyles = {
    backgroundColor: darkTheme ? "#141414" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  // 8. set style in return div return statement

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=ca00165a`)
      .then((response) => setMovieDetail(response.data));
  }, []);

  // console.log(favorites);
  const addToFavoritesHandler = (detail) => {
    if (!favorite) {
      dispatch(movieActions.addMovieToFavorites(detail)); // favorites - detail is undefined
      setFavorite(true);
    }
  };
  const addToWatchListHandler = (detail) => {
    if (!watch) {
      dispatch(movieActions.addMovieToWatchList(detail));
      setWatch(true);
    }
  };

  return (
    <div style={themeStyles} className="detailsPage">
      <button className="btn btn-warning m-2" onClick={() => navigate("/")}>
        Back Home
      </button>
      <h1>{movieDetail?.Title}</h1>
      <button
        className="icon-fav-btn"
        onClick={() => addToFavoritesHandler(movieDetail)}
      >
        {favorite && <Favorite color="red" className="icon-favorite" />}
        {!favorite && <Favorite className="icon-favorite" />}
      </button>
      <button
        className="icon-fav-btn"
        onClick={() => addToWatchListHandler(movieDetail)}
      >
        {watch && <Bookmark color="yellow" className="icon-favorite" />}
        {!watch && <Bookmark className="icon-favorite" />}
      </button>
      <div className="poster-adwg">
        <img
          className="poster-details"
          src={movieDetail?.Poster}
          alt="poster"
        />
        <div>
          <div>
            <div className="detail">
              <h5>Actors:</h5>
              <p>{movieDetail?.Actors || "N/A"}</p>
            </div>
            <div className="detail">
              <h5>Director:</h5>
              <p>{movieDetail?.Director || "N/A"}</p>
            </div>
            <div className="detail">
              <h5>Writer:</h5>
              <p>{movieDetail?.Writer || "N/A"}</p>
            </div>
            <div className="detail plot">
              <h5>Plot:</h5>
              <p>{movieDetail?.Plot || "N/A"}</p>
            </div>

            <div className="detail genre">
              <h5>Genre:</h5>
              <p>{movieDetail?.Genre || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Type:</h5>

              <p>{movieDetail?.Type || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Country:</h5>
              <p>{movieDetail?.Country || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Language:</h5>
              <p>{movieDetail?.Language || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Awards:</h5>
              <p>{movieDetail?.Awards || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Earnings:</h5>
              <p>{movieDetail?.BoxOffice || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Rated:</h5>
              <p>{movieDetail?.Rated || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Released:</h5>
              <p>{movieDetail?.Released || "N/A"}</p>
            </div>
            <div className="detail genre">
              <h5>Runtime:</h5>
              <p>{movieDetail?.Runtime || "N/A"}</p>
            </div>
          </div>
          <div className="rating">
            <h4>Ratings:</h4>

            <div className="rating-details">
              <p>
                IMDB: {movieDetail?.Ratings[0]?.Value || "N/A"} out of{" "}
                {movieDetail?.imdbVotes} votes
              </p>
              <p>Rotten Tomatoes: {movieDetail?.Ratings[1]?.Value || "N/A"} </p>
              <p>Metacritic: {movieDetail?.Ratings[2]?.Value || "N/A"}</p>
              <p>Metascore: {movieDetail?.Metascore}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
