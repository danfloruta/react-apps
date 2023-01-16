import { createSlice } from "@reduxjs/toolkit";

const initialReportState = {
  reports: [],
  reportsModalIsOpen: false,
  reportsUpdateModalOpen: false,
  id: "",
};

const reportsSlice = createSlice({
  name: "reports",
  initialState: initialReportState,
  reducers: {
    createReport(state, action) {
      const newItem = action.payload;
      const existingItem = state.reports.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.reports.push({
          // id: Math.trunc(Math.random() * 1000),
          id: state.reports.length + 1,
          // id: newItem.id,
          firstName: newItem.firstName || "null",
          lastName: newItem.lastName || "null",
          dateOfBirth: newItem.dateOfBirth || "null",
          nationality: newItem.nationality || "null",
          imgUrl: newItem.imgUrl || "null",
          color: newItem.color || "null",
          sex: newItem.sex || "null",
        });
      }
    },
    updateReport(state, action) {
      const {
        id,
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        imgUrl,
        color,
        sex,
      } = action.payload;
      const existingItem = state.reports.find((item) => item.id === id);

      existingItem.firstName = firstName;
      existingItem.lastName = lastName;
      existingItem.dateOfBirth = dateOfBirth;
      existingItem.nationality = nationality;
      existingItem.imgUrl = imgUrl;
      existingItem.color = color;
      existingItem.sex = sex;
    },
    deleteReport(state, action) {
      const id = action.payload;

      state.reports = state.reports.filter((item) => item.id !== id);
    },
    changeReportsModal(state) {
      state.reportsModalIsOpen = !state.reportsModalIsOpen;
    },
    changeReportsUpdateModal(state) {
      state.reportsUpdateModalOpen = !state.reportsUpdateModalOpen;
    },
    getId(state, action) {
      state.id = "";
      state.id = action.payload;
    },
    getReportsFromMock(state, action) {
      state.reports = action.payload;
    },
  },
});

export const reportsActions = reportsSlice.actions;
export default reportsSlice;
