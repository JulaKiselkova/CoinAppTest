import { memo } from "react";

import ReactPaginate from "react-paginate";
import { PaginationData } from "../../Types/types";
import styles from "./styles.module.scss";

const Pagination = ({totalPages, onClick}: PaginationData) => {
  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPages}
        onPageChange={onClick}
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

export default memo(Pagination);
