import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
});

export const apiActions = apiSlice.actions;
export default apiSlice;
