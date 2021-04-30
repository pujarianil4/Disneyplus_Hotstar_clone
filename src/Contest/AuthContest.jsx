import React, { createContext, useEffect, useReducer } from "react"
import firebase from "../Auth/firebase"
import { getlocal, setlocal } from "../Auth/localhost"


const data= getlocal("user")
const init={
    user:data|| [],
    // isAuth:true,
     isAuth:data.verified|| false,
    loading:false
}

const authReducer=(state,action)=>{
switch (action.type) {
    case "GET_USER":{
        // setlocal("user",action.data)
       return{
           ...state,
           user:action.data,
           isAuth:true,
           loading:false
       }
    }
    case "USER_OUT":{
        return {
            ...state,
            isAuth:false,
            loading:false
        }
    }
    case "USER_REQ":{
        return {
            ...state,
            loading:true
        }
    }

        
        

    default:
        return state
}
}

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
  const [state,dispatch]=useReducer(authReducer,init)
 const value= {state,dispatch}
//  const componentDidMount=()=>{
//         firebase.auth().onAuthStateChanged(function(user){
//             if(user){
//                 console.log("userlog in");
//                 const userdata={
//                   name:user.displayName,
//                   email:user.email,
//                   avatar:user.photoURL,
//                   verified: user.emailVerified
//                 }

//              dispatch({type:"GET_USER",data:userdata})
              
//             }else{
//                 console.log("not login");
               
//             }
//         })
//     }



 return <AuthContext.Provider value={value}>   {children}</AuthContext.Provider>
} 
