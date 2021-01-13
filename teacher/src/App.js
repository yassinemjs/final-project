<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import {User} from "./components/User/User"
import {AccountSettings} from './components/AccountSettings/AccountSettings'
import {HomeApp} from './components/home/HomeApp'
import NavBar from './components/navbar/NavBar'
import LoginPage from './components/LoginPage'
import store from './js/Store'
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { User } from "./components/User/User";
import { AccountSettings } from "./components/AccountSettings/AccountSettings";
import { HomeApp } from "./components/home/HomeApp";
import NavBar from "./components/Nav/NavBar";
>>>>>>> master

function App() {


  return (
<<<<<<< HEAD
  
    <Provider store={store}>
     <Router>
        
        <Route path="/" exact component={LoginPage} />  
        <Route path="/profile"  component={NavBar} /> 
      
      <Switch>
        
        
         <Route path="/profile" exact component={HomeApp} />
        <Route path="/user" component={User} />
        <Route path="/settings" component={AccountSettings} /> 
        
=======
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomeApp} />
        <Route path="/user" component={User} />
        <Route path="/settings" component={AccountSettings} />
>>>>>>> master
      </Switch>
      
    </Router> 

    </Provider>
    
  );
}

export default App;
