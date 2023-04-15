import { createContext, useContext } from "react";
import { AppContext, ModalContextType } from "../Types/types";

export const ModalContext = createContext<ModalContextType>({
  addModalIsActive: false,
  closeHandler: () => null,
});
