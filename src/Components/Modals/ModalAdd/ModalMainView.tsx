import { useState, useCallback, memo } from "react";
import styles from "../styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

type ModalMainProps = {
  isActive: boolean;
};

const ModalMainView = (props: ModalMainProps) => {
  return (
    <div className={props.isActive ? styles.main_wrapper : styles.hidden}>
      <div className={styles.box_wrapper}>
        <div className={styles.item}>
          <div className={styles.name}>Item1</div>
          <p className={styles.info}>Some info</p>
          <div className={styles.info}>Graph</div>
          <button className={styles.formbold_btn}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalMainView);
