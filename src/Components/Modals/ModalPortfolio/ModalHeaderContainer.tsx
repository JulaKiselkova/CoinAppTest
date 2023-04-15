import { useState, memo, useContext } from "react";
import { ICurrency, LocalStorageContent } from "../../../Types/types";
import ModalHeaderView from "./ModalHeaderView";
import { PortfolioContext } from "../../../Context/PortContext";

type ModalProps = {
  isActive: boolean;
};

const ModalHeaderViewContainer = (props: ModalProps) => {
  const resultList: LocalStorageContent[] = [];
  for (var i = 0; i < localStorage.length; i++) {
    const item: LocalStorageContent = JSON.parse(
      localStorage.getItem(localStorage.key(i) || "") || ""
    );
    resultList.push(item);
  }

  const ModalPortfolioConsumer = useContext(PortfolioContext);
  const [coinName, setCoinName] = useState<string>("");
  const [portfolioList, setPortfolioList] =
    useState<LocalStorageContent[]>(resultList);

  console.log(portfolioList);

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
