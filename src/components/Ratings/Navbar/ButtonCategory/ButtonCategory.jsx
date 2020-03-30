import React  from "react";
import classes from "./ButtonCategory.module.css";


const ButtonCategory = (props)=>{
    return (<div className={classes.box}>
      <button   onClick={() => props.setCategory(props.id, props.text)}
                key={props.id}   
                      
    >
      <img src={props.src} height="100" width="100" alt=""/>
            <div>{props.text}</div>
    </button>
          </div>
      )  
  }

export default ButtonCategory;
