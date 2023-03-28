//import { Message } from "@mui/icons-material";
 import { useState, useCallback, memo } from "react";
 import PropTypes from "prop-types";
 import styles from "./styles.module.scss";
 import Button from '@mui/material/Button';
 import DeleteIcon from '@mui/icons-material/Delete';



type ModalHeaderProps = {
    isActive: boolean;
};

 const ModalHeaderView = (props: ModalHeaderProps) => {
    return (
        <div className={props.isActive ? styles.box : styles.box_hidden}>
            <div className={styles.list}>
                <h5>Stock portfolio list</h5>
                <div className={styles.item}>
                    <p className={styles.name}>Item1</p>
                    <Button className={styles.deleteBtn} variant="contained" size="small" startIcon={<DeleteIcon />}>Delete</Button>
                </div>
                <div className={styles.item}>
                    <p>Item2</p>
                    <Button variant="contained" size="small" startIcon={<DeleteIcon />}>Delete</Button>
                </div>
            </div>
            <p>{props.isActive}</p>
        </div>
  );
  
}
ModalHeaderView.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default memo(ModalHeaderView);