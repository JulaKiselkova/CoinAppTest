import { useState, useCallback, memo } from "react";
import styles from "../styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "@mui/material/Input";
import { ICurrency } from "../../../Types/types";

type ModalAddProps = {
  isActive: boolean;
  //certainCoin: ICurrency;
};

const ModalMainView = (props: ModalAddProps) => {
  return (
    <div className={props.isActive ? styles.main_wrapper : styles.hidden}>
      <div className={styles.box_wrapper}>
        <div className={styles.item}>
          {/* <Input
            type="number"
            name="amount"
            step="any"
            placeholder="Placeholder"
          /> */}
          <input type="number" name="amount" step="any"/>
          {/* <div className={styles.name}>Item1</div> */}
          <p className={styles.info}>Some info</p>
          <button className={styles.formbold_btn}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalMainView);
