'use strict';

import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import {render} from "react-dom";
import {App} from "./app/components";

render(
        <App/>,
    document.querySelector('#root')
);