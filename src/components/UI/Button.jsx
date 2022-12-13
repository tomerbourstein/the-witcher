import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes.button}> {props.content}</button>;
};

export default Button;
