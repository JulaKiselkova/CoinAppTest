import { useState, useCallback, memo, useEffect } from "react";
import axios from "axios";
import { ICurrency } from "../Types/types";

export const BASE_URL = `https://api.coincap.io/v2/assets?`;

export const getData = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.data;
};

export const getDataPaginate = async (limit: number, offset: number) => {
  const res = await fetch(`${BASE_URL}limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data.data;
};
