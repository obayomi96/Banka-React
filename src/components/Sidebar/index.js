import React from 'react';
import { Link } from 'react-router-dom';

import userImg from '../../assets/images/userimage.png';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebarItems">
          <div id="innerNav">
            <Link to="/dashboard"><i className="fas fa-piggy-bank" id="logo"></i></Link>
          </div>
          <img src={userImg} alt="profile pic placeholder" />
          <div><Link id="createAccount" to="/createAccount">Create Account</Link></div>
          <div onClick={this.props.handleLogout}>
            <Link to="#">Logout</Link>
          </div>
        </div>
      </div>
    )
  }
};

export default Sidebar;
