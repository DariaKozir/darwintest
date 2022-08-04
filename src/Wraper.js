import Header from "./components/Header";
import {AppRoutes} from "./routes";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import {HashRouter as Router} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const Wraper = () => {
    const {
        reducer: {isBurgerActive,}
    } = useSelector((state) => state)

    return(
        <Router>
            {!isBurgerActive && <Header/>}
            {!isBurgerActive && <AppRoutes/>}
            {!isBurgerActive && <Footer/>}
            {isBurgerActive && <BurgerMenu/>}
        </Router>
    )
}

export default Wraper;