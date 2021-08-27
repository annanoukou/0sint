import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
  
  return (
    <>
      <nav className="site-nav site-nav-target">
        <div className="container">
            <div className="row align-items-center justify-content-between text-left">
              <div className="col-3">
                  <div className="site-logo">
                    <a href="index.html" className="site-logo main-logo"><img src="images/logo.png" className="logo-img light-logo img-fluid" alt="" /><span></span></a>
                  </div>
              </div>
              <div className="col text-right">
                  <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                    <li><a href="index.html" className="nav-link cursor-item">Home</a></li>
                    <li><a href="about.html" className="nav-link cursor-item">About</a></li>
                    <li><a href="services.html" className="nav-link cursor-item">Services</a></li>
                    <li><a href="works.html" className="nav-link cursor-item">Works</a></li>
                    <li><a href="blog.html" className="nav-link cursor-item">Blog</a></li>
                    <li><a href="contact.html" className="nav-link cursor-item">Contact</a></li>
                  </ul>
                  <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                    <li><a href="#" className="js-menu-toggle">Menu</a></li>
                  </ul>
              </div>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
