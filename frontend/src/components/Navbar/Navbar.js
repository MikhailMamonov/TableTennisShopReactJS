import React from "react";
import classes from "./Navbar.module.css";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import {NavLink} from "react-router-dom"


const Navbar = (props) => {
  return (
      <ul className= {classes.sidebar__nav}>
                <li >
                <NavLink to="/products">
                      <p>Товары</p>
                </NavLink>
                </li>
                <li >
                <NavLink to="/ratings" >
    <p>Рейтинг инвентаря</p>{" "}
  </NavLink>
                </li>
                <li >
                <NavLink to="/coachs" >
    Тренера
  </NavLink>
                </li>
                <li >
                <NavLink to="/sportmen" >
    <p>Наши спортсмены</p>{" "}
  </NavLink>
                </li>
                <li >
                <NavLink to="/contacts" activeClassName={classes.active}>
    <p>Контакты</p>
  </NavLink>
                </li>
                <li>
                <FriendsBlock />
                </li>
        </ul>

 
      //   className={drawerClasses.drawer}
      //   variant="permanent"
      //   classes={{
      //     paper: drawerClasses.drawerPaper,
      //   }}
      //   anchor="left"
      // >
      //   <div className={drawerClasses.toolbar} />
      //   <Divider />
      //   <List>
      //     {["Товары", "Рейтинг инвентаря", "Тренера", "Наши спортсмены"].map((text, index) => (
      //       <ListItem button key={text} component={NavLink} to="/products">
      //         <ListItemIcon>
      //           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      //         </ListItemIcon>
      //         <ListItemText primary={text} />
      //       </ListItem>
      //     ))}
      //   </List>
      //   <Divider />
      //   <List>
      //     {["Контакты", "Trash", "Spam"].map((text, index) => (
      //       <ListItem button key={text}>
      //         <ListItemIcon>
      //           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      //         </ListItemIcon>
      //         <ListItemText primary={text} />
      //       </ListItem>
      //     ))}
      //   </List>
      // </Drawer>
      /* <div className={classes.item}>
        <NavLink to="/products" activeClassName={classes.active}>
          {" "}
          <p>Товары</p>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/ratings" ativeClassName={classes.active}>
          {" "}
          <p>Рейтинг инвентаря</p>{" "}
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/coachs" activeClassName={classes.active}>
          {" "}
          <p>Тренера</p>{" "}
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/sportmen" activeClassName={classes.active}>
          <p>Наши спортсмены</p>{" "}
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/contacts" activeClassName={classes.active}>
          {" "}
          <p>Контакты</p>{" "}
        </NavLink>
        <FriendsBlock />
      </div> */
  );
};
export default Navbar;
