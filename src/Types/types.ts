import { MainAction } from "../Action/action";

export interface ICurrency {
  changePercent24Hr: string;
  explorer: string;
  id: number;
  marketCapUsd: number;
  maxSupply: number;
  name: string;
  priceUsd: number;
  rank: number;
  supply: string;
  symbol: string;
  volumeUsd24Hr: number;
  vwap24Hr: number;
  count: number;
}

export interface IPageNumber {
  selected: number;
}

export const defaultCoin: ICurrency = {
  changePercent24Hr: "test",
  explorer: "test",
  id: 1,
  marketCapUsd: 1,
  maxSupply: 1,
  name: "test",
  priceUsd: 1,
  rank: 1,
  supply: "test",
  symbol: "test",
  volumeUsd24Hr: 1,
  vwap24Hr: 1,
  count: 1,
};

export interface GlobalContent {
  test: string;
}

export interface Action {
  type: MainAction;
  payload: number;
}

export interface AppContext {
  certainCoin: ICurrency;
  offset: number;
  listOfCoins: ICurrency[];
  test: string;
}

export interface ModalContextType {
  addModalIsActive: boolean;
  closeHandler: () => void;
}

export interface PortfolioContextType {
  coinPortfolioList: ICurrency[];
}
