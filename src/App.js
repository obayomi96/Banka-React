import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

const App = () => (
  <BrowserRouter>
  <ToastContainer />
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/login' component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
