import React from "react";
import classes from "./Users.module.css";
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pagesCount = props.totalCount / props.pageSize;
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div className={classes.usersPage}>
        <div>Users Page</div>
        {
            pages.map(page => {
                return <span className={props.currentPage === page ? classes.active : ""}
                    onClick={() => props.onChangeCurrentPage({ page })}>{page}</span>
            })
        }

        {props.users.map(u => {
            return <div className={classes.user}>
                <div>{u.name}
                </div>
                <NavLink to={"/profile/" + u.id} activeClassName={classes.active}>
                    <img src={u.photos.small != null ? u.photos.small :
                        "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png"} />
                </NavLink>
                {u.followed ?
                    <button disabled={props.followingInProgress.some(user => user==u.id)} onClick={() => {
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