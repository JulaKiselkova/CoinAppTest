import {
  useState,
  useCallback,
  useEffect,
  memo,
  createContext,
  useContext,
} from "react";

import ModalHeaderView from "./ModalHeaderView";
//import { MyContext } from "../../../Pages/Main/MainContainer";

type ModalProps = {
  isActive: boolean;
};

export const PortfolioModalContext = createContext("default Modal Portfolio");

const ModalHeaderViewContainer = (props: ModalProps) => {
  //const [isActive, setIsActive] = useState<boolean>(true);
  //const context = useContext(MyContext);

  //console.log(`Messege from perent: ${context} and type ${typeof context}`);

  const buttonDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("delete FROM Modal");
  };
  return (
    <ModalHeaderView
      isActive={props.isActive}
      buttonDeleteHandler={buttonDeleteHandler}
    />
  );
};

export default memo(ModalHeaderViewContainer);
