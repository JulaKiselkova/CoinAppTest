import {
  useState,
  useEffect,
  memo,
} from "react";
import MainView from "./MainView";
import {
  ICurrency,
  defaultCoin,
} from "../../Types/types";
import {
  getData,
  getTopThreeCoins,
  getDataPaginate,
} from "../../DataFetching/getData";
import PaginationContainer from "../../Components/Pagination/PaginationContainer";
import { useMainContext } from "../../Context/Context";

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);
  const [coins, setCoins] = useState<Array<ICurrency>>([]);
  const [certainCoin, setCertainCoin] = useState<ICurrency>(defaultCoin);
  const limit = 10;

  const MainContext = useMainContext();

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getData(limit);
      setCoins(res);
    };
    fetchCoins();
  }, []); 

  return (
    <div>
      <MainView
        modalMainIsActive={MainContext.addModalIsActive}
        coins={coins}
        setModalMainIsActive={setModalMainIsActive}
        setCertainCoin={setCertainCoin}
        addHandler={MainContext.addHandler}
        certainCoin={MainContext.certainCoin}
      />
      <PaginationContainer />
    </div>
  );
};

export default memo(MainContainer);
