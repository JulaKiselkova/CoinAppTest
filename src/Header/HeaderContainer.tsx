import { useState, memo } from "react";
import HeaderView from "./HeaderView";
import ModalHeaderView from "./Modal/ModalHeaderView";
import ModalHeaderContainer from "./Modal/ModalHeaderContainer";

const HeaderContainer = () => {
  const [modalHeaderIsActive, setModalHeaderIsActive] =
    useState<boolean>(false);
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalHeaderIsActive(!modalHeaderIsActive);
    console.log(modalHeaderIsActive);
  };
  const buttonDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Delete");
  };

  return (
    <div>
      <ModalHeaderView
        isActive={modalHeaderIsActive}
        buttonDeleteHandler={buttonDeleteHandler}
      />
      <HeaderView
        modalHeaderIsActive={modalHeaderIsActive}
        buttonHendler={buttonHandler}
      />
    </div>
  );
};

export default memo(HeaderContainer);
