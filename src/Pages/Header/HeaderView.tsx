import { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";


type HeaderProps = {
    modalHeaderIsActive: boolean;
    buttonHendler: any //c ts не работала основательно, использовать any очень сомнительно, поэтому подумаю, какой тип тут лкчше использовать
};


const HeaderView = (props: HeaderProps) => {
    return (
        <div className={styles.box}>
            <div>3 the mist popular points</div>
            <div>134,32 USD +2,38 (1,80 %)</div>
            <div>
                <button onClick={props.buttonHendler}>Briefcase</button>
            </div>

        </div>
  );
  
}
HeaderView.propTypes = {
  modalHeaderIsActive: PropTypes.bool,
  buttonHendler: PropTypes.any
};

export default memo(HeaderView);