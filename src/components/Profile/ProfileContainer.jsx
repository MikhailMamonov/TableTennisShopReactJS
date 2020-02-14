import React from "react";
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1404;
        }
        debugger;
        this.props.getProfileInfo(userId);
        this.props.getStatus(userId);
    }


    render() {
            return (<div>
                <Profile profileInfo={this.props.profileInfo} status = {this.props.status}
                updateStatus = {this.props.updateStatus}
                 />
            </div>)
    }
}

export default ProfileContainer;
