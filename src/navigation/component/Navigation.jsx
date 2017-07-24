'use strict';
import React from "react";
import SubNavigation from "./SubNavigation";

//TODO: CSS needs to be added.
//TODO: Decide what navigation options is needed except from category, profile and logout.

export const Navigation = () => (
    <div>
        <label>Main navigation</label>
        <SubNavigation/>
    </div>
);

export default (Navigation);