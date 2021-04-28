import React, { createContext, useReducer } from "react"

const init={
    user:[],
    isAuth:false,
    loading:false
}
const authReducer=(state,action)=>{
switch (action.type) {
    case "GET_USER":{
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

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 
