import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Recipe from './Recipe'
import App from '../App'

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:id" component={Recipe}/>
        </Switch>
    </BrowserRouter>
)

export default Router;

