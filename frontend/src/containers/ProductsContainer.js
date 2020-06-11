
import { connect } from 'react-redux'
import ProductsList from '../components/Products/ProductList/ProductsList'
import {setCategoryCreator} from '../reducers/products'


  
  const mapStateToProps = (state) => {
      return {
    products: state.products.products,
    categories: state.products.categories,
    brands: state.products.brands,
    displayCategory: state.products.displayCategory,
    categoryText:state.products.categoryText
      }
}
  
  const mapDispatchToProps = (dispatch) => {
    return { 
      setCategory: (id,text) => {
      let action = setCategoryCreator(id,text);
      debugger;
      dispatch(action);
  }
}
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsList)



