import { useState, useCallback, memo } from "react";
import ModalHeaderView from "./ModalHeaderView";

const ModalHeaderViewContainer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const buttonDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("delete");
  };
  return (
    <ModalHeaderView
      isActive={isActive}
      buttonDeleteHandler={buttonDeleteHandler}
    />
  );
};

export default memo(ModalHeaderViewContainer);
