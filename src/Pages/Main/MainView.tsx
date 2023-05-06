import { useState, useCallback, useEffect, memo } from "react";
import styles from "./styles.module.scss";
import { ICurrency } from "../../Types/types";
import { Link } from "react-router-dom";
import ModalMainContainer from "../../Components/Modals/ModalAdd/ModalMainContainer";

type MainProps = {
  modalMainIsActive: boolean;
  coins: ICurrency[];
  setModalMainIsActive: (isActive: boolean) => void;
  addHandler: (coin: ICurrency) => void;
  certainCoin: ICurrency;
  setCertainCoin: (coin: ICurrency) => void;
};

const MainView = (props: MainProps) => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.box_wrapper}>
          <ModalMainContainer
            isActive={props.modalMainIsActive}
            coin={props.certainCoin}
          />
          {props.coins.map((coin: ICurrency) => (
            <div key={coin.id} className={styles.item}>
              <div className={styles.infoBox}>
                <Link className={styles.name} to={`/${coin.name}`}>
                  {coin.name}
                </Link>
                <p className={styles.info}>
                  {coin.priceUsd} $ {coin.rank}
                </p>
              </div>
              <button
                onClick={() => props.addHandler(coin)}
                className={styles.formbold_btn}
              >
                {"Add "}
                {props.certainCoin.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MainView);
