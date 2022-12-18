import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { inputActions } from "../../store/input-slice";
import { dataActions } from "../../store/data-slice";
import Restart from "../../assets/restart-icon-50.png";
import classes from "./RestartArea.module.css";
const RestartArea = () => {
  const dispatch = useDispatch();

  const restartTypingHandler = (event) => {
    dispatch(uiActions.endTimer());
    dispatch(inputActions.resetInput());
    dispatch(dataActions.resetData());
  };
  return (
    <div>
      <img
        onClick={restartTypingHandler}
        className={classes.restartIcon}
        src={Restart}
        alt="Restart game icon"
      />
    </div>
  );
};

export default RestartArea;
