import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { dataActions } from "../../store/data-slice";
import { inputActions } from "../../store/input-slice";
import { shuffleArray } from "../../utils";
import witcherQuotes from "../../config/quotes.json";
import classes from "./TextArea.module.css";

const TextArea = (props) => {
  const inputDisabled = useSelector((state) => state.input.inputDisabled);
  const nextQuote = useSelector((state) => state.input.nextQuote);
  const inputLetter = useSelector((state) => state.input.inputLetter);
  const dispatch = useDispatch();

  const [focused, setFocused] = useState(true);
  const [quotes, setQuotes] = useState("");
  const inputRef = useRef(null);

  const quotesData = witcherQuotes.quotes.map((quote) => quote.quote);
  let Timeout;
  useEffect(() => {
    const newQuotes = pickNewQuotes().join(" ");
    dispatch(dataActions.saveInitialQuoteLength(newQuotes.length));
    setQuotes(newQuotes);
  }, [nextQuote]);

  useEffect(() => {
    if (!inputDisabled) inputRef.current.value = null;
    if (!inputDisabled || !focused) {
      inputRef.current.focus();
      setFocused(true);
    }
  }, [inputDisabled, focused]);

  const pickNewQuotes = () => {
    const shuffleQuotes = shuffleArray(quotesData);
    return shuffleQuotes.slice(0, 6);
  };

  const inputBluerHandler = () => {
    setFocused(false);
  };

  const startTypingHandler = (event) => {
    const enteredLetter = event.key;
    const charCode = event.keyCode;
    const firstChar = quotes.charAt(0);
    if (charCode === 9 || charCode === 18) event.preventDefault(); // Tab && Alt
    if (
      charCode === 32 || // Space
      (charCode > 64 && charCode < 91) || // Numbers && Alphabet
      (charCode > 96 && charCode < 112) || // Numpad
      (charCode > 185 && charCode < 193) || // semi-colon, equel sign, comma, dash, period, forward slash, grave accent
      (charCode > 218 && charCode < 223) // open bracket, close bracket, back slash, single quote
    ) {
      dispatch(uiActions.startTimer());
      if (
        enteredLetter === "'" ||
        enteredLetter === firstChar.toLowerCase() ||
        enteredLetter === firstChar.toUpperCase()
      ) {
        if (Timeout) clearTimeout(Timeout);
        Timeout = setTimeout(function () {
          console.log("didnt type for 2 seconds");
        }, 2000);

        dispatch(inputActions.setInputLetter(enteredLetter));
        setQuotes((prevQuote) => prevQuote.slice(1));
        dispatch(dataActions.renderData({ remainingQuote: quotes.slice(1) }));
      }
    } else return;
  };

  return (
    <div className={classes.inputSection}>
      <div className={classes.wrapper}>
        <div>
          <input
            type="text"
            className={classes.textArea}
            ref={inputRef}
            value={inputLetter}
            disabled={inputDisabled}
            onKeyDown={startTypingHandler}
            onBlur={inputBluerHandler}
            onChange={startTypingHandler}
            autoFocus
          />
        </div>

        <div>
          <input
            className={classes.transparentInput}
            placeholder={quotes}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
