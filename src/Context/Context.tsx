import { createContext, ReactNode, useContext, useState } from "react";
import { ICurrency, MainContextType } from "../Types/types";

type ContextProvider = ReturnType<typeof Context.Provider>;

interface MainContextProps {
  children: ReactNode;
}

export const Context = createContext<MainContextType | undefined>(undefined);

export const useMainContext = (): MainContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};

export const MainContextProvider = ({
  children,
}: MainContextProps): ContextProvider => {
  const [certainCoin, setCertainCoin] = useState<ICurrency | undefined>();
  const [modalMainIsActive, setModalMainIsActive] = useState<boolean>(false);

  const addHandler = (coin: ICurrency) => {
    setCertainCoin(coin);
    setModalMainIsActive(true);
  };

  const closeHandler = () => {
    setModalMainIsActive(false);
  };

  const value: MainContextType = {
    certainCoin: certainCoin,
    addHandler: addHandler,
    closeHandler: closeHandler,
    addModalIsActive: modalMainIsActive,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
