'use strict';
import React from "react";
import styles from "./Navigation.css";
import {Link} from "react-router-dom";

//TODO: CSS needs to be added.
//TODO: Decide what navigation options is needed except from category, profile and logout.

export const Navigation = () => (
    <div className={styles["navigationContainer"]}>
        <Link to="/home">Home</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/category">Category</Link>
    </div>
);

export default (Navigation);