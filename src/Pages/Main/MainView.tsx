import { useState, useCallback, useEffect, memo } from "react";
import styles from "./styles.module.scss";
import InfoContainer from "../Info/InfoContainer";
import { ICurrency } from "../../Types/types";
import { Link } from "react-router-dom";

type MainProps = {
  modalMainIsActive: boolean;
  coins: Array<ICurrency>;
  buttonAddHendler: any; //c ts не работала основательно, использовать any очень сомнительно, поэтому подумаю, какой тип тут лкчше использовать
};

const MainView = (props: MainProps) => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.box_wrapper}>
          {props.coins.map(({ id, name, priceUsd }) => (
            <div key={id} className={styles.item}>
              <div className={styles.infoBox}>
                <Link className={styles.name} to={`/${name}`}>
                  {name}
                </Link>
                <p className={styles.info}>{priceUsd} $</p>
              </div>
              <button
                onClick={props.buttonAddHendler}
                className={styles.formbold_btn}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MainView);
