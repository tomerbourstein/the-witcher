import ButtonArea from "./ButtonArea";
import DataArea from "./DataArea";
import RestartArea from "./RestartArea";
import TextArea from "./TextArea";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <section className={classes.main}>
      <ButtonArea />
      <TextArea />
      <DataArea />
      <RestartArea />
    </section>
  );
};

export default Main;
