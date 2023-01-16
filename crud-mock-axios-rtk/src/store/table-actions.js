import { tableActions } from "./table-slice";
import axios from "axios";

// post with .then/.catch
// export const postDataToApi = ({ id, email, address, name, age }) => {
//   return (dispatch) => {
//     const postData = () => {
//       axios
//         .post(`https://63650d10f711cb49d1f3a685.mockapi.io/table`, {
//           id,
//           email,
//           address,
//           name,
//           age,
//         })
//         .then(() =>
//           dispatch(
//             tableActions.createItem({
//               id,
//               email,
//               address,
//               name,
//               age,
//             })
//           )
//         );
//     };
//     postData();
//   };
// };

// post with async/await:

export const postDataToApi = ({ id, email, address, name, age }) => {
  return async (dispatch) => {
    const postData = async () => {
      const response = await axios.post(
        `https://63650d10f711cb49d1f3a685.mockapi.io/table`,
        {
          id,
          email,
          address,
          name,
          age,
        }
      );

      return dispatch(
        tableActions.createItem({
          id,
          email,
          address,
          name,
          age,
        })
      );
    };
    try {
      await postData();
    } catch (error) {
      console.error(error);
    }
  };
};

//update with .then/.catch

// export const replaceDataFromApi = ({ id, email, address, name, age }) => {
//   return (dispatch) => {
//     const replaceData = () => {
//       axios
//         .put(`https://63650d10f711cb49d1f3a685.mockapi.io/table/${id}`, {
//           id,
//           email,
//           address,
//           name,
//           age,
//         })
//         .then(() =>
//           dispatch(
//             tableActions.updateItem({
//               id,
//               email,
//               address,
//               name,
//               age,
//             })
//           )
//         )
//         .catch((err) => console.log(err));
//     };
//     replaceData();
//   };
// };

//update with async/await:

export const replaceDataFromApi = ({ id, email, address, name, age }) => {
  return async (dispatch) => {
    const replaceData = async () => {
      const response = await axios.put(
        `https://63650d10f711cb49d1f3a685.mockapi.io/table/${id}`,
        {
          id,
          email,
          address,
          name,
          age,
        }
      );

      return dispatch(
        tableActions.updateItem({
          id,
          email,
          address,
          name,
          age,
        })
      );
    };
    try {
      await replaceData();
    } catch (error) {
      console.log(error);
    }
  };
};

//get with .then/.catch
// export const getDataFromApi = () => {
//   return (dispatch) => {
//     const getData = () => {
//       axios
//         .get(`https://63650d10f711cb49d1f3a685.mockapi.io/table`)
//         .then((response) => {
//           dispatch(tableActions.getItems(response.data || []));
//         });
//     };
//     try {
//       getData();
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

//get with async/await:

export const getDataFromApi = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(
        `https://63650d10f711cb49d1f3a685.mockapi.io/table`
      );

      return dispatch(tableActions.getItems(response.data || []));
    };
    try {
      await getData();
    } catch (error) {
      console.error(error);
    }
  };
};

// delete with .then/.catch

// export const deleteDataFromApi = (id) => {
//   return (dispatch) => {
//     const deleteItems = () => {
//       axios
//         .delete(`https://63650d10f711cb49d1f3a685.mockapi.io/table/${id}`)
//         .then(() => dispatch(tableActions.deleteItem(id)))
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//     deleteItems();
//   };
// };

// delete with async/await

export const deleteDataFromApi = (id) => {
  return async (dispatch) => {
    const deleteItems = async () => {
      const response = await axios.delete(
        `https://63650d10f711cb49d1f3a685.mockapi.io/table/${id}`
      );

      return dispatch(tableActions.deleteItem(id));
    };
    try {
      await deleteItems();
    } catch (error) {
      console.error(error);
    }
  };
};
