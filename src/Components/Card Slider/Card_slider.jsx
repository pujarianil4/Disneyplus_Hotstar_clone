import React, { useEffect, useRef, useState } from "react";
import styles from "./Card_Slider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../Card/Card";
import data from "../data.json";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Card_slider() {
    const [arr, setArr] = React.useState(new Array(10).fill({}));
    const [movies,setMovies]=useState(data.movies)
    const customSlider = useRef();
    shuffle(movies)
   const [arrow,setArrow]=useState({display:"none"})

  
    const renderArrows = () => {
        return (
          <div >
            <button
             
              
              onClick={() => customSlider.current.slickPrev()}
            >
              <ArrowBackIosIcon />
            </button>
            <button onClick={() => customSlider.current.slickNext()}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        );
      };
  return (
    <div className={styles.card_slider}>
      <div onMouseEnter={()=>setArrow({display:"block"})}
       onMouseLeave={()=>setArrow({display:"none"})} className={styles.back_arrow}>
      <button style={arrow} onClick={() => customSlider.current.slickPrev()} >
             <ArrowBackIosIcon />
           </button>
      </div>
      <Slider
        ref={(slider)=> customSlider.current=slider}
        dots={false}
        slidesToShow={8}
        slidesToScroll={1}
        autoplay={false}
        infinite={false}
        autoplaySpeed={3000}
         arrows={false}
      >
        {
           movies.map((item)=>
         
              <Card {...item} />
          
           ) 
        }
      </Slider>
      <div className={styles.next_arrow}>
      <button onClick={() => customSlider.current.slickNext()}>
              <ArrowForwardIosIcon />
            </button>
      </div>
    </div>
  );
}
