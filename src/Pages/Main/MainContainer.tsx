import { memo } from "react";
import Loader from "../../Components/Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";
import { useMainContext } from "../../Context/Context";
import { usePaginate } from "../../Hooks/usePaginate";
import MainView from "./MainView";

const MainContainer = () => {
  const { addModalIsActive, addHandler, certainCoin } = useMainContext();
  const paginationData = usePaginate();

  return (
    <div>
      {paginationData.loading ? (
        <Loader />
      ) : (
        <>
          <MainView
            modalMainIsActive={addModalIsActive}
            coins={paginationData.currentList}
            addHandler={addHandler}
            certainCoin={certainCoin}
          />
          <Pagination {...paginationData} />
        </>
      )}
    </div>
  );
};

export default memo(MainContainer);
