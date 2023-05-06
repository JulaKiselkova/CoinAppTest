import { useEffect, useState } from "react";
import { getDataPaginate } from "../Services/services";
import { ICurrency, IPageNumber } from "../Types/types";

interface PaginationData {
  currentList: ICurrency[];
  currentPage: number;
  setCurrentPage: (num: number) => void;
  pageSize: number;
  offset: number;
  totalPages: number;
  setTotalPages: (num: number) => void;
  onClick: (data: IPageNumber) => Promise<ICurrency[]>;
  loading: boolean;
}

export const usePaginate = (): PaginationData => {
  const limit = 10;
  const [certainCoinsList, setCertainCoinsList] = useState<Array<ICurrency>>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [theLastPage, setTheLastPage] = useState<number>(230);
  const [loading, setLoading] = useState<boolean>(true);

  const [offset, setOffset] = useState<number>(0);

  const handlePageClick = async (data: IPageNumber) => {
    setCurrentPage(data.selected);
    const offset = data.selected * limit;
    setOffset(data.selected);
    const res: Array<ICurrency> = await getDataPaginate(limit, offset);
    setCertainCoinsList(res);
    setLoading(false);
    return res;
  };

  useEffect(() => {
    handlePageClick({ selected: 0 });
  }, []);

  const value: PaginationData = {
    currentList: certainCoinsList,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    offset: offset,
    pageSize: limit,
    totalPages: theLastPage,
    setTotalPages: setTheLastPage,
    onClick: handlePageClick,
    loading: loading,
  };

  return value;
};
