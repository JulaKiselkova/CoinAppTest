import {
  useState,
  useCallback,
  useEffect,
  memo,
  createContext,
  useContext,
} from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import MainContainer from "../Pages/Main/MainContainer";
import InfoContainer from "../Pages/Info/InfoContainer";
import { useNavigate } from "react-router-dom";
import { defaultCoin } from "../Types/types";

export const Router = () => {
  const coinName = window.location.pathname.split("/")[1];
  console.log(coinName);
  const navigate = useNavigate();
  navigate(0);

  const MainContext = createContext("default");

  return (
    //определить контекст тут?
    <Routes>
      {/* <MainContext.Provider value="Hello))"> */}
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainContainer />} />
      {/* </MainContext.Provider> */}
      <Route
        path={ROUTE_NAMES.COIN_DETAILS}
        element={
          <div>
            <InfoContainer coin={defaultCoin}/>
            {coinName}
          </div>
        }
      />
    </Routes>
  );
};
