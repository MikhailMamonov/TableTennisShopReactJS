import React from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer'
import ProductsContainer from './components/Products/ProductsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
    return ( < div className = "app-wrapper" >
        <BrowserRouter >
        <HeaderContainer / >
        <Navbar / >
        <Route path = '/ProductsContainer'
        component = { ProductsContainer }/> 
        <Route path = 'contacts' component = { ProductsContainer }/>
        <Route path = 'sportmen'  component = { ProductsContainer } />
        <Route path = '/services' component = { UsersContainer } />
        <Route path = '/coachs' component = { Login }/>
        <Footer / >
            
        </BrowserRouter>  
        </div >
    );
}

export default App;