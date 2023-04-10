import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { ICurrency } from "../../Types/types";

type InfoProps = {
  coin: ICurrency;
};

const InfoView = (props: InfoProps) => {
  return (
    <>
      <div>INFO {props.coin.name}</div>
    </>
  );
};

export default memo(InfoView);
