import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class LandingPage extends Component {
  styleColor = {
    background: "#0c1824",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4%"
  }
  render() {
    return (
      <div className="loginCoverPage">
        <div className="formModal">
          <Link to="#">
            <h3>Welcome to Banka</h3>
          </Link>
          <Link to='/login'>
            <h1 style={this.styleColor}>Get started</h1>
          </Link>
        </div>
      </div>
    )
  }
};

export default withRouter(LandingPage);
