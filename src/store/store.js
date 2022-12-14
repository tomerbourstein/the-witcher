import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api-slice";
import uiSlice from "./ui-slice";
import inputSlice from "./input-slice";
import dataSlice from "./data-slice";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    ui: uiSlice.reducer,
    input: inputSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
