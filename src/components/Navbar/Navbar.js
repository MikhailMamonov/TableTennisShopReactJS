import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from 'react-router-dom'
import FriendsBlock from './FriendsBlock/FriendsBlock'

const Navbar = (props) => {
        return ( < div className = { classes.navbar } >
            <
            div className = { classes.item } >
            <
            NavLink to = "/ProductsContainer"
            activeClassName = { classes.active } > Товары < /NavLink> <
            /div> <
            div className = { classes.item } >
            <
            NavLink to = "/services"
            activeClassName = { classes.active } > Услуги < /NavLink> <
            /div> <
            div className = { classes.item } >
            <
            NavLink to = "/coachs"
            activeClassName = { classes.active } > Тренера < /NavLink> <
            /div> <
            div className = { classes.item } >
            <
            NavLink to = "/sportmen"
            activeClassName = { classes.active } > Наши спортсмены < /NavLink> <
            /div> <
            div className = { classes.item } >
            <
            NavLink to = "/contacts"
            activeClassName = { classes.active } > Контакты < /NavLink> <
            FriendsBlock / >
            <
            /div> <
            /div>)
        }
        export default Navbar;