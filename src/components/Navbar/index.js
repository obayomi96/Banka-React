import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar" className="landing">
      <div id="nav-container">
        <h3 className="nav-title">
          <Link to="#"><i className="fas fa-piggy-bank" id="logo"></i></Link>
        </h3>
      </div>
    </nav>
  )
}

export default Navbar;
