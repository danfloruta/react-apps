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
      console.log(newItem);

      state.details = {};

      state.details = {
        forename: newItem.forename || null,
        name: newItem.name || null,
        eyeColor: newItem.eyes_colors_id || null,
        weight: newItem.weight || null,
        height: newItem.height || null,
        birthdate: newItem.date_of_birth || null,
        country: newItem.country_of_birth_id || null,
        sex: newItem.sex_id || null,
        placeOfBirth: newItem.place_of_birth || newItem.place_of_birth || null,
        nationalities: newItem.nationalities || null,
        images: newItem._links.thumbnail?.href || null,
        issuingCountry: newItem?.arrest_warrants[0]?.issuing_country_id || null,
        charge: newItem?.arrest_warrants[0]?.charge || null,
      };
    },
    getDetailsYellow(state, action) {
      const newItem = action.payload;
      console.log(newItem);

      state.details = {};

      state.details = {
        forename: newItem.forename || null,
        name: newItem.name || null,
        eyeColor: newItem.eyes_colors_id || null,
        weight: newItem.weight || null,
        height: newItem.height || null,
        birthdate: newItem.date_of_birth || null,
        country: newItem.country_of_birth_id || null,
        sex: newItem.sex_id || null,
        placeOfBirth: newItem.place_of_birth || newItem.place_of_birth || null,
        nationalities: newItem.nationalities || null,
        images: newItem._links.thumbnail?.href || null,
      };
    },
  },
});
export const listActions = listSlice.actions;
export default listSlice;
