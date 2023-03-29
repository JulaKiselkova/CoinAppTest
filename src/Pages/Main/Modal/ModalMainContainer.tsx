import { useState, useCallback, memo } from "react";
import ModalMainView from "./ModalMainView";

const ModalMainViewContainer = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return <ModalMainView isActive={isActive} />;
};

export default memo(ModalMainViewContainer);
