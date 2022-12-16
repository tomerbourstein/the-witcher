import { createSlice } from "@reduxjs/toolkit";

const initialState = { inputDisabled: false, nextQuote: false };

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
      state.nextQuote = !state.nextQuote;
    },
  },
});

export const inputActions = inputSlice.actions;
export default inputSlice;
