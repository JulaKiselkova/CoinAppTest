import { createContext, useContext } from "react";
import { ModalContextType } from "../Types/types";

export const ModalContext = createContext<ModalContextType>({
  addModalIsActive: false,
  closeHandler: () => null,
});
