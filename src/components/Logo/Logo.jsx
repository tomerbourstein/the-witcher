import { useSelector } from "react-redux";
import WitcherHead from "../../assets/witcher-logo-dark-512.png";

import classes from "./Logo.module.css";

const Logo = () => {
  const blinkAnimation = useSelector((state) => state.ui.blinkAnimation);
  const startAnimation = blinkAnimation ? classes.startAnimation : null;
  return (
    <section className={classes.header}>
      <div>
        <img src={WitcherHead} className={classes.logo} />
      </div>
      <div className={classes.eyes}>
        <div className={`${classes.right} ${startAnimation} `}></div>
        <div className={`${classes.left} ${startAnimation}`}></div>
      </div>
    </section>
  );
};

export default Logo;
