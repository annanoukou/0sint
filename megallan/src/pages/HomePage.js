import React from 'react';
import '../App.css';

import LogoSlider from '../components/LogoSlider'
import Scroll from '../components/Scroll'

function HomePage() {

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


        <div className="cover-v1 jarallax">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-8">
                    <h1 className="heading text-white">Creative <br></br> <span id="quote">Studio Design</span></h1>
                    <p className="subheading  text-white">We cover a large range of creative digital<br></br>projects, platforms, and campaigns to<br></br>create experiences.</p>
                    <a className="btn-draw btn--white cursor-item mt-3" href="contact.html"><span className="btn-draw__text"><span>Explore more</span></span></a>
                  </div>
                  <div className="distortion"></div>
                  <div className="distortion-desc">
                    <p className="hero-desc"><i>”We love what we do and we work with great clients to create thoughtful and purposeful websites.”</i>
                    </p>
                  </div>
              </div>
            </div>
        </div>

        <div className="section">
            <div className="container">
              <div className="row">
                  <div className="col-lg-2">
                    <h3 className="section-title">About</h3>
                  </div>
                  <div className="col-lg-4" data-aos="fade-up" data-aos-duration="500">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a className="btn-draw btn--white cursor-item mt-4" href="contact.html"><span className="btn-draw__text"><span>Let's Talk!</span></span></a>
                  </div>
                  <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  </div>
              </div>
            </div>
        </div>

        <div className="section" id="services-section">
            <div className="container">
              <div className="row mb-80 border-section">
                  <div className="col-lg-6">
                    <h3 className="section-title">Services</h3>
                  </div>
                  <div className="col-lg-6">
                    <p>Bespoke brand & digital services designed for bussinesses <br></br> big and small...</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6">
                    <div className="project-list">
                        <div className="project">
                          <div className="project-title">
                              <h5>Branding</h5>
                              <p>Lorem ipsum dolor sit amet consectetur<br></br> adipiscing elit sed do eiusmod</p>
                          </div>
                          <div className="project-categ">01</div>
                        </div>
                        <div className="project">
                          <div className="project-title">
                              <h5>Packaging</h5>
                              <p>Lorem ipsum dolor sit amet consectetur<br></br>  adipiscing elit sed do eiusmod</p>
                          </div>
                          <div className="project-categ">02</div>
                        </div>
                        <div className="project">
                          <div className="project-title">
                              <h5>UI/UX</h5>
                              <p>Lorem ipsum dolor sit amet consectetur<br></br>  adipiscing elit sed do eiusmod</p>
                          </div>
                          <div className="project-categ">03</div>
                        </div>
                        <div className="project">
                          <div className="project-title">
                              <h5>Development</h5>
                              <p>Lorem ipsum dolor sit amet consectetur<br></br>  adipiscing elit sed do eiusmod</p>
                          </div>
                          <div className="project-categ">04</div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services_active owl-carousel">
                        <div className="single_testmonial">
                          <div className="testmonial_info">
                              <img src="images/services-1.gif" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="single_testmonial">
                          <div className="testmonial_info">
                              <img src="images/services-2.gif" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="single_testmonial">
                          <div className="testmonial_info">
                              <img src="images/services-3.gif" className="img-fluid" alt="" />
                          </div>
                        </div>
                    </div>
                  </div>
              </div>

              <LogoSlider />

            </div>
        </div>

        <div className="section">
            <div className="container">
              <div className="row mb-80 border-section">
                  <div className="col-lg-6">
                    <h3 className="section-title">Works</h3>
                  </div>
                  <div className="col-lg-6">
                    <div className="filter-wrap">
                        <ul className="filter-wrapper clearfix">
                          <li><a href="#" data-filter="*" className="selected cursor-item">View all</a></li>
                          <li><a href="#" className="cursor-item" data-filter=".design">Design</a></li>
                          <li><a href="#" className="cursor-item" data-filter=".brand">Branding</a></li>
                          <li><a href="#" className="cursor-item" data-filter=".web">Web</a></li>
                          <li><a href="#" className="cursor-item" data-filter=".mobile">Mobile</a></li>
                        </ul>
                    </div>
                  </div>
              </div>
              <div className="row portfolio-items">
                  <div className="col-lg-12 p-0">
                    <div className="work-gallery">
                        <div className="col-md-6 single-item brand apps mobile">
                          <div className="portfolio-wrap gsap-reveal">
                              <a href="#" className="portfolio-item"><img src="images/portfolio/work_8_md.gif" alt="" className="img-fluid" /></a>
                              <div className="portfolio-content">
                                <p>Design, Branding</p>
                                <h3><a href="#">Smart White Gadget</a></h3>
                                <a href="#" className="portfolio-link"></a>
                              </div>
                          </div>
                        </div>
                        <div className="col-md-6 single-item web mobile">
                          <div className="portfolio-wrap gsap-reveal">
                              <a href="single-portfolio.html" className="portfolio-item"><img src="images/portfolio/work_3_a_full.jpg" alt="" className="img-fluid" /></a>
                              <div className="portfolio-content">
                                <p>Web, Design</p>
                                <h3><a href="single-portfolio.html">Smart Case</a></h3>
                                <a href="single-portfolio.html" className="portfolio-link"></a>
                              </div>
                          </div>
                        </div>
                        <div className="col-md-6 single-item design mobile">
                          <div className="portfolio-wrap gsap-reveal">
                              <a href="single-portfolio.html" className="portfolio-item"><img src="images/portfolio/work_3_full.jpg" alt="" className="img-fluid" /></a>
                              <div className="portfolio-content">
                                <p>Web, Design</p>
                                <h3><a href="single-portfolio.html">Eco Sensors</a></h3>
                                <a href="single-portfolio.html" className="portfolio-link"></a>
                              </div>
                          </div>
                        </div>
                        <div className="col-md-6 single-item web mobile">
                          <div className="portfolio-wrap gsap-reveal">
                              <a href="single-portfolio.html" className="portfolio-item"><img src="images/portfolio/work_4_full.jpg" alt="" className="img-fluid" /></a>
                              <div className="portfolio-content">
                                <p>Web, Design</p>
                                <h3><a href="single-portfolio.html">Watch Design</a></h3>
                                <a href="single-portfolio.html" className="portfolio-link"></a>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>

        <footer className="footer section">
            <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="go-top cursor-item" id="go-to-top"><i className="fa fa-chevron-up"></i></div>
                    <div className="hr-footer"></div>
                    <div className="footer-site-logo"><a href="index.html" className="main-logo"><img src="images/logo.png" className="logo-img light-logo img-fluid" alt="" /></a></div>
                    <ul className="footer-site-social">
                        <li><a href="#" className="cursor-item">Facebook</a></li>
                        <li><a href="#" className="cursor-item">Twitter</a></li>
                        <li><a href="#" className="cursor-item">Instagram</a></li>
                        <li><a href="#" className="cursor-item">Dribbble</a></li>
                        <li><a href="#" className="cursor-item">Behance</a></li>
                    </ul>
                    <p className="site-copyright">
                        <small>&copy; 2020 <a href="#">GRAV</a>. All Rights Reserved.</small>
                    </p>
                  </div>
              </div>
            </div>
        </footer>

        <Scroll />

      </>
  
  );
}


export default HomePage;
