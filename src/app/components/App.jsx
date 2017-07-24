'use strict';

import React from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {MainView} from "../../main/components";

export const App = () =>(
    <HashRouter>
        <Switch>
            <Route path="/" render={()=>
                <MainView>
                    <label>test</label>
                </MainView>
            }/>
        </Switch>
    </HashRouter>
);

export default (App);