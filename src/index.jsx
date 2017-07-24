'use strict';

import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import {render} from "react-dom";

render(
    <div>
        <label>Test</label>
    </div>,
    document.querySelector('#root')
);