import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './routes/home/index';





export const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route path="/" component={() => <Home name={"teste"}/>} exact/>
            </Switch>
        </div>
    )
}

