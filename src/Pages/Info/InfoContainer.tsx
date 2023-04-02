import { useState, useCallback, memo } from "react";
import ModalMainView from "./InfoView";
//import { useNavigate } from "react-router";
import { ICurrency } from "../../Types/types";
//coin: ICurrency
const InfoContainer = () => {
  //   const navigate = useNavigate();
  //   navigate(0);
  return <ModalMainView name={"Dit"} />;
};

export default memo(InfoContainer);
