import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

import userImg from '../../assets/images/userimage.png';

const Sidebar = ({ handleLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <div id="innerNav">
          <Link to="/dashboard"><i className="fas fa-piggy-bank" id="logo"></i></Link>
        </div>
        <img src={userImg} alt="profile pic placeholder" />
        <div><Link id="createAccount" to="/createAccount">Create Account</Link></div>
        <div onClick={handleLogout} >
          <Link to="#">Logout</Link>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
