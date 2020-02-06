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
      firstname: '',
      lastname: '',
      email: '',
      isOpened: false,
    };
  }

  myAccountStyle = {
    textDecoration: 'underline',
    marginBottom: '20px',
    color: 'grey',
  }

  toggleSidebar = () => {
    const sideBarItems = document.querySelector('.sidebar');
    if (this.state.isOpened) {
      sideBarItems.style.marginLeft = '-45%';
    } else {
      sideBarItems.style.marginLeft = '0';
    }
    this.setState({
      isOpened: !this.state.isOpened
    })
  };
  

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    });
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
              <h4></h4>
            </div>
            <div>
              <i onMouseDown={this.toggleSidebar} className="fas fa-bars" id="menuLogo"></i>
            </div>
          </nav>
          <div id="accountSection">
            <div className="details">
             {
              <ul>
                <li>
                  {`Firstname: ${this.state.firstname.toUpperCase()}`}
                </li>
                <li>
                  {`Lastname: ${this.state.lastname.toUpperCase()}`}
                </li>
                <li>
                {`Email: ${this.state.email.toUpperCase()}`}
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
