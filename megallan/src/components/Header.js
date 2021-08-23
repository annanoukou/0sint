import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Header = () => {
  
  return (
    <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="navbarMenu">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/about"
                       aria-expanded="false">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://blog.tedxuniversityofpiraeus.com/">Blog</a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/partners">Partners</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Header;
