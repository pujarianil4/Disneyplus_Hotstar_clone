import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player"
import { useParams } from 'react-router';
import styles from "./Player.module.css";
// import data from "../data.json"
import Card_slider from '../Card Slider/Card_slider';
import {list} from "../../Database/database";
const Player = () => {
 
    const [lists, setList] = useState(list)
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    const {title,card_img,duration,category,above_age,languages,description,video,year}=movie
    const getmovie=()=>{
       let movie= lists.filter((item)=>item.id==id)
        console.log(movie);
        setMovie(movie[0])
    }
   
    useEffect(()=>{
     getmovie()
    },[id])
    return (
        <div>
            <div className={styles.player}>
             
              <ReactPlayer
               controls
               width="100%"
               height="100%"
               
               stopOnUnmount={true}
                url={video}/>
        
              
         
            </div>
            <div className={styles.details}>
             <h2>{title}</h2>
             <p> <span style={{color:"#105DE0"}}>{category}</span>  {duration} . {year} . {above_age} . {languages}</p>
                    <p>{description}</p>

                    <br/>
                 
                    <hr style={{border:"1px solid grey"}}/>
            </div>

            <div className={styles.slider} >
              <h3>More Like This</h3>
          <Card_slider/>
          </div>
         
        </div>
    );
};

export default Player;