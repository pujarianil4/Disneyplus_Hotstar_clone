import React from 'react';
import Slider from '../../Components/Carasoul/Slider';
import Card from '../../Components/Card/Card';
import data from "../../Components/data.json"
import Card_slider from "../../Components/Card Slider/Card_slider"
import styles from "./Home.module.css"
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div style={{height:"150vh"}} className={styles.home_div}>
         <div >
         <Slider/>
         </div>
         
         <div className={styles.card}>
              <h3>Top Picks For You</h3>
          <Card_slider/>
          </div>
          <div className={styles.card}>
              <h3>Popular Movies</h3>
          <Card_slider/>
          </div>
          <div className={styles.card}>
              <h3>Multiplex Movies</h3>
          <Card_slider/>
          </div>
          <div className={styles.divider}>

          </div>
        
<Footer/>

        </div>
    );
};

export default Home;