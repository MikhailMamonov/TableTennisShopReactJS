import React from "react";
import classes from "./ProductsCategory.module.css";
import ProductItem from "../ProductItem/ProductItem"


const ProductsCategory = (props) => {
  debugger;
  const products = [
      {id:1, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:2, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:3, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:4, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:5, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:6, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:7, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:8, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:9, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
      {id:10, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
  ];
  const productList = products.map((item) => 
  { return <ProductItem id ={item.id} label = {item.label} image = {item.image}/>;}
  );
  debugger;
  return (<div >
    <div className = {classes.content}>
    <div className={classes.header}><h1>{props.text}</h1></div>
    <ul className={classes.main}>
                  {productList}
    </ul>
    
    <div className={classes.navigation}>
      Navigation
    </div>
    </div>        
    </div>
  )

}

export default ProductsCategory;
