import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import MainContainer from "../Pages/Main/MainContainer";
import InfoContainer from "../Pages/Info/InfoContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainContainer />} />
      <Route
        path={ROUTE_NAMES.COIN_DETAILS}
        element={<div>Coin Details {ROUTE_NAMES.COIN_DETAILS}</div>}
      />
    </Routes>
  );
};
