import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="loginCoverPage">
      <div className="formModal">
        <Link to="#">
          <h3>Welcome to Banka</h3>
        </Link>
        <Link to='/login'>
          <h1>Get started</h1>
        </Link>
      </div>
    </div>
  )
};

export default withRouter(LandingPage);
