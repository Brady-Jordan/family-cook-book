import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../views/Landing';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Register from '../views/Register';

const Nav = () => {

    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
        </Switch>
    )
}

export default Nav;