'use strict';
import React from "react";
import styles from "./Header.css";
import {Navigation} from "../../navigation/component/";

export const Header = () =>(
    <div className={styles["wrapper"]}>
        <h3>Peeled Potato</h3>
        <Navigation/>
    </div>
);

export default (Header);