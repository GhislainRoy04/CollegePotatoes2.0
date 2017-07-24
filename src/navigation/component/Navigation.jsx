'use strict';
import React from "react";
import SubNavigation from "./SubNavigation";
import styles from "./Navigation.css";

//TODO: CSS needs to be added.
//TODO: Decide what navigation options is needed except from category, profile and logout.

export const Navigation = () => (
    <div>
        <div className={styles["navigationContainer"]}>
            <label>Main navigation</label>
        </div>
            <SubNavigation/>
    </div>
);

export default (Navigation);