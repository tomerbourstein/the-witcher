import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./TextArea.module.css";

const TextArea = (props) => {
  const inputDisabled = useSelector((state) => state.input.inputDisabled);
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!inputDisabled) inputRef.current.value = null;
    if (!inputDisabled || !focused) {
      inputRef.current.focus();
      setFocused(true);
    }
  }, [inputDisabled, focused]);

  const inputBluerHandler = () => {
    setFocused(false);
  };
  const startTypingHandler = (event) => {
    const charCode = event.keyCode;
    if (charCode === 9 || charCode === 18) event.preventDefault();
    if (
      (charCode > 64 && charCode < 91) ||
      (charCode > 96 && charCode < 123) ||
      charCode === 8 ||
      charCode === 16 ||
      charCode === 32 ||
      charCode === 188 ||
      charCode === 189 ||
      charCode === 190 ||
      charCode === 222
    ) {
      dispatch(uiActions.startTimer());
    } else return;
  };

  return (
    <div>
      <input
        type="text"
        placeholder={props.quotes}
        className={classes.textArea}
        ref={inputRef}
        disabled={inputDisabled}
        onKeyDown={startTypingHandler}
        onBlur={inputBluerHandler}
        autoFocus
      ></input>
    </div>
  );
};

export default TextArea;
