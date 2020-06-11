import React  from "react";
import classes from "./ButtonCategory.module.css";

const ButtonCategory = (props)=>{
    return (<div className = {classes.image__box} onClick={() => props.setCategory(props.id, props.text)}
                key={props.id} >
                  <img src={props.src} alt="" />
                  <div className= {classes.label}>{props.text}</div>
              </div>
      )  
  }

export default ButtonCategory;
