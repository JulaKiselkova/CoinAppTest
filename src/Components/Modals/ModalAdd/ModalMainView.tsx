import { memo, useContext } from "react";
import styles from "../styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICurrency } from "../../../Types/types";
import { MainContext } from "../../../Context/Context";
import { MainAction } from "../../../Action/action";

type ModalAddProps = {
  isActive: boolean;
  buttonCloseHandler: () => void;
  value: number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  coin: ICurrency;
};

const ModalMainView = (props: ModalAddProps) => {
  const MyContext = useContext(MainContext);
  return (
    <form onSubmit={props.onSubmit}>
      <div className={props.isActive ? styles.main_wrapper : styles.hidden}>
        <p className={styles.title}>Add {props.coin.name}</p>
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
            <button className={styles.formbold_btn} type="submit">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default memo(ModalMainView);
