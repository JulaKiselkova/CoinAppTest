import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";
import { ICurrency } from "../../Types/types";

type HeaderProps = {
  topThree: Array<ICurrency>;
  modalHeaderIsActive: boolean;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const HeaderView = (props: HeaderProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.list}>
        {props.topThree.map(({ id, name, priceUsd }) => (
          <div key={id} className={styles.item}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{priceUsd} $</div>
          </div>
        ))}
      </div>
      <div>134,32 USD +2,38 (1,80 %)</div>
      <div>
        <button className={styles.portflio_btn} onClick={props.buttonHandler}>
          Portflio
        </button>
      </div>
    </div>
  );
};

export default memo(HeaderView);
