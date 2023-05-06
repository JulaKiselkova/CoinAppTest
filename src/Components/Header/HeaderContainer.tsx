import { memo, useEffect, useState } from "react";

import { usePortfolioContext } from "../../Context/PortContext";
import { getTopThreeCoins } from "../../Services/services";
import { ICurrency } from "../../Types/types";
import ModalHeaderContainer from "../Modals/ModalPortfolio/ModalHeaderContainer";
import HeaderView from "./HeaderView";

const HeaderContainer = () => {
  const [modalHeaderIsActive, setModalHeaderIsActive] =
    useState<boolean>(false);
  const [topThreeCoins, setTopThreeCoins] = useState<Array<ICurrency>>([]);
  const { localStorageContent, deleteHandler, portfolioInfo} =
    usePortfolioContext();

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalHeaderIsActive(!modalHeaderIsActive);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const res: Array<ICurrency> = await getTopThreeCoins();
      setTopThreeCoins(res);
    };
    fetchCoins();
  }, []);

  return (
    <div>
      <ModalHeaderContainer isActive={modalHeaderIsActive} />
      <HeaderView
        modalHeaderIsActive={modalHeaderIsActive}
        buttonHandler={buttonHandler}
        topThree={topThreeCoins}
        portfolioPrice={localStorageContent.portfolioPrice}
        portfolioInfo={portfolioInfo}
      />
    </div>
  );
};

export default memo(HeaderContainer);
