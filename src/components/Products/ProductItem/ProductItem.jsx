import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props)=>{
    return (<li className={classes.Product}>
        <div>
            <img src={props.image} alt="" />
        </div>
        <div>
            {props.label}
        </div>
    </li>
    )
}

export default ProductItem;
