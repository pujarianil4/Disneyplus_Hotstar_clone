import React, { useEffect, useRef, useState } from 'react';
import styles from "./Slider.module.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import classes from './Slider.module.css';



const Slider = () => {
    const images=["/Image1.png","/Image2.png","/Image3.png","/Image4.png","/Image5.png"]
    const [current,setCurrent]=useState(0)
   const [style,setStyle]=useState({display:"none"})
   const timer= useRef()
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
         const start=()=>{
             timer.current=setInterval(() => {
                        
                    setCurrent((prev)=>setCurrent(prev+1))
               
               
             }, 3000);
             
         }
         useEffect(()=>{
             
            start()
          
         return()=>{
                clearInterval(timer.current)
            }

         },[])
    return (
        <div className={styles.slider}>
                {current>images.length-1&& setCurrent(0)}
               
            <div className={styles.left_img}>
            <img src={current==0?images[images.length-1]:images[current-1]} alt="slider"/>
            </div>
            <div  className={styles.back_arrow} 
            onMouseEnter={()=>setStyle({display:"block"})} 
            onMouseLeave={()=>setStyle({display:"none"})}>
               <button onClick={sliderPrev} style={style}><ArrowBackIosIcon fontSize="large"/></button> 
            </div>
          <div className={styles.img}> 

          <img src={images[current]} alt="slider"/>

          </div> 
          <div className={styles.forward_arrow}
             onMouseEnter={()=>setStyle({display:"block"})} 
             onMouseLeave={()=>setStyle({display:"none"})}>
             <button onClick={sliderNext} style={style}> <ArrowForwardIosIcon fontSize="large"/></button>
          </div>
          <div className={styles.right_img}>
          <img src={current==images.length-1?images[0]:images[current+1]} alt="slider"/>
          </div>
        </div>
    );
};

export default Slider;