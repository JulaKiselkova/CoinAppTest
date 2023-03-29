import { useState, useCallback, memo } from "react";
import MainView from "./MainView";
import ModalMainContainer from "./Modal/ModalMainContainer";
import ModalMainView from "./Modal/ModalMainView";

const MainContainer = () => {
  const [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);
  const buttonAddHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Add");
    setModalMainIsActive(!modalMainIsActive);
  };
  //проблема Handler. У меня копипаст. Один и тот же Handler опрделен и в модалке и в основном меню
  return (
    <div>
      <MainView
        modalMainIsActive={modalMainIsActive}
        buttonAddHendler={buttonAddHandler}
      />
      <ModalMainView isActive={true} />
    </div>
  );
};

export default memo(MainContainer);
