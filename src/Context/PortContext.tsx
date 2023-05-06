import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  ICurrency,
  defaultCoin,
  PortfolioContextType,
  testCoin,
  LocalStorageCoin,
  PortfolioContent,
} from "../Types/types";

type ContextProvider = ReturnType<typeof Context.Provider>;

interface PortfolioContextProps {
  children: ReactNode;
}

export const Context = createContext<PortfolioContextType | undefined>(
  undefined
);

export const usePortfolioContext = (): PortfolioContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};

const KEY = "MyPortfolio";

export const PortfolioContextProvider = ({
  children,
}: PortfolioContextProps): ContextProvider => {
  const initialState = () => {
    const localStorageObject = localStorage.getItem(KEY);
    if (localStorageObject === null) {
      const emptyPortfolio: PortfolioContent = {
        coins: [],
        portfolioPrice: 0,
      };
      return emptyPortfolio;
    } else {
      const portfolio: PortfolioContent = JSON.parse(localStorageObject);
      return portfolio;
    }
  };

  let [localStorageContent, setLocalStorageContent] =
    useState<PortfolioContent>(initialState());
  const [certainCoinInPortfolio, setCertainCoinInPortfolio] =
    useState<ICurrency>(defaultCoin);

  const deleteHandler = (coin: ICurrency) => {
    console.log("Delete from context", coin.name);
    setCertainCoinInPortfolio(coin);
  };

  const value: PortfolioContextType = {
    localStorageContent: localStorageContent,
    deleteHandler: deleteHandler,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
