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

export type FetchDataPagination = () => Promise<IPageNumber>;

export interface IHistoryData {
  priceUsd: string;
  time: string;
  date: string;
}

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
  coin?: ICurrency;
  value: number;
  totalPrice: number;
}

export interface PortfolioInfo {
  difference: number;
  percent: number;
  sign: string;
}

export interface PortfolioContextType {
  localStorageContent: PortfolioContent;
  deleteHandler: (coin: LocalStorageCoin) => void;
  setLocalStorageContent: (content: PortfolioContent) => void;
  handlePortfolioContext: (coin: ICurrency, value: number) => void;
  portfolioTotalPrice: number;
  portfolioInfo: PortfolioInfo;
}

export interface MainContextType {
  certainCoin?: ICurrency;
  addHandler: (coin: ICurrency) => void;
  closeHandler: () => void;
  addModalIsActive: boolean;
}

export interface PaginationData {
  totalPages: number;
  onClick: (data: IPageNumber) => Promise<ICurrency[]>;
}

export interface InfoPageRouteParams {
  id: string;
}
