import { createContext, useReducer } from "react";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContainer from "./Pages/Main/MainContainer";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/routes";
import { MainContext } from "./Context/Context";
import { GlobalContent } from "./Types/types";
import { MainReducer } from "./Reducer/MainReducer";

function App() {
  const contentInitial: GlobalContent = {
    addModalIsActive: true,
    test: "Hi im from App",
  };

  const [state, dispatch] = useReducer(MainReducer, contentInitial);
  return (
    <div className="App">
      <MainContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <HeaderContainer />
          <Router />
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
