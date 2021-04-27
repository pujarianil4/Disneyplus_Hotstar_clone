import React from 'react';
import styles from "./Moviecard.module.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Button, colors, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';

const useStyle= makeStyles({
    watch:{
        fontSize:"20px",
        color:"#BBBDC1",
        margin:"10px",
        border:"1px solid #BBBDC1"
    },
    large:{
        fontSize:"100px"
    }
})
const Moviecard = ({...movie}) => {
    const classes=useStyle()
    const {title,card_img,duration,category,above_age,languages,description,year}=movie
    return (
        <div className={styles.maindiv}>
            <div className={styles.card}>
                <div className={styles.test}></div>
             <div className={styles.details}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <p>{duration} . {year} . {category} . {above_age} . {languages}</p>
                    <p>{description}</p>
                </div>
                <div className={styles.btn}>
                 <Button variant="outlined" className={classes.watch} size="large" startIcon={<PlayArrowIcon />} >Watch Now </Button>
                 <Button variant="outlined" className={classes.watch} size="large" startIcon={<AddIcon />} > Watchlist </Button>
                 <Button variant="outlined" className={classes.watch} size="large" startIcon={<ShareIcon />} >Share  </Button>
                </div>
             </div>
             <div className={styles.img} >
               <img src={card_img} alt="img"/>
             </div>
            </div>

            <p>Available in: {languages} </p>
            <hr style={{borderTop:"1px solid #BBBDC1"}}/>
        </div>
    );
};

export default Moviecard;