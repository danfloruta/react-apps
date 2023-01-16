import { configureStore } from "@reduxjs/toolkit";
import checkSlice from "./check-slice";
import listSlice from "./listSlice";
import reportsSlice from "./reports-slice";

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    reports: reportsSlice.reducer,
    check: checkSlice.reducer,
  },
});

export default store;
