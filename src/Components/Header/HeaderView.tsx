import { memo } from "react";

import { ICurrency, PortfolioInfo } from "../../Types/types";
import styles from "./styles.module.scss";

type HeaderProps = {
  topThree: Array<ICurrency>;
  modalHeaderIsActive: boolean;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  portfolioPrice: number;
  portfolioInfo: PortfolioInfo;
};

const HeaderView = ({
  topThree,
  buttonHandler,
  portfolioPrice,
  portfolioInfo,
}: HeaderProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.list}>
        {topThree.map(({ id, name, priceUsd }) => (
          <div key={id} className={styles.item}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>
              {Number(priceUsd).toFixed(2)} USD
            </div>
          </div>
        ))}
      </div>
      <div>
        {Number(portfolioPrice).toFixed(2)} USD
        {portfolioInfo.sign}
        {portfolioInfo.difference.toFixed(2)} USD ({portfolioInfo.sign}
        {portfolioInfo.percent.toFixed(2)} %)
      </div>
      <div>
        <button className={styles.portflio_btn} onClick={buttonHandler}>
          Portfolio
        </button>
      </div>
    </div>
  );
};

export default memo(HeaderView);
