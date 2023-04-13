import { createContext, useReducer } from "react";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContainer from "./Pages/Main/MainContainer";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/routes";
import { MainContext } from "./Context/Context";
import { GlobalContent, defaultCoin, AppContext } from "./Types/types";

function App() {
  const contentInitial: AppContext = {
    certainCoin: defaultCoin,
    offset: 0,
    listOfCoins: [],
    test: "Hi im from App",
  };

  return (
    <div className="App">
      <MainContext.Provider value={contentInitial}>
        <BrowserRouter>
          <HeaderContainer />
          <Router />
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
