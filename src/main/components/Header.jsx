'use strict';
import React from "react";
import styles from "./Header.css";
import {Navigation,SubNavigation} from "../../navigation/component/";

export const Header = () =>(
    <div className={styles["wrapper"]}>
        <div className={styles["topContainer"]}>
            <h3>College Potatoes</h3>
            <Navigation/>
        </div>
        <div>
            <SubNavigation/>
        </div>
    </div>
);

export default (Header);