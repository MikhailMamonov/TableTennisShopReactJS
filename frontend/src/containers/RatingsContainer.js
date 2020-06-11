
import { connect } from 'react-redux'
import RatingList from '../components/Ratings/RatingsList/RatingList'
import {setRatingCreator} from '../reducers/ratings'


  
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
      setRating: (id) => {
      let action = setRatingCreator(id);
      debugger;
      dispatch(action);
  }
}
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RatingList)



