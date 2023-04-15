import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { ICurrency, IHistoryData } from "../../Types/types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type InfoProps = {
  coin: ICurrency;
  history: IHistoryData[];
};

const InfoView = (props: InfoProps) => {
  return (
    <>
      <div>INFO {props.coin.name}</div>
      <div className="currency-graphic">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={props.history}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Area dataKey="priceUsd" stroke="#2451B7" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} />
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
