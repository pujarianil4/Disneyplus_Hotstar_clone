import React from 'react';
import { useHistory } from 'react-router';
import styles from "./card.module.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Button, makeStyles } from '@material-ui/core';
const Search_card = ({setShow,...item}) => {
    const {id,title,card_img,duration,category,above_age,languages,description,year}=item
 const history= useHistory()
   const redirects=()=>{
       setShow(false)
        history.push(`/${id}`)
   }

    return (
        <div onClick={redirects} className={styles.card}>
              <div className={styles.img}>
                 <img src={card_img} alt=""/>
             </div>
             <div className={styles.details}>
             <h3>{title}</h3>
             <p>{duration}{year}.{category}.{languages}</p>
             <div> <button> + ADD TO WATCHLIST</button>
               <Button startIcon={<PlayArrowIcon/>}>WATCH NOW</Button> </div> 
             </div>
           
        </div>
    );
};

export default Search_card;