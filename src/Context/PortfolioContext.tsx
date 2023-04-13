import { createContext, useContext } from "react";
import {
  ICurrency,
  GlobalContent,
  AppContext,
  defaultCoin,
  PortfolioContextType
} from "../Types/types";
import { getData, getDataPaginate, firstCoins } from "../DataFetching/getData";

export const PortfolioContext = createContext<PortfolioContextType>({
  coinPortfolioList: [],
});