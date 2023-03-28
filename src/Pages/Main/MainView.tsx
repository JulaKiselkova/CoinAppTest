//import { Message } from "@mui/icons-material";
import { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
//import styles from "./styles.module.css"


type MainProps = {
    message: string;
};


const MainView = (props: MainProps) => {
    return (
        <div>
            <button>+</button>
            <div>
                <div><a>item1</a></div>
                <div>item2</div>
                <div>item3</div>
            </div>
        </div>
  );
  
}
MainView.propTypes = {
  message: PropTypes.string,
};

export default memo(MainView);