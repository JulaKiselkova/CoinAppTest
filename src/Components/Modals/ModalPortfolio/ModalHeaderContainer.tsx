import { useState, memo, useContext } from "react";
import { ICurrency } from "../../../Types/types";
import ModalHeaderView from "./ModalHeaderView";
import { PortfolioContext } from "../../../Context/PortfolioContext";

type ModalProps = {
  isActive: boolean;
};

const ModalHeaderViewContainer = (props: ModalProps) => {
  const ModalPortfolioConsumer = useContext(PortfolioContext);
  const [coinName, setCoinName] = useState<string>("");
  const [portfolioList, setPortfolioList] = useState<string[]>([]);

  //console.log(`Context ${ModalPortfolioConsumer.coinPortfolioList[0].name}`);

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
