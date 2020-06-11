import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props)=>{
    return (<li className = {classes.product}>
        <div className={classes.product__content}>
            <img src={props.image} alt="" />
            {props.label}
        </div>
    </li>
    )
}

export default ProductItem;
