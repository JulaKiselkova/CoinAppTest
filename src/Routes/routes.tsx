import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import MainContainer from "../Pages/Main/MainContainer";
import InfoContainer from "../Pages/Info/InfoContainer";

export const Router = () => {
  const coinName = window.location.pathname.split("/")[1];
  console.log(coinName);
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainContainer />} />
      <Route
        path={ROUTE_NAMES.COIN_DETAILS}
        element={<div>Coin Details {coinName}</div>}
      />
    </Routes>
  );
};