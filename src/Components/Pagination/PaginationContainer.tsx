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
  const [theLastPage, setTheLastPage] = useState<number>(232);
  const limit = 10;
  let a: Array<number> = [];

  const handlePageClick = async (data: IPageNumber) => {
    setCurrentPage(data.selected);
    const offset = data.selected * limit;
    console.log(`Offset ${data.selected}`);
    const res: Array<ICurrency> = await getDataPaginate(limit, offset);
    setCertainCoinsList(res);
    console.log(res);
    return res;
  };

  //   const getTheLastPage = async () => {
  //     for (let i = 0; !isEmpty; i = i + 10) {
  //       const res: Array<ICurrency> = await getDataPaginate(limit, i);
  //       a.push(i);
  //       if (res.length === 0) {
  //         console.log(`${i} page with empty data`);
  //         console.log(`${i - 1} THE LAST NOT EMPTY`);
  //         return i - 1;
  //       } else {
  //         return i;
  //       }
  //     }
  //   };

  //   const handlePageClick = async (data: IPageNumber) => {
  //     setCurrentPage(data.selected);
  //     const offset = currentPage * limit;
  //     const res: Array<ICurrency> = await getDataPaginate(limit, offset);
  //     //setCertainCoinsList(res);
  //     console.log(data.selected);
  //     //console.log(res);
  //     return res;
  //   };

  return (
    // <MainContext.Provider value={coins}>
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
    // </MainContext.Provider>
  );
};

export default memo(PaginationContainer);
