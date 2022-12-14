import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timerRender: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    startTimer(state) {
      state.timerRender = true;
    },
    endTimer(state) {
      state.timerRender = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
