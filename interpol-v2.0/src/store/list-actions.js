import axios from "axios";
import { listActions } from "./listSlice";

export const getDataFromApi = (page) => {
  //param, here
  return async (dispatch) => {
    const getList = async () => {
      const endpoints = [
        `https://ws-public.interpol.int/notices/v1/red?&resultPerPage=20&page=${page}`,

        `https://ws-public.interpol.int/notices/v1/yellow?&resultPerPage=20&page=${page}`,
      ];
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      const data1 = [
        ...response[0].data?._embedded?.notices,
        ...response[1]?.data?._embedded?.notices,
        // response[0]?.data,
        // response[1]?.data,
      ];
      const total = response[0]?.data?.total + response[1].data.total;

      return [data1, total];
    };
    try {
      const data = await getList();

      dispatch(listActions.getData(data[0]));
      dispatch(listActions.getTotal(data[1]));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDataSwitchApi = (color, page) => {
  return async (dispatch) => {
    const getSwitch = async () => {
      const response = await axios.get(
        `https://ws-public.interpol.int/notices/v1/${color}?&resultPerPage=20&page=${page}`
      );
      // console.log(color, page, response);

      return [response?.data?._embedded?.notices, response?.data?.total];
    };
    try {
      const dataSwitch = await getSwitch();
      console.log(dataSwitch);

      dispatch(listActions.getData(dataSwitch[0]));
      dispatch(listActions.getTotal(dataSwitch[1]));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDataSelf = (url) => {
  return async (dispatch) => {
    const getSelf = async () => {
      const response = await axios.get(url);

      return response.data;
    };
    try {
      const data = await getSelf();
      // console.log(data);
      dispatch(listActions.getDetails(data));
    } catch (error) {
      console.error(error);
    }
  };
};
