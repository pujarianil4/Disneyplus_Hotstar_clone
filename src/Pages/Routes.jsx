import React, { useContext } from 'react';
import { Route } from 'react-router';
import Login from '../Auth/Login';
import Navbar from '../Components/Navbar/Navbar';
import Player from '../Components/Player/Player';
import { AuthContext } from '../Contest/AuthContest';
import { PrivateRoute } from '../Private_route/PrivateRoute';
import Home from './Home/Home';
import Movies from './Movies/Movies';

const Routes = () => {
    const{state}=useContext(AuthContext)
    return (
        <div>
        {  <Navbar/>}
       
            <Route exact={true} path="/">
                <Home/>
            </Route>
            <Route exact={true} path="/:id">
                <Movies/>
            </Route>
            <Route exact={true} path="/:id/watch">
              <Player/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </div>
    );
};

export default Routes;