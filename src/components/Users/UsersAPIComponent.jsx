import React from "react";
import Users from "./Users";
class UsersAPIComponent extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.pageSize, 1)
    }


    onChangeCurrentPage = (e) => {
        this.props.getUsers(this.props.pageSize, e.page)
        }

    onClickFollow=(userId)=>{
        this.props.acceptFollow(userId)
        /* this.props.toggleFollowingInProgress(true, userId)
        debugger;
        UsersAPI.follow("POST",userId)
                        .then(response => {
                            if (response.resultCode === 0)
                                this.props.follow(userId)
                            this.props.toggleFollowingInProgress(false, userId)

                        }); */
         
    }

    onClickUnfollow=(userId)=>{
        this.props.acceptUnfollow(userId)
        /* this.props.toggleFollowingInProgress(true, userId)
        debugger;
        UsersAPI.follow("DELETE",userId)
                        .then(response => {
                                if (response.resultCode === 0)
                                this.props.unfollow(userId)
                            this.props.toggleFollowingInProgress(false, userId)
                        }); */
         
    }


    render() {
        return (<div>
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
             currentPage={this.props.currentPage} users={this.props.users}
            onChangeCurrentPage={this.onChangeCurrentPage} onClickFollow={this.onClickFollow}
            onClickUnfollow={this.onClickUnfollow} followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
        </div>)
    }
}

export default UsersAPIComponent;