import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profileImg.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <div id="innerNav">
          <Link to="/dashboard"><i className="fas fa-piggy-bank" id="logo"></i></Link>
        </div>
        <img src={profileImg} alt="" />
        <div><Link to="/accountHistory">Account History</Link></div>
        <div><Link to="/userAccounts">My Accounts</Link></div>
        <div><Link id="createAccount" to="/createAccount">Create Account</Link></div>
        <div><Link to="#">Logout</Link></div>
      </div>
    </div>
  )
};

export default Sidebar;
