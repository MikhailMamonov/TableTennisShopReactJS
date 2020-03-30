import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer'
import ProductsContainer from './containers/ProductsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import RatingsContainer from './containers/RatingsContainer'
import RatingItemContainer from './containers/RatingItemContainer'

const App = (props) => {
    return ( < div className = "app-wrapper" >
        <BrowserRouter >
        <HeaderContainer / >
        <Navbar / >
            
            <Route exact path='/' component={Login}/>
            <Route path = '/products'   component = { ProductsContainer }/>     
            <Switch>    
        <Route exact path = '/ratings' component = { RatingsContainer }/>
        <Route path = '/ratings/:ratingId' component = { RatingItemContainer }/>
        </Switch>
        <Route path = '/services' component = { UsersContainer } />
        <Route path = '/coachs' component = { Login }/>
            
        <Footer / >
            
        </BrowserRouter>  
        </div >
    );
}

export default App;