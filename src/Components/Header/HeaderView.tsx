import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";

type HeaderProps = {
  modalHeaderIsActive: boolean;
  buttonHendler: any; //c ts не работала основательно, использовать any очень сомнительно, поэтому подумаю, какой тип тут лкчше использовать
};

const HeaderView = (props: HeaderProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.list}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
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
