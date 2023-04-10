import { useState, useCallback, memo } from "react";
import ModalMainView from "./InfoView";
import { ICurrency } from "../../Types/types";

type InfoProps = {
  coin: ICurrency;
};

const InfoContainer = (props: InfoProps) => {
  return <ModalMainView coin={props.coin} />;
};

export default memo(InfoContainer);
