import { useState, useCallback, useEffect, memo } from "react";
import MainView from "./MainView";
import ModalMainContainer from "../../Components/Modals/ModalAdd/ModalMainContainer";
import ModalMainView from "../../Components/Modals/ModalAdd/ModalMainView";
import { ICurrency } from "../../Types/types";

const MainContainer = () => {
  const [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);
  const [coins, setCoins] = useState<Array<ICurrency>>([]);

  const buttonAddHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Add");
    setModalMainIsActive(!modalMainIsActive);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=10`);
      const data = await res.json();
      const arrOfCoinObjects = data.data;
      console.log(arrOfCoinObjects);
      setCoins(arrOfCoinObjects);
    };

    fetchCoins();
  }, []);
  //проблема Handler. У меня копипаст. Один и тот же Handler опрделен и в модалке и в основном меню
  return (
    <div>
      <ModalMainView isActive={false} />
      <MainView
        modalMainIsActive={modalMainIsActive}
        coins={coins}
        buttonAddHendler={buttonAddHandler}
      />
    </div>
  );
};

export default memo(MainContainer);
