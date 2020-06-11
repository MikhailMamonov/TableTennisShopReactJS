import React from "react";
import classes from "./RatingItem.module.css";

const RatingItem = (props) => {
    debugger;

    const elems = props.elements.map((el => { debugger; return <span>{el}</span> }));
    const crets = props.criterias.map((el => { debugger; return <span>{el}</span> }));
    debugger;
    return (<div className={classes.ratingContent}>
        <h1> {props.label}</h1>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className={classes.ratingTable}>
            <div className={classes.empty}>Критерий\Элемент</div>
            <div className={classes.header}>{crets}</div>
            <div className={classes.content}>{elems}</div>
            <div className={classes.values}>uihuih</div>


        </div>
    </div>

    )
}

export default RatingItem;
