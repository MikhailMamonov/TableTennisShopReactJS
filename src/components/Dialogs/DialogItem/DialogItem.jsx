import React from "react";
import classes from "./DialogItem.module.css";
import { NavLink } from 'react-router-dom'

const DialogItem = (props)=>{

    const path = "/dialogs/" + props.id;;
    return (<div className={classes.dialog}>
        <div>
            <img src={props.image} alt="" />
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
        <div>
            {props.date}
        </div>
    </div>
    )
}

export default DialogItem;
