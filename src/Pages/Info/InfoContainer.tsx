import { ReactElement, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../Components/Loader/Loader";
import ModalAddContainer from "../../Components/Modals/ModalAdd/ModalMainContainer";
import { useMainContext } from "../../Context/Context";
import { getById, getCoinHistory } from "../../Services/services";
import { ICurrency, IHistoryData, defaultCoin } from "../../Types/types";
import InfoView from "./InfoView";

const InfoContainer = (): ReactElement => {
  const params = useParams<{ id: string }>();
  const [coin, setCoin] = useState<ICurrency>(defaultCoin);
  const [history, setHistory] = useState<IHistoryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { addModalIsActive, addHandler, certainCoin } = useMainContext();

  const getData = async () => {
    try {
      if (params.id) {
        const coinHistory = await getCoinHistory(params.id);
        const coinData: ICurrency = await getById(params.id);
        setCoin(coinData);
        setHistory(coinHistory);
      }
    } catch (error) {
      console.log("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ModalAddContainer isActive={true} coin={coin} />
      {loading ? (
        <Loader />
      ) : (
        <InfoView coin={coin} history={history} addHandler={addHandler} />
      )}
    </div>
  );
};

export default memo(InfoContainer);
