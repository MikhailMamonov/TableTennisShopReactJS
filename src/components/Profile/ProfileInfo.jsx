import React from "react";
import classes from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {


    debugger;
    return (
        <div className={classes.main}>
            <img src='https://www.aussiespecialist.com/content/asp/en/sales-resources/image-and-video-galleries/_jcr_content/mainParsys/hero/image.adapt.1663.medium.jpg' />
            <p>Рад приветствовать вас на своем сайте.</p>

            <img src={props.photo} alt="" />
            <ProfileStatus newStatusText={props.status}
                updateStatus = {props.updateStatus} />
            <div className={classes.aboutMe}>
                {props.aboutMe}
            </div>
            <div>
                {props.fullName}
            </div>
            <div>
                {props.userId}
            </div>
        </div>)
}

export default ProfileInfo;