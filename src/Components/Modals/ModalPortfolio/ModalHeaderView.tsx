import { memo } from "react";

import { ICurrency, LocalStorageCoin } from "../../../Types/types";
import styles from "../styles.module.scss";

type ModalHeaderProps = {
  isActive: boolean;
  buttonDeleteHandler: (coin: LocalStorageCoin) => void;
  portfolioCoins: LocalStorageCoin[];
  portfolioPrice: number;
};

const ModalHeaderView = ({
  isActive,
  buttonDeleteHandler,
  portfolioCoins,
  portfolioPrice,
}: ModalHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={isActive ? styles.main_wrapper : styles.hidden}>
        <div className={styles.box_wrapper}>
          {portfolioCoins.map((item: LocalStorageCoin) => (
            <div key={item.coin?.rank} className={styles.item}>
              <div className={styles.name}>
                {item.coin?.name}
                {Number(item.totalPrice).toFixed(2)} $
              </div>
              <button
                onClick={() => buttonDeleteHandler(item)}
                className={styles.formbold_btn}
              >
                Delete
              </button>
            </div>
          ))}
          {Number(portfolioPrice).toFixed(2)} $
        </div>
      </div>
    </div>
  );
};

export default memo(ModalHeaderView);
