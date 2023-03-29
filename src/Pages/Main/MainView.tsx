import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";

type MainProps = {
  modalMainIsActive: boolean;
  buttonAddHendler: any; //c ts не работала основательно, использовать any очень сомнительно, поэтому подумаю, какой тип тут лкчше использовать
};

const MainView = (props: MainProps) => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.box_wrapper}>
          <div id="1" className={styles.item}>
            <div className={styles.infoBox}>
              <a className={styles.name}>Item1</a>
              <p className={styles.info}>Some info</p>
            </div>
            <button
              onClick={props.buttonAddHendler}
              className={styles.formbold_btn}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MainView);
