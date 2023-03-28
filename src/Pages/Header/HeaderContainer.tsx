import { useState, useCallback, memo } from "react";

import HeaderView from "./HeaderView";
import ModalHeaderView from "./Modal/ModalHeaderView";


interface Props {
    modalHeaderIsActive: boolean;
}


const HeaderContainer = () => {
    const[modalHeaderIsActive, setModalHeaderIsActive] = useState<boolean>(false);
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("click")
        setModalHeaderIsActive(!modalHeaderIsActive);
        console.log(modalHeaderIsActive);
    };
    return (
        <div>
        <ModalHeaderView isActive={modalHeaderIsActive}/>
        <HeaderView modalHeaderIsActive={modalHeaderIsActive} buttonHendler={buttonHandler}/>
        </div>
  );
}

export default memo(HeaderContainer);