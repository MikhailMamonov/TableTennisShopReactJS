import React from "react";
import classes from './Root.module.css';

import {  Route, Switch } from "react-router-dom";


import Footer from "./../Footer/Footer";
import Navbar from "./../Navbar/Navbar";
import UsersContainer from "./../Users/UsersContainer";
import ProductsContainer from "./../../containers/ProductsContainer";
import HeaderContainer from "./../Header/HeaderContainer";
import Login from "./../Login/Login";
import RatingsContainer from "./../../containers/RatingsContainer";
import RatingItemContainer from "./../../containers/RatingItemContainer";



function CenteredGrid(props) {

  return (
    <div className={classes.parallax}>
  <div className={classes.parallax__group}>
    <div className={[classes.parallax__layer, classes.parallax__layer__back].join(' ')} >
      <div className = {classes.parallax__background}/>
    </div>
    <div className={[classes.parallax__layer, classes.parallax__layer__base].join(' ')}>
    <div className={classes.container}>
  <header>
  <HeaderContainer/>
  </header>

  <nav className = {classes.main__nav}>
  <Navbar />
  </nav>

  <main>
  <Route path="/products" component={ProductsContainer} />
            <Switch>
              <Route exact path="/ratings" component={RatingsContainer} />
              <Route
                path="/ratings/:ratingId"
                component={RatingItemContainer}
              />
            </Switch>
            <Route path="/services" component={UsersContainer} />
            <Route path="/coachs" component={Login} />
  </main>

  <aside>
  </aside>

  <Footer/>
</div>
    </div>
  </div>
  <div className="parallax__group">
    ...
  </div>
</div>
     
    
  );
}
export default CenteredGrid;
