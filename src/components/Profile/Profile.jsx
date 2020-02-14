import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import SuperPostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo";
import ProfileContainer from "./ProfileContainer";



const Profile = (props) => {
  debugger;
  return (<div className={classes.main}>
    <ProfileInfo  aboutMe={props.profileInfo.aboutMe} 
    fullName={props.profileInfo.fullName}
       userId={props.profileInfo.userId} 
       status={props.status}
        updateStatus = {props.updateStatus}
        />
        <SuperPostsContainer  />
    </div>
  )

}

export default Profile;
