import classes from "./Button.module.css";

const Button = (props) => {
  return <button type="button" onClick={props.onClick} className={classes.button}> {props.content}</button>;
};

export default Button;
