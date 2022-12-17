import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import TimerArea from "./TimerArea";

import geralt0 from "../../assets/geralt0.png";
import geralt1 from "../../assets/geralt1.png";
import geralt2 from "../../assets/geralt2.png";
import geralt3 from "../../assets/geralt3.png";
import geralt4 from "../../assets/geralt4.png";
import geralt5 from "../../assets/geralt5.png";
import geraltBad2 from "../../assets/geralt-bad2.png";
import geraltBad3 from "../../assets/geralt-bad3.png";
import geraltBad4 from "../../assets/geralt-bad4.png";

import classes from "./ButtonArea.module.css";

const ButtonArea = () => {
  const timerRender = useSelector((state) => state.ui.timerRender);
  const typedChar = useSelector((state) => state.data.typedChar);
  const dispatch = useDispatch();

  const initialTimer = (
    <div className={classes.initialTimer}>
      <p>01:00</p>
    </div>
  );
  console.log(typedChar);
  let geraltFigure;
  switch (true) {
    case typedChar >= 1 && typedChar <= 60:
      geraltFigure = geraltBad2;
      break;
    case typedChar >= 60 && typedChar <= 100:
      geraltFigure = geraltBad3;
      break;
    case typedChar >= 100 && typedChar <= 130:
      geraltFigure = geraltBad4;
      break;
    case typedChar >= 130 && typedChar <= 160:
      geraltFigure = geralt1;
      break;
    case typedChar >= 160 && typedChar <= 190:
      geraltFigure = geralt3;
      break;
    case typedChar >= 190 && typedChar <= 205:
      geraltFigure = geralt2;
      break;
    case typedChar >= 205 && typedChar <= 220:
      geraltFigure = geralt4;
      break;
    case typedChar > 220:
      geraltFigure = geralt5;
      break;
    default:
      geraltFigure = geralt0;
  }
  const startTypingHandler = (event) => {
    console.log(event.type);
    dispatch(uiActions.startTimer());
  };
  return (
    <div className={classes.buttonAreaBox}>
      <div className={classes.wrapper}>
        <img className={classes.geralt} src={geraltFigure} />
      </div>
      <Button content={"START TYPING"} onClick={startTypingHandler} />
      {timerRender ? <TimerArea /> : initialTimer}
    </div>
  );
};

export default ButtonArea;
