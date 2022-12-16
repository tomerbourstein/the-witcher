import { createSlice } from "@reduxjs/toolkit";
import { shuffleArray } from "../utils/index";
import witcherQuotes from "../config/quotes.json";

const quotesData = witcherQuotes.quotes.map((quote) => quote.quote);

const pickNewQuotes = () => {
  const shuffleQuotes = shuffleArray(quotesData);
  return shuffleQuotes.slice(0, 6);
};

const initialState = { quote: pickNewQuotes().join(" ") };

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    nextQuote(state, action) {
      state.quote = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
