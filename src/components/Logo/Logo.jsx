import WitcherHead from "../../assets/witcher-logo-dark-512.png";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <section className={classes.header}>
      <img src={WitcherHead} className={classes.logo} />
    </section>
  );
};

export default Logo;
