import { useState, useCallback, memo, useContext } from "react";
import ModalMainView from "./ModalMainView";
import {
  ICurrency,
  LocalStorageCoin,
  PortfolioContent,
} from "../../../Types/types";
//import { MainContext } from "../../../Context/Context";
import { ModalContext } from "../../../Context/AddModalContext";
import { useMainContext } from "../../../Context/Context";
import { usePortfolioContext } from "../../../Context/PortContext";

type AddProps = {
  isActive: boolean;
  coin: ICurrency;
};

const KEY = "MyPortfolio";

const ModalMainViewContainer = (props: AddProps) => {
  const PortfolioContext = usePortfolioContext();
  const MainContext = useMainContext();

  const ModalContextConsumer = useContext(ModalContext);
  //const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const [value, setValue] = useState<number>(0);
  let [portfolio, setPortfolio] = useState<LocalStorageCoin[] | null>([]);

  const [previousPortfolioPrice, setPortfolioPrice] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(
    ModalContextConsumer.addModalIsActive
  );
  const buttonCloseHandler = () => {
    if (ModalContextConsumer.addModalIsActive) {
      setIsActive(!ModalContextConsumer.addModalIsActive);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(23, PortfolioContext.localStorageContent);
    const currentCoin: LocalStorageCoin = {
      coin: props.coin,
      value: value,
      totalPrice: value * props.coin.priceUsd,
    };

    event.preventDefault();

    let arrOfAddedCoins = PortfolioContext.localStorageContent?.coins;
    arrOfAddedCoins.push(currentCoin);

    const currentLSValue: PortfolioContent = {
      coins: arrOfAddedCoins,
      portfolioPrice: 0,
    };

    console.log("Full portfolio", currentLSValue);
    localStorage.setItem(KEY, JSON.stringify(currentLSValue));

    console.log("Current value", currentCoin);
  };

  return (
    <ModalMainView
      isActive={MainContext.addModalIsActive}
      value={value}
      onChange={handleChange}
      onSubmit={handleFormSubmit}
      buttonCloseHandler={MainContext.closeHandler}
      coin={props.coin}
    />
  );
};

export default memo(ModalMainViewContainer);
