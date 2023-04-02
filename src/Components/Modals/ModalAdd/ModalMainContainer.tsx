import { useState, useCallback, memo, useContext } from "react";
import ModalMainView from "./ModalMainView";
import { ICurrency } from "../../../Types/types";
//import { MyContext } from "../../../Pages/Main/MainContainer";

type AddProps = {
  isActive: boolean;
  //coin: ICurrency;
};

const ModalMainViewContainer = () => {
  //const context = useContext(MyContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  return <ModalMainView isActive={isActive} />;
};

export default memo(ModalMainViewContainer);
