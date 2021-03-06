import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card_slider from '../../Components/Card Slider/Card_slider';
import data from "../../Components/data.json"
import Moviecard from '../../Components/Movie_Card/Moviecard';
import Player from '../../Components/Player/Player';
import styles from "./Movies.module.css"
import Footer from "../../Components/Footer/Footer"
const Movies = () => {
    const [list, setList] = useState(data.movies)
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    
    const getmovie=()=>{
       let movie= list.filter((item)=>item.id==id)
        console.log(movie);
        setMovie(movie[0])
    }
    // const {title,card_img,duration,category,above_age,languages,description}=movie
    useEffect(()=>{
     getmovie()
     window.scrollTo(0,0)
    },[id])

    return (
        <div>
         <Moviecard {...movie}/>

         <div className={styles.slider} >
              <h3>More Like This</h3>
          <Card_slider/>
          </div>
        <Footer/>
        </div>
    );
};

export default Movies;