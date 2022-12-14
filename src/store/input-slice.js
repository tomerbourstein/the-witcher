import { createSlice } from "@reduxjs/toolkit";

const initialState = { inputDisabled: false };

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputDisabled(state) {
      state.inputDisabled = true;
    },
    setInputEnabled(state) {
      state.inputDisabled = false;
    },
  },
});

export const inputActions = inputSlice.actions;
export default inputSlice;
