'use strict';
import React from "react";
import styles from "./SubNavigation.css"

//TODO: CSS needs to be added. Different color from the header.
//TODO: Show some category inside the sub navigation. Most popular? Category selected from preference?

// Should the sub navigation be overflow-x:scroll? could have more category than width of the screen
// Arrows or scrollable?

export const SubNavigation = () =>(
    <div className={styles["container"]}>
        <div>
            <label>Sub navigation. Will remain the same throughout the app</label>
        </div>
    </div>
);

export default (SubNavigation);