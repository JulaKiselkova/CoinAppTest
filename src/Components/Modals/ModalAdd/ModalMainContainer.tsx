import { useState, useCallback, memo, useContext } from "react";
import ModalMainView from "./ModalMainView";
import { ICurrency } from "../../../Types/types";
import { MainContext} from "../../../Context/Context";

type AddProps = {
  isActive: boolean;
  coin: ICurrency;
};

const ModalMainViewContainer = (props: AddProps) => {
  const MyContext = useContext(MainContext);
  const [value, setValue] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  console.log(MyContext.state);

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
    localStorage.setItem(`${props.coin.name}Value`, String(value));
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
