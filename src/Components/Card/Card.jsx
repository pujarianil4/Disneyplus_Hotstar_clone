import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styles from "./Card.module.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useHistory } from 'react-router';


const Card = (item) => {

  const {id,title,card_img,duration,category,above_age,languages,description}=item
 
 const [style,setStyle]=useState({display:"none"})
 const [img,setImg]=useState({backgroundImage:`url${card_img}`})
 const history=useHistory()
 const redirects=()=>{
 history.push(`/${id}`)
 }

    return (
      <div onClick={redirects} className={styles.maindiv}>
        <div style={img} className={styles.card} 
         onMouseEnter={()=>setStyle({display:"block"})}
         onMouseLeave={()=>setStyle({display:"none"})}>
           <img src={card_img} alt="card_img"/>
          <div style={style}>
          <div className={styles.details}>
          <h4>{title}</h4>
          <h5>{duration},{category}</h5>
          <h5>{languages}</h5>
          <p>{description}</p>
          </div>
          
          <div className={styles.btn}>
            <div className={styles.play}>
                <PlayArrowIcon/> <h5>WATCH MOVIE</h5>
            </div>
            <div className={styles.play}>
                   <h3>+</h3> <h5>ADD TO WATCHLIST</h5>
            </div>
          </div>
          </div>
        </div>
        </div>
    );
};

export default Card;