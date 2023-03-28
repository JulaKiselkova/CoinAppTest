import { useState, useCallback, memo } from "react";
import ModalHeaderView from "./ModalHeaderView";

const ModalHeaderViewContainer = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
  
    return (
        <ModalHeaderView isActive={isActive}/>
  );
}

export default memo(ModalHeaderViewContainer);