import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timerRender: false,
  blinkAnimation: false,
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
    toggleAnimation(state) {
      state.blinkAnimation = !state.blinkAnimation;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
