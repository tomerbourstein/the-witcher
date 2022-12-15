import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils";
import witcherQuotes from "../../config/quotes.json";

import ButtonArea from "./ButtonArea";
import DataArea from "./DataArea";
import RestartArea from "./RestartArea";
import TextArea from "./TextArea";

import classes from "./Main.module.css";

const Main = () => {
  const [quotes, setQuotes] = useState("");
  const quotesData = witcherQuotes.quotes.map((quote) => quote.quote);

  useEffect(() => {
    const newQuotes = pickNewQuotes().join(" ");
    setQuotes(newQuotes);
  }, []);

  const pickNewQuotes = () => {
    const shuffleQuotes = shuffleArray(quotesData);
    return shuffleQuotes.slice(0, 6);
  };

  return (
    <section className={classes.main}>
      <ButtonArea />
      <TextArea quotes={quotes} />
      <DataArea />
      <RestartArea />
    </section>
  );
};

export default Main;
