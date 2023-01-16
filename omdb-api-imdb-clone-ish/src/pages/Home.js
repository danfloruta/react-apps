import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavWatchFromMock,
  getMoviesFromDataBase,
  sendFavWatchToMock,
} from "../store/movie-actions";
import { Link } from "react-router-dom";
import "./Home.css";
import { ThemeContext } from "../App";
const Home = () => {
  const movies = useSelector((state) => state.movies.movies);
  const favorites = useSelector((state) => state.movies.favorites);
  const watchlist = useSelector((state) => state.movies.watchlist);
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.movies.searchItem);
  const [searchNone, setSearchNone] = useState(0);
  // console.log(favorites, watchlist);

  //START Pages
  const [currentPage, setCurrentPage] = useState(1);

  const totalNumPages =
    movies[0]?.totalResults > 0 && Math?.ceil(movies[0]?.totalResults / 10); //total number of pages

  const incrementPagination = () => {
    return setCurrentPage((prevPage) => prevPage + 1);
  };

  const decrementPagination = () => {
    return setCurrentPage((prevPage) => prevPage - 1);
  };

  let pagination = [],
    i = 1;

  while (i <= totalNumPages) {
    if (
      i <= 1 ||
      i >= totalNumPages - 2 ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pagination.push(i);
      i++;
    } else {
      pagination.push("...");

      //jump to the next page to be linked in the navigation
      i = i < currentPage ? currentPage - 1 : totalNumPages - 2;
    }
  }
  // END Pages

  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#141414" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  useEffect(() => {
    dispatch(getMoviesFromDataBase(searchItem, currentPage));
    setSearchNone(1);
  }, [searchItem, currentPage]);

  return (
    <div style={themeStyles} className="home">
      <h2 style={themeStyles}>Search results:</h2>
      <div className="home-page">
        <div className="movies-container">
          {movies[0]?.Search?.map((movie, i) => (
            <Link
              key={i}
              to="/details"
              state={{
                imdbID: movie.imdbID,
              }}
            >
              <div className="poster-container">
                <img className="img-movies" src={movie.Poster} alt="" />
                <div className="movie-title">
                  <h4>{movie.Title} </h4>
                </div>
              </div>
            </Link>
          )) || <h2 style={themeStyles}>Seach for movies...</h2>}
        </div>
        <div className="pagination">
          <button className="btn btn-warning" onClick={decrementPagination}>
            Previous Page
          </button>
          {/* {pagesStartOne.map((page, i) => (
            <h5 key={i} onClick={() => setCurrentPage(page)}>
              {page}
            </h5>
          ))} */}
          {pagination.map((page, i) => (
            <h5 key={i} onClick={() => setCurrentPage(page)}>
              {page}
            </h5>
          ))}

          <button className="btn btn-warning" onClick={incrementPagination}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
