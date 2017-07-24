'use strict';
import React from "react";
import Header from "./Header";

export const MainView = ({children}) =>(
    <div>

        <Header/>

        <div>
            {children}
        </div>
        {/*  FOOTER  */}
    </div>
);

export default (MainView);