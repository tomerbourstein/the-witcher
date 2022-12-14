import { useEffect } from "react";
import { shuffleArray } from "../../utils";
import witcherQuotes from "../../../quotes.json";

import ButtonArea from "./ButtonArea";
import DataArea from "./DataArea";
import RestartArea from "./RestartArea";
import TextArea from "./TextArea";

import classes from "./Main.module.css";

const Main = () => {
  const quotes = witcherQuotes.quotes.map(quote => quote.quote);

  const pickNewQuotes = () => {
    const shuffleQuotes = shuffleArray(quotes)
    return shuffle.slice(0,10);
  }

  return (
    <section className={classes.main}>
      <ButtonArea />
      <TextArea />
      <DataArea />
      <RestartArea />
    </section>
  );
};

export default Main;
