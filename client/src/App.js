import React, { Fragment, useEffect } from 'react';
import NavBar from './Components/layout/NavBar';
import Filter from './Components/dashboard/Filter';
import AddEns from './Components/dashboard/AddEns';
import Login from './Components/forms/Login';
import EnsList from './Components/dashboard/EnsList';
import Alert from './Components/layout/Alert';
import Note from './Components/dashboard/Note';
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
            <PrivateRoute exact path='/home' component={EnsList} />
            <PrivateRoute exact path='/notes' component={Note} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
