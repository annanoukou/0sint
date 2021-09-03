import React from 'react';
import '../App.css';

import LogoSlider from '../components/LogoSlider'
import Scroll from '../components/Scroll'
import About from '../components/About'
import Services from '../components/Services'
//import Services2 from '../components/Services2'
import Contact from '../components/Contact'
import Works from '../components/Works'

function HomePage() {

  return (
      <>
        <div id="home" className="cover-v1 jarallax">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-8">
                    <h1 className="heading text-white">Obscured <br></br> <span id="quote">Intelligence</span></h1>
                      <p className="subheading text-white">
                        Dive into the unexplored depths of the data realm,
                        <br></br>
                        shedding light on the secrets, vulnerabilities,
                        <br></br>
                        and misconfigurations of committed code and deployed services.
                      </p>
                    <a className="btn-draw btn--white cursor-item mt-3" href="contact.html"><span className="btn-draw__text"><span>Explore more</span></span></a>
                  </div>
                  <div className="distortion"></div>
                    <div className="distortion-desc">
                      <p className="hero-desc">
                        <i>”We love what we do and we work with great clients to create thoughtful and purposeful websites.”</i>
                      </p>
                    </div>
                </div>
            </div>
        </div>

        <About />
        <Services />
        <div class="container">
            <LogoSlider />
        </div>

        <Works />
        <Contact />

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
