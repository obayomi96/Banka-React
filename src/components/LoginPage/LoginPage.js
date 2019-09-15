import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';


const LoginPage = () => {
  return (
    <div className="loginCoverPage">
      <LoginForm />
    </div>
  )
};

export default withRouter(LoginPage);
