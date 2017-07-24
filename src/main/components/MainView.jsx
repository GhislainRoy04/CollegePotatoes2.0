'use strict';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./MainView.css"

export const MainView = ({children}) =>(
    <div className={styles["wrapper"]}>

        <Header/>

        <div className={styles["content"]}>

            {children}

        </div>

        <Footer/>

    </div>
);

export default (MainView);