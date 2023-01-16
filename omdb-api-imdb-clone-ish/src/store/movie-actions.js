import axios from "axios";
import movieSlice, { movieActions } from "./movie-slice";

export const getMoviesFromDataBase = (search, page) => {
  return async (dispatch) => {
    const getMovieList = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apikey=ca00165a`,
        {
          params: {
            page: page,
          },
        }
      );
      return dispatch(movieActions.searchForMovies(response.data));
    };
    try {
      getMovieList();
    } catch (error) {
      console.log(error);
    }
  };
};

// export const sendFavWatchToMock = (favorites, watchlist) => {
//   return async (dispatch) => {
//     const sendFavWatch = async () => {
//       const response = await axios.put(
//         `https://63650d10f711cb49d1f3a685.mockapi.io/movies/${}`, //
//         {

//           favorites,
//           watchlist,
//         }
//       );
//     };
//     try {
//       await sendFavWatch();
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

// export const getFavWatchFromMock = () => {
//   return async (dispatch) => {
//     const getFavWatch = async () => {
//       const response = await axios.get(
//         `https://63650d10f711cb49d1f3a685.mockapi.io/movies`
//       );

//       return response.data;
//     };
//     try {
//       const data = await getFavWatch();
//       console.log(data);
//       dispatch(
//         movieActions?.favWatchMockAction({
//           favorites: data.favorites || [],
//           watchlist: data.watchlist || [],
//         })
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };
