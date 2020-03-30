import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props)=>{
    return (<li className = {classes.productItem}>
        <div className={classes.productContent}>
        <div>
            <img src={props.image} alt="" />
        </div>
        <div>
            {props.label}
        </div>
        </div>
        
    </li>
    )
}

export default ProductItem;
