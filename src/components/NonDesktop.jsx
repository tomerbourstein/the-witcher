import Geralt from "../assets/geralt0.png";

import classes from "./NonDesktop.module.css";
const NonDesktop = () => {
  return (
    <section className={classes.nonDesktop}>
      <div>If You Want to Play,</div>
      <div>Get Yourself a Desktop With a Keyboard</div>
      <img
        src={Geralt}
        alt="Geralt Swinging a Sword"
        className={classes.geralt}
      />
    </section>
  );
};

export default NonDesktop;
