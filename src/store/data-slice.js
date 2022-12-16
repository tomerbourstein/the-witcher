import { createSlice } from "@reduxjs/toolkit";

const initialState = { initialQuoteChar: 0, typedChar: 0, charPerMinute: 0 };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    saveInitialQuoteLength(state, action) {
      state.initialQuoteChar = action.payload;
    },
    renderData(state, action) {
      const remainingQuote = action.payload.remainingQuote;

      state.typedChar = state.initialQuoteChar - remainingQuote.length;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
