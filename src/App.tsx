import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { MainContextProvider } from "./Context/Context";
import { PortfolioContextProvider } from "./Context/PortContext";
import { Router } from "./Routes/routes";

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
