import { useEffect, useState } from "react";
import classes from "./TimerArea.module.css";

const TimerArea = () => {
  const [timer, setTimer] = useState(59);
  let startTime = Date.now();

  function timePassedInSeconds(startTime) {
    const timePassed = () => Date.now() - startTime;
    const convertToSeconds = () => timePassed() / 1000;
    const countdown = () => 59 - Math.floor(convertToSeconds());
    if (countdown() < 10 && countdown() > 0) return "0" + countdown();
    if (countdown() < 0) return "0" + 0;
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
      <p>00:{timer}</p>
    </div>
  );
};

export default TimerArea;
