import React from "react";
import classes from "./RatingList.module.css";
import Navbar from "./../Navbar/Navbar";
import {Link} from "react-router-dom"


class RatingList extends React.Component {





    render(){
      const items = [{id: 1,  text: "Основания"},
      {id:2, text: "Накладки"},
      {id:3, text:"Шипы" },
      {id:4, text:"Основания" },
      {id:5, text:"Шипы" },
      {id:6, text:"Короткие шипы" },
      {id:7, text:"Длинные/Полудлинные шипы" },
      {id:8, text:"friendship" },
    ]
      const rankings = items.map(item => (
        <li>
          <Link to={`${this.props.match.path}/${item.id}`}>{item.text}</Link>
          </li>
          ));
      debugger;

      
    return (<div className={classes.rating__wrapper}>
        <Navbar setCategory = {this.props.setCategory}></Navbar>
        <div className = {classes.content}>
    <div className={classes.header}><h1>{this.props.categoryText}</h1></div>
    <div className={classes.content__navigation}>
        <ul className={classes.topmenu}>
        {rankings}
        </ul>
    </div>
    <div className =  {classes.content__main}>
      huihiuhuihiuhuihuihuihuihuihuihuihuih
    </div>
    </div>
    </div>        
    )
    }
}

export default RatingList;