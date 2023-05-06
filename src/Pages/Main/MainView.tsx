import { memo } from "react";
import { Link } from "react-router-dom";

import ModalMainContainer from "../../Components/Modals/ModalAdd/ModalMainContainer";
import { ICurrency } from "../../Types/types";
import styles from "./styles.module.scss";

type MainProps = {
  modalMainIsActive: boolean;
  coins: ICurrency[];
  addHandler: (coin: ICurrency) => void;
  certainCoin?: ICurrency;
};

const MainView = ({
  modalMainIsActive,
  coins,
  addHandler,
  certainCoin,
}: MainProps) => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.box_wrapper}>
          {certainCoin && (
            <ModalMainContainer
              isActive={modalMainIsActive}
              coin={certainCoin}
            />
          )}
          {coins.map((coin: ICurrency) => (
            <div key={coin.id} className={styles.item}>
              <div className={styles.infoBox}>
                <Link className={styles.name} to={`/${coin.id}`}>
                  {coin.name}
                </Link>
                <p className={styles.info}>
                  {Number(coin.priceUsd).toFixed(2)} USD
                </p>
              </div>
              <button
                onClick={() => addHandler(coin)}
                className={styles.formbold_btn}
              >
                {"Add "}
                {certainCoin?.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MainView);
