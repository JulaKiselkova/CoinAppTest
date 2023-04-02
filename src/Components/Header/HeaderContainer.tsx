import { createContext } from "react";
import { useState, memo, useEffect } from "react";
import HeaderView from "./HeaderView";
import ModalHeaderView from "../Modals/ModalPortfolio/ModalHeaderView";
import ModalHeaderContainer from "../Modals/ModalPortfolio/ModalHeaderContainer";
import { ICurrency } from "../../Types/types";
import { getTopThreeCoins } from "../../DataFetching/getData";

const HeaderContainer = () => {
  const [modalHeaderIsActive, setModalHeaderIsActive] =
    useState<boolean>(false);
  const [topThreeCoins, setTopThreeCoins] = useState<Array<ICurrency>>([]);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalHeaderIsActive(!modalHeaderIsActive);
    console.log(!modalHeaderIsActive);
  };

  const buttonDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("DeleteFROM HEADER");
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getTopThreeCoins();
      setTopThreeCoins(res);
      console.log(res);
    };
    fetchCoins();
  }, []);

  return (
    <div>
      {/* <ModalHeaderView
        isActive={modalHeaderIsActive}
        buttonDeleteHandler={buttonDeleteHandler}
      /> */}
      <ModalHeaderContainer isActive={modalHeaderIsActive} />
      <HeaderView
        modalHeaderIsActive={modalHeaderIsActive}
        buttonHendler={buttonHandler}
        topThree={topThreeCoins}
      />
    </div>
  );
};

export default memo(HeaderContainer);
