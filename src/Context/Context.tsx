import { createContext, useContext } from "react";
import { ICurrency } from "../Types/types";
import { getData, getDataPaginate, firstCoins } from "../DataFetching/getData";

interface ProviderProps {
  currentPage: String;
}

export const MainContext = createContext<Partial<Array<ICurrency>>>([]);
