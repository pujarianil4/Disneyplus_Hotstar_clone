import React, { useContext, useEffect } from "react"
import { Redirect, Route, useHistory } from "react-router"
import { AuthContext } from "../Contest/AuthContest"


export const PrivateRoute=({
    children,
    exact=false,
    push=false,
    path,
    redirectpath="/login"
})=>{
const {state,dispatch} =useContext(AuthContext)

const history=useHistory()

    return state.isAuth?(
      <Route exact={exact} path={path}>{children}</Route>
     
    ):
    <Redirect to={redirectpath} push={push}/>
}