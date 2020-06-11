import React from "react";
import classes from "./Header.module.css";



const Header = (props) => {

  return (
<div className={classes.header__container}>
     <h2 className = {classes.head}>
           Клуб настольного тенниса "Dream team"
     </h2>
     </div>
      /* <div className={classes.loginBlock}>
      {props.authData.isAuth ?
        <div><div>{props.authData.profile.login}</div><div>{props.authData.profile.email}</div></div> : <NavLink to={"/login/"} activeClassName={classes.active}>Login</NavLink >}
      </div> */
  )

}


export default Header;
