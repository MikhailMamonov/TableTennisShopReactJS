import React from "react";
import classes from "./Navbar.module.css";


import ButtonCategory from "./ButtonCategory/ButtonCategory";

const Navbar = (props) =>  {
        
        const navItems = props.categories.map(link => (
            <li  className = {classes.nli}>
            <ButtonCategory id = {link.id} src = {link.src} text = {link.text} setCategory = {props.setCategory}></ButtonCategory> 
            </li>
  ));
    return  <div className= {classes.nav__wrapper}>
        <ul className={classes.nul}>
                {navItems}
            </ul>
    </div>
        
}

// export default withStyles(styles)(Navbar);
export default Navbar;