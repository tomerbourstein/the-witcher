import { createSlice } from "@reduxjs/toolkit";

const initialState = { inputDisabled: false, isInitial: true };

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputDisabled(state) {
      state.inputDisabled = true;
    },
    // setInputEnabled(state) {
    // },
    // setIsInitial(state) {
    // },
    resetInput(state) {
      state.inputDisabled = false;
      state.isInitial = false;
    },
  },
});

export const inputActions = inputSlice.actions;
export default inputSlice;
