import React, { createContext, ReactNode, useContext } from "react";
import { ICurrency, testCoin } from "../Types/types";

// export interface IMe {
//   name: string;
//   email: string;
// }

// export interface IMeContextResults {
//   me: IMe;
//   account: any;
// }

// type TMeContextProvider = ReturnType<typeof MeContext.Provider>;

// interface IMeContextProps {
//   children: ReactNode;
// }

// export const MeContext = createContext<IMeContextResults | undefined>(
//   undefined
// );

// export const useMeContext = (): IMeContextResults => {
//   const context = useContext(MeContext);
//   if (!context) {
//     throw new Error("useMeContext must be used within a MeContextProvider");
//   }
//   return context;
// };

// export const MeContextProvider = ({
//   children,
// }: IMeContextProps): TMeContextProvider => {
//   const value: IMeContextResults = {
//     me: {
//       name: "Test",
//       email: "testBase@gmail.com",
//     },
//     account: null,
//   };

//   return <MeContext.Provider value={value}>{children}</MeContext.Provider>;
// };

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////


export interface PortfolioContextResults {
  coinList: Array<ICurrency> | undefined;
}

type PortfolioContextProvider = ReturnType<typeof PortfolioContext.Provider>;

interface PortfolioContextProps {
  children: ReactNode;
}

export const PortfolioContext = createContext<PortfolioContextResults | undefined>(undefined);

export const useMeContext = (): PortfolioContextResults => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};

export const PortfolioContextProvider = ({
  children,
}: PortfolioContextProps): PortfolioContextProvider => {
  const value: PortfolioContextResults = {
    coinList: [testCoin],
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
