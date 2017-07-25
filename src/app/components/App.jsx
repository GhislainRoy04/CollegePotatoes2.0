'use strict';

import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {MainView} from "../../main/components";
import {Profile} from "../../profile/components";
import {Category} from "../../category/component";

//TODO: Add the navigation inside path="/" ex : <Switch> <Route path="/category" render={...} /> <Route path="/profile" render={...} /> </Switch>
//TODO: Add redirection to login if a user isn't logged in. For now we can use localStorage until we create a server.

export const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/" render={() =>
                <MainView>
                    <Switch>
                        <Route path="/home"/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/category" component={Category}/>
                    </Switch>
                </MainView>
            }/>

            <Route path="/login"/>

            <Route path="/logout"/>

        </Switch>
    </HashRouter>
);

export default (App);