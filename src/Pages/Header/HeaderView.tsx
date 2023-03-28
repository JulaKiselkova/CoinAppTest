//import { Message } from "@mui/icons-material";
import { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
// import ModalHeaderContainer from "./Modal/ModalHeaderContainer";
//import styles from ".Header/"


type HeaderProps = {
    // modalHeaderIsActive: boolean;
};


const HeaderView = (props: HeaderProps) => {
    return (
        <div className={styles.box}>
            {/* <ModalHeaderContainer/> */}
            <div>3 the mist popular points</div>
            <div>134,32 USD +2,38 (1,80 %)</div>
            <div>
                <button>Briefcase</button>
            </div>

        </div>
  );
  
}
HeaderView.propTypes = {
  //modalHeaderIsActive: PropTypes.bool.isRequired
};

export default memo(HeaderView);