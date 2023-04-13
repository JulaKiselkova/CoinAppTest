import { createContext, useContext } from "react";
import {
  ICurrency,
  GlobalContent,
  AppContext,
  defaultCoin,
} from "../Types/types";
import { getData, getDataPaginate, firstCoins } from "../DataFetching/getData";

export const MainContext = createContext<AppContext>({
  certainCoin: defaultCoin,
  offset: 0,
  listOfCoins: [],
  test: "without provider",
});
