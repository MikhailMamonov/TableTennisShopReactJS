import React from "react";
import classes from "./FriendsBlock.module.css";
import { NavLink } from 'react-router-dom'


const FriendsBlock = (props) => {
  return (<div className={classes.friendBlock}>
    <div className={classes.item}>
      <NavLink to="" activeClassName={classes.active}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-re-LyNC_V_s7YCIRbvKSldtb49Kad7m6ikPtJ7yqZkL6apEYQ" /></NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="" activeClassName={classes.active}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-re-LyNC_V_s7YCIRbvKSldtb49Kad7m6ikPtJ7yqZkL6apEYQ" /></NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="" activeClassName={classes.active}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-re-LyNC_V_s7YCIRbvKSldtb49Kad7m6ikPtJ7yqZkL6apEYQ" /></NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="" activeClassName={classes.active}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-re-LyNC_V_s7YCIRbvKSldtb49Kad7m6ikPtJ7yqZkL6apEYQ" /></NavLink>
    </div>
  </div>
  )
}
export default FriendsBlock;
