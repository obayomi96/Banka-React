import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="loginCoverPage">
      <div className="formModal">
        {
          window.localStorage.getItem('userJwtToken')
          ? <Link to='/dashboard'><h5>Return to Dashboard</h5></Link>
          : 
          <div>
            <h3>Welcome to Banka</h3>
            <Link to='login'><h1>Get Started</h1></Link>
          </div>
        }
      </div>
    </div>
  )
};

export default withRouter(LandingPage);
