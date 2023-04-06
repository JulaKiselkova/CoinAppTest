import { createContext, useContext } from "react";
import { ICurrency } from "../Types/types";
import { getData, getDataPaginate, firstCoins } from "../DataFetching/getData";

interface ProviderProps {
    currentPage: String,
}

export const MainContext = createContext<Partial<Array<ICurrency>>>([]);
// export type GlobalContentProps = {
//   //certainCoins: Array<ICurrency>;
//   test: boolean;
// };

// //const firstCoins2: Array<ICurrency> = await firstCoins(10);
// export const MainGlobalContext = createContext<GlobalContentProps>({
//   //certainCoins: [], // set a default value
//   //setCopy: () => {},
//   test: true,
// });
// export const useGlobalContext = () => useContext(MainGlobalContext);
