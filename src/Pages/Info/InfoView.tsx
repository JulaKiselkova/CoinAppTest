import { memo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ICurrency, IHistoryData } from "../../Types/types";
import styles from "./styles.module.scss";

type InfoProps = {
  coin: ICurrency;
  history: IHistoryData[];
  addHandler: (coin: ICurrency) => void;
};

const InfoView = ({coin, history, addHandler}: InfoProps) => {
  return (
    <>
      <div>INFO {coin.name}</div>
      <div>
        <div className="currency-info__details">
          <p>Symbol : {coin.symbol}</p>
          <p>
            Change Percent :{" "}
            {parseFloat(coin.changePercent24Hr).toFixed(2)}
          </p>
          <p>Rank : {coin.rank}</p>
          <p>PriceUSD : {parseFloat(`${coin.priceUsd}`).toFixed(2)}</p>
          <p>Supply : {parseFloat(coin.supply).toFixed(2)}</p>
        </div>
        <button
          onClick={() => addHandler(coin)}
          className={styles.formbold_btn}
        >
          {"Buy "}
          {coin.name}
        </button>
      </div>
      <div className="currency-graphic">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={history}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Area dataKey="priceUsd" stroke="#2451B7" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} />
              <YAxis dataKey="priceUsd" tickLine={false} tickCount={8} />
              <Tooltip />
              <CartesianGrid
                strokeDasharray="3 3"
                opacity={0.1}
                vertical={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default memo(InfoView);
