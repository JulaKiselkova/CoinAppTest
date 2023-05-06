import { useState, memo, useEffect, useContext } from "react";
import HeaderView from "./HeaderView";
import ModalHeaderView from "../Modals/ModalPortfolio/ModalHeaderView";
import ModalHeaderContainer from "../Modals/ModalPortfolio/ModalHeaderContainer";
import {
  ICurrency,
  defaultCoin,
  PortfolioContextType,
  testCoin,
} from "../../Types/types";
import { getTopThreeCoins } from "../../DataFetching/getData";
import {
  PortfolioContextProvider,
  usePortfolioContext,
} from "../../Context/PortContext";

const HeaderContainer = () => {
  const [modalHeaderIsActive, setModalHeaderIsActive] =
    useState<boolean>(false);
  const [topThreeCoins, setTopThreeCoins] = useState<Array<ICurrency>>([]);

  const [coinList, setCoinList] = useState<ICurrency[]>([testCoin]);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalHeaderIsActive(!modalHeaderIsActive);
  };

  const buttonDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("DeleteFROM HEADER");
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getTopThreeCoins();
      setTopThreeCoins(res);
    };
    fetchCoins();
  }, []);

  return (
    <div>
      <ModalHeaderContainer isActive={modalHeaderIsActive} />
      <HeaderView
        modalHeaderIsActive={modalHeaderIsActive}
        buttonHandler={buttonHandler}
        topThree={topThreeCoins}
      />
    </div>
  );
};

export default memo(HeaderContainer);
