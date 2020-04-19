import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../views/Landing';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Register from '../views/Register';
import About from '../views/About'
import Recipes from '../views/Recipes'

const Nav = () => {

    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path = '/dashboard' component={Dashboard}/>
            <Route path = '/login' component={Login}/>
            <Route path = '/register' component={Register}/>
            <Route path = '/about' component={About}/>
            <Route path = '/recipes' component={Recipes}/>
        </Switch>
    )
}

export default Nav;