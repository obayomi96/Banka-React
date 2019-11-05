import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar';
import GetAccounts from '../GetAccounts';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      email: this.props.user.email,
    }
  }

  myAccountStyle = {
    textDecoration: 'underline',
    marginBottom: '20px',
    color: 'grey',
  }

  logout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push("/login");
  }

  render() {

    return (
      <div>
        <Sidebar
          handleLogout={this.logout}
         />
        <div className="userAccountCoverPage">
          <nav className="landingProfile">
            <div>
              <h4>
                banka</h4>
            </div>
            <div>
              <i className="fas fa-bars" id="menuLogo"></i>
            </div>
          </nav>
          <div id="accountSection">
            <div className="details">
             {
              <ul>
                <li>
                  <b>{`Firstname: ${this.state.firstname}`}</b>
                </li>
                <li>
                  <b>{`Lastname: ${this.state.lastname}`}</b>
                </li>
                <li>
                  <b>{`Email: ${this.state.email}`}</b>
                </li>
              </ul>
             }
            </div>
            <div className="accountInfo">
              <div>
                <div>
                  <div className="bankAccountInfo">
                    <h4 style={this.myAccountStyle}>My Accounts</h4>
                    <GetAccounts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(withRouter(Dashboard));
