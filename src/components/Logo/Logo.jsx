import WitcherHead from "../../assets/witcher-logo-dark-512.png";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <section className={classes.header}>
      <div>
        <img src={WitcherHead} className={classes.logo} />
      </div>
      <div className={classes.eyes}>
        <div className={classes.right}></div>{" "}
        <div className={classes.left}></div>
      </div>
    </section>
  );
};

export default Logo;
