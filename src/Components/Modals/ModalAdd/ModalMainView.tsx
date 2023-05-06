import { memo } from "react";

import Button from "@mui/material/Button";
import { ICurrency } from "../../../Types/types";
import styles from "../styles.module.scss";

type ModalAddProps = {
  isActive: boolean;
  buttonCloseHandler: () => void;
  value: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  coin: ICurrency;
};

const ModalMainView = ({
  isActive,
  buttonCloseHandler,
  value,
  onChange,
  onSubmit,
  coin,
}: ModalAddProps) => {
  return (
    <div className={styles.area}>
      <form onSubmit={onSubmit}>
        <div className={isActive ? styles.main_wrapper : styles.hidden}>
          <p className={styles.title}>Add {coin.name}</p>
          <Button
            className={styles.close}
            variant="contained"
            color="error"
            onClick={buttonCloseHandler}
          >
            Close
          </Button>
          <div className={styles.box_wrapper}>
            <div className={styles.item}>
              <input
                type="number"
                name="amount"
                step="any"
                value={value}
                onChange={onChange}
              />
              <button className={styles.formbold_btn} type="submit">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(ModalMainView);
