import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";
import { ICurrency } from "../../Types/types";

type HeaderProps = {
  topThree: Array<ICurrency>;
  modalHeaderIsActive: boolean;
  buttonHendler: any; //c ts не работала основательно, использовать any очень сомнительно, поэтому подумаю, какой тип тут лкчше использовать
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
        {/* <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div> */}
      </div>
      <div>134,32 USD +2,38 (1,80 %)</div>
      <div>
        <button className={styles.portflio_btn} onClick={props.buttonHendler}>
          Portflio
        </button>
      </div>
    </div>
  );
};

export default memo(HeaderView);
