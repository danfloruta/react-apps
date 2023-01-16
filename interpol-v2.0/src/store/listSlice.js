import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  totalWanted: 0,
  modalIsOpen: false,
  details: {},
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getData(state, action) {
      const data = action.payload;
      // const data1 = [
      //   ...data[0]?.data?._embedded?.notices,
      //   ...data[1]?.data?._embedded?.notices,
      // ];
      state.list = [];
      // state.totalWanted = data[0]?.data?.total + data[1]?.data?.total;
      // state.totalWanted = action.payload
      state.list.push(data);
    },

    getTotal(state, action) {
      state.totalWanted = action.payload;
    },
    getDetails(state, action) {
      const newItem = action.payload;
      state.details = {};

      state.details = {
        forename: newItem.forename,
        name: newItem.name,
        eyeColor: newItem.eyes_colors_id,
        weight: newItem.weight,
        height: newItem.height,
        birthdate: newItem.date_of_birth,
        country: newItem.country_of_birth_id,
        sex: newItem.sex_id,
        placeOfBirth: newItem.place_of_birth,
        nationalities: newItem.nationalities,
        images: newItem._links.thumbnail.href,
        issuingCountry: newItem.arrest_warrants[0].issuing_country_id,
        charge: newItem.arrest_warrants[0].charge,
      };
    },
  },
});
export const listActions = listSlice.actions;
export default listSlice;
