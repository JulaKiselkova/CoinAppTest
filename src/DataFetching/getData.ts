import { useState, useCallback, memo, useEffect } from "react";
import axios from "axios";
import { ICurrency, IHistoryData } from "../Types/types";

export const BASE_URL = `https://api.coincap.io/v2/assets?`;
export const URL = `https://api.coincap.io/v2/assets`;

export const getData = async (limit: number) => {
  const res = await fetch(`${BASE_URL}limit=${limit}`);
  const data = await res.json();
  return data.data;
};

export const getDataPaginate = async (limit: number, offset: number) => {
  const res = await fetch(`${BASE_URL}limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data.data;
};

export const getTopThreeCoins = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.data.slice(0, 3);
};

export const firstCoins = async (num: number) => {
  const res: Array<ICurrency> = await getDataPaginate(num, 10);
  return res;
};

export const handleGetCurrencyHistory = async (
  id: string
): Promise<IHistoryData[]> => {
    const res = await fetch(`${URL}/${id}/history?interval=d1`);
    const data = await res.json();
  return data.data;
};
