import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CreateAccount from './components/CreateAccount';
import ProtectedRoute from './HOC/ProtectedRoute';
import InternetCheck from './components/InternetCheck';

const App = () => (
  <BrowserRouter>
  <ToastContainer />
    <InternetCheck
      message="No Connection"
      style={{
        color: "#fff",
        backgroundColor: "red",
        textAlign: "center"
      }}
    />
    <Navbar />
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/login' component={LoginPage} />
      <ProtectedRoute path='/dashboard' component={Dashboard} />
      <ProtectedRoute path='/createAccount' component={CreateAccount} />
    </Switch>
  </BrowserRouter>
);

export default App;
