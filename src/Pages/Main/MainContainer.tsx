import {
  useState,
  useCallback,
  useEffect,
  memo,
  createContext,
  useContext,
} from "react";
import MainView from "./MainView";
import { useNavigate } from "react-router";
import ModalMainView from "../../Components/Modals/ModalAdd/ModalMainView";
import {
  ICurrency,
  IPageNumber,
  defaultCoin,
  ModalContextType,
} from "../../Types/types";
import {
  getData,
  getTopThreeCoins,
  getDataPaginate,
} from "../../DataFetching/getData";
import { MainContext } from "../../Context/Context";
import ReactPaginate from "react-paginate";
import PaginationContainer from "../../Components/Pagination/PaginationContainer";
import { ModalContext } from "../../Context/AddModalContext";

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);
  const [coins, setCoins] = useState<Array<ICurrency>>([]);
  const [certainCoin, setCertainCoin] = useState<ICurrency>(defaultCoin);
  const limit = 10;

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getData(limit);
      setCoins(res);
    };
    fetchCoins();
  }, []); // через пропсы и избавиться от бибилиотеки + типизация функций

  const addHandler = (coin: ICurrency) => {
    setCertainCoin(coin);
    console.log(certainCoin);
    console.log(coin.name);
    setModalMainIsActive(true);
  };
  const closeHandler = () => {
    setModalMainIsActive(false);
  };

  const content: ModalContextType = {
    addModalIsActive: modalMainIsActive,
    closeHandler: closeHandler,
  };

  return (
    <div>
      <ModalContext.Provider value={content}>
        <MainView
          modalMainIsActive={modalMainIsActive}
          coins={coins}
          setModalMainIsActive={setModalMainIsActive}
          setCertainCoin={setCertainCoin}
          addHandler={addHandler}
          certainCoin={certainCoin}
        />
        <PaginationContainer />
      </ModalContext.Provider>
    </div>
  );
};

export default memo(MainContainer);
