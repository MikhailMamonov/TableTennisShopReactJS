import React  from "react";
import classes from "./NavbarItem.module.css";
import { Link } from 'react-router-dom';

const NavbarItem = (props)=>{

  
    return (<div className={classes.box}>
      <Link to={`${props.match.url}/${props.text}`}>
        <img src={props.src} height="100" width="100" alt=""/>
            <div>{props.text}</div>
            </Link>

          </div>
      )  
  }

export default NavbarItem;
