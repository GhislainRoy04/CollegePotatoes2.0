'use strict';

import React from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {MainView} from "../../main/components";

//TODO: Add the navigation inside path="/" ex : <Switch> <Route path="/category" render={...} /> <Route path="/profile" render={...} /> </Switch>
//TODO: Add redirection to login if a user isn't logged in. For now we can use localStorage until we create a server.

export const App = () =>(
    <HashRouter>
        <Switch>
            <Route path="/" render={()=>
                <MainView>
                    <label>test</label>
                </MainView>
            }/>

            <Route path="/login" />

            <Route path="/logout" />

        </Switch>
    </HashRouter>
);

export default (App);