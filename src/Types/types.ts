import { MainAction } from "../Action/action";

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

export interface LocalStorageContent {
  coin: ICurrency;
  value: number;
}

export interface IPageNumber {
  selected: number;
}

export interface IHistoryData {
  priceUsd: string;
  time: string;
}

//{"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin","supply":"19346087.0000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"587088484858.8032143360718020","volumeUsd24Hr":"7110695887.3053974782104358","priceUsd":"30346.6269359174914460","changePercent24Hr":"-0.5461405104600395","vwap24Hr":"30770.0120617154056253","explorer":"https://blockchain.info/"}
//"litecoin"

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
