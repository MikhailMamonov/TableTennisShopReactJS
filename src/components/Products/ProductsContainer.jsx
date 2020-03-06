import React from "react";
import classes from "./ProductsContainer.module.css";
import Navbar from "./Navbar/Navbar";
import {Route } from 'react-router-dom';
import ProductsCategory from "./ProductsCategory/ProductsCategory";





const ProductsContainer = (props) => {
    return (<div>
        <Navbar match = {props.match}/>
        <div className={classes.ProductsContainer}>
         <Route path={`${props.match.path}/:name`} render= {({match}) =>( 
         <div> 
             <ProductsCategory text = {match.params.name}  />
         </div>)}/> 
        </div>
    </div>
    )

}

export default ProductsContainer;
