import { useState, useCallback, memo } from "react";
import MainView from "./MainView";

const MainContainer = () => {
    const mes = "hello";
    return (
        <MainView message={mes}/>
  );
}

export default memo(MainContainer);