import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupForm from '../SignupForm';

const SignupPage = () => {
  return (
    <div className="loginCoverPage">
      <SignupForm />
    </div>
  )
};

export default withRouter(SignupPage);
