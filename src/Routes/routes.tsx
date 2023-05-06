import { Route, Routes } from "react-router-dom";
import { useMainContext } from "../Context/Context";
import InfoContainer from "../Pages/Info/InfoContainer";
import MainContainer from "../Pages/Main/MainContainer";
import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainContainer />} />
      <Route
        path={ROUTE_NAMES.COIN_DETAILS}
        element={
          <div>
            <InfoContainer />
          </div>
        }
      />
    </Routes>
  );
};
