import { useState, useCallback, memo } from "react";
import ModalHeaderView from "./ModalHeaderView";


// interface Props {
//     isActive: boolean;
// }


const ModalHeaderViewContainer = () => {
    //const [isActive, setIsActive] = useState<boolean>(true);
    const isActive = true;
    let a = 8;
  
    return (
        <ModalHeaderView isActive={isActive} num={a}/>
  );
}

export default memo(ModalHeaderViewContainer);