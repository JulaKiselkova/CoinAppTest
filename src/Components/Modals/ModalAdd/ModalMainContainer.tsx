import { useState, useCallback, memo, useContext } from "react";
import ModalMainView from "./ModalMainView";
import { ICurrency } from "../../../Types/types";
import { MainContext } from "../../../Context/Context";
import { ModalContext } from "../../../Context/AddModalContext";

type AddProps = {
  isActive: boolean;
  coin: ICurrency;
};

const ModalMainViewContainer = (props: AddProps) => {
  const ModalContextConsumer = useContext(ModalContext);

  const [value, setValue] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(
    ModalContextConsumer.addModalIsActive
  );
  const [id, setId] = useState<number>(0);

  const buttonCloseHandler = () => {
    if (ModalContextConsumer.addModalIsActive) {
      setIsActive(!ModalContextConsumer.addModalIsActive);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(value);
    event.preventDefault();
    localStorage.setItem(`${props.coin.name}Value`, String(value));
    setIsActive(false);
  };

  return (
    <ModalMainView
      isActive={ModalContextConsumer.addModalIsActive}
      value={value}
      onChange={handleChange}
      onSubmit={handleFormSubmit}
      buttonCloseHandler={ModalContextConsumer.closeHandler}
      coin={props.coin}
    />
  );
};

export default memo(ModalMainViewContainer);
