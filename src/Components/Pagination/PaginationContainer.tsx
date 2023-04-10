import { useState, useCallback, memo, useEffect } from "react";
import styles from "./styles.module.scss";
import ReactPaginate from "react-paginate";
import { BASE_URL, getData, getDataPaginate } from "../../DataFetching/getData";
import { ICurrency, IPageNumber } from "../../Types/types";
import Pagination from "@mui/material/Pagination";
import { redirect } from "react-router-dom";
import { MainContext } from "../../Context/Context";

type PaginationProps = {
  coins: number;
};

const PaginationContainer = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [certainCoinsList, setCertainCoinsList] = useState<Array<ICurrency>>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [theLastPage, setTheLastPage] = useState<number>(231);

  const limit = 10;

  const handlePageClick = async (data: IPageNumber) => {
    setCurrentPage(data.selected);
    const offset = data.selected * limit;
    console.log(`Offset ${data.selected}`);
    const res: Array<ICurrency> = await getDataPaginate(limit, offset);
    setCertainCoinsList(res);
    console.log(res);
    return res;
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={theLastPage}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        disabledClassName={styles.disabled_page}
        pageClassName={styles.item}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"item next"}
        nextLinkClassName={"page-link"}
        breakClassName={"item break-me"}
        breakLinkClassName={"page-link"}
        activeClassName={styles.active}
      />
    </>
  );
};

export default memo(PaginationContainer);
