import React from "react";
import { connect } from 'react-redux'
import {getCurrentRatingCreator} from '../reducers/ratings'
import RatingItem from "../components/Ratings/RatingItem/RatingItem";


class RatingItemContainer extends React.Component {

    constructor(props) {
        super(props)
        debugger;
    }
    

    componentWillMount() {
        debugger;
        let ratingId = this.props.match.params.ratingId;
        if (!ratingId) {
            ratingId = 1404;
        }
        this.currentRating = this.props.ratings.find(
            ({ id }) =>
              id === ratingId);
         
        debugger;
        ;
    }


    render() {
        debugger;
            return (<div>
                <RatingItem img={this.currentRating.image} label = {this.currentRating.name}
                elements = {this.currentRating.elements} criterias = {this.currentRating.creterias}
                 />
            </div>)
    }
}

  
  const mapStateToProps = (state) => {
      debugger;
      return {
              ratings: state.ratings.ratings,
              currentRating: state.ratings.currentRating,
              categoryText: state.ratings.categoryText

      }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getRatingInfo: (userId) => {
            let action = getCurrentRatingCreator(userId)
            dispatch(action);
        }
        }
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RatingItemContainer);



