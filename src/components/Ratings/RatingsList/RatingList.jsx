import React from "react";
import classes from "./RatingList.module.css";
import Navbar from "./../Navbar/Navbar";
import RatingItem from "../RatingItem/RatingItem"
import {Link} from "react-router-dom"


class RatingList extends React.Component {

  constructor(props) {
    super(props)
}




    render(){
      
      debugger;
    return (<div>
        <Navbar setCategory = {this.props.setCategory}></Navbar>
        <div className = {classes.content}>
    <div className={classes.header}><h1>{this.props.categoryText}</h1></div>
    <div className={classes.navigation}>
      <ul>
        <li>
          <Link to={`${this.props.match.path}/1`}>Основания</Link>
        </li>
        <li>
          <Link to={`${this.props.match.path}/2`}>Накладки</Link>
        </li>
        <li>
          <Link to={`${this.props.match.path}/3`}>Шипы</Link>
        </li>
      </ul>
    </div>
    </div>
    </div>        
    )
    }
}

export default RatingList;