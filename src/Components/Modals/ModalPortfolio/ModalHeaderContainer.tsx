import {
  useState,
  useCallback,
  useEffect,
  memo,
  createContext,
  useContext,
} from "react";
import ModalHeaderView from "./ModalHeaderView";

type ModalProps = {
  isActive: boolean;
};

const ModalHeaderViewContainer = (props: ModalProps) => {
  const [coinName, setCoinName] = useState<string>("");

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
