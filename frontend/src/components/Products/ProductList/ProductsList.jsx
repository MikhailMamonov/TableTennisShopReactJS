import React, { Component } from "react";
import classes from "./ProductsList.module.css";
import { Link } from "react-router-dom";
import Pagination from "./../Pagination/Pagination";

import ProductNavbar from "./../ProductNavbar/Navbar";
import ProductItem from "../ProductItem/ProductItem";
import withHocs from "./ProductListHoc";





class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      totalPages: "",
      pageLimit: "",
      currentPage: "",
      startIndex: "",
      endIndex: ""
    };
  }

  componentDidMount() {
    // this.props.fetchAllProducts();
    this.setState({
      totalRecords: this.props.products.length
    });
  }

   showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result =products.filter(({ category }) => this.props.displayCategory === category || this.props.displayCategory === 0)
      .map((item) =>  <ProductItem id={item.id} label={item.label} image={item.image} />
      );
    }
    return result;
  };

  onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };  



  

  render (){
    debugger;
    var { products } = this.props;
    var {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    var rowsPerPage = [];
    rowsPerPage = products.slice(startIndex, endIndex + 1);
    const navbar = <ProductNavbar categories = {this.props.categories} setCategory={this.props.setCategory}></ProductNavbar>;

    const brands = this.props.brands.map((item) => (
      <li> <Link to={`kjhjkhkjh/${item.id}`}>{item.text}</Link></li>
    ));
    debugger;
    return(
    <div className= {classes.product__wrapper}>
      {navbar}
      <div className={classes.content}>
        <div className={classes.content__header}>{this.props.categoryText}</div>
        <div className={classes.content__navigation}>
          <ul className={classes.topmenu}>{brands}</ul>
        </div>
          <ul className={classes.content__main}>
          {this.showProducts(rowsPerPage)}
            </ul>
      </div>


      <div className={classes.pagination}>
      <p>
                  {products.length} Sản phẩm | Trang {currentPage}/{totalPages}
                </p>
      <Pagination
                  totalRecords={products.length}
                  pageLimit={pageLimit || 12}
                  initialPage={1}
                  pagesToShow={5}
                  onChangePage={this.onChangePage}
                />
      </div>
      {/* <ul className= {classes.pagination}>
        <li><a href="#">«</a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="#">»</a></li>
      </ul> */}
    </div>);
  }
}

export default withHocs(ProductsList);
