import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../Contest/AuthContest';
import firebase from "./firebase"
import { setlocal } from './localhost';
import styles from "./Login.module.css"
const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const {state,dispatch}=useContext(AuthContext)
    const [show,setShow]=useState(false)

    const googleauth=()=>{
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    //console.log(user);
    dispatch({type:"USER_REQ"})
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }

 const componentDidMount=()=>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log("userlog in");
                const userdata={
                  name:user.displayName,
                  email:user.email,
                  avatar:user.photoURL,
                  verified: user.emailVerified
                }

             dispatch({type:"GET_USER",data:userdata})
              setShow(true)
              setlocal("user",userdata)
            }else{
                console.log("not login");
                setShow(true)
            }
        })
    }
  useEffect(()=>{
   componentDidMount()
  },[])
const signout=()=>{
    firebase.auth().signOut().then(() => {
        console.log("log out");
      }).catch((error) => {
        // An error happened.
      });
}

console.log(state);
if(state.isAuth){
  return <Redirect to="/" />
}
  
    return (
      <>
    { <div className={styles.login}>
          <div className={styles.bg_img}>
          <img src="/login-background.jpg" alt=""/>
          </div>
           

         <div className={styles.login_btn}>
           <img src="/list.svg" alt=""/>
         <button onClick={googleauth}>SignIn with Google</button>
            
         </div>
         
        </div> 
}
     </>   
    );
};

export default Login;