import { FormEvent, memo, useState } from "react";

import { useMainContext } from "../../../Context/Context";
import { usePortfolioContext } from "../../../Context/PortContext";
import { ICurrency } from "../../../Types/types";
import ModalMainView from "./ModalMainView";

type AddProps = {
  isActive: boolean;
  coin: ICurrency;
};

const ModalAddContainer = ({ coin }: AddProps) => {
  const { handlePortfolioContext } = usePortfolioContext();
  const MainContext = useMainContext();

  const [value, setValue] = useState<number>(0);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) > 0) {
      setValue(Number(event.currentTarget.value));
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePortfolioContext(coin, value);
  };

  return (
    <ModalMainView
      isActive={MainContext.addModalIsActive}
      value={value}
      onChange={handleChange}
      onSubmit={handleFormSubmit}
      buttonCloseHandler={MainContext.closeHandler}
      coin={coin}
    />
  );
};

export default memo(ModalAddContainer);
