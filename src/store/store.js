import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api-slice";
import uiSlice from "./ui-slice";
import dataSlice from "./data-slice";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
