import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../Login/Login';
import SignUp from './../Login/SignUp';
import { MovieGrid } from '../components/movie-grid/MovieGrid';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/login'
                component={Login}
            />
            <Route
                path='/register'
                component={SignUp}
            />
            <Route
                path='/topmovies'
                component={MovieGrid}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
