import { createContext, useReducer } from "react";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContainer from "./Pages/Main/MainContainer";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/routes";
//import { MainContext } from "./Context/Context";
import { defaultCoin} from "./Types/types";
import { PortfolioContextProvider } from "./Context/PortContext";
import { MainContextProvider } from "./Context/Context";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <PortfolioContextProvider>
          <BrowserRouter>
            <HeaderContainer />
            <Router />
          </BrowserRouter>
        </PortfolioContextProvider>
      </MainContextProvider>
    </div>
  );
}

export default App;
