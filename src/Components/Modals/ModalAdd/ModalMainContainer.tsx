import { useState, useCallback, memo, useContext } from "react";
import ModalMainView from "./ModalMainView";
import { ICurrency } from "../../../Types/types";

type AddProps = {
  isActive: boolean;
  coin: ICurrency;
  //key: number;
  //coin: ICurrency;
};

const ModalMainViewContainer = (props: AddProps) => {
  //почему нельзя  передать пропсы прям в стейт. куча проблем :(
  const [value, setValue] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const buttonCloseHandler = () => {
    if (props.isActive) {
      console.log("close");
      setIsActive(false);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(value);
    event.preventDefault();
    setIsActive(false);
  };

  return (
    <ModalMainView
      isActive={props.isActive}
      value={value}
      onChange={handleChange}
      onSubmit={handleFormSubmit}
      buttonCloseHandler={buttonCloseHandler}
      coin={props.coin}
    />
  );
};

export default memo(ModalMainViewContainer);
