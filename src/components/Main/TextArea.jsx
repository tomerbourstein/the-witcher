import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./TextArea.module.css";

const TextArea = () => {
  const inputDisabled = useSelector((state) => state.input.inputDisabled);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (!inputDisabled) inputRef.current.focus();
  }, [inputDisabled]);

  const startTypingHandler = (event) => {
    const charCode = event.keyCode;
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
        onKeyDown={startTypingHandler}
        ref={inputRef}
        disabled={inputDisabled}
        className={classes.textArea}
        type="text"
        autoFocus
        placeholder="Evil is Evil. Lesser, greater, middling… Makes no difference. The degree is arbitary. The defi..."
      ></input>
    </div>
  );
};

export default TextArea;
