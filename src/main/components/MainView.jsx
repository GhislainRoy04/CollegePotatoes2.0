'use strict';
import React from "react";

export const MainView = ({children}) =>(
    <div>
        {/*  HEADER  */}
        <div>
            {children}
        </div>
        {/*  FOOTER  */}
    </div>
);

export default (MainView);