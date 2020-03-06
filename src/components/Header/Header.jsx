import React from "react";
import classes from "./Header.module.css";
import { NavLink } from 'react-router-dom'


const Header = (props) => {
  return (
    <header className={classes.head}>
    <h1>Клуб настольного тенниса "Dream team"</h1>
      <div className={classes.loginBlock}>
      {props.authData.isAuth ?
        <div><div>{props.authData.profile.login}</div><div>{props.authData.profile.email}</div></div> : <NavLink to={"/login/"} activeClassName={classes.active}>Login</NavLink >}
      </div>
      </header>
  )

}


export default Header;
