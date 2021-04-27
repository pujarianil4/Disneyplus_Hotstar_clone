import React from 'react';
import { Route } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Player from '../Components/Player/Player';
import Home from './Home/Home';
import Movies from './Movies/Movies';

const Routes = () => {
    return (
        <div>
            <Navbar/>

            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/:id">
                <Movies/>
            </Route>
            <Route exact path="/:id/watch">
              <Player/>
            </Route>
        </div>
    );
};

export default Routes;