import { ICurrency, IHistoryData } from "../Types/types";

export const BASE_URL = `https://api.coincap.io/v2/assets?`;
export const URL2 = `https://api.coincap.io/v2/assets`;

const limit = 10;

export const getById = async (id: string): Promise<ICurrency> => {
  try {
    const res = await fetch(`${URL2}/${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw Error(`no coin with ${id}`);
  }
};

export const getDataPaginate = async (
  limit: number,
  offset: number
): Promise<ICurrency[]> => {
  try {
    const res = await fetch(`${BASE_URL}limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw Error("Paginate problems");
  }
};

export const getTopThreeCoins = async (): Promise<ICurrency[]> => {
  try {
    const res = await fetch(`${BASE_URL}limit=3`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw Error("Top 3 Error");
  }
};

export const getCoinHistory = async (id: string): Promise<IHistoryData[]> => {
  try {
    const res = await fetch(`${URL2}/${id}/history?interval=d1`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw Error("Error history");
  }
};
