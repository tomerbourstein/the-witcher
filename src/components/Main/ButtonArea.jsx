import Button from "../UI/Button";
import TimerArea from "./TimerArea";

import classes from "./ButtonArea.module.css";

const ButtonArea = () => {
  return (
    <div className={classes.buttonAreaBox}>
      <Button content={"START TYPING"} />
      <TimerArea />
    </div>
  );
};

export default ButtonArea;
