import React from "react";
import classes from "./Users.module.css";
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pagesCount = 2;
    let currentPage = 1;
    let users =   [
        {id : 1, name : "Mikki", followed : true, image : "https://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg"},
        {id : 2, name : "Nikki", followed: true, image : "https://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg"},
        {id : 3, name : "Pikki", followed : true, image : "https://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg"},];

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div className={classes.usersPage}>
        <div>Users Page</div>
        {
            pages.map(page => {
                return <span className={currentPage === page ? classes.active : ""}
                    onClick={() => props.onChangeCurrentPage({ page })}>{page}</span>
            })
        }

        {users.map(u => {
            return <div className={classes.user}>
                <div>{u.name}</div>
                <NavLink to={"/profile/" + u.id} activeClassName={classes.active}>
                    <img src = "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png" alt=""/>>
                </NavLink>
                {u.followed ?
                    <button disabled={false} onClick={() => {
                        props.onClickUnfollow(u.id)    
                    }}> Unfollow </button> :
                    <button disabled={props.followingInProgress.some(user => user===u.id)} onClick={() => {
                        props.onClickFollow(u.id)
                        }
                        }> Follow </button>}
            </div>
        })};
    </div>
    )
}

export default Users;