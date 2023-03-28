import React from 'react';
import logo from './logo.svg';
import HeaderContainer from './Pages/Header/HeaderContainer';
import MainContainer from './Pages/Main/MainContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <MainContainer/>
    </div>
  );
}

export default App;