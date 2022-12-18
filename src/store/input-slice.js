import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputDisabled: false,
  nextQuote: false,
  inputLetter: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputDisabled(state) {
      state.inputDisabled = true;
    },
    setInputLetter(state, action) {
      state.inputLetter = action.payload;
    },
    resetInput(state) {
      state.inputDisabled = false;
      state.nextQuote = !state.nextQuote;
      state.inputLetter = "";
    },
  },
});

export const inputActions = inputSlice.actions;
export default inputSlice;
