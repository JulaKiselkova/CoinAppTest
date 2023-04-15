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
import {
  defaultCoin,
  testCoin,
  GlobalContent,
  AppContext,
} from "../Types/types";
import { MainContext } from "../Context/Context";
import { MainReducer } from "../Reducer/MainReducer";
import { MainAction } from "../Action/action";

export const Router = () => {
  const coinName = window.location.pathname.split("/")[1];
  console.log(coinName);
  const navigate = useNavigate();
  navigate(0);
  const contextConsumer = useContext(MainContext);
  console.log(contextConsumer.test);

  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainContainer />} />
      <Route
        path={ROUTE_NAMES.COIN_DETAILS}
        element={
          <div>
            <InfoContainer coin={testCoin} />
            это коин из ссылки {coinName}, а вверху дефолтный
          </div>
        }
      />
    </Routes>
  );
};
