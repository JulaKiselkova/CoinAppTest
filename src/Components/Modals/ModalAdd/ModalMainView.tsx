import { useState, useCallback, memo } from "react";
import styles from "../styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICurrency } from "../../../Types/types";

type ModalAddProps = {
  isActive: boolean;
  buttonCloseHandler: () => void;
  value: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: any; // как определить этот тип
  coin: ICurrency;
};

const ModalMainView = (props: ModalAddProps) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={props.isActive ? styles.main_wrapper : styles.hidden}>
        {props.coin.name}
        <Button
          className="btn"
          variant="contained"
          color="error"
          onClick={props.buttonCloseHandler}
        >
          Close
        </Button>
        <div className={styles.box_wrapper}>
          <div className={styles.item}>
            <input
              type="number"
              name="amount"
              step="any"
              value={props.value}
              onChange={props.onChange}
            />
            <p className={styles.info}>Some info</p>
            <button
              className={styles.formbold_btn}
              onSubmit={() => props.onSubmit()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default memo(ModalMainView);
