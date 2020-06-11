import React, { PropTypes } from "react";
import classes from "./Post.module.css";

const Post = (props) => {

  return (
    <div>
      <div className={classes.item}>
        <img src={props.ava} ></img>
        {props.name}
      </div>
      <div>
        Likes
      </div> {props.likesCounter}
    </div>
  )
}

export default Post;