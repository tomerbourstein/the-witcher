import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { inputActions } from "../../store/input-slice";
import { dataActions } from "../../store/data-slice";
import classes from "./RestartArea.module.css";
const RestartArea = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const dispatch = useDispatch();
  let animation = startAnimation ? classes.animation : null;

  const restartTypingHandler = (event) => {
    setStartAnimation(true);

    setTimeout(() => {
      setStartAnimation(false);
    }, 510);

    dispatch(uiActions.endTimer());
    dispatch(inputActions.resetInput());
    dispatch(dataActions.resetData());
  };
  return (
    <div onClick={restartTypingHandler}>
      <svg
        className={`${classes.restartIcon} ${animation}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 48 48"
      >
        <g id="surface134201193">
          <path
            fill="currentColor"
            d="M 4 4 L 9.878906 9.878906 C 6.253906 13.496094 4 18.484375 4 24 C 4 35.027344 12.972656 44 24 44 C 35.027344 44 44 35.027344 44 24 C 44 12.972656 35.027344 4 24 4 L 24 8 C 32.824219 8 40 15.179688 40 24 C 40 32.824219 32.824219 40 24 40 C 15.179688 40 8 32.824219 8 24 C 8 19.589844 9.800781 15.59375 12.699219 12.699219 L 18 18 L 18 4 Z M 4 4 "
          />
        </g>
      </svg>
    </div>
  );
};

export default RestartArea;
