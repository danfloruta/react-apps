import { createSlice } from "@reduxjs/toolkit";

const movieWatch =
  localStorage.getItem("watchlist") !== null
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [];

const movieFav =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

const initialMovieState = {
  movies: [],
  searchItem: "",
  favorites: movieFav, // undefined
  watchlist: movieWatch,
  modalIsOpen: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    openModal(state) {
      state.modalIsOpen = !state.modalIsOpen;
    },
    searchForMovies(state, action) {
      const movieList = action.payload;
      state.movies = [];
      state.movies.push(movieList);
    },
    updateSearchItem(state, action) {
      state.searchItem = action.payload;
    },
    addMovieToFavorites(state, action) {
      const movieDetail = action.payload;
      if (
        state?.favorites?.some((movie) => movie.imdbID === movieDetail.imdbID)
      ) {
        return state; //initial: return
      }

      state.favorites.push(movieDetail);

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites.map((item) => item))
      );
    },
    addMovieToWatchList(state, action) {
      const movieToWatch = action.payload;
      if (
        state?.watchlist?.some((movie) => movie.imdbID === movieToWatch.imdbID)
      ) {
        return state; // initial: return
      }
      state.watchlist.push(movieToWatch);

      localStorage.setItem(
        "watchlist",
        JSON.stringify(state.watchlist.map((item) => item))
      );
    },
    removeFromFavorites(state, action) {
      const movieDetail = action.payload;
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== movieDetail.imdbID
      );
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites.map((item) => item))
      );
      // newly added, to be tested
    },
    removeFromWatchlist(state, action) {
      const movieToWatch = action.payload;
      state.watchlist = state.watchlist.filter(
        (movie) => movie.imdbID !== movieToWatch.imdbID
      );

      localStorage.setItem(
        "watchlist",
        JSON.stringify(state.watchlist.map((item) => item))
      );
      // newly added, to be tested
    },
    // favWatchMockAction(state, action) {
    //   state.favorites = action.payload.favorites;
    //   state.watchlist = action.payload.watchlist;
    // },
  },
});
export const movieActions = movieSlice.actions;
export default movieSlice;
