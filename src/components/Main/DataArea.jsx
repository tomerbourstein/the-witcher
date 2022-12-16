import { useSelector } from "react-redux";
import classes from "./DataArea.module.css";
const DataArea = () => {
  const typedChar = useSelector((state) => state.data.typedChar);

  return (
    <div className={classes.dataArea}>
      <div className={classes.counterBox}>
        YOU TYPED <span className={classes.typedChar}>{typedChar}</span> LETTERS
      </div>
      <div className={classes.quote}>
        "This world doesn't need a hero. It needs a professional"
      </div>
      <div className={classes.quote}>Geralt of Rivia</div>
    </div>
  );
};

export default DataArea;
