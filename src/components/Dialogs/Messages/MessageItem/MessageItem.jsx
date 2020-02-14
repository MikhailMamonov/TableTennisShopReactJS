import React  from "react";
import classes from "./MessageItem.module.css";

const MessageItem = (props)=>{

    return (<div className={classes.main}>
      <div>   
         {props.name}
      </div>
      <div>
          {props.message}
      </div>
    </div>
      )  
  }

export default MessageItem;
