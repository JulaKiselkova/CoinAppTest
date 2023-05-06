import {
  useState,
  useCallback,
  useEffect,
  memo,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import MainContainer from "../Pages/Main/MainContainer";
import InfoContainer from "../Pages/Info/InfoContainer";
import { useNavigate } from "react-router-dom";
import { defaultCoin, testCoin } from "../Types/types";
import { useMainContext } from "../Context/Context";

export const Router = () => {
  const MainContext = useMainContext();
  const coinName = window.location.pathname.split("/")[1];
  console.log(coinName);

  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainContainer />} />
      <Route
        path={ROUTE_NAMES.COIN_DETAILS}
        element={
          <div>
            <InfoContainer coin={testCoin} />
          </div>
        }
      />
    </Routes>
  );
};
