import { createSlice } from "@reduxjs/toolkit";

const initialCheckState = {
  check: [],
  openNavModal: false,
};

const checkSlice = createSlice({
  name: "check",
  initialState: initialCheckState,
  reducers: {
    checkPerson(state, action) {
      state.check = [];
      state.check = action.payload;
    },
    openNav(state) {
      state.openNavModal = !state.openNavModal;
    },
  },
});

export const checkActions = checkSlice.actions;
export default checkSlice;
