import React from "react";
import classes from "./ProductsList.module.css";
import Navbar from "./../Navbar/Navbar";
import ProductItem from "../ProductItem/ProductItem"


class ProductsList extends React.Component {

  constructor(props) {
    super(props)
}




    render(){
      this.productsFiltered = this.props.products
    .filter(
      ({ category }) =>
        this.props.displayCategory === category || this.props.displayCategory === 0    )
    .map((item) => 
    { return <ProductItem id ={item.id} label = {item.label} image = {item.image}/>;}
    )
      debugger;
    return (<div>
        <Navbar setCategory = {this.props.setCategory}></Navbar>
        <div className = {classes.content}>
    <div className={classes.header}><h1>{this.props.categoryText}</h1></div>
    <div className={classes.main}>
        <ul>
            {this.productsFiltered}
        </ul> 
        </div>
    <div className={classes.navigation}>
      <ul>
        <li> <a >stiga</a> </li>
    <li><a >butterfly</a></li>
        <li><a>Donic</a></li>
        <li><a>stiga</a></li>
        <li><a>stiga</a></li>
        <li><a>stiga</a></li>
      </ul>
    </div>
    </div>
    </div>        
    )
    }
}

export default ProductsList;