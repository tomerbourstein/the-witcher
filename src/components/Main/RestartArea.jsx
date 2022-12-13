import Restart from "../../assets/restart-icon-50.png";
import classes from "./RestartArea.module.css";
const RestartArea = () => {
  return (
    <div>
      <img
        className={classes.restartIcon}
        src={Restart}
        alt="Restart game icon"
      />
    </div>
  );
};

export default RestartArea;
