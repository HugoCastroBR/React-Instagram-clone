import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './routes/home/index';


export const Routes = () =>{
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
        </Switch>
    )
}