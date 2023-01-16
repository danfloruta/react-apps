import axios from "axios";
import { reportsActions } from "./reports-slice";
export const postDataToApi = ({
  firstName,
  lastName,
  dateOfBirth,
  nationality,
  imgUrl,
  color,
  sex,
  id,
}) => {
  return async (dispatch) => {
    const postData = async () => {
      const response = await axios.post(
        `https://63650d10f711cb49d1f3a685.mockapi.io/reports/`,
        {
          firstName,
          lastName,
          dateOfBirth,
          nationality,
          imgUrl,
          color,
          sex,
          id,
        }
      );

      return response;
    };

    try {
      await postData();
    } catch (error) {
      console.error(error);
    }
  };
};

export const replaceDataInApi = ({
  firstName,
  lastName,
  dateOfBirth,
  nationality,
  imgUrl,
  color,
  sex,
  id,
}) => {
  return async (dispatch) => {
    const putData = async () => {
      const response = await axios.put(
        `https://63650d10f711cb49d1f3a685.mockapi.io/reports/${id}`,
        {
          firstName,
          lastName,
          dateOfBirth,
          nationality,
          imgUrl,
          color,
          sex,
          id,
        }
      );
      return response;
    };
    try {
      await putData();
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDataFromApi = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(
        `https://63650d10f711cb49d1f3a685.mockapi.io/reports`
      );

      return response;
    };
    try {
      const data = await getData();
      //   dispatch(reportsActions.getReportsFromMock(data || []));
      dispatch(reportsActions.getReportsFromMock(data.data || []));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteDataFromApi = (id) => {
  return async (dispatch) => {
    const deleteData = await axios.delete(
      `https://63650d10f711cb49d1f3a685.mockapi.io/reports/${id}`
    );
    try {
      await deleteData();
    } catch (error) {
      console.error(error);
    }
  };
};
