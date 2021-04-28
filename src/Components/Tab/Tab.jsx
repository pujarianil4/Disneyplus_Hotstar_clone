import React from 'react';
import styles from "./Tab.module.css"
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const Tab = ({signout}) => {
    return (
        <div className={styles.tab}>
            {/* <div onClick={()=>setDis({display:"none"})}  id={styles.close}><HighlightOffIcon/></div>  */}
            <div>Watchlist</div>
            <div>My Account</div>
            <div onClick={signout}>Log Out</div>
        </div>
    );
};

export default Tab;