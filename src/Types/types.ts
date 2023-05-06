export interface ICurrency {
  changePercent24Hr: string;
  explorer: string;
  id: string;
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

export interface IHistoryData {
  priceUsd: string;
  time: string;
}

export const testCoin: ICurrency = {
  changePercent24Hr: "-0.6052872453115864",
  explorer: "http://explorer.litecoin.net/chain/Litecoin",
  id: "litecoin",
  marketCapUsd: 7027086779.475780778264933,
  maxSupply: 84000000.0,
  name: "Litecoin",
  priceUsd: 96.6462580601065281,
  rank: 12,
  supply: "72709351.8210035000000000",
  symbol: "LTC",
  volumeUsd24Hr: 215509825.8556342028115153,
  vwap24Hr: 95.933801300263801,
  count: 777,
};

export const defaultCoin: ICurrency = {
  changePercent24Hr: "test",
  explorer: "test",
  id: "test",
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

export interface ModalContextType {
  addModalIsActive: boolean;
  closeHandler: () => void;
}

export interface PortfolioContent {
  coins: LocalStorageCoin[];
  portfolioPrice: number;
}

export interface LocalStorageCoin {
  coin: ICurrency;
  value: number;
  totalPrice: number;
}

export interface PortfolioContextType {
  localStorageContent: PortfolioContent;
  deleteHandler: (coin: ICurrency) => void;
}

export interface MainContextType {
  certainCoin: ICurrency;
  addHandler: (coin: ICurrency) => void;
  closeHandler: any;
  infoHandler: any;
  addModalIsActive: boolean;
  certainCoinShow: ICurrency;
}
