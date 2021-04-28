import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Tab from '../Tab/Tab';
import firebase from "../../Auth/firebase"
import { AuthContext } from '../../Contest/AuthContest';
const usestyle=makeStyles({
    icon:{
        color:"#A1A3A9"
    },
    search:{
    color:"grey",
    fontSize:"18px",
    position:"relative",
    right:"20px"
    },
    upgrade:{
        color:"#1F80E0",
        border:"1px solid #1F80E0",
        height:"25px",
        borderRadius:"5px",
        marginTop:"10px"
    }
})
const Navbar = () => {
    const classes= usestyle()
   const [dis,setdis]=useState({display:"none"})
   const { state,dispatch}=useContext(AuthContext)
   console.log(state.user);
   const signout=()=>{
    firebase.auth().signOut().then(() => {
        console.log("log out");
        dispatch({type:"USER_OUT"})
      }).catch((error) => {
        // An error happened.
      });
}
    return (
        <div className={styles.navbar}>
            <div className={styles.menuicon}>
                <MenuIcon className={classes.icon}/>
            </div>
            <Link to="/">
            <div  className={styles.logo}>
           <img src="/logo.svg" alt=""/>
            </div></Link>
          
           <div className={styles.navlink_container}>
           <NavLink className={styles.navlink} to="">TV</NavLink>
           <NavLink className={styles.navlink} to="">Movies</NavLink>
           <NavLink className={styles.navlink} to="">Sports</NavLink>
           <NavLink className={styles.navlink} to="">News</NavLink>
           <NavLink className={styles.navlink} to="">Premium</NavLink>
           <NavLink className={styles.navlink} to="">Disney+</NavLink>
          
            <span>New</span>
            
           </div>
           <div className={styles.kids}><Link><img src="/kids.png" alt=""/></Link></div>
            <div className={styles.search}>
                <input type="text" placeholder="Search"/>
                <SearchIcon className={classes.search}/>
            </div>
            <div>
             <Button variant="outlined" className={classes.upgrade}>UPGRADE</Button>
            </div>
            <div 
            onMouseEnter={()=>setdis({display:"block"})}
            
            className={styles.avatar}>
                <Avatar src={state.user.avatar} />
            </div>


           <div  onMouseLeave={()=>setdis({display:"none"})} style={dis}>
           <Tab signout={signout}/>
           </div>
           
        </div>
    );
};

export default Navbar;