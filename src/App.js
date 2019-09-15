import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

const App = () => (
  <BrowserRouter>
  <ToastContainer />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
