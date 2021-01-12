import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {User} from "./components/User/User"
import {AccountSettings} from './components/AccountSettings/AccountSettings'
import {HomeApp} from './components/home/HomeApp'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <Router>
        <NavBar/>
      <Switch>
      <Route path="/" exact component={HomeApp} />
        <Route path="/user" component={User} />
        <Route path="/settings" component={AccountSettings} />
        
      </Switch>
    </Router>
  );
}

export default App;
