import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from 'react-router-dom'
import FriendsBlock from './FriendsBlock/FriendsBlock'

const Navbar = (props) => {
        return ( < div className = { classes.navbar } >
            <div className = { classes.item } >
            <NavLink to = "/products" activeClassName = { classes.active } > <p>Товары</p> 
             </NavLink> 
             </div> 
             <div className = { classes.item } >
            <NavLink to = "/ratings" ativeClassName = { classes.active } > <p>Рейтинг инвентаря</p> </NavLink> 
            </div> 
            <div className = { classes.item } >
            <NavLink to = "/coachs"    activeClassName = { classes.active } > <p>Тренера</p> </NavLink> 
            </div> 
            <div className = { classes.item } >
            <NavLink to = "/sportmen" activeClassName = { classes.active } ><p>Наши спортсмены</p>  </NavLink> 
            </div> 
            <div className = { classes.item } >
            <NavLink to = "/contacts" activeClassName = { classes.active } > <p>Контакты</p> </NavLink> 
            <FriendsBlock />
            </div> 
            </div>)
        }
        export default Navbar;