import React from 'react';

import image from '../assets/images/test.jpg';


function Services() {
  return (
    <>
      <div id="services" className="section-page bg-primary">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 z-above">
                  <div className="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                     <h2 className="h-title">
                        Services
                     </h2>
                     <p className="text-primary">Our products</p>
                  </div>
               </div>
            </div>
         </div>
      <div className="section bg-primary" id="services-section">
         <div className="container">
            <div className="content mb-100" data-aos="fade-up" data-aos-duration="1000">
               <div className="row">
                  <div className="cardd col-lg-4 card1 cursor-item mb-4 mb-lg-0 text-center text-lg-left">
                     <img src={image} className="img-fluid" alt="Service" title="Service" />
                     <h5>PinataHub</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                     <a className="btn-draw btn--dark cursor-item mt-0 mb-4 mb-lg-0 mt-lg-4" href="#contact">
                        <span className="btn-draw__text">
                           <span>Learn more</span>
                        </span>
                     </a>
                  </div>
                  <div className="cardd col-lg-4 card2 cursor-item mb-4 mb-lg-0 text-center text-lg-left">
                     <img src={image} className="img-fluid" alt="Service" title="Service" />
                     <h5>ScriptaManent</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                     <a className="btn-draw btn--dark cursor-item mt-0 mb-4 mb-lg-0 mt-lg-4" href="#contact">
                        <span className="btn-draw__text">
                           <span>Learn more</span>
                        </span>
                     </a>
                  </div>
                  <div className="cardd col-lg-4 card3 cursor-item mb-4 mb-lg-0 text-center text-lg-left">
                     <img src={image} className="img-fluid" alt="Service" title="Service" />
                     <h5>Magellan</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                     <a className="btn-draw btn--dark cursor-item mt-0 mb-4 mb-lg-0 mt-lg-4" href="#contact">
                        <span className="btn-draw__text">
                           <span>Learn more</span>
                        </span>
                     </a>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </div>
    </>
  );
}

export default Services;
