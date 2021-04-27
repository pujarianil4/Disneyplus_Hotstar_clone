import React from 'react';
import { Route } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home/Home';
import Movies from './Movies/Movies';

const Routes = () => {
    return (
        <div>
            <Navbar/>

            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/:id">
                <Movies/>
            </Route>
        </div>
    );
};

export default Routes;