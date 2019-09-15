import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';

const App = () => (
  <BrowserRouter>
  <ToastContainer />
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/signup' component={SignupPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
