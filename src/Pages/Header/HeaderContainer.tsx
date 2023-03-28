import { useState, useCallback, memo } from "react";

import HeaderView from "./HeaderView";
import ModalHeaderView from "./Modal/ModalHeaderView";


interface Props {
    modalHeaderIsActive: boolean;
}


const HeaderContainer = () => {
    const mes = "hello";
    const[modalHeaderIsActive, setModalHeaderIsActive] = useState<boolean>(true);
    return (
        <div>
        <ModalHeaderView isActive={modalHeaderIsActive} num={8}/>
        <HeaderView/>
        </div>
    
    //   <BubbleView
    //     arraySize={arraySize}
    //     //speed={speed}
    //   />

  );
}

export default memo(HeaderContainer);