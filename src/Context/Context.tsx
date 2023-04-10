import { createContext, useContext } from "react";
import { ICurrency, GlobalContent, AppContext } from "../Types/types";
import { getData, getDataPaginate, firstCoins } from "../DataFetching/getData";

const initialState = {
  addModalIsActive: true,
  test: "without provider",
};

export const MainContext2 = createContext("without provider");

export const MainContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => null,
});
