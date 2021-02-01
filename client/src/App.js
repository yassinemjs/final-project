import React, { Fragment, useEffect } from 'react';
import NavBar from './Components/layout/NavBar';
import Filter from './Components/dashboard/Filter';
import AddEns from './Components/dashboard/AddEns';
import Login from './Components/forms/Login';
import Alert from './Components/layout/Alert';
import Note from './Components/dashboard/Note';
import Posts from './Components/dashboard/Posts';
import Home from './Components/home/Home';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import PrivateRoute from './routing/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // check for token in LS

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <NavBar />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/addEns' component={AddEns} />
            <PrivateRoute exact path='/filter' component={Filter} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/notes' component={Note} />
            <PrivateRoute exact path='/posts' component={Posts} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
