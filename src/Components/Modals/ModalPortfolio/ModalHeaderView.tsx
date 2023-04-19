import { useState, useCallback, memo } from "react";
import { ICurrency, LocalStorageCoin } from "../../../Types/types";
import styles from "../styles.module.scss";

type ModalHeaderProps = {
  isActive: boolean;
  buttonDeleteHandler: any;
  portfolioCoins: any;
};

const ModalHeaderView = (props: ModalHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={props.isActive ? styles.main_wrapper : styles.hidden}>
        <div className={styles.box_wrapper}>
          {props.portfolioCoins.map((item: any) => (
            <div key={item.coin.rank} className={styles.item}>
              <div className={styles.name}>
                {item.coin.name}
                {item.totalPrice.toFixed(2)}
              </div>
              <button
                onClick={() => props.buttonDeleteHandler(item.coin)}
                className={styles.formbold_btn}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ModalHeaderView);
