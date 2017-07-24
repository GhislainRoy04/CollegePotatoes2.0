'use strict';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const MainView = ({children}) =>(
    <div>

        <Header/>

        <div>
            {children}
        </div>

        <Footer/>

    </div>
);

export default (MainView);