import {
  useState,
  useCallback,
  useEffect,
  memo,
  createContext,
  useContext,
} from "react";
import MainView from "./MainView";
import ModalMainContainer from "../../Components/Modals/ModalAdd/ModalMainContainer";
import ModalMainView from "../../Components/Modals/ModalAdd/ModalMainView";
import { ICurrency, IPageNumber } from "../../Types/types";
import {
  getData,
  getTopThreeCoins,
  getDataPaginate,
} from "../../DataFetching/getData";
import { MainContext } from "../../Context/Context";
import ReactPaginate from "react-paginate";
import PaginationContainer from "../../Components/Pagination/PaginationContainer";
//import { MainGlobalContext,useGlobalContext } from "../../Context/Context";
//import { CoinContext } from "../../Context/Context";
//import { PortfolioModalContext } from "../../Components/Modals/ModalPortfolio/ModalHeaderContainer";

export const MyContext = createContext("def");

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);
  const [coins, setCoins] = useState<Array<ICurrency>>([]);
  const limit = 10;

  const buttonAddHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Add");
    setModalMainIsActive(!modalMainIsActive);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getData(limit);
      setCoins(res);
    };
    fetchCoins();
  }, []);

  return (
    <div>
      {/* <MainContext.Provider value={coins}> */}
      {/* <ModalMainView isActive={modalMainIsActive} /> */}
      <MainView
        modalMainIsActive={modalMainIsActive}
        coins={coins}
        buttonAddHendler={buttonAddHandler}
      />
      <PaginationContainer />
      {/* </MainContext.Provider> */}
    </div>
  );
};

export default memo(MainContainer);
