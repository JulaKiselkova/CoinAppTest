import { useState, memo, useContext } from "react";
import { ICurrency, LocalStorageCoin } from "../../../Types/types";
import ModalHeaderView from "./ModalHeaderView";
import { usePortfolioContext } from "../../../Context/PortContext";

type ModalProps = {
  isActive: boolean;
};

const ModalHeaderViewContainer = (props: ModalProps) => {
  const PortfolioContext = usePortfolioContext();

  const [coinName, setCoinName] = useState<string>("");
  const [portfolioList, setPortfolioList] = useState<LocalStorageCoin[]>([]);

  const buttonDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("delete FROM Modal");
  };

  return (
    <ModalHeaderView
      isActive={props.isActive}
      buttonDeleteHandler={PortfolioContext.deleteHandler}
      portfolioCoins={PortfolioContext.localStorageContent.coins}
    />
  );
};

export default memo(ModalHeaderViewContainer);
