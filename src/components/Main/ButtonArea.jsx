import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import TimerArea from "./TimerArea";

import classes from "./ButtonArea.module.css";

const ButtonArea = () => {
  const timerRender = useSelector((state) => state.ui.timerRender);
  const dispatch = useDispatch();

  const initialTimer = (
    <div className={classes.initialTimer}>
      <p>01:00</p>
    </div>
  );

  const startTypingHandler = (event) => {
    console.log(event.type);
    dispatch(uiActions.startTimer());
  };
  return (
    <div className={classes.buttonAreaBox}>
      <Button content={"START TYPING"} onClick={startTypingHandler} />
      {timerRender ? <TimerArea /> : initialTimer}
    </div>
  );
};

export default ButtonArea;
