import { useState, useCallback, memo } from "react";
import ModalMainView from "./InfoView";

const InfoContainer = () => {
  return <ModalMainView name={"Bitcoin"} />;
};

export default memo(InfoContainer);
