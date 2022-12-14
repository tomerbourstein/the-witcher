import classes from "./TextArea.module.css";

const TextArea = () => {
  return (
    <div className={classes.backgroung}>
      <input
        className={classes.textArea}
        type="text"
        autoFocus 
        placeholder="Evil is Evil. Lesser, greater, middling… Makes no difference. The degree is arbitary. The defi..."
      ></input>
    </div>
  );
};

export default TextArea;
