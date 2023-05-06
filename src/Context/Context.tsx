import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  ICurrency,
  defaultCoin,
  testCoin,
  LocalStorageCoin,
  PortfolioContent,
  MainContextType,
} from "../Types/types";

type ContextProvider = ReturnType<typeof Context.Provider>;

interface MainContextProps {
  children: ReactNode;
}

export const Context = createContext<MainContextType | undefined>(undefined);

export const useMainContext = (): MainContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};

export const MainContextProvider = ({
  children,
}: MainContextProps): ContextProvider => {
  const [certainCoin, setCertainCoin] = useState<ICurrency>(defaultCoin);
  const [certainCoinShow, setCertainCoinShow] = useState<ICurrency>(testCoin);
  const [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);

  const addHandler = (coin: ICurrency) => {
    setCertainCoin(coin);
    setModalMainIsActive(true);
  };

  const closeHandler = () => {
    setModalMainIsActive(false);
  };

  const infoHandler = (coin: ICurrency) => {
    setCertainCoinShow(coin);
  };

  const value: MainContextType = {
    certainCoin: certainCoin,
    addHandler: addHandler,
    closeHandler: closeHandler,
    infoHandler: infoHandler,
    addModalIsActive: modalMainIsActive,
    certainCoinShow: certainCoinShow,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
