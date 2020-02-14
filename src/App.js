import React from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer'
import SuperDialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App=(props) => {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <HeaderContainer />
          <Navbar />
          <Route path='/products' render=
            {() => {
              return <SuperDialogsContainer />
            }}></Route>
          <Route path='contacts'
            render={() => {
              return <ProfileContainer>
              </ProfileContainer>
            }} />
            <Route path='sportmen'
            render={() => {
              return <ProfileContainer>
              </ProfileContainer>
            }} />
            <Route path='/services'
            render={() => {
              return <UsersContainer />
            }} />
            <Route path='/coachs'
            render={() => {
              return <Login />
            }} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

export default App;