import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";

type ModalHeaderProps = {
  isActive: boolean;
  buttonDeleteHandler: any;
};

const ModalHeaderView = (props: ModalHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={props.isActive ? styles.main_wrapper : styles.hidden}>
        <div className={styles.box_wrapper}>
          <div className={styles.item}>
            <div className={styles.name}>Item1</div>
            <button
              onClick={props.buttonDeleteHandler}
              className={styles.formbold_btn}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalHeaderView);
