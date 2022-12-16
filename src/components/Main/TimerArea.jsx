import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { inputActions } from "../../store/input-slice";
import classes from "./TimerArea.module.css";

const TimerArea = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(59);
  let startTime = Date.now();

  const endOfTime = timer <= 10 && timer > 0 ? classes.endOfTime : null;

  function timePassedInSeconds(startTime) {
    const timePassed = () => Date.now() - startTime;
    const convertToSeconds = () => timePassed() / 1000;
    const countdown = () => 59 - Math.floor(convertToSeconds());
    if (countdown() < 10 && countdown() > 0) return "0" + countdown();
    if (countdown() <= 0) {
      dispatch(inputActions.setInputDisabled());
      return "0" + 0;
    }
    return countdown();
  }

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setTimer(timePassedInSeconds(startTime));
    }, timePassedInSeconds());

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={classes.timerAreaBox}>
      <p className={endOfTime}>
        00:<span >{timer}</span>
      </p>
    </div>
  );
};

export default TimerArea;
