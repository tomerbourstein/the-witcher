import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const dataActions = dataSlice.actions;
export default dataSlice;
