import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classes from "./TextArea.module.css";

const TextArea = () => {
  const inputDisabled = useSelector((state) => state.input.inputDisabled);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!inputDisabled) inputRef.current.focus();
  }, [inputDisabled]);

  return (
    <div className={classes.backgroung}>
      <input
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
