import { useState, useCallback, memo } from "react";
import MainView from "./MainView";


// interface Props {
//     id: number;
// }


const MainContainer = () => {
    const mes = "hello";
    return (
        <MainView message={mes}/>
    
    //   <BubbleView
    //     arraySize={arraySize}
    //     //speed={speed}
    //   />

  );
}

export default memo(MainContainer);