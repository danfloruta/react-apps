import axios from "axios";
import { checkActions } from "./check-slice";

export const checkPersonAction = ({
  forename,
  name,
  nationalities,
  ageMax,
  ageMin,
  sexId,
}) => {
  return async (dispatch) => {
    let endpoints = [
      `https://ws-public.interpol.int/notices/v1/red`,

      `https://ws-public.interpol.int/notices/v1/yellow`,
    ];
    const checkPers = async () => {
      const response = await axios.all(
        endpoints.map((endpoint) =>
          axios.get(endpoint, {
            params: {
              forename,
              name,
              nationalities,
              ageMax,
              ageMin,
              sexId,
            },
          })
        )
      );

      const res = response.map((res) => res?.data?._embedded?.notices);
      return [...res[0], ...res[1]];
    };
    try {
      const data = await checkPers();
      dispatch(checkActions.checkPerson(data));
    } catch (error) {
      console.error(error);
    }
  };
};
