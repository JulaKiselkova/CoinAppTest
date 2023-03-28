//import { Message } from "@mui/icons-material";
 import { useState, useCallback, memo } from "react";
 import PropTypes from "prop-types";
 import styles from "./styles.module.scss";



type ModalHeaderProps = {
    isActive: boolean;
    num: number;
    //setActive: void
};


 const ModalHeaderView = (props: ModalHeaderProps) => {
    return (
        <div className={styles.box}>
            Modal
            {props.num}
            <p>{props.isActive}</p>
        </div>
  );
  
}
ModalHeaderView.propTypes = {
  isActive: PropTypes.bool.isRequired,
  num: PropTypes.number.isRequired
};

export default memo(ModalHeaderView);