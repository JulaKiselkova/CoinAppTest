import { memo } from "react";

import { usePortfolioContext } from "../../../Context/PortContext";
import ModalHeaderView from "./ModalHeaderView";

type ModalProps = {
  isActive: boolean;
};

const ModalHeaderViewContainer = (props: ModalProps) => {
  const { localStorageContent, deleteHandler } = usePortfolioContext();

  return (
    <ModalHeaderView
      isActive={props.isActive}
      buttonDeleteHandler={deleteHandler}
      portfolioCoins={localStorageContent.coins}
      portfolioPrice={localStorageContent.portfolioPrice}
    />
  );
};

export default memo(ModalHeaderViewContainer);
