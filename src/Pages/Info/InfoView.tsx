import { useState, useCallback, memo } from "react";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

type InfoProps = {
  name: string;
};

const InfoView = (props: InfoProps) => {
  return <div>INFO {props.name}</div>;
};

export default memo(InfoView);
