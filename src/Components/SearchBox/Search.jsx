import React, { useEffect, useState } from 'react';
import data from "../data.json";
import styles from "./Search.module.css"
import Search_card from './Search_card';
const Search = ({input}) => {
const [movies,setMovies]=useState(data.movies)
const [get,setGet]=useState([])
//console.log(input?input:false);
const [show,setShow]=useState(false)
const getMovie=()=>{
    // let data= movies.filter((item)=>{
    //     item.title.split("")
    //     console.log(item.title.split(""));
    // }
    setShow(true)
   
    let arr=[]
   
   
    let length
    let index=0
    if(input.length>0){
    
     
     for(let i=0;i<movies.length;i++){
       console.log(arr);
        length=0
        for(let j=0;j<input.length;j++){
            console.log(input[j],movies[i].title[j]);
           if(input[j]===movies[i].title[j]){
              length++
              console.log(input[j],movies[i].title[j]);
           }else{
               break
           }
        }
        if(length===input.length){
            arr.push(movies[i])
           
        }
      
     }   
    }
    console.log(arr);
    setGet(arr)
}
useEffect(()=>{
 input.length>0&&getMovie()
 input.length===0&&setShow(false)
},[input])
    return (
       <>{
         show&& <div className={styles.search}>
              {
                  get.map((item)=> <Search_card key={item.id} {...item} setShow={setShow} />)
              }
        </div>
}
       </>     
    )
};

export default Search;