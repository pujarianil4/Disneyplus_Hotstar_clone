import React, { useState } from 'react';
import styles from "./Slider.module.css"
const Slider = () => {
    const images=["/Image1.png","/Image2.png","/Image3.png","/Image4.png"]
    const [current,setCurrent]=useState(3)

    const sliderNext=()=>{
   
        if(current<images.length-1){
      
         setCurrent(current+1)
    
         }else{
           setCurrent(0)
         }
         
        }
        const sliderPrev=()=>{
      
         if(current>0){
       
          setCurrent(current-1)
     
          }else{
            setCurrent(images.length-1)
          }
          
         }
    return (
        <div>
            <img src={images[current]} alt=""/>
        </div>
    );
};

export default Slider;