import { useState, useCallback, useEffect, memo } from "react";
import ModalMainView from "./InfoView";
import { ICurrency, testCoin, IHistoryData } from "../../Types/types";
import { handleGetCurrencyHistory } from "../../DataFetching/getData";

type InfoProps = {
  coin: ICurrency;
};

const InfoContainer = (props: InfoProps) => {
  const [currentHistory, setCurrentHistory] = useState<IHistoryData[]>([]);

  const handleGenerateCurrencyHistoryData = (data: IHistoryData[]) =>
    data.map((item) => {
      const currentItemDate = new Date(item.time);
      const numberDays = currentItemDate.getDate();
      const numberMonths = currentItemDate.getMonth();
      const currentYear = currentItemDate.getFullYear();

      return {
        ...item,
        time: `${numberDays}.${numberMonths}.${currentYear}`,
      };
    });

  const handleLoadCurrencyHistory = async () => {
    const history = await handleGetCurrencyHistory(props.coin?.id);
    setCurrentHistory(handleGenerateCurrencyHistoryData(history));
  };
  useEffect(() => {
    handleLoadCurrencyHistory();
  }, []);

  return <ModalMainView coin={props.coin} history={currentHistory} />;
};

export default memo(InfoContainer);
