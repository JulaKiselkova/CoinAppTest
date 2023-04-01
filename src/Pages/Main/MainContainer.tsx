import { useState, useCallback, useEffect, memo } from "react";
import MainView from "./MainView";
import ModalMainContainer from "../../Components/Modals/ModalAdd/ModalMainContainer";
import ModalMainView from "../../Components/Modals/ModalAdd/ModalMainView";
import { ICurrency } from "../../Types/types";
import { getData } from "../../DataFetching/getData";
import ReactPaginate from "react-paginate";
import PaginationContainer from "../../Components/Pagination/PaginationContainer";

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);
  const [coins, setCoins] = useState<Array<ICurrency>>([]);

  const buttonAddHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Add");
    setModalMainIsActive(!modalMainIsActive);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getData();
      setCoins(res);
    };
    fetchCoins();
  }, []);
  return (
    <div>
      <ModalMainView isActive={false} />

      <MainView
        modalMainIsActive={modalMainIsActive}
        coins={coins}
        buttonAddHendler={buttonAddHandler}
      />
      <PaginationContainer />
    </div>
  );
};

export default memo(MainContainer);
