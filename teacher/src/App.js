
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import {User} from "./components/User/User"
import {AccountSettings} from './components/AccountSettings/AccountSettings'
import {HomeApp} from './components/home/HomeApp'
import NavBar from './components/Nav/NavBar'
import LoginPage from './components/LoginPage'
import PrivateRoute from './components/PrivateRouter'
import {loadUser} from './js/action/authAction'
import {getPost} from './js/action/PostsAction'
import SetToken from './headers/SetToken'
import store from './js/Store'


 

function App() {

 
  

  useEffect(()=>{
      
     store.dispatch(loadUser())
     store.dispatch(getPost())
      
  }
  ,[])

  
   

  return (

  
    <Provider store={store}>
     <Router>
        
        <Route path="/" exact component={LoginPage} />  
         <Route path="/profile"  component={NavBar} />  
      
      <Switch>
        
         
         <PrivateRoute path="/profile" exact component={HomeApp} />
        <PrivateRoute path="/profile/user" component={User} />
        <PrivateRoute path="/profile/settings" exact component={AccountSettings} /> 
        
      </Switch>
      
    </Router> 

    </Provider>
  );
}

export default App;
