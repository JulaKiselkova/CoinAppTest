import { createContext } from "react";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContainer from "./Pages/Main/MainContainer";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/routes";
//export const MyContext = createContext("default");
//import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Router />
        {/* <MainContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
